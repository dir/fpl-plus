import { LeagueStandingsResponse } from "~/apis/fpl/types/league.types";

import { getBaseUrl } from "~/lib/utils";

export const fetchLeagueStandingsById = (id: number) => async () =>
  await fetch(`${getBaseUrl()}/fpl-api/leagues-classic/${id}/standings`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json() as Promise<LeagueStandingsResponse>);
