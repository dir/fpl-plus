import { EventInfo, EventResponse } from "~/apis/fpl/types/event.types";
import { EntryPicksResponse } from "~/apis/fpl/types/picks.types";

import { getBaseUrl } from "~/lib/utils";

export const fetchAllEvents = () => async () =>
  await fetch(`${getBaseUrl()}/fpl/events`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  })
    .then((res) => res.json() as Promise<EventInfo[]>)
    .catch((error) => {
      console.error("Error:", error);
    });

export const fetchLiveEventById = (id: number) => async () =>
  await fetch(`${getBaseUrl()}/fpl/event/${id}/live`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json() as Promise<EventResponse>);

export const fetchEntryEventPicksByEntryId =
  (entryId: number, eventId: number) => async () =>
    await fetch(`${getBaseUrl()}/fpl/entry/${entryId}/event/${eventId}/picks`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60,
      },
    }).then((res) => res.json() as Promise<EntryPicksResponse>);
