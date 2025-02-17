// constants
import { HOMEPAGE_GRID_SERVICE_DEFAULT_OPTION_LABEL } from "@/constants/pages/homepage";

// components
import HomepageGridServiceOptionLabel from "./HomepageGridServiceOptionLabel";
import HomepageGridServiceOptionsLabel from "./HomepageGridServiceOptionsLabel";

export default function HomepageGridServiceLabel({
  activeIndex
}: {
  activeIndex: number;
}) {
  return (
    <div className="grid *:col-start-1 *:row-start-1">
      <HomepageGridServiceOptionsLabel
        activeIndex={activeIndex}
      />
      <HomepageGridServiceOptionLabel
        label={HOMEPAGE_GRID_SERVICE_DEFAULT_OPTION_LABEL}
        isActive={activeIndex === -1}
      />
    </div>
  );
}
