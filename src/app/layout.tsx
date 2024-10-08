import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { cn } from "~/lib/utils";
import Footer from "~/components/layout/footer";
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
      <body className="flex min-h-dvh flex-col bg-background">
        <Providers>
          <Header />
          <main className="mx-auto flex w-full max-w-screen-xl flex-col gap-y-2 bg-background px-4 sm:px-6">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
