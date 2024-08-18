import { isServer, QueryClientProvider } from "@tanstack/react-query";

import { createQueryClient } from "~/lib/rq/query-client";

import type { QueryClient } from "@tanstack/react-query";

let browserQueryClientSingleton: QueryClient | undefined = undefined;

export const getQueryClient = () =>
  isServer
    ? // Server: always make a new query client
      createQueryClient()
    : // Browser: use singleton pattern to keep the same query client
      (browserQueryClientSingleton ??= createQueryClient());

export function ReactQueryProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
