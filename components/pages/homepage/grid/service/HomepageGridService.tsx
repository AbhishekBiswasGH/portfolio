// components
import HomepageGridServiceContent from "./HomepageGridServiceContent";
import HomepageGridServiceHeader from "./HomepageGridServiceHeader";

export default function HomepageGridService() {
  return (
    <div
      className={`group flex flex-col justify-start gap-y-3 pt-7 max-sm:col-span-2 sm:col-span-2 sm:rounded-2xl sm:border sm:border-snow/10 sm:bg-smoke/10 sm:pt-5`}
    >
      <HomepageGridServiceHeader />
      <HomepageGridServiceContent />
    </div>
  );
}
