export default function HomepageCollaborationTimelineEventTransitionToLeft() {
  return (
    <div className="grid min-h-20 grid-cols-[85px_1fr_85px]">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 h-1/2 w-1/2 rounded-tl-3xl border-t-2 border-l-2 border-snow/10" />
      </div>
      <div className="relative">
        <div className="absolute top-1/2 h-1/2 w-full border-t-2 border-snow/10" />
      </div>
      <div className="relative">
        <div className="absolute top-0.5 left-0 h-1/2 w-1/2 rounded-br-3xl border-r-2 border-b-2 border-snow/10" />
        <div className="absolute top-0 left-0 h-0.5 w-1/2 border-r-2 border-snow/10" />
      </div>
    </div>
  );
}
