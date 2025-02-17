// icons
import { Diamond } from "lucide-react";
import MongoDB from "@/icons/MongoDB";
import NextJS from "@/icons/NextJS";

export default function HomepageGridSummaryProjectPreview() {
  return (
    <div className="absolute bottom-0 left-[18%] grid h-[190px] w-full text-snow/80 *:col-start-1 *:row-start-1 sm:left-1/2 sm:h-[45%] sm:w-1/2">
      <div className="z-10 h-full w-full bg-matte [mask-image:radial-gradient(70%_80%_at_15%_10%,transparent_30%,white)] sm:bg-[#0B0C0D] sm:[mask-image:radial-gradient(80%_90%_at_15%_10%,transparent_30%,white)]" />
      <div className="grid auto-rows-min grid-cols-[1fr_3fr] gap-x-3 gap-y-[3px] rounded-tl-[14px] border-t border-l border-snow/20 bg-smoke/35 p-4 text-xs ring-[0.5px] ring-snow/10 ring-offset-[6px] ring-offset-[#0B0C0D] sm:bg-smoke/50">
        <div className="col-span-4 pb-1.5 text-base">
          {"Website Insights"}
        </div>
        <div className="text-[11px] text-snow/35">
          Package
        </div>
        <div className="col-span-3 flex flex-wrap items-center justify-start gap-1 pb-1 text-[11px]">
          <span>Some job</span>
        </div>
        <div className="text-[11px] text-snow/35">
          Resources
        </div>
        <div className="col-span-3 flex flex-wrap items-center justify-start gap-1 text-[10px]">
          <div className="flex items-center justify-center gap-x-1 rounded-[5px] bg-smoke px-1.5 py-1 text-snow/80 *:leading-none">
            <NextJS
              width={15}
              height={15}
            />
            <span>{"NextJS"}</span>
          </div>
          <div className="flex items-center justify-center gap-x-1 rounded-[5px] bg-smoke px-1.5 py-1 text-snow/80 *:leading-none">
            <MongoDB
              width={15}
              height={15}
            />
            <span>{"MongoDB"}</span>
          </div>
        </div>
        <div className="text-[11px] text-snow/35">
          Progress
        </div>
        <div className="col-span-3 flex translate-y-0.5 flex-col justify-start gap-0.5">
          <div className="flex items-center justify-start gap-x-1">
            <Diamond
              width={10}
              height={10}
              strokeWidth={2.5}
              className="fill-purple-500 stroke-purple-500"
            />
            <span className="text-[10px]">
              API progression
            </span>
            <span className="text-[10px] font-light text-snow/70">
              100%
            </span>
          </div>
          <div className="flex items-center justify-start gap-x-1">
            <Diamond
              width={10}
              height={10}
              strokeWidth={2.5}
              className="fill-purple-500 stroke-purple-500"
            />
            <span className="text-[10px]">
              Backend deployemnt
            </span>
            <span className="text-[10px] font-light text-snow/70">
              100%
            </span>
          </div>
          <div className="flex items-center justify-start gap-x-1">
            <Diamond
              width={10}
              height={10}
              strokeWidth={2.5}
              className="stroke-amber-500 *:tracking-wide"
            />
            <span className="text-[10px]">
              Types and Aggregations
            </span>
            <span className="text-[10px] font-light text-snow/70">
              53% of 100%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
