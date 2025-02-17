"use client";

// hooks
import { useState } from "react";

// components
import HomepageGridServiceText from "./HomepageGridServiceText";
import HomepageGridServiceIcons from "./HomepageGridServiceIcons";

export default function HomepageGridServiceContent() {
  // states
  const [activeIndex, setActiveIndex] =
    useState<number>(-1);

  return (
    <div
      className={`grid h-full -translate-y-1 grid-cols-1 items-center gap-x-7 gap-y-7 px-6 pb-4 max-sm:pt-2 sm:grid-cols-[auto_1fr]`}
    >
      <HomepageGridServiceText activeIndex={activeIndex} />
      <HomepageGridServiceIcons
        activeIndex={activeIndex}
        onChangeActiveIndex={setActiveIndex}
      />
    </div>
  );
}
