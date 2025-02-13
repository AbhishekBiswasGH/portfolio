// constants
import { CONTACT_ACHIEVEMENTS } from "@/constants/contact";

export default function NavContactAchievements() {
  return (
    <ul className="mb-2 list-inside list-disc space-y-0.5 text-sm text-white/50">
      {CONTACT_ACHIEVEMENTS.map((achievement, i) => (
        <li key={i}>{achievement}</li>
      ))}
    </ul>
  );
}
