// icons
import {
  CodeXml,
  EarthLock,
  Linkedin,
  Lock,
  Mail,
  Smartphone
} from "lucide-react";
import WhatsApp from "@/icons/whatsApp";

// constants
import { ABOUT_ROUTE, PROJECTS_ROUTE } from "../routes";
import {
  COUNTRY_CODE,
  MAIL,
  MOBILE_NUMBER
} from "../contact";
import { LINKEDIN } from "../info/social";

// utils
import {
  createMailUrl,
  createWhatsAppUrl
} from "@/utils/createContactUrl";

// types
import { ContactInfo } from "@/types/contact";
import { Link } from "@/types/link";
import { HighlightedText } from "@/types/text";
import { ServiceOption } from "@/types/service";

export const HOMEPAGE_TITLE: string =
  "Crafting Modern Web Apps with ReactJS";

export const HOMEPAGE_DESCRIPTION: string =
  "I'm Abhishek Biswas, ReactJS Developer with 6+ years of experience. Specializing in scalable, high-performance web apps and clean, maintainable code.";

export const HOMEPAGE_PRIMARY_BUTTON: Link = {
  label: "My Projects",
  path: PROJECTS_ROUTE,
  title: "my projects"
};

export const HOMEPAGE_SECONDARY_BUTTON: Link = {
  label: "About Me",
  path: ABOUT_ROUTE,
  title: "more about me"
};

export const HOMEPAGE_GRID_SUMMARY_DESCRIPTION: HighlightedText =
  [
    { text: "I'm a ", highlight: false },
    { text: "tech-stack flexible SDE", highlight: true },
    { text: " having ", highlight: false },
    { text: "1.5 years", highlight: true },
    {
      text: " of industry experience in building, deploying, maintaining ",
      highlight: false
    },
    { text: "scalable and fast", highlight: true },
    { text: " servers and softwares", highlight: false }
  ];

export const HOMEPAGE_GRID_SUMMARY_KEY_POINTS: string[] = [
  "Edge servers with caching",
  "Build on today's tech stack",
  "Modern ergonomics UI/UX"
];

export const HOMEPAGE_GRID_SOCIAL_ICONS: ContactInfo[] = [
  {
    label: "WhatsApp",
    url: createWhatsAppUrl({
      countryCode: COUNTRY_CODE,
      number: MOBILE_NUMBER
    }),
    icon: (
      <WhatsApp
        width={21}
        height={21}
      />
    )
  },
  {
    label: "LinkedIn",
    url: LINKEDIN,
    icon: (
      <Linkedin
        width={21}
        height={21}
      />
    )
  }
];

export const HOMEPAGE_GRID_SOCIAL_FOOTER: ContactInfo = {
  label: MAIL,
  url: createMailUrl({
    mail: MAIL
  }),
  icon: (
    <Mail
      width={14}
      height={14}
    />
  )
};

export const HOMEPAGE_GRID_SERVICE_TITLE: string =
  "Get Your Own";

export const HOMEPAGE_GRID_SERVICE_DEFAULT_OPTION_LABEL: string =
  "Service";

export const HOMEPAGE_GRID_SERVICE_OPTIONS: ServiceOption[] =
  [
    {
      label: "Managed Server",
      icon: (
        <EarthLock
          width={28}
          height={28}
        />
      ),
      color: "#A7897A"
    },
    {
      label: "Network Secured",
      icon: (
        <Lock
          width={28}
          height={28}
        />
      ),
      color: "#228B22"
    },
    {
      label: "Scalable Website",
      icon: (
        <CodeXml
          width={28}
          height={28}
        />
      ),
      color: "#98FB98"
    },
    {
      label: "Mobile App",
      icon: (
        <Smartphone
          width={28}
          height={28}
        />
      ),
      color: "#48CAE4"
    }
  ];
