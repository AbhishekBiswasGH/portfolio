// components
import HomepageCollaborationTimelineEvent from "./HomepageCollaborationTimelineEvent";
import HomepageCollaborationTimelineEventTransitionLeft from "./HomepageCollaborationTimelineEventTransitionLeft";
import HomepageCollaborationTimelineEventTransitionRight from "./HomepageCollaborationTimelineEventTransitionRight";
import HomepageCollaborationTimelineEventTransitionToLeft from "./HomepageCollaborationTimelineEventTransitionToLeft";
import HomepageCollaborationTimelineEventTransitionToRight from "./HomepageCollaborationTimelineEventTransitionToRight";
import HomepageCollaborationTimelineEventYearLeft from "./HomepageCollaborationTimelineEventYearLeft";
import HomepageCollaborationTimelineEventYearRight from "./HomepageCollaborationTimelineEventYearRight";

// types
import { type TimelineEvent } from "@/types/timeline";

export default function HomepageCollaborationTimelineEvents({
  index,
  isFirst,
  isLast,
  year,
  events
}: {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  year: number;
  events: TimelineEvent[];
}) {
  // variables
  const side = index % 2 === 0 ? "left" : "right";

  return (
    <>
      {!isFirst &&
        (side === "left" ? (
          <HomepageCollaborationTimelineEventTransitionToLeft />
        ) : (
          <HomepageCollaborationTimelineEventTransitionToRight />
        ))}
      {side === "left" ? (
        <HomepageCollaborationTimelineEventYearLeft
          year={year}
        />
      ) : (
        <HomepageCollaborationTimelineEventYearRight
          year={year}
        />
      )}
      {events.map(({ month, details }) => {
        return details.map((detail, i) => (
          <HomepageCollaborationTimelineEvent
            key={i}
            side={side}
            month={i ? "" : month}
            detail={detail}
          />
        ));
      })}
      {isLast &&
        (side === "left" ? (
          <HomepageCollaborationTimelineEventTransitionLeft />
        ) : (
          <HomepageCollaborationTimelineEventTransitionRight />
        ))}
    </>
  );
}
