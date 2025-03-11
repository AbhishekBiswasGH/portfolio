// constants
import { HOMEPAGE_COLLABORATION_TIMELINE } from "@/constants/pages/homepage";

// components
import HomepageCollaborationTimelineEvents from "./HomepageCollaborationTimelineEvents";

export default function HomepageCollaborationTimelineContent() {
  const length = HOMEPAGE_COLLABORATION_TIMELINE.length;

  return (
    <div className="grid h-[65dvh] grid-cols-1 gap-y-4 rounded-t-3xl border border-snow/10 bg-matte !px-0 pt-6 *:px-6 max-sm:h-[86dvh] sm:w-[600px] sm:rounded-3xl">
      <div className="text-xl max-sm:text-center">
        Timeline
      </div>
      <div className="scrollbar-hide relative flex flex-col justify-start overflow-auto pt-3 max-sm:px-2">
        {HOMEPAGE_COLLABORATION_TIMELINE.map(
          ({ year, events }, i) => (
            <HomepageCollaborationTimelineEvents
              key={i}
              index={i}
              isFirst={!i}
              isLast={i === length - 1}
              year={year}
              events={events}
            />
          )
        )}
      </div>
    </div>
  );
}
