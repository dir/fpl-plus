import { EventInfo } from "~/apis/fpl/types/event.types";
import { differenceInDays } from "date-fns";

type BadgeVariant = "success" | "pending" | "muted";

type GameweekStatus = {
  status: "current" | "next" | "previous" | "future" | "finished";
  label: string;
  variant: BadgeVariant;
  cardClassName: string;
  daysUntilDeadline?: number;
};

export const getGameweekStatus = (gameweek: EventInfo): GameweekStatus => {
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
    label: "Future",
    variant: "muted",
    cardClassName: "opacity-50",
    daysUntilDeadline,
  };
};
