// components
import Link from "next/link";

// types
import { type Link as LinkType } from "@/types/link";

export default function NavLink({
  navLink: { label, path, title },
  isFirst,
  isLast,
  isActive
}: {
  navLink: LinkType;
  isFirst?: boolean;
  isLast?: boolean;
  isActive?: boolean;
}) {
  return (
    <Link
      href={path}
      prefetch={false}
      title={title}
      className={`relative pb-px ${isFirst ? "pr-4 pl-7" : isLast ? "pr-7 pl-4" : "px-4"} ${isActive ? "text-accent" : "hover:text-accent"} cursor-pointer transition-all duration-300`}
    >
      {label}
      {isActive && (
        <span
          className={`absolute h-[1.5px] ${isFirst || isLast ? "w-10/12" : "w-11/12"} -bottom-px left-1/2 bg-gradient-to-r from-transparent via-accent to-transparent ${isFirst ? "-translate-x-[calc(50%_-_6px)]" : isLast ? "-translate-x-[calc(50%_+_6px)]" : "-translate-x-1/2"}`}
        />
      )}
    </Link>
  );
}
