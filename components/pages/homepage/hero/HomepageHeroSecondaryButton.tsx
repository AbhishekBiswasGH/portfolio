// constants
import { HOMEPAGE_HERO_SECONDARY_BUTTON } from "@/constants/pages/homepage";

// components
import Link from "next/link";

export default function HomepageHeroSecondaryButton() {
  return (
    <Link
      href={HOMEPAGE_HERO_SECONDARY_BUTTON.path}
      prefetch={false}
      className="rounded-[6px] bg-snow/10 px-4 py-2.5 text-sm font-medium sm:px-5"
    >
      {HOMEPAGE_HERO_SECONDARY_BUTTON.label}
    </Link>
  );
}
