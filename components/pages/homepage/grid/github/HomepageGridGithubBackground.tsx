// components
import Image from "next/image";

export default function HomepageGridGithubBackground() {
  return (
    <div className="absolute top-10 left-0 h-1/2 w-fit transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 max-sm:opacity-50 max-sm:grayscale sm:top-auto sm:right-0 sm:bottom-0 sm:h-3/4 sm:translate-x-[calc(50%_-_20px)]">
      <Image
        src={"/images/github-contribs.webp"}
        alt=""
        width={300}
        height={300}
        unoptimized
        decoding="async"
        draggable={false}
        className="h-full w-full object-cover object-left"
      />
    </div>
  );
}
