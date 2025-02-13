// constants
import { FULL_NAME } from "@/constants/info/personal";
import { PROFILE_IMAGE_URL } from "@/constants/images";

// components
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      id="logo"
      href={"/"}
      prefetch={false}
      className="relative aspect-square w-[42px] rounded-full border border-snow/10 bg-smoke/70 p-1 transition-all duration-300 hover:border-snow/20 sm:border-smoke"
    >
      <Image
        src={PROFILE_IMAGE_URL}
        alt={FULL_NAME}
        unoptimized
        width={80}
        height={80}
        priority
        loading="eager"
        decoding="sync"
        draggable={false}
        className="h-full w-full rounded-full object-cover object-center"
      />
    </Link>
  );
}
