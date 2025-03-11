// icons
import { ChevronRight } from "lucide-react";

// components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import HomepageCollaborationTimelineContent from "./HomepageCollaborationTimelineContent";

export default function HomepageCollaborationTimelineDialog() {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="max-sm:hidden"
      >
        <button className="flex scale-50 cursor-pointer items-center justify-center gap-x-1 rounded-full border border-snow/15 bg-snow/5 px-5 py-2 text-sm font-medium opacity-0 transition-all delay-100 duration-300 group-hover:scale-100 group-hover:opacity-100 hover:border-snow/50">
          <span>Check them all</span>
          <ChevronRight
            width={17}
            height={17}
            className="translate-y-px opacity-65"
          />
        </button>
      </DialogTrigger>
      <DialogContent
        className={
          "min-w-fit gap-0 rounded-none border-none bg-transparent p-0 outline-none max-sm:hidden"
        }
      >
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <HomepageCollaborationTimelineContent />
      </DialogContent>
    </Dialog>
  );
}
