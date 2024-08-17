import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { ThemeToggleButton } from "~/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="inline-flex w-full bg-secondary px-6 py-3">
      <NavigationMenu>
        <NavigationMenuList className="gap-x-3">
          <NavigationMenuItem>
            <h1>Luke FPL</h1>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Test
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-1" />
      <ThemeToggleButton />
    </header>
  );
}
