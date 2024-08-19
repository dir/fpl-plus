import { getAllEventsOptions } from "~/apis/fpl/queries/entries";
import { EventInfo } from "~/apis/fpl/types/event.types";
import { differenceInDays } from "date-fns";
import { CalendarDaysIcon, MoveLeft } from "lucide-react";
import Link from "next/link";

import { getQueryClient } from "~/lib/rq/server";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import DeadlineCounter from "~/app/gameweeks/components/deadline-counter";

type BadgeVariant = "success" | "pending" | "muted";

type GameweekStatus = {
  status: "current" | "next" | "previous" | "future" | "finished";
  label: string;
  variant: BadgeVariant;
  cardClassName: string;
  daysUntilDeadline?: number;
};

const getGameweekStatus = (gameweek: EventInfo): GameweekStatus => {
  const now = new Date();
  const deadline = new Date(gameweek.deadline_time);
  const daysUntilDeadline = Math.max(0, differenceInDays(deadline, now));

  if (gameweek.is_current)
    return {
      status: "current",
      label: "Active",
      variant: "success",
      cardClassName: "border-emerald-500",
    };
  if (gameweek.is_next)
    return {
      status: "next",
      label: "Upcoming",
      variant: "pending",
      cardClassName: "border-amber-500",
    };
  if (gameweek.is_previous && gameweek.finished)
    return {
      status: "previous",
      label: "Finished",
      variant: "success",
      cardClassName: "border-emerald-500",
    };
  if (gameweek.finished)
    return {
      status: "finished",
      label: "Finished",
      variant: "muted",
      cardClassName: "border-gray-500",
    };
  return {
    status: "future",
    label: "Future",
    variant: "muted",
    cardClassName: "opacity-50",
    daysUntilDeadline,
  };
};

export default async function Gameweeks({
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

  if (!gameweeks)
    return (
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            No gameweeks found
          </CardTitle>
        </CardHeader>
      </Card>
    );

  const gameweek = gameweeks.find((gw) => gw.id === Number(params.gameweek));

  if (!gameweek)
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Gameweek not found
          </CardTitle>
        </CardHeader>
      </Card>
    );

  const gameweekStatus = getGameweekStatus(gameweek);

  return (
    <>
      <div className="mt-5">
        <Link href="/gameweeks" className="select-none">
          <div className="inline-flex items-center text-sm text-muted-foreground/60 transition-colors hover:text-muted-foreground">
            <MoveLeft className="mr-2" />
            View All
          </div>
        </Link>
      </div>

      <div className="mb-5 mt-1">
        <div className="flex flex-row items-center">
          <CalendarDaysIcon
            className="mr-2.5 size-9 shrink-0"
            strokeWidth={2.5}
          />
          <h1 className="text-4xl font-bold">{gameweek.name}</h1>
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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          key={gameweek.id}
          className={`border ${gameweekStatus.cardClassName}`}
        >
          <CardHeader>
            <CardDescription>Work</CardDescription>
          </CardHeader>
        </Card>
        <Card
          key={gameweek.id}
          className={`border ${gameweekStatus.cardClassName}`}
        >
          <CardHeader>
            <CardDescription>in</CardDescription>
          </CardHeader>
        </Card>
        <Card
          key={gameweek.id}
          className={`border ${gameweekStatus.cardClassName}`}
        >
          <CardHeader>
            <CardDescription>progress</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
