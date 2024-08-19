import { queryOptions } from "@tanstack/react-query";
import { fetchBootstrapStatic } from "~/apis/fpl/service/bootstrap.service";

export const getBootstrapStaticOptions = () =>
  queryOptions({
    queryKey: ["fpl-api", "bootstrap-static"],
    queryFn: fetchBootstrapStatic(),
    staleTime: 1000 * 60 * 60,
  });
