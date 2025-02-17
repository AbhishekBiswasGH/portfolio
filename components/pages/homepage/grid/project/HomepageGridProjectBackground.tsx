// icons
import Globe from "@/icons/Globe";

export default function HomepageGridProjectBackground() {
  return (
    <div className="pointer-events-none absolute right-0 bottom-0 h-fit w-full overflow-hidden">
      <Globe
        width={100}
        height={100}
        className="h-full w-full object-cover object-center opacity-40 sm:opacity-50"
      />
    </div>
  );
}
