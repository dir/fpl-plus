import { fplApi } from "~/apis/fpl/service/client";
import { LeagueStandingsResponse } from "~/apis/fpl/types/league.types";

export const fetchLeagueStandingsById = (id: number) => async () =>
  await fplApi
    .get(`leagues-classic/${id}/standings`)
    .json<LeagueStandingsResponse>();
