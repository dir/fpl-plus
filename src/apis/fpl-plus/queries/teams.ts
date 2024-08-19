import { queryOptions } from "@tanstack/react-query";
import { getTeamById } from "~/apis/fpl-plus/service/teams.service";

export const getTeamByIdOptions = (id: number) =>
  queryOptions({
    queryKey: ["team", id],
    queryFn: getTeamById(id),
    staleTime: 1000 * 60 * 60,
  });
