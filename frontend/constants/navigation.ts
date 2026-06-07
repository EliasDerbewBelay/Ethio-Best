import {
  Home,
  Info,
  Building2,
  Newspaper,
  Phone,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  shortLabel: string;
  href: string;
  icon: LucideIcon;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { title: "Home", shortLabel: "Home", href: "/", icon: Home },
  { title: "About Us", shortLabel: "About", href: "/about", icon: Info },
  {
    title: "Real Estates",
    shortLabel: "Estates",
    href: "/estates",
    icon: Building2,
  },
  {
    title: "News and Blog",
    shortLabel: "News",
    href: "/news",
    icon: Newspaper,
  },
  {
    title: "Contact Us",
    shortLabel: "Contact",
    href: "/contact",
    icon: Phone,
  },
];
