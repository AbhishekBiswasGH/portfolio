// components
import HomepageCollaborationCollaborators from "./HomepageCollaborationCollaborators";
import HomepageCollaborationSeparator from "./HomepageCollaborationSeparator";
import HomepageCollaborationSubTitle from "./HomepageCollaborationSubTitle";
import HomepageCollaborationTimeline from "./timeline/HomepageCollaborationTimeline";
import HomepageCollaborationTitle from "./HomepageCollaborationTitle";

export default function HomepageCollaboration() {
  return (
    <section
      className={
        "flex w-device justify-center *:w-full *:max-w-extent"
      }
    >
      <div
        className={
          "relative flex flex-col items-center justify-center px-4 pb-3 max-sm:pt-20 sm:px-12 lg:px-12"
        }
      >
        <HomepageCollaborationSeparator />
        <HomepageCollaborationTitle />
        <HomepageCollaborationSubTitle />
        <div className="grid *:col-start-1 *:row-start-1">
          <HomepageCollaborationTimeline />
          <HomepageCollaborationCollaborators />
        </div>
      </div>
    </section>
  );
}
