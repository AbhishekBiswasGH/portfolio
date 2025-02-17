// components
import FooterLinks from "./components/FooterLinks";
import FooterCopyright from "./components/FooterCopyright";

export default function Footer() {
  return (
    <footer
      className={`flex w-device justify-center *:w-full *:max-w-extent *:border-t *:border-snow/10 *:pt-10 *:pb-16`}
    >
      <div className="flex items-center justify-start bg-matte px-4 text-sm max-sm:flex-col max-sm:gap-y-7 sm:justify-between sm:px-12 lg:px-12">
        <FooterLinks />
        <FooterCopyright />
      </div>
    </footer>
  );
}
