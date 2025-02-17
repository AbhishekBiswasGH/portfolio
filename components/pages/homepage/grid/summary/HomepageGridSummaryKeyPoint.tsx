// icons
import { Check } from "lucide-react";

export default function HomepageGridSummaryKeyPoint({
  keyPoint
}: {
  keyPoint: string;
}) {
  return (
    <>
      <Check
        width={16}
        height={16}
      />
      <span>{keyPoint}</span>
    </>
  );
}
