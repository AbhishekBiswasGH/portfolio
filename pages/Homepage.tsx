// constants
import HomepageButtons from "@/components/pages/homepage/buttons/HomepageButtons";
import HomepageDescription from "@/components/pages/homepage/HomepageDescription";
import HomepageGrid from "@/components/pages/homepage/grid/HomepageGrid";
import HomepageSeparator from "@/components/pages/homepage/HomepageSeparator";
import HomepageTitle from "@/components/pages/homepage/HomepageTitle";

export default function Homepage() {
  return (
    <main
      className={`flex w-device justify-center *:w-full *:max-w-extent *:pt-20 *:pb-14 *:sm:pt-36 *:sm:pb-20`}
    >
      <div className={`space-y-7`}>
        <HomepageTitle />
        <HomepageDescription />
        <HomepageButtons />
        <HomepageSeparator />
        <HomepageGrid />
      </div>
    </main>
  );
}
