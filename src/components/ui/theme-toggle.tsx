"use client";

import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function ThemeToggleButton() {
  const { setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <SunIcon className="size-[1.2rem] dark:hidden" />
          <MoonIcon className="hidden size-[1.2rem] dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          className="gap-x-1.5"
          onClick={() => setTheme("light")}
        >
          Light <SunIcon className="h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-x-1.5"
          onClick={() => setTheme("dark")}
        >
          Dark <MoonIcon className="h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-x-1.5"
          onClick={() => setTheme("system")}
        >
          System <ComputerIcon className="h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeToggleDropdown() {
  const { setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="flex flex-row gap-x-2">
        <SunIcon className="h-[1.2rem] w-[1.2rem] dark:hidden" />
        <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
        <span>Change Theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent alignOffset={-25}>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <SunIcon className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <MoonIcon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <ComputerIcon className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
