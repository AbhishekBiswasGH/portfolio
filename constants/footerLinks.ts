// constants
import {
  BLOGS_ROUTE,
  PORTFOLIO_ROUTE,
  PROJECTS_ROUTE,
  SITEMAP_ROUTE
} from "./routes";

// types
import { type Link } from "@/types/link";

export const FOOTER_LINKS: Link[] = [
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
    label: "Blogs",
    path: BLOGS_ROUTE,
    title: "read my articles"
  },
  {
    label: "Sitemap",
    path: SITEMAP_ROUTE,
    title: "sitemap"
  }
];
