// constants
import { HOMEPAGE_GRID_SERVICE_OPTIONS } from "@/constants/pages/homepage";

// components
import HomepageGridServiceOptionLabel from "./HomepageGridServiceOptionLabel";

export default function HomepageGridServiceOptionsLabel({
  activeIndex
}: {
  activeIndex: number;
}) {
  return (
    <>
      {HOMEPAGE_GRID_SERVICE_OPTIONS.map(
        ({ label, color }, index) => (
          <HomepageGridServiceOptionLabel
            key={index}
            label={label}
            color={color}
            isActive={activeIndex === index}
          />
        )
      )}
    </>
  );
}
