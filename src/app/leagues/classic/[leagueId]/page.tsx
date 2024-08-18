import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getEntryByIdOptions } from "~/apis/fpl/queries/entries";
import { getLeagueByIdOptions } from "~/apis/fpl/queries/leagues";
import { notFound } from "next/navigation";

import { getQueryClient } from "~/lib/rq/server";
import { CardDescription, CardTitle } from "~/components/ui/card";
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
    queryClient.prefetchQuery(option);
  });

  if (!league) {
    return notFound();
  }

  return (
    <div>
      <CardTitle>{league.name}</CardTitle>
      <div className="inline-flex items-center">
        League ID:<pre> {league.id}</pre>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <StandingsTable leagueId={leagueId} />
      </HydrationBoundary>
    </div>
  );
}
