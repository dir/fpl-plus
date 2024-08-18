"use client";

import { MenuIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Logo } from "~/components/layout/header";

export default function SheetNavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the sheet when the pathname changes (i.e. a link is clicked)
  useMemo(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button className="shrink-0 lg:hidden" variant="outline" size="icon">
          <MenuIcon className="size-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="flex select-none flex-col space-y-4 overflow-y-auto"
      >
        <SheetHeader className="cursor-default">
          <div className="flex">
            <Logo />
          </div>
        </SheetHeader>

        <div className="flex-1" />

        <div>
          <p>Bottom stuff</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
