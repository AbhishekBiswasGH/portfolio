// constants
import { BLOGS_ROUTE } from "@/constants/routes";

// components
import HomepageGridBlogData from "./HomepageGridBlogData";
import HomepageGridBlogHeader from "./HomepageGridBlogHeader";
import Link from "next/link";

export default function HomepageGridBlog() {
  return (
    <Link
      href={BLOGS_ROUTE}
      prefetch={false}
      className={`group flex flex-col justify-start gap-y-3 pt-5 transition-colors duration-300 hover:border-snow/25 sm:rounded-2xl sm:border sm:border-snow/10 sm:bg-smoke/10`}
    >
      <HomepageGridBlogHeader />
      <HomepageGridBlogData />
    </Link>
  );
}
