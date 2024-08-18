import { getAllEventsOptions } from "~/apis/fpl/queries/entries";
import { EventInfo } from "~/apis/fpl/types/event.types";
import { differenceInDays } from "date-fns";
import { CalendarDaysIcon } from "lucide-react";

import { getQueryClient } from "~/lib/rq/server";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import DeadlineCounter from "~/app/gameweeks/components/deadline-counter";

type BadgeVariant = "success" | "pending" | "muted";

type GameweekStatus = {
  label: string;
  variant: BadgeVariant;
  border: string;
  daysUntilDeadline?: number;
};

const getGameweekStatus = (gameweek: EventInfo): GameweekStatus => {
  const now = new Date();
  const deadline = new Date(gameweek.deadline_time);
  const daysUntilDeadline = Math.max(0, differenceInDays(deadline, now));

  if (gameweek.is_current)
    return {
      label: "Current",
      variant: "success",
      border: "border-emerald-500",
    };
  if (gameweek.is_next)
    return {
      label: "Upcoming",
      variant: "pending",
      border: "border-amber-500",
    };
  if (gameweek.is_previous && gameweek.finished)
    return {
      label: "Finished",
      variant: "success",
      border: "border-emerald-500",
    };
  if (gameweek.finished)
    return { label: "Finished", variant: "muted", border: "border-gray-500" };
  return {
    label: `${daysUntilDeadline} days`,
    variant: "muted",
    border: "",
    daysUntilDeadline,
  };
};

export const dynamic = "force-dynamic";

export default async function Gameweeks() {
  const queryClient = getQueryClient();
  const gameweeks = await queryClient.fetchQuery(getAllEventsOptions());

  return (
    <>
      <div className="flex flex-row items-center pb-6">
        <CalendarDaysIcon
          className="mr-2.5 size-8 shrink-0"
          strokeWidth={2.5}
        />
        <h1 className="text-4xl font-bold">Gameweeks</h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {gameweeks.map((gameweek) => {
          const status = getGameweekStatus(gameweek);
          return (
            <Card key={gameweek.id} className={`border ${status.border}`}>
              <CardHeader>
                <CardTitle className="inline-flex items-center gap-x-4 pb-1">
                  {gameweek.name}
                  <Badge variant={status.variant}>{status.label}</Badge>
                </CardTitle>
                <Separator />
                <CardDescription className="pt-1">
                  <strong>Deadline:</strong>{" "}
                  {new Date(gameweek.deadline_time).toLocaleString()}{" "}
                  {gameweek.is_next && (
                    <span className="text-gray-500">
                      (<DeadlineCounter deadline={gameweek.deadline_time} />)
                    </span>
                  )}
                  {!gameweek.is_next &&
                    status.daysUntilDeadline !== undefined && (
                      <div className="mt-1 text-sm text-gray-500">
                        {status.daysUntilDeadline} days until deadline
                      </div>
                    )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {gameweek.finished ? "Finished" : "Not finished"}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div>View</div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
