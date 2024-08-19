import { TeamWithAdditionalProperties } from "~/apis/fpl-plus/service/teams.service";
import Image from "next/image";

import { cn } from "~/lib/utils";
import { Card } from "~/components/ui/card";
import { FixtureWithTeams } from "~/app/gameweeks/[gameweek]/components/fixtures";

import type { Fixture } from "~/apis/fpl/types/fixtures.types";

export default function FixtureCard({
  fixture,
}: {
  fixture: FixtureWithTeams;
}) {
  const { team_h_data: homeTeam, team_a_data: awayTeam } = fixture;
  const kickoffTime = formatKickoffTime(fixture.kickoff_time);
  const isFinished = fixture.finished;
  const homeWinner =
    isFinished && fixture.team_h_score! > fixture.team_a_score!;
  const awayWinner =
    isFinished && fixture.team_a_score! > fixture.team_h_score!;

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-3 items-center px-3 py-2">
        <TeamDisplay team={homeTeam} isHome isWinner={homeWinner} />
        <ScoreDisplay fixture={fixture} kickoffTime={kickoffTime} />
        <TeamDisplay team={awayTeam} isWinner={awayWinner} />
      </div>
    </Card>
  );
}

function TeamDisplay({
  team,
  isHome = false,
  isWinner = false,
}: {
  team: TeamWithAdditionalProperties;
  isHome?: boolean;
  isWinner?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        isHome ? "flex-row" : "flex-row-reverse",
        isWinner && "font-bold text-green-500",
      )}
    >
      <Image
        src={`/badges/100/t${team.code}.png`}
        alt={team.short_name}
        width={35}
        height={35}
        style={{
          width: "auto",
          height: "auto",
        }}
        className={cn(
          "rounded-full",
          isWinner && "outline-2 ring ring-green-500",
        )}
      />
      <span>{team.short_name}</span>
    </div>
  );
}

function ScoreDisplay({
  fixture,
  kickoffTime,
}: {
  fixture: Fixture;
  kickoffTime: string;
}) {
  if (fixture.finished) {
    return (
      <FinishedScore
        homeScore={fixture.team_h_score!}
        awayScore={fixture.team_a_score!}
      />
    );
  }
  if (fixture.started) {
    return (
      <LiveScore
        homeScore={fixture.team_h_score!}
        awayScore={fixture.team_a_score!}
        minutes={fixture.minutes}
      />
    );
  }
  return <UpcomingFixture kickoffTime={kickoffTime} />;
}

function FinishedScore({
  homeScore,
  awayScore,
}: {
  homeScore: number;
  awayScore: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-bold">
        {homeScore} - {awayScore}
      </div>
      <div className="text-xs text-gray-500">FT</div>
    </div>
  );
}

function LiveScore({
  homeScore,
  awayScore,
  minutes,
}: {
  homeScore: number;
  awayScore: number;
  minutes: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-lg font-semibold">
        {homeScore} - {awayScore}
      </div>
      <div className="text-sm font-semibold text-green-500">
        <span className="mr-1.5 animate-pulse pb-px text-lg leading-none text-emerald-500">
          •
        </span>
        {minutes}&apos;
      </div>
    </div>
  );
}

function UpcomingFixture({ kickoffTime }: { kickoffTime: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-sm font-semibold">{kickoffTime}</div>
      <div className="text-xs text-gray-400">Upcoming</div>
    </div>
  );
}

function formatKickoffTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
