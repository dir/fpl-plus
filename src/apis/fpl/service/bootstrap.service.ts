import { BootstrapStatic } from "~/apis/fpl/types/bootstrap.types";

import { getBaseUrl } from "~/lib/utils";

export const fetchBootstrapStatic = () => async () =>
  await fetch(`${getBaseUrl()}/fpl/bootstrap-static`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 3600,
    },
  }).then((res) => res.json() as Promise<BootstrapStatic>);
