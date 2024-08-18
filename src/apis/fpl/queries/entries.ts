import { queryOptions } from "@tanstack/react-query";
import { fetchEntryById } from "~/apis/fpl/service/entries.service";
import { fetchAllEvents } from "~/apis/fpl/service/event.service";

export const getEntryByIdOptions = (id: number) =>
  queryOptions({
    queryKey: ["entry", id],
    queryFn: fetchEntryById(id),
    staleTime: 1000 * 60 * 5,
  });

export const getAllEventsOptions = () =>
  queryOptions({
    queryKey: ["events"],
    queryFn: fetchAllEvents(),
    staleTime: 1000 * 60 * 5,
  });
