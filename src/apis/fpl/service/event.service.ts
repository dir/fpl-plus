import { EntryResponse } from "~/apis/fpl/types/entry.types";

import { getBaseUrl } from "~/lib/utils";

export const fetchLiveEventById = (id: number) => async () =>
  await fetch(`${getBaseUrl()}/fpl-api/event/${id}/live`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json() as Promise<EntryResponse>);

export const fetchEntryEventPicksByEntryId =
  (entryId: number, eventId: number) => async () =>
    await fetch(
      `${getBaseUrl()}/fpl-api/entry/${entryId}/event/${eventId}/picks`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 60,
        },
      },
    ).then((res) => res.json() as Promise<EntryResponse>);
