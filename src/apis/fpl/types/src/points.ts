import { EventResponse } from "~/apis/fpl/types/event.types";
import { Pick } from "~/apis/fpl/types/picks.types";

export const getLatestPointsForEvent = ({
  event,
  picks,
}: {
  event: EventResponse;
  picks: Pick[];
}) => {
  const points = picks.reduce((acc, pick) => {
    const player = event.elements.find(
      (element) => element.id === pick.element,
    );
    if (!player) return acc;

    return acc + player.stats.total_points * pick.multiplier;
  }, 0);

  return points;
};
