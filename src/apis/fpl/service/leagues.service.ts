import { LeagueStandingsResponse } from "~/apis/fpl/types/league.types";

import { env } from "~/env";

export const fetchLeagueStandingsById = (id: number) => async () =>
  await fetch(
    `${env.NEXT_PUBLIC_FPL_API_BASE_URL}/leagues-classic/${id}/standings`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60,
      },
    },
  ).then((res) => res.json() as Promise<LeagueStandingsResponse>);
