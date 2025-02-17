// components
import HomepageGridSocialFooter from "./HomepageGridSocialFooter";
import HomepageGridSocialIcons from "./HomepageGridSocialIcons";

export default function HomepageGridSocialInfo() {
  return (
    <div className="flex h-full flex-col justify-between px-6 pt-[18px] pb-5 text-[13px] text-snow/60">
      <HomepageGridSocialIcons />
      <HomepageGridSocialFooter />
    </div>
  );
}
