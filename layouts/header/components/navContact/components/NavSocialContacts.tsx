// contacts
import { CONTACT_SOCIAL_INFO } from "@/constants/contact";

// components
import NavContactButton from "./NavContactButton";

export default function NavSocialContacts() {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {CONTACT_SOCIAL_INFO.map(
        ({ label, url, icon }, i) => (
          <NavContactButton
            key={i}
            label={label}
            url={url}
            icon={icon}
          />
        )
      )}
    </div>
  );
}
