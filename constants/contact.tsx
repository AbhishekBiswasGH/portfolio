// icons
import { Github, Linkedin, Mail } from "lucide-react";
import WhatsApp from "@/icons/whatsApp";

// constants
import { GITHUB, LINKEDIN } from "./info/social";

// utils
import {
  createMailUrl,
  createWhatsAppUrl
} from "@/utils/createContactUrl";

// types
import { type ContactInfo } from "@/types/contact";

export const COUNTRY_CODE: number = 91;
export const MOBILE_NUMBER: number = 8013623123;
export const MAIL: string =
  "abhishek.biswas.mail@gmail.com";

export const CONTACT_HEADING: string = "Delivering results";
export const CONTACT_ACHIEVEMENTS: string[] = [
  "35+ business projects experience",
  "20+ freelance commissions experience",
  "Expertise in Development & Project Management"
];
export const CONTACT_PERSONAL_INFO: ContactInfo[] = [
  {
    label: "WhatsApp",
    url: createWhatsAppUrl({
      countryCode: COUNTRY_CODE,
      number: MOBILE_NUMBER
    }),
    icon: (
      <WhatsApp
        width={15}
        height={15}
      />
    )
  },
  {
    label: "Mail",
    url: createMailUrl({
      mail: MAIL
    }),
    icon: (
      <Mail
        width={15}
        height={15}
      />
    )
  }
];
export const CONTACT_SOCIAL_INFO: ContactInfo[] = [
  {
    label: "GitHub",
    url: GITHUB,
    icon: (
      <Github
        width={15}
        height={15}
      />
    )
  },
  {
    label: "LinkedIn",
    url: LINKEDIN,
    icon: (
      <Linkedin
        width={15}
        height={15}
      />
    )
  }
];
