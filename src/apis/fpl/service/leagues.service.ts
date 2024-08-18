import { LeagueStandingsResponse } from "~/apis/fpl/types/league.types";

import { getBaseUrl } from "~/lib/utils";

export const fetchLeagueStandingsById = (id: number) => async () =>
  await fetch(`${getBaseUrl()}/fpl/leagues-classic/${id}/standings`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => {
    console.debug(
      "BASE URL:",
      `${getBaseUrl()}/fpl/leagues-classic/${id}/standings`,
    );
    console.debug(res);
    return res.json() as Promise<LeagueStandingsResponse>;
  });
