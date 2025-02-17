// types
import { type ReactNode } from "react";

export default function HomepageGridServiceIcon({
  icon,
  color,
  isActive,
  isOtherOptionActive,
  onHover,
  onDescend
}: {
  icon: ReactNode;
  color: string;
  isActive: boolean;
  isOtherOptionActive: boolean;
  onHover: () => void;
  onDescend: () => void;
}) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onMouseOver={onHover}
      onMouseOut={onDescend}
      className={`${isOtherOptionActive ? (isActive ? "" : `opacity-30`) : `opacity-100`} cursor-pointer transition-all duration-300`}
      style={isActive ? { color } : {}}
    >
      {icon}
    </div>
  );
}
