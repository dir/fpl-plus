import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getTeamByIdOptions } from "~/apis/fpl-plus/queries/teams";
import { getAllEventsOptions } from "~/apis/fpl/queries/entries";
import { getFixturesByEventIdOptions } from "~/apis/fpl/queries/fixtures";
import { CalendarDaysIcon } from "lucide-react";

import { getQueryClient } from "~/lib/rq/server";
import { cn } from "~/lib/utils";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Fixtures from "~/app/gameweeks/[gameweek]/components/fixtures";
import { getGameweekStatus } from "~/app/gameweeks/lib/status";

export default async function Gameweek({
  params,
}: {
  params: { gameweek: string };
}) {
  const queryClient = getQueryClient();

  const gameweeks = await queryClient
    .fetchQuery(getAllEventsOptions())
    .catch((error) => {
      console.error(error);
      return [];
    });

  const gameweek = gameweeks?.find((gw) => gw.id === Number(params.gameweek));

  if (!gameweek?.id || !gameweeks)
    return (
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Gameweek not found
          </CardTitle>
        </CardHeader>
      </Card>
    );

  const fixtures = await queryClient
    .fetchQuery(getFixturesByEventIdOptions(gameweek.id))
    .catch((error) => {
      console.error(error);
      return [];
    });

  const teamQueryOptions = fixtures.flatMap((fixture) => [
    getTeamByIdOptions(fixture.team_a),
    getTeamByIdOptions(fixture.team_h),
  ]);

  teamQueryOptions.forEach((queryOption) => {
    void queryClient.prefetchQuery(queryOption);
  });

  const gameweekStatus = getGameweekStatus(gameweek);

  return (
    <>
      <div className="mb-5 mt-1">
        <div className="flex flex-row items-center">
          <CalendarDaysIcon
            className="mr-2.5 size-9 shrink-0"
            strokeWidth={2.5}
          />
          <h1 className="text-4xl font-bold">Gameweek {params.gameweek}</h1>
          <Badge className="ml-4" variant={gameweekStatus.variant}>
            {gameweekStatus.label}
          </Badge>
        </div>

        <div className="pt-2">
          <span className="font-light">Entry Deadline:</span>{" "}
          <span className="font-semibold">
            {new Date(gameweek.deadline_time).toLocaleString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Fixtures
            gameweek={Number(params.gameweek)}
            className={cn("col-span-6", gameweekStatus.cardClassName)}
          />
        </HydrationBoundary>
        <Card className={`col-span-3 border ${gameweekStatus.cardClassName}`}>
          <CardHeader>
            <CardDescription>work in progress</CardDescription>
          </CardHeader>
        </Card>
        <Card className={`col-span-3 border ${gameweekStatus.cardClassName}`}>
          <CardHeader>
            <CardDescription>work in progress</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
