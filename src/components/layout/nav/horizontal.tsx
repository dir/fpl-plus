import * as React from "react";
import Link from "next/link";

import { NavConfig, NavItem } from "~/config/nav";
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
        {NavConfig.map(({ href, title, icon }) => (
          <HorizontalNavMenuItem
            key={href}
            href={href}
            title={title}
            icon={icon}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function HorizontalNavMenuItem({ href, title, icon: Icon }: NavItem) {
  return (
    <NavigationMenuItem>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <Icon className="mr-2 size-5" />
          <span>{title}</span>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
