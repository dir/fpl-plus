import { getAllEventsOptions } from "~/apis/fpl/queries/entries";
import { EventInfo } from "~/apis/fpl/types/event.types";
import { differenceInDays } from "date-fns";
import { CalendarDaysIcon } from "lucide-react";

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
      label: "Current",
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
    label: `${daysUntilDeadline} days`,
    variant: "muted",
    cardClassName: "opacity-50",
    daysUntilDeadline,
  };
};

export default async function Gameweeks() {
  const queryClient = getQueryClient();
  const gameweeks = await queryClient.fetchQuery(getAllEventsOptions());

  return (
    <>
      <div className="flex flex-row items-center pb-8">
        <CalendarDaysIcon
          className="mr-2.5 size-9 shrink-0"
          strokeWidth={2.5}
        />
        <h1 className="text-4xl font-bold">Gameweeks</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gameweeks.map((gameweek) => {
          const gameweekStatus = getGameweekStatus(gameweek);
          return (
            <Card
              key={gameweek.id}
              className={`border ${gameweekStatus.cardClassName}`}
            >
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-x-4 pb-1">
                  {gameweek.name}
                  <Badge variant={gameweekStatus.variant}>
                    {gameweekStatus.label}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  {gameweekStatus.status === "next" && (
                    <>
                      <span className="font-light">Starts in</span>{" "}
                      <DeadlineCounter
                        className="font-medium"
                        deadline={gameweek.deadline_time}
                      />
                    </>
                  )}
                  {gameweekStatus.status === "future" && (
                    <>
                      <span className="font-light">Starts in</span>{" "}
                      {gameweekStatus.daysUntilDeadline} days
                    </>
                  )}
                  {gameweekStatus.status === "current" && (
                    <>
                      <span className="font-light">Started on</span>{" "}
                      {new Date(gameweek.deadline_time).toLocaleDateString()}
                    </>
                  )}
                </CardDescription>
              </CardHeader>
              {/*
              <CardContent>
                <CardDescription>
                  {gameweek.finished ? "Finished" : "Not finished"}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div>View</div>
              </CardFooter>
              */}
            </Card>
          );
        })}
      </div>
    </>
  );
}
