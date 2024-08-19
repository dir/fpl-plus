import { queryOptions } from "@tanstack/react-query";
import { fetchLeagueStandingsById } from "~/apis/fpl/service/leagues.service";

export const getLeagueByIdOptions = (id: number) =>
  queryOptions({
    queryKey: ["fpl-api", "league", id],
    queryFn: fetchLeagueStandingsById(id),
  });
