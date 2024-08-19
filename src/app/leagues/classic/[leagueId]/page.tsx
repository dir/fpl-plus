import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getEntryByIdOptions } from "~/apis/fpl/queries/entries";
import { getEntryEventPicksByEntryIdOptions } from "~/apis/fpl/queries/event";
import { getLeagueByIdOptions } from "~/apis/fpl/queries/leagues";
import { TrophyIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { getQueryClient } from "~/lib/rq/server";
import StandingsTable from "~/app/leagues/classic/[leagueId]/components/table/table";

export async function generateMetadata({
  params,
}: {
  params: {
    leagueId: string;
  };
}) {
  const leagueId = Number(params.leagueId);

  const queryClient = getQueryClient();

  const { league } = await queryClient.fetchQuery(
    getLeagueByIdOptions(leagueId),
  );

  if (!league) {
    return notFound();
  }

  return {
    title: league.name,
  };
}

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

  const entryQueryOptions = standings.results.flatMap((standing) => [
    getEntryByIdOptions(standing.entry),
  ]);

  const entryPickQueryOptions = standings.results.flatMap((standing) => [
    getEntryEventPicksByEntryIdOptions(standing.entry, 1),
  ]);

  entryQueryOptions.forEach((queryOption) => {
    void queryClient.prefetchQuery(queryOption);
  });

  entryPickQueryOptions.forEach((queryOption) => {
    void queryClient.prefetchQuery(queryOption);
  });

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="mt-8 flex flex-row items-center pb-6">
          <TrophyIcon className="mr-2.5 size-9 shrink-0" strokeWidth={2.5} />
          <h1 className="text-4xl font-bold">{league.name}</h1>
        </div>
        <div className="inline-flex h-8 select-none items-center rounded-lg border px-2.5 py-1">
          <span className="mr-1.5 animate-pulse pb-px text-lg leading-none text-emerald-500">
            •
          </span>
          <div className="text-base leading-none">Live</div>
        </div>
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <StandingsTable leagueId={leagueId} />
      </HydrationBoundary>
    </>
  );
}
