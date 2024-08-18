import { queryOptions } from "@tanstack/react-query";
import { fetchEntryById } from "~/apis/fpl/service/entries.service";

export const getEntryByIdOptions = (id: number) =>
  queryOptions({
    queryKey: ["entry", id],
    queryFn: fetchEntryById(id),
    staleTime: 1000 * 60 * 5,
  });
