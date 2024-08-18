import { EntryResponse } from "~/apis/fpl/types/entry.types";

import { env } from "~/env";
import { getProxiedUrl } from "~/lib/utils";

export const fetchLiveEventById = (id: number) => async () =>
  await fetch(
    getProxiedUrl(`${env.NEXT_PUBLIC_FPL_API_BASE_URL}/event/${id}/live`),
    {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      next: {
        revalidate: 60,
      },
    },
  ).then((res) => res.json() as Promise<EntryResponse>);

export const fetchEntryEventPicksByEntryId =
  (entryId: number, eventId: number) => async () =>
    await fetch(
      getProxiedUrl(
        `${env.NEXT_PUBLIC_FPL_API_BASE_URL}/entry/${entryId}/event/${eventId}/picks`,
      ),
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 60,
        },
      },
    ).then((res) => res.json() as Promise<EntryResponse>);
