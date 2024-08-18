import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { cn } from "~/lib/utils";
import Header from "~/components/layout/header";
import Providers from "~/app/providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | FPL⁺",
    default: "FPL⁺",
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
      <body className="flex flex-col gap-y-10">
        <Providers>
          <Header />
          <main className="px-56">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
