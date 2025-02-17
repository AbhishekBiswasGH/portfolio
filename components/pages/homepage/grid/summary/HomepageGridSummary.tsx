// constants
import { PORTFOLIO_ROUTE } from "@/constants/routes";

// components
import HomepageGridSummaryDescription from "./HomepageGridSummaryDescription";
import HomepageGridSummaryHeader from "./HomepageGridSummaryHeader";
import HomepageGridSummaryKeyPoints from "./HomepageGridSummaryKeyPoints";
import HomepageGridSummaryProjectPreview from "./HomepageGridSummaryProjectPreview";
import Link from "next/link";

export default function HomepageGridSummary() {
  return (
    <Link
      href={PORTFOLIO_ROUTE}
      prefetch={false}
      className={`group relative col-span-2 flex flex-col justify-start gap-y-3 overflow-hidden pt-7 transition-colors duration-300 hover:border-snow/25 max-sm:pb-60 sm:row-span-2 sm:rounded-2xl sm:border sm:border-snow/10 sm:bg-smoke/10 sm:pt-6`}
    >
      <HomepageGridSummaryHeader />
      <HomepageGridSummaryDescription />
      <HomepageGridSummaryKeyPoints />
      <HomepageGridSummaryProjectPreview />
    </Link>
  );
}
