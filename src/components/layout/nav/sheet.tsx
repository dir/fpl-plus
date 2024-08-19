"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MenuIcon } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavConfig, NavItem } from "~/config/nav";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
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
        className="flex select-none flex-col items-start"
      >
        <SheetHeader className="cursor-default">
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <VisuallyHidden>
            <SheetDescription>Sidebar navigation for FPL+</SheetDescription>
          </VisuallyHidden>
        </SheetHeader>

        <div className="flex w-full">
          <NavigationMenu
            orientation="vertical"
            className="min-w-full justify-start"
          >
            <NavigationMenuList className="flex flex-col gap-y-2 space-x-0">
              {NavConfig.map(({ href, title, icon }) => (
                <SheetNavItem
                  key={href}
                  href={href}
                  title={title}
                  icon={icon}
                />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex-1" />

        <SheetFooter className="flex flex-row items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}
          </p>
          <span className="mx-1">•</span>
          <Link href="https://luke.onl">
            <Glow blur={"lg"}>Luke Davis</Glow>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function SheetNavItem({ href, title, icon: Icon }: NavItem) {
  return (
    <NavigationMenuItem className="w-full py-0">
      <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "p-0 py-0 hover:bg-transparent hover:text-green-500 focus:bg-transparent focus:text-green-500",
          )}
        >
          <Icon className="mr-2 size-5" />
          <span className="text-xl">{title}</span>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
