// constants
import { HOMEPAGE_HERO_DESCRIPTION } from "@/constants/pages/homepage";

export default function HomepageHeroDescription() {
  return (
    <p className="px-5 text-center !leading-relaxed text-snow/60 max-sm:text-sm sm:px-10 lg:px-28">
      {HOMEPAGE_HERO_DESCRIPTION}
    </p>
  );
}
