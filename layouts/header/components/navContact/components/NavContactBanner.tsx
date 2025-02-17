// components
import Image from "next/image";

export default function NavContactBanner() {
  return (
    <div className="relative overflow-hidden bg-latex">
      <Image
        src={"/images/contact-banner.webp"}
        alt={"contact banner"}
        width={100}
        height={500}
        decoding="async"
        unoptimized
        draggable={false}
        className="h-full w-full object-cover object-right"
      />
    </div>
  );
}
