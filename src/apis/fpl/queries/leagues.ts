import { queryOptions } from "@tanstack/react-query";
import { fetchLeagueStandingsById } from "~/apis/fpl/service/leagues.service";

export const getLeagueByIdOptions = (id: number) =>
  queryOptions({
    queryKey: ["league", id],
    queryFn: fetchLeagueStandingsById(id),
  });
