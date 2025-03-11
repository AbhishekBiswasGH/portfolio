export default function HomepageCollaborationSeparator() {
  return (
    <>
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent sm:hidden sm:w-[700px]" />
      <div className="absolute top-0 left-0 h-40 w-full bg-accent/10 [mask-image:radial-gradient(50%_80%_at_top_center,white,transparent)] sm:hidden sm:w-[650px]" />
    </>
  );
}
