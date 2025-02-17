// constants
import { HOMEPAGE_PRIMARY_BUTTON } from "@/constants/pages/homepage";

// components
import Link from "next/link";

export default function HomepagePrimaryButton() {
  return (
    <Link
      href={HOMEPAGE_PRIMARY_BUTTON.path}
      prefetch={false}
      className="rounded-[6px] bg-accent/75 px-4 py-2.5 text-sm font-medium sm:px-5"
    >
      {HOMEPAGE_PRIMARY_BUTTON.label}
    </Link>
  );
}
