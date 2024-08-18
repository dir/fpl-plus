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
      <body>
        <Providers>
          <Header />
          <main className="mx-auto w-full max-w-screen-2xl px-4 md:px-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
