import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getEntryByIdOptions } from "~/apis/fpl/queries/entries";
import { getLeagueByIdOptions } from "~/apis/fpl/queries/leagues";
import { TrophyIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { getQueryClient } from "~/lib/rq/server";
import StandingsTable from "~/app/leagues/classic/[leagueId]/components/table/table";

export default async function LeaguePage({
  params,
}: {
  params: {
    leagueId: string;
  };
}) {
  const leagueId = Number(params.leagueId);

  const queryClient = getQueryClient();

  const { league, standings } = await queryClient.fetchQuery(
    getLeagueByIdOptions(leagueId),
  );

  const entryOptions = standings.results.map((standing) =>
    getEntryByIdOptions(standing.entry),
  );

  entryOptions.forEach((option) => {
    void queryClient.prefetchQuery(option);
  });

  if (!league) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <div className="flex flex-row items-center">
          <TrophyIcon className="mr-2 size-7 shrink-0" strokeWidth={2.5} />
          <h1 className="text-4xl font-bold">{league.name}</h1>
        </div>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <StandingsTable leagueId={leagueId} />
      </HydrationBoundary>
    </div>
  );
}
