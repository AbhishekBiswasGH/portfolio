export default function HomepageSeparator() {
  return (
    <div className="pointer-events-none relative -z-0 flex flex-col items-center justify-center py-0">
      <div className="h-40 w-full bg-accent/10 [mask-image:radial-gradient(50%_80%_at_bottom_center,white,transparent)] sm:w-[650px]" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent sm:w-[700px]" />
    </div>
  );
}
