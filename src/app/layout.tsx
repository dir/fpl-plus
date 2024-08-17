import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { cn } from "~/lib/utils";
import { Header } from "~/components/layout/header";
import Providers from "~/app/providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Luke FPL",
    default: "Luke FPL",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", inter.className)}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
