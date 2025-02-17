// icons
import { ChevronDown } from "lucide-react";

// constants
import { CONTACT_SOCIAL_INFO } from "@/constants/contact";
import { NAV_LINKS } from "@/constants/navLinks";

// components
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/Drawer";
import Link from "next/link";

export default function NavMobile({
  currentPath
}: {
  currentPath: string | null;
}) {
  return (
    <Drawer direction={"top"}>
      <DrawerTrigger
        asChild
        className={`sm:hidden`}
      >
        <button className="flex items-center justify-center gap-x-1.5 rounded-full border border-snow/10 bg-smoke/50 px-3 text-sm font-medium backdrop-blur-sm transition-all duration-500 *:flex *:h-10 *:items-center sm:hidden sm:border-snow/5">
          <span className="pl-1">
            {NAV_LINKS.find(
              (navLink) => navLink.path === currentPath
            )?.label || "Home"}
          </span>
          <ChevronDown
            width={18}
            height={18}
          />
        </button>
      </DrawerTrigger>
      <DrawerContent
        className={`top-0 mt-0 h-fit min-w-fit gap-0 rounded-none border-none bg-transparent p-0 outline-none`}
      >
        <DrawerTitle className="hidden" />
        <section className="grid grid-cols-1 rounded-b-3xl border border-snow/10 bg-matte p-6 pt-3 pb-5">
          <DrawerClose asChild>
            <Link
              className={`relative flex flex-col justify-start gap-y-0.5 border-b border-snow/10 py-4 text-2xl ${currentPath === "/" ? "text-accent" : ""}`}
              href={"/"}
              prefetch
            >
              {"Homepage"}
              <span className="text-xs text-white/50">
                {"NAME HERE"}
              </span>
              {currentPath === "/" && (
                <>
                  <div className="absolute top-[calc(50%_-_4px)] right-3 aspect-square w-3 rounded-full bg-accent" />
                  <div className="absolute top-[calc(50%_-_4px)] right-3 aspect-square w-3 animate-ping rounded-full bg-accent" />
                </>
              )}
            </Link>
          </DrawerClose>
          {NAV_LINKS.map((navLink, i) => (
            <DrawerClose
              key={i}
              asChild
            >
              <Link
                href={navLink.path}
                prefetch
                className={`relative flex flex-col justify-start gap-y-0.5 py-4 ${i === NAV_LINKS.length - 1 ? "" : "border-b border-snow/10"} ${currentPath === navLink.path ? "text-accent" : ""}`}
              >
                <span className="text-2xl">
                  {navLink.label}
                </span>
                <span className="text-xs text-white/50">
                  {navLink.title}
                </span>
                {currentPath === navLink.path && (
                  <>
                    <div className="absolute top-[calc(50%_-_4px)] right-3 aspect-square w-3 rounded-full bg-accent" />
                    <div className="absolute top-[calc(50%_-_4px)] right-3 aspect-square w-3 animate-ping rounded-full bg-accent" />
                  </>
                )}
              </Link>
            </DrawerClose>
          ))}
          <div
            className={`mt-7 mb-1 flex items-center justify-start gap-x-3.5`}
          >
            {CONTACT_SOCIAL_INFO.map(({ url, icon }, i) => (
              <Link
                key={i}
                href={url}
                prefetch
                target="_blank"
                className="grid aspect-square w-8 scale-[1.3] place-items-center text-snow/60 transition-all duration-300 hover:text-accent"
              >
                {icon}
              </Link>
            ))}
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  );
}
