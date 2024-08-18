"use client";

import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";
import { getEntryByIdOptions } from "~/apis/fpl/queries/entries";
import { getEntryEventPicksByEntryIdOptions } from "~/apis/fpl/queries/event";
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

  const picksQueries = useSuspenseQueries({
    queries: standings.results.map((standing) =>
      getEntryEventPicksByEntryIdOptions(standing.entry, 1),
    ),
  });

  const standingsWithEntriesAndPicks = standings.results.map(
    (standing, index) => {
      const entryQuery = entryQueries[index];
      const picksQuery = picksQueries[index];

      return {
        standing,
        entry: entryQuery?.data,
        picks: picksQuery?.data,
      };
    },
  );

  return (
    <DataTable columns={standingsColumns} data={standingsWithEntriesAndPicks} />
  );
}
