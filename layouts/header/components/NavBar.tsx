"use client";

// hooks
import { usePathname } from "next/navigation";

// components
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function NavBar() {
  const currPath = usePathname();

  return (
    <>
      <NavDesktop currentPath={currPath} />
      <NavMobile currentPath={currPath} />
    </>
  );
}
