"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ThemeProvider from "~/styles/theme-provider";

import { ReactQueryProvider } from "~/lib/rq/react";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ReactQueryProvider>
        {children}
        <ReactQueryDevtools />
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
