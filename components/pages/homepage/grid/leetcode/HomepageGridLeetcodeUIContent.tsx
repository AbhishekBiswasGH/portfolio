// type
import { type LeetcodeStats } from "@/types/leetcode";

// requests
async function fetchLeetcodeStats() {
  const url =
    "https://leetcode-stats-api.herokuapp.com/AbhishekBiswasLC";
  const response = await fetch(url, {
    cache: "force-cache",
    next: { tags: ["cache", "leetcode"] }
  });

  const leetcodeStats = await response.json();

  return leetcodeStats.status === "success"
    ? leetcodeStats
    : null;
}

export default async function HomepageGridLeetcodeUIContent() {
  const leetcodeStats: LeetcodeStats | null =
    await fetchLeetcodeStats();

  if (!leetcodeStats) {
    return <></>;
  }

  const data = [
    {
      name: "Easy",
      solved: leetcodeStats?.easySolved || "",
      total: leetcodeStats?.totalEasy || "",
      color: "text-emerald-500"
    },
    {
      name: "Medium",
      solved: leetcodeStats?.mediumSolved || "",
      total: leetcodeStats?.totalMedium || "",
      color: "text-amber-400"
    },
    {
      name: "Hard",
      solved: leetcodeStats?.hardSolved || "",
      total: leetcodeStats?.totalHard || "",
      color: "text-red-500"
    }
  ];

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="flex aspect-square h-full w-full max-w-28 flex-col items-center justify-center rounded-full border-2 border-smoke">
          <span className="text-xs leading-none text-snow/50">
            All
          </span>
          <span className="w-3/4 border-b border-snow/10 text-center text-2xl font-semibold max-sm:py-0.5 sm:pb-[3px]">
            {leetcodeStats.totalSolved}
          </span>
          <span className="pt-1 text-xs font-medium text-snow/40 sm:pt-px">
            {leetcodeStats.totalQuestions}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-center space-y-1 max-sm:pt-3 max-sm:pb-2">
        {data.map(
          ({ name, solved, total, color }, index) => (
            <div
              className="flex items-baseline justify-between text-sm"
              key={index}
            >
              <div className={`${color}`}>{name}</div>
              <div className="">
                {solved}
                <span className="text-[11px] text-snow/50">
                  /{total}
                </span>
              </div>
            </div>
          )
        )}
      </div>
      <div className="pt-3 text-center text-xs text-snow/40 sm:col-span-2">
        {`Acceptance rate: ${leetcodeStats.acceptanceRate}%`}
      </div>
    </>
  );
}
