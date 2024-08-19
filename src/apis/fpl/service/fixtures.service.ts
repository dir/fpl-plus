import { Fixture } from "~/apis/fpl/types/fixtures.types";

import { getBaseUrl } from "~/lib/utils";

export const fetchFixturesByEventId = (eventId: number) => async () =>
  await fetch(`${getBaseUrl()}/fpl/fixtures/?event=${eventId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 0.1,
    },
  }).then((res) => res.json() as Promise<Fixture[]>);
