import { CalendarDaysIcon, ScanSearchIcon } from "lucide-react";

export type NavItem = {
  href: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type NavConfig = readonly NavItem[];

export const NavConfig: NavConfig = [
  {
    href: "/find-your-league",
    title: "Find your league",
    icon: ScanSearchIcon,
  },
  {
    href: "/gameweeks",
    title: "Gameweeks",
    icon: CalendarDaysIcon,
  },
] as const;
