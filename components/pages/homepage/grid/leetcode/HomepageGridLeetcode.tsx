// constants
import { LEETCODE } from "@/constants/info/social";

// components
import HomepageGridLeetcodeHeader from "./HomepageGridLeetcodeHeader";
import HomepageGridLeetcodeUI from "./HomepageGridLeetcodeUI";
import Link from "next/link";

export default function HomepageGridLeetcode() {
  return (
    <Link
      href={LEETCODE}
      prefetch={false}
      target={"_blank"}
      className={`group flex flex-col justify-start gap-y-3 border-snow/10 pt-7 transition-colors duration-300 hover:border-snow/25 max-sm:border-y max-sm:border-l max-sm:hover:border-snow/10 sm:rounded-2xl sm:border sm:border-snow/10 sm:bg-smoke/10 sm:pt-4`}
    >
      <HomepageGridLeetcodeHeader />
      <HomepageGridLeetcodeUI />
    </Link>
  );
}
