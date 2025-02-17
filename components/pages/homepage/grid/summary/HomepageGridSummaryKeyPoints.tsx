// constants
import { HOMEPAGE_GRID_SUMMARY_KEY_POINTS } from "@/constants/pages/homepage";

// components
import HomepageGridSummaryKeyPoint from "./HomepageGridSummaryKeyPoint";

export default function HomepageGridSummaryKeyPoints() {
  return (
    <div className="flex h-full items-end px-3 pt-8 max-sm:justify-center sm:w-fit sm:p-6">
      <div className="grid auto-rows-min grid-cols-[16px_auto] items-center gap-x-2 gap-y-2 text-xs text-snow/70 sm:gap-y-1.5">
        {HOMEPAGE_GRID_SUMMARY_KEY_POINTS.map(
          (keyPoint, i) => (
            <HomepageGridSummaryKeyPoint
              key={i}
              keyPoint={keyPoint}
            />
          )
        )}
      </div>
    </div>
  );
}
