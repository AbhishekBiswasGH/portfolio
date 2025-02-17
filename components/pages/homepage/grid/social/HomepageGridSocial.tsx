// components
import HomepageGridSocialHeader from "./HomepageGridSocialHeader";
import HomepageGridSocialInfo from "./HomepageGridSocialInfo";

export default function HomepageGridSocial() {
  return (
    <div
      className={`group flex flex-col justify-start gap-y-3 border-snow/10 pt-7 max-sm:!min-h-[300px] max-sm:border-b max-sm:border-l max-sm:hover:border-snow/10 sm:rounded-2xl sm:border sm:border-snow/10 sm:bg-smoke/10 sm:pt-5`}
    >
      <HomepageGridSocialHeader />
      <HomepageGridSocialInfo />
    </div>
  );
}
