// constants
import {
  ABOUT_ROUTE,
  PORTFOLIO_ROUTE,
  PROJECTS_ROUTE
} from "./routes";

// types
import { type Link } from "@/types/link";

export const NAV_LINKS: Link[] = [
  {
    label: "Projects",
    path: PROJECTS_ROUTE,
    title: "my projects"
  },
  {
    label: "Portfolio",
    path: PORTFOLIO_ROUTE,
    title: "full-stack developer"
  },
  {
    label: "About",
    path: ABOUT_ROUTE,
    title: "more about me"
  }
];
