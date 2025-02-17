// constants
import { GITHUB } from "@/constants/info/social";

// components
import HomepageGridGithubBackground from "./HomepageGridGithubBackground";
import HomepageGridGithubDetails from "./HomepageGridGithubDetails";
import HomepageGridGithubHeader from "./HomepageGridGithubHeader";
import Link from "next/link";

export default function HomepageGridGithub() {
  return (
    <Link
      href={GITHUB}
      prefetch={false}
      target={"_blank"}
      className={`group group relative flex flex-col justify-start gap-y-3 overflow-hidden border-snow/10 pt-7 transition-colors duration-300 hover:border-snow/25 max-sm:border-b max-sm:hover:border-snow/10 sm:rounded-2xl sm:border sm:border-snow/10 sm:bg-smoke/10 sm:pt-4`}
    >
      <HomepageGridGithubHeader />
      <HomepageGridGithubDetails />
      <HomepageGridGithubBackground />
    </Link>
  );
}
