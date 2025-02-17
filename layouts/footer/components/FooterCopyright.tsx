// constants
import { FULL_NAME } from "@/constants/info/personal";

export default function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <div className="cursor-default text-snow/25">
      &copy; {year} {FULL_NAME}. All rights reserved.
    </div>
  );
}
