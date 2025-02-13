// icons
import { Github, Linkedin, Mail } from "lucide-react";
import WhatsApp from "@/icons/whatsApp";

// utils
import {
  createMailUrl,
  createWhatsAppUrl
} from "@/utils/createContactUrl";

// types
import { type ContactInfo } from "@/types/contact";

export const countryCode: number = 91;
export const mobileNumber: number = 8013623123;
export const mail: string =
  "abhishek.biswas.mail@gmail.com";
export const gitHub: string =
  "https://github.com/AbhishekBiswasGH";
export const linkedIn: string =
  "https://linkedin.com/in/abhishek-biswas-ld";

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
      countryCode,
      number: mobileNumber
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
      mail
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
    url: gitHub,
    icon: (
      <Github
        width={15}
        height={15}
      />
    )
  },
  {
    label: "LinkedIn",
    url: linkedIn,
    icon: (
      <Linkedin
        width={15}
        height={15}
      />
    )
  }
];
