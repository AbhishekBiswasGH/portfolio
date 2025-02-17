// components
import HomepageGridLeetcodeUIContent from "./HomepageGridLeetcodeUIContent";
import HomepageGridLeetcodeUISkeleton from "./HomepageGridLeetcodeUISkeleton";
import { Suspense } from "react";

export default function HomepageGridLeetcodeUI() {
  return (
    <div className="grid grid-cols-1 items-start gap-x-4 px-4 pt-1 pb-5 sm:grid-cols-[88px_1fr] sm:items-center sm:pb-4">
      <Suspense
        fallback={<HomepageGridLeetcodeUISkeleton />}
      >
        <HomepageGridLeetcodeUIContent />
      </Suspense>
    </div>
  );
}
