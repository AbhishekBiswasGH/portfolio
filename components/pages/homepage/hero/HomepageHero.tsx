// components
import HomepageHeroButtons from "./HomepageHeroButtons";
import HomepageHeroDescription from "./HomepageHeroDescription";
import HomepageHeroSeparator from "./HomepageHeroSeparator";
import HomepageHeroTitle from "./HomepageHeroTitle";

export default function HomepageHero() {
  return (
    <section className="space-y-7 px-4 pt-20 sm:px-12 sm:pt-36 lg:px-12">
      <HomepageHeroTitle />
      <HomepageHeroDescription />
      <HomepageHeroButtons />
      <HomepageHeroSeparator />
    </section>
  );
}
