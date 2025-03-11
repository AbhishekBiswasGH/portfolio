// components
import HomepageHeroPrimaryButton from "./HomepageHeroPrimaryButton";
import HomepageHeroSecondaryButton from "./HomepageHeroSecondaryButton";

export default function HomepageHeroButtons() {
  return (
    <div className="flex items-center justify-center gap-x-4 pt-6">
      <HomepageHeroPrimaryButton />
      <HomepageHeroSecondaryButton />
    </div>
  );
}
