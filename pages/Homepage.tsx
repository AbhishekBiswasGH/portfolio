// components
import HomepageCollaboration from "@/components/pages/homepage/collaboration/HomepageCollaboration";
import HomepageGrid from "@/components/pages/homepage/grid/HomepageGrid";
import HomepageHero from "@/components/pages/homepage/hero/HomepageHero";

export default function Homepage() {
  return (
    <main className="flex w-device flex-col items-center justify-center *:w-full *:max-w-extent">
      <HomepageHero />
      <HomepageGrid />
      <HomepageCollaboration />
    </main>
  );
}
