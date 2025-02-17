// constants
import { FOOTER_LINKS } from "@/constants/footerLinks";

// components
import FooterLink from "./FooterLink";

export default function FooterLinks() {
  return (
    <div
      className={`flex items-center justify-start gap-5 font-medium *:transition-all *:duration-300 sm:text-snow/80`}
    >
      {FOOTER_LINKS.map((footerLink, i) => (
        <FooterLink
          key={i}
          footerLink={footerLink}
        />
      ))}
    </div>
  );
}
