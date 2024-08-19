import { queryOptions } from "@tanstack/react-query";
import { fetchFixturesByEventId } from "~/apis/fpl/service/fixtures.service";

export const getFixturesByEventIdOptions = (eventId: number) =>
  queryOptions({
    queryKey: ["fpl-api", "fixtures", eventId],
    queryFn: fetchFixturesByEventId(eventId),
  });
