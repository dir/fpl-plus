"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CalendarDaysIcon, MenuIcon } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import Glow from "~/components/glow";
import { Logo } from "~/components/layout/header";

export default function SheetNavMenu({ className }: { className?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the sheet when the pathname changes (i.e. a link is clicked)
  useMemo(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={cn(className)}>
        <Button className="shrink-0" variant="outline" size="icon">
          <MenuIcon className="size-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        aria-describedby="Navigation menu"
        className="flex select-none flex-col space-y-4 overflow-y-auto"
      >
        <SheetHeader className="cursor-default">
          <SheetTitle className="flex">
            <Logo />
          </SheetTitle>
          <VisuallyHidden>
            <SheetDescription>Sidebar navigation for FPL+</SheetDescription>
          </VisuallyHidden>
        </SheetHeader>

        <Link href="/gameweeks">
          <span className="flex items-center gap-x-2 rounded-md p-2 hover:bg-secondary">
            <CalendarDaysIcon className="size-5" />
            <span>Gameweeks</span>
          </span>
        </Link>

        <div className="flex-1" />

        <SheetFooter className="flex flex-row items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}
          </p>
          <span className="mx-1">•</span>
          <Link href="https://luke.onl">
            <Glow blur={"sm"}>Luke Davis</Glow>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
