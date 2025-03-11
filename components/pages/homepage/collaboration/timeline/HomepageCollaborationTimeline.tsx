// components
import HomepageCollaborationTimelineDialog from "./HomepageCollaborationTimelineDialog";
import HomepageCollaborationTimelineDrawer from "./HomepageCollaborationTimelineDrawer";

export default function HomepageCollaborationTimeline() {
  return (
    <div className="z-10 grid py-12">
      <div className="group flex items-center justify-center transition-all duration-500 hover:backdrop-blur-md">
        <HomepageCollaborationTimelineDialog />
        <HomepageCollaborationTimelineDrawer />
      </div>
    </div>
  );
}
