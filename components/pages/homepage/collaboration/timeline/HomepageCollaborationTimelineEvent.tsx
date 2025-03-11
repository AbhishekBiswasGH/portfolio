// components
import HomepageCollaborationTimelineEventMonthLeft from "./HomepageCollaborationTimelineEventMonthLeft";
import HomepageCollaborationTimelineEventMonthRight from "./HomepageCollaborationTimelineEventMonthRight";
import HomepageCollaborationTimelineEventDetail from "./HomepageCollaborationTimelineEventDetail";

// types
import { type TimelineEventDetail } from "@/types/timeline";

export default function HomepageCollaborationTimelineEvent({
  side,
  month,
  detail
}: {
  side: "left" | "right";
  month: string;
  detail: TimelineEventDetail;
}) {
  return (
    <div className="grid grid-cols-[85px_1fr_85px]">
      {side === "left" && (
        <HomepageCollaborationTimelineEventMonthLeft
          month={month}
        />
      )}
      <HomepageCollaborationTimelineEventDetail
        side={side}
        detail={detail}
      />
      {side === "right" && (
        <HomepageCollaborationTimelineEventMonthRight
          month={month}
        />
      )}
    </div>
  );
}
