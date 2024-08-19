import { CalendarDaysIcon } from "lucide-react";

export type NavItem = {
  href: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type NavConfig = readonly NavItem[];

export const NavConfig: NavConfig = [
  {
    href: "/gameweeks",
    title: "Gameweeks",
    icon: CalendarDaysIcon,
  },
  {
    href: "/gameweeks",
    title: "Gameweeks",
    icon: CalendarDaysIcon,
  },
  {
    href: "/gameweeks",
    title: "Gameweeks",
    icon: CalendarDaysIcon,
  },
  {
    href: "/gameweeks",
    title: "Gameweeks",
    icon: CalendarDaysIcon,
  },
] as const;
