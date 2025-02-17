// constants
import { PROJECTS_ROUTE } from "@/constants/routes";

// components
import HomepageGridProjectBackground from "./HomepageGridProjectBackground";
import HomepageGridProjectDataList from "./HomepageGridProjectDataList";
import HomepageGridProjectHeader from "./HomepageGridProjectHeader";
import Link from "next/link";

export default function HomepageGridProject() {
  return (
    <Link
      href={PROJECTS_ROUTE}
      prefetch={false}
      className={`group relative flex flex-col justify-start gap-y-3 overflow-hidden border-snow/10 pt-7 transition-colors duration-300 hover:border-snow/25 max-sm:border-y max-sm:hover:border-snow/10 sm:row-span-2 sm:rounded-2xl sm:border sm:border-snow/10 sm:bg-smoke/10 sm:pt-5`}
    >
      <HomepageGridProjectHeader />
      <HomepageGridProjectDataList />
      <HomepageGridProjectBackground />
    </Link>
  );
}
