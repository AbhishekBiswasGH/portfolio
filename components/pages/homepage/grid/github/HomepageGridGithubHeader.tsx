// icons
import { ExternalLink, Github } from "lucide-react";

export default function HomepageGridGithubHeader() {
  return (
    <div className="flex items-center justify-center text-[11px] tracking-wider text-snow/40 sm:justify-between sm:pr-5 sm:pl-6 sm:text-xs sm:text-snow/40">
      <div className="flex items-center justify-start gap-x-1.5 font-light uppercase transition-colors duration-300 group-hover:text-snow">
        <Github
          width={14}
          height={14}
        />
        <span>{"Github"}</span>
      </div>
      <ExternalLink
        width={15}
        height={15}
        className="text-snow/15 transition-all duration-300 group-hover:text-snow/60 max-sm:hidden"
      />
    </div>
  );
}
