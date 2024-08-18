import { EntryResponse } from "~/apis/fpl/types/entry.types";

import { getBaseUrl } from "~/lib/utils";

export const fetchEntryById = (id: number) => async () =>
  await fetch(`${getBaseUrl()}/fpl-api/entry/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json() as Promise<EntryResponse>);
