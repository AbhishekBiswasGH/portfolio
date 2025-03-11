// type
import { type ReactNode } from "react";

export default function HomepageCollaborationCollaborator({
  icon
}: {
  icon: ReactNode;
}) {
  return (
    <div className="collaborator relative overflow-hidden px-7 sm:px-24">
      {icon}
    </div>
  );
}
