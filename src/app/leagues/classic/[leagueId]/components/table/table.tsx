"use client";

import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";
import { getEntryByIdOptions } from "~/apis/fpl/queries/entries";
import { getLeagueByIdOptions } from "~/apis/fpl/queries/leagues";

import { DataTable } from "~/components/data-table/data-table";
import { standingsColumns } from "~/app/leagues/classic/[leagueId]/components/table/columns";

export default function StandingsTable({ leagueId }: { leagueId: number }) {
  const {
    data: { standings },
  } = useSuspenseQuery(getLeagueByIdOptions(leagueId));

  const entryQueries = useSuspenseQueries({
    queries: standings.results.map((standing) =>
      getEntryByIdOptions(standing.entry),
    ),
  });

  const entries = entryQueries.map((query) => query.data);

  const standingsWithEntries = standings.results.map((standing) => {
    const matchingEntry = entries.find((entry) => entry.id === standing.entry);
    return {
      entry: matchingEntry!,
      standing: standing,
    };
  });

  return <DataTable columns={standingsColumns} data={standingsWithEntries} />;
}
