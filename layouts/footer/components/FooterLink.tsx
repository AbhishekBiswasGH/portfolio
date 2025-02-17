// components
import Link from "next/link";

// types
import { type Link as LinkType } from "@/types/link";

export default function FooterLink({
  footerLink: { label, path }
}: {
  footerLink: LinkType;
}) {
  return (
    <Link
      href={path}
      prefetch={false}
      className="hover:text-accent"
    >
      {label}
    </Link>
  );
}
