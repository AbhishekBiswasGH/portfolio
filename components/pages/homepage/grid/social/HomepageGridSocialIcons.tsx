// constants
import { HOMEPAGE_GRID_SOCIAL_ICONS } from "@/constants/pages/homepage";

// components
import HomepageGridSocialIcon from "./HomepageGridSocialIcon";

export default function HomepageGridSocialIcons() {
  return (
    <div className="grid grid-cols-2 items-center text-snow/70 max-sm:gap-3 sm:flex sm:justify-evenly">
      {HOMEPAGE_GRID_SOCIAL_ICONS.map((contact, i) => (
        <HomepageGridSocialIcon
          key={i}
          contact={contact}
        />
      ))}
    </div>
  );
}
