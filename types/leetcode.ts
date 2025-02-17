export type LeetcodeStats = {
  status: "success" | "error";
  ranking: number;
  totalQuestions: number;
  totalSolved: number;
  acceptanceRate: number;
  totalEasy: number;
  easySolved: number;
  totalMedium: number;
  mediumSolved: number;
  totalHard: number;
  hardSolved: number;
};
