import * as React from "react";

import { cn } from "~/lib/utils";
import { ThemeToggleButton } from "~/components/ui/theme-toggle";
import HorizontalNavMenu from "~/components/layout/nav/horizontal";
import SheetNavMenu from "~/components/layout/nav/sheet";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-secondary px-3 py-3 shadow-md md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-row items-center justify-between">
        <SheetNavMenu className="flex md:hidden" />

        <div className="inline-flex gap-x-4">
          <Logo />
          <HorizontalNavMenu className="hidden md:flex" />
        </div>

        <ThemeToggleButton />
      </div>
    </header>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <h1 className="select-none text-2xl">
        <span className="font-bold">FPL</span>
        <sup className="shrink-0 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text font-extrabold text-transparent">
          +
        </sup>
      </h1>
    </div>
  );
}
