// components
import HomepageGridServiceTitle from "./HomepageGridServiceTitle";
import HomepageGridServiceLabel from "./HomepageGridServiceLabel";

export default function HomepageGridServiceText({
  activeIndex
}: {
  activeIndex: number;
}) {
  return (
    <div className="flex text-2xl max-sm:flex-col max-sm:justify-center max-sm:gap-x-1.5 max-sm:text-center sm:flex-col">
      <HomepageGridServiceTitle />
      <HomepageGridServiceLabel activeIndex={activeIndex} />
    </div>
  );
}
