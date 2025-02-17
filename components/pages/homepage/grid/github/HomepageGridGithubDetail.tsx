// types
import { type ReactNode } from "react";

export default function HomepageGridGithubDetail({
  label,
  value,
  icon
}: {
  label: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center justify-start gap-x-1.5">
      {icon}
      <span>
        <span className="font-medium text-snow/95">{`${value} `}</span>
        <span>{label}</span>
      </span>
    </div>
  );
}
