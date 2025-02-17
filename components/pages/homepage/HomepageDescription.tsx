// constants
import { HOMEPAGE_DESCRIPTION } from "@/constants/pages/homepage";

export default function HomepageDescription() {
  return (
    <p className="px-5 text-center !leading-relaxed text-snow/60 max-sm:text-sm sm:px-10 lg:px-28">
      {HOMEPAGE_DESCRIPTION}
    </p>
  );
}
