// components
import HomepagePrimaryButton from "./HomepagePrimaryButton";
import HomepageSecondaryButton from "./HomepageSecondaryButton";

export default function HomepageButtons() {
  return (
    <div className="flex items-center justify-center gap-x-4 pt-6">
      <HomepagePrimaryButton />
      <HomepageSecondaryButton />
    </div>
  );
}
