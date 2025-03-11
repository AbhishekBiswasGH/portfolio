export default function HomepageCollaborationTimelineEventYearLeft({
  year
}: {
  year: number;
}) {
  return (
    <div className="grid grid-cols-[85px_1fr_85px]">
      <div className="relative grid items-start justify-center">
        <span className="z-10 bg-matte py-2.5 text-xl font-medium text-accent">
          {year}
        </span>
        <div className="absolute top-0 left-1/2 h-full w-1/2 border-l-2 border-snow/10" />
      </div>
      <div className="col-span-2" />
    </div>
  );
}
