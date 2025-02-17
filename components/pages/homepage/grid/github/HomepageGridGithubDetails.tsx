// icons
import {
  GitMerge,
  LayoutPanelLeft,
  Star,
  Users
} from "lucide-react";

// components
import HomepageGridGithubDetail from "./HomepageGridGithubDetail";

export default function HomepageGridGithubDetails() {
  return (
    <div className="flex h-full flex-col items-start justify-end gap-y-0.5 px-3 pb-7 text-[13px] tracking-wide text-snow/60 sm:px-5 sm:pb-4">
      <HomepageGridGithubDetail
        label={"projects"}
        value={"33"}
        icon={
          <LayoutPanelLeft
            height={13}
            width={13}
            fill="currentColor"
          />
        }
      />
      <HomepageGridGithubDetail
        label={"stars"}
        value={"0"}
        icon={
          <Star
            height={13}
            width={13}
            fill="currentColor"
          />
        }
      />
      <HomepageGridGithubDetail
        label={"followers"}
        value={"0"}
        icon={
          <Users
            height={13}
            width={13}
            fill="currentColor"
          />
        }
      />
      <HomepageGridGithubDetail
        label={"commits"}
        value={"3.1K"}
        icon={
          <GitMerge
            height={13}
            width={13}
            fill="currentColor"
          />
        }
      />
    </div>
  );
}
