// components
import Link from "next/link";

// types
import { type ContactInfo } from "@/types/contact";

export default function NavContactButton({
  label,
  url,
  icon
}: ContactInfo) {
  return (
    <Link
      href={url}
      prefetch
      className="flex items-center justify-center gap-x-2 rounded-[7px] border border-snow/10 bg-transparent p-2.5 text-sm font-medium text-snow/80 transition-all duration-300 hover:bg-smoke/50 hover:text-accent"
    >
      <span className="translate-y-px">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
