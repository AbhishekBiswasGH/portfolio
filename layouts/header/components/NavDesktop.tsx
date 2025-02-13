// constants
import { NAV_LINKS } from "@/constants/navLinks";

// components
import NavContact from "./navContact/NavContact";
import NavDialog from "./NavDialog";
import NavLink from "./NavLink";

export default function NavDesktop({
  currentPath
}: {
  currentPath: string;
}) {
  return (
    <nav className="flex items-center justify-between rounded-full border border-snow/10 bg-smoke/50 text-sm font-medium backdrop-blur-sm *:relative *:flex *:h-10 *:items-center max-sm:hidden sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:border-snow/5">
      {NAV_LINKS.map((navLink, i) => (
        <NavLink
          key={i}
          navLink={navLink}
          isActive={currentPath === navLink.path}
          isFirst={i === 0}
        />
      ))}
      <NavDialog
        label="Contact"
        content={<NavContact />}
        isLast
      />
    </nav>
  );
}
