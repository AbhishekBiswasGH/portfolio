export default function HomepageGridProjectData({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col justify-start">
      <span>{label}</span>
      <span className="text-lg font-medium text-snow/95">
        {value}
      </span>
    </div>
  );
}
