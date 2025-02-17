// components
import HomepageGridProjectData from "./HomepageGridProjectData";

export default function HomepageGridProjectDataList() {
  return (
    <div className="z-10 flex flex-col items-start justify-start gap-y-2.5 px-3 pt-2 pb-7 text-[13px] tracking-wide text-snow/60 *:capitalize sm:px-5 sm:pb-4">
      <HomepageGridProjectData
        label={"industry projects"}
        value={"7"}
      />
      <HomepageGridProjectData
        label={"freelance projects"}
        value={"19"}
      />
      <HomepageGridProjectData
        label={"satisfied clients"}
        value={"9"}
      />
    </div>
  );
}
