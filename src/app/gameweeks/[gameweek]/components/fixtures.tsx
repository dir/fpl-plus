"use client";

import { soccerPitch } from "@lucide/lab";
import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";
import { getTeamByIdOptions } from "~/apis/fpl-plus/queries/teams";
import { TeamWithAdditionalProperties } from "~/apis/fpl-plus/service/teams.service";
import { getFixturesByEventIdOptions } from "~/apis/fpl/queries/fixtures";
import { Fixture } from "~/apis/fpl/types/fixtures.types";
import { Icon } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "~/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import FixtureCard from "~/app/gameweeks/[gameweek]/components/fixture";

export type FixtureWithTeams = Fixture & {
  team_a_data: TeamWithAdditionalProperties;
  team_h_data: TeamWithAdditionalProperties;
};

export default function Fixtures({
  gameweek,
  className,
}: {
  gameweek: number;
  className?: string;
}) {
  const [hasLiveFixture, setHasLiveFixture] = useState(false);

  const { data: fixtures } = useSuspenseQuery({
    ...getFixturesByEventIdOptions(gameweek),
    refetchInterval: hasLiveFixture ? 30000 : false,
  });

  useEffect(() => {
    const liveFixtureExists = fixtures.some(
      (fixture) => fixture.started && !fixture.finished,
    );
    setHasLiveFixture(liveFixtureExists);
  }, [fixtures]);

  const teamQueries = useSuspenseQueries({
    queries: fixtures.flatMap((fixture) => [
      getTeamByIdOptions(fixture.team_a),
      getTeamByIdOptions(fixture.team_h),
    ]),
  });

  const fixturesWithTeams = fixtures.map((fixture, index) => ({
    ...fixture,
    team_a_data: teamQueries[index * 2]!.data,
    team_h_data: teamQueries[index * 2 + 1]!.data,
  }));

  const groupedFixtures = groupFixturesByDate(fixturesWithTeams);

  return (
    <Card className={cn("border", className)}>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl font-bold">
          <Icon iconNode={soccerPitch} className="mr-3 size-8" /> Fixtures
        </CardTitle>
      </CardHeader>
      <CardContent>
        {Object.entries(groupedFixtures).map(([date, fixturesForDate]) => (
          <FixtureGroup key={date} date={date} fixtures={fixturesForDate} />
        ))}
      </CardContent>
    </Card>
  );
}

function FixtureGroup({
  date,
  fixtures,
}: {
  date: string;
  fixtures: FixtureWithTeams[];
}) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-lg font-semibold">{date}</h3>
      <div className="space-y-3">
        {fixtures.map((fixture) => (
          <FixtureCard key={fixture.id} fixture={fixture} />
        ))}
      </div>
    </div>
  );
}

function groupFixturesByDate(
  fixtures: FixtureWithTeams[],
): Record<string, FixtureWithTeams[]> {
  return fixtures.reduce(
    (acc, fixture) => {
      const date = formatDate(fixture.kickoff_time);
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(fixture);
      return acc;
    },
    {} as Record<string, FixtureWithTeams[]>,
  );
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
