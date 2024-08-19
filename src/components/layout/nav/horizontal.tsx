import * as React from "react";
import Link from "next/link";

import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

export default function HorizontalNavMenu({
  className,
}: {
  className?: string;
}) {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList className="gap-x-3">
        <NavigationMenuItem>
          <Link href="/gameweeks" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Gameweeks
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
