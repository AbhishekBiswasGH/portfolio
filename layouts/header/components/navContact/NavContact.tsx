// components
import NavContactBanner from "./components/NavContactBanner";
import NavContactContent from "./components/NavContactContent";

export default function NavContact() {
  return (
    <section className="grid h-fit grid-cols-[200px_400px] overflow-hidden rounded-t-3xl border border-smoke bg-matte sm:rounded-2xl">
      <NavContactBanner />
      <NavContactContent />
    </section>
  );
}
