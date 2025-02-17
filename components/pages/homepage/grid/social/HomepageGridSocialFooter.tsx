// constants
import { HOMEPAGE_GRID_SOCIAL_FOOTER } from "@/constants/pages/homepage";

// components
import Link from "next/link";

export default function HomepageGridSocialFooter() {
  const { label, url, icon } = HOMEPAGE_GRID_SOCIAL_FOOTER;

  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center justify-center gap-x-2 text-center transition-all duration-300 hover:text-snow/95"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
