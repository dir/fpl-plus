import { Fixture } from "~/apis/fpl/types/fixtures.types";

import { getBaseUrl } from "~/lib/utils";

export const fetchBootstrapStatic = () => async () =>
  await fetch(`${getBaseUrl()}/fpl/bootstrap-static`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json() as Promise<Fixture[]>);
