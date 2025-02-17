// constants
import { HOMEPAGE_GRID_SUMMARY_DESCRIPTION } from "@/constants/pages/homepage";

export default function HomepageGridSummaryDescription() {
  return (
    <div className="pt-3 text-2xl text-snow/60 max-sm:px-8 max-sm:text-center sm:w-3/4 sm:px-6 sm:text-xl">
      {HOMEPAGE_GRID_SUMMARY_DESCRIPTION.map(
        ({ text, highlight }, i) => (
          <span
            key={i}
            style={highlight ? { color: "white" } : {}}
          >
            {text}
          </span>
        )
      )}
    </div>
  );
}
