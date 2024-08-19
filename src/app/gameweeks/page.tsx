import { getAllEventsOptions } from "~/apis/fpl/queries/entries";
import { CalendarDaysIcon } from "lucide-react";
import Link from "next/link";

import { getQueryClient } from "~/lib/rq/server";
import { cn } from "~/lib/utils";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import DeadlineCounter from "~/app/gameweeks/components/deadline-counter";
import { getGameweekStatus } from "~/app/gameweeks/lib/status";

export default async function Gameweeks() {
  const queryClient = getQueryClient();

  const gameweeks = await queryClient
    .fetchQuery(getAllEventsOptions())
    .catch((error) => {
      console.error(error);
      return [];
    });

  if (!gameweeks)
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            No gameweeks found
          </CardTitle>
        </CardHeader>
      </Card>
    );

  return (
    <>
      <div className="mt-8 flex flex-row items-center pb-6">
        <CalendarDaysIcon
          className="mr-2.5 size-9 shrink-0"
          strokeWidth={2.5}
        />
        <h1 className="text-4xl font-bold">Gameweeks</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gameweeks.map((gameweek) => {
          const gameweekStatus = getGameweekStatus(gameweek);

          const href =
            gameweekStatus.status === "current" ||
            gameweekStatus.status === "finished" ||
            gameweekStatus.status === "previous" ||
            gameweekStatus.status === "next"
              ? `/gameweeks/${gameweek.id}`
              : "#";

          return (
            <Link
              key={gameweek.id}
              href={href}
              className={
                href === "#"
                  ? "cursor-not-allowed"
                  : "group transition-all hover:scale-[1.03]"
              }
            >
              <Card
                className={cn(
                  "border transition-all group-hover:border-2",
                  gameweekStatus.cardClassName,
                )}
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
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
}
