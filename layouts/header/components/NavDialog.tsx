// components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

// types
import { type ReactNode } from "react";

export default function NavDialog({
  label,
  content,
  isFirst,
  isLast
}: {
  label: string;
  content: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className={`max-sm:hidden`}
      >
        <div
          className={`relative pb-px max-sm:hidden ${isFirst ? "pr-4 pl-7" : isLast ? "pr-7 pl-4" : "px-4"} cursor-pointer transition-all duration-300 hover:text-accent`}
        >
          {label}
        </div>
      </DialogTrigger>
      <DialogContent
        className={`min-w-fit gap-0 rounded-none border-none bg-transparent p-0 outline-none`}
      >
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        {content}
      </DialogContent>
    </Dialog>
  );
}
