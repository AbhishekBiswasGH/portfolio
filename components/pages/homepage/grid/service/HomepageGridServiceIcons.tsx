// constants
import { HOMEPAGE_GRID_SERVICE_OPTIONS } from "@/constants/pages/homepage";

// components
import HomepageGridServiceIcon from "./HomepageGridServiceIcon";

export default function HomepageGridServiceIcons({
  activeIndex,
  onChangeActiveIndex
}: {
  activeIndex: number;
  onChangeActiveIndex: (activeIndex: number) => void;
}) {
  return (
    <div className="flex items-center justify-center text-snow/80 *:px-3.5 sm:justify-end sm:text-snow/95 sm:*:px-3">
      {HOMEPAGE_GRID_SERVICE_OPTIONS.map(
        ({ icon, color }, index) => (
          <HomepageGridServiceIcon
            key={index}
            icon={icon}
            color={color}
            isActive={activeIndex === index}
            isOtherOptionActive={activeIndex < 0}
            onHover={() => {
              onChangeActiveIndex(index);
            }}
            onDescend={() => {
              onChangeActiveIndex(-1);
            }}
          />
        )
      )}
    </div>
  );
}
