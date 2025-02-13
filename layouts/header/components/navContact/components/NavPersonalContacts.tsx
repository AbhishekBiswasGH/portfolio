// contacts
import { CONTACT_PERSONAL_INFO } from "@/constants/contact";

// components
import NavContactButton from "./NavContactButton";

export default function NavPersonalContacts() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-2.5">
      {CONTACT_PERSONAL_INFO.map(
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
