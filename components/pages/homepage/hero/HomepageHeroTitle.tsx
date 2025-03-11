// constants
import { HOMEPAGE_HERO_TITLE } from "@/constants/pages/homepage";

export default function HomepageHeroTitle() {
  return (
    <h1
      className={
        "px-10 text-center text-3xl leading-none font-medium tracking-normal text-snow sm:px-24 sm:text-4xl lg:px-36"
      }
    >
      {HOMEPAGE_HERO_TITLE}
    </h1>
  );
}
