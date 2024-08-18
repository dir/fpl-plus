import { LeagueStandingsResponse } from "~/apis/fpl/types/league.types";

import { env } from "~/env";
import { getProxiedUrl } from "~/lib/utils";

export const fetchLeagueStandingsById = (id: number) => async () =>
  await fetch(
    getProxiedUrl(
      `${env.NEXT_PUBLIC_FPL_API_BASE_URL}/leagues-classic/${id}/standings`,
    ),
    {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      next: {
        revalidate: 60,
      },
    },
  ).then((res) => res.json() as Promise<LeagueStandingsResponse>);
