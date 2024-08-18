import ky from "ky";

import { env } from "~/env";

/**
 * Basic configuration for the FPL API client.
 */
export const fplApi = ky.create({
  prefixUrl: env.NEXT_PUBLIC_FPL_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      (request) => {
        env.NODE_ENV === "development" &&
          // eslint-disable-next-line no-console
          console.debug("FPL API Request", request);
      },
    ],
  },
});
