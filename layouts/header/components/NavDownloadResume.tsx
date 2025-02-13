// icons
import { ArrowDownToLine } from "lucide-react";

// constants
import {
  RESUME_NAME,
  RESUME_PATH
} from "@/constants/files";

// components
import Link from "next/link";

export default function NavDownloadResume() {
  return (
    <div className="flex items-center justify-end gap-x-4 max-sm:hidden">
      <Link
        href={RESUME_PATH}
        download={`${RESUME_NAME}.pdf`}
        target="_blank"
        className="group flex items-center rounded-full border border-snow/5 bg-smoke/30 text-sm font-medium text-snow/90 backdrop-blur-sm transition-all duration-300 *:relative *:flex *:h-10 *:items-center hover:bg-smoke/50 max-sm:hidden"
      >
        <span className="px-[17px]">
          <ArrowDownToLine
            width={17}
            height={17}
          />
        </span>
        <span className="w-0 -translate-y-px overflow-hidden transition-all duration-300 group-hover:w-[67px] group-hover:-translate-x-1">
          Resume
        </span>
      </Link>
    </div>
  );
}
