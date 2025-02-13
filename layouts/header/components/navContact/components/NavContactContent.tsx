// components
import NavContactAchievements from "./NavContactAchievements";
import NavContactHeading from "./NavContactHeading";
import NavContactSeparator from "./NavContactSeparator";
import NavPersonalContacts from "./NavPersonalContacts";
import NavSocialContacts from "./NavSocialContacts";

export default function NavContactContent() {
  return (
    <div className="flex flex-col justify-start p-6">
      <NavContactHeading />
      <NavContactAchievements />
      <NavPersonalContacts />
      <NavContactSeparator />
      <NavSocialContacts />
    </div>
  );
}
