// components
import Link from "next/link";

// types
import { type ContactInfo } from "@/types/contact";

export default function HomepageGridSocialIcon({
  contact: { label, url, icon }
}: {
  contact: ContactInfo;
}) {
  return (
    <Link
      aria-label={label}
      href={url}
      prefetch={false}
      target="_blank"
      className="flex items-center justify-center rounded-[10px] transition-colors duration-300 hover:text-snow/95 max-sm:aspect-square max-sm:bg-smoke/50"
    >
      {icon}
    </Link>
  );
}
