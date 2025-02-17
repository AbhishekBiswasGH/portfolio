// icons
import { Loader2 } from "lucide-react";

export default function HomepageGridLeetcodeUISkeleton() {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="flex aspect-square h-full w-full max-w-28 animate-pulse flex-col items-center justify-center rounded-full border-2 border-smoke">
          <Loader2
            className="animate-spin text-snow/10"
            width={27}
            height={27}
          />
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-center space-y-3 max-sm:pt-[34px] max-sm:pb-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            className="flex items-baseline justify-between text-sm"
            key={index}
          >
            <div className="h-2 w-full animate-pulse bg-snow/10" />
          </div>
        ))}
      </div>
      <div className="mt-3.5 h-3.5 animate-pulse rounded-full bg-snow/10 text-center text-xs text-snow/40 sm:col-span-2" />
    </>
  );
}
