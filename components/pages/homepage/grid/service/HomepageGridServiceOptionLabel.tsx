export default function HomepageGridServiceOptionLabel({
  label,
  color,
  isActive
}: {
  label: string;
  color?: string;
  isActive: boolean;
}) {
  return (
    <span
      style={color ? { color } : {}}
      className={`${isActive ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
    >
      {label}
    </span>
  );
}
