export default function HomepageCollaborationTimelineEventMonthRight({
  month
}: {
  month: string;
}) {
  return (
    <>
      <div className="relative grid items-start justify-center">
        <span className="z-10 translate-y-3 bg-matte py-1.5 text-sm text-snow/70">
          {month}
        </span>
        <div className="absolute top-0 left-0 h-full w-1/2 border-r-2 border-snow/10" />
      </div>
    </>
  );
}
