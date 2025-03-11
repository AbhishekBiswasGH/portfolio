// utils
import { getDuration } from "@/utils/time";

// components
import Image from "next/image";

// types
import { type TimelineEventDetail } from "@/types/timeline";

export default function HomepageCollaborationTimelineEventDetail({
  side,
  detail: {
    type,
    organization,
    logoUrls,
    location,
    role,
    timeSpan: { from, till },
    techStack
  }
}: {
  side: "left" | "right";
  detail: TimelineEventDetail;
}) {
  const span =
    from.toLocaleString("en-US", {
      month: "short",
      year: "2-digit"
    }) +
    " - " +
    (till.getMonth() === new Date().getMonth()
      ? "Present"
      : till.toLocaleString("en-US", {
          month: "short",
          year: "2-digit"
        }));
  const duration = getDuration({
    start: from,
    end: till
  });

  return (
    <div
      className={`col-span-2 flex flex-col gap-2 py-2 ${side === "left" ? "items-start" : "items-end"}`}
    >
      <div
        className={`grid w-[85%] rounded-2xl bg-snow/5 pt-3.5 pb-4 text-sm sm:w-fit sm:max-w-[70%] ${side === "left" ? "grid-cols-[28px_1fr] pr-6 pl-3.5" : "grid-cols-[1fr_28px] pr-3.5 pl-6 *:text-right"} auto-rows-min gap-x-3 ${side === "right" && "items-end"}`}
      >
        <div
          className={`relative row-span-5 aspect-square self-start ${side === "right" && "col-start-2"}`}
        >
          <Image
            src={logoUrls[0]}
            alt={organization}
            width={40}
            height={40}
            unoptimized
            draggable={false}
            className="h-full w-full object-contain object-center"
          />
        </div>
        <span className="text-base">{role}</span>
        <span className="mb-1.5 text-xs text-accent/60">
          {organization}
        </span>
        <span className="text-xs text-snow/50">
          {`${span} • ${duration}`}
        </span>
        <span className="text-xs text-snow/50">
          {`${location} • ${type}`}
        </span>
        <section
          className={`flex flex-wrap items-center gap-2 pt-2 ${side === "left" ? "justify-start" : "justify-end"}`}
        >
          {techStack.map((tech) => tech)}
        </section>
      </div>
    </div>
  );
}
