import * as React from "react";

import { cn } from "~/lib/utils";
import { ThemeToggleButton } from "~/components/ui/theme-toggle";
import HorizontalNavMenu from "~/components/layout/nav/horizontal";
import SheetNavMenu from "~/components/layout/nav/sheet";

export default function Header() {
  return (
    <header className="inline-flex w-full items-center gap-x-2 bg-secondary px-32 py-3">
      <div className="flex-1 md:hidden">
        <SheetNavMenu />
      </div>

      <div className="hidden gap-x-8 md:flex">
        <Logo />
        <HorizontalNavMenu />
      </div>

      <div className="w-full">
        <Logo className="md:hidden" />
      </div>

      <ThemeToggleButton />
    </header>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <h1 className="select-none text-2xl">
        <span className="font-bold">FPL</span>
        <sup className="font-normal">+</sup>
      </h1>
    </div>
  );
}
