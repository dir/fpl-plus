import { queryOptions } from "@tanstack/react-query";
import {
  fetchEntryEventPicksByEntryId,
  fetchLiveEventById,
} from "~/apis/fpl/service/event.service";

export const getLiveEventByIdOptions = (id: number) =>
  queryOptions({
    queryKey: ["live-event", id],
    queryFn: fetchLiveEventById(id),
  });

export const getEntryEventPicksByEntryIdOptions = (
  entryId: number,
  eventId: number,
) =>
  queryOptions({
    queryKey: ["live-event", entryId, eventId],
    queryFn: fetchEntryEventPicksByEntryId(entryId, eventId),
  });
