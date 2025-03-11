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

// components
import Image from "next/image";

// types
import { type ContactInfo } from "@/types/contact";
import { type Link } from "@/types/link";
import { type HighlightedText } from "@/types/text";
import { type ServiceOption } from "@/types/service";
import { type ReactNode } from "react";
import { type Timeline } from "@/types/timeline";
import AWS from "@/icons/AWS";
import GIT from "@/icons/GIT";
import TailwindCSS from "@/icons/TailwindCSS";
import Redis from "@/icons/Redis";
import MongoDB from "@/icons/MongoDB";
import PostgresSQL from "@/icons/PostgresSQL";
import NextJS from "@/icons/NextJS";
import TypeScript from "@/icons/TypeScript";
import NestJS from "@/icons/NestJS";
import Prisma from "@/icons/Prisma";
import JavaScript from "@/icons/JavaScript";
import ReactJS from "@/icons/ReactJS";
import NodeJS from "@/icons/NodeJS";
import ExpressJS from "@/icons/ExpressJS";
import MySQL from "@/icons/MySQL";
import MongooseJS from "@/icons/MongooseJS";
import ReduxJS from "@/icons/ReduxJS";
import CSS from "@/icons/CSS";
import CPlusPlus from "@/icons/CPlusPlus";
import VisualBasic from "@/icons/VisualBasic";

export const HOMEPAGE_HERO_TITLE: string =
  "Crafting Modern Web Apps with ReactJS";

export const HOMEPAGE_HERO_DESCRIPTION: string =
  "I'm Abhishek Biswas, ReactJS Developer with 6+ years of experience. Specializing in scalable, high-performance web apps and clean, maintainable code.";

export const HOMEPAGE_HERO_PRIMARY_BUTTON: Link = {
  label: "My Projects",
  path: PROJECTS_ROUTE,
  title: "my projects"
};

export const HOMEPAGE_HERO_SECONDARY_BUTTON: Link = {
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

export const HOMEPAGE_COLLABORATION_TITLE: string =
  "Collaborations";

export const HOMEPAGE_COLLABORATION_SUB_TITLE: string =
  "Tailored solutions that drive business forward";

export const HOMEPAGE_COLLABORATION_TIMELINE: Timeline = [
  {
    year: 2024,
    events: [
      {
        month: "Feb",
        details: [
          {
            type: "full-time",
            organization: "Webdenso",
            location: "Kolkata",
            logoUrls: [
              "/images/collaborators/webdenso.webp"
            ],
            role: "Fullstack Developer",
            timeSpan: {
              from: new Date("2024-02-01"),
              till: new Date()
            },
            techStack: [
              <TypeScript
                key={"typescript"}
                width={15}
                height={15}
              />,
              <NextJS
                key={"next-js"}
                width={15}
                height={15}
              />,
              <NestJS
                key={"nest-js"}
                width={15}
                height={15}
              />,
              <Prisma
                key={"prisma"}
                width={15}
                height={15}
              />,
              <PostgresSQL
                key={"postgres-sql"}
                width={15}
                height={15}
              />,
              <MongooseJS
                key={"mongoose-js"}
                width={25}
                height={25}
              />,
              <MongoDB
                key={"mongodb"}
                width={15}
                height={15}
              />,
              <Redis
                key={"redis"}
                width={15}
                height={15}
              />,
              <TailwindCSS
                key={"tailwind-css"}
                width={15}
                height={15}
              />,
              <GIT
                key={"git"}
                width={15}
                height={15}
              />,
              <AWS
                key={"aws"}
                width={20}
                height={20}
              />
            ]
          }
        ]
      }
    ]
  },
  {
    year: 2023,
    events: [
      {
        month: "May",
        details: [
          {
            type: "freelance",
            organization: "Upwork",
            location: "Remote",
            logoUrls: ["/images/collaborators/upwork.webp"],
            role: "Fullstack Developer",
            timeSpan: {
              from: new Date("2023-05-01"),
              till: new Date("2023-11-01")
            },
            techStack: [
              <JavaScript
                key={"javascript"}
                width={15}
                height={15}
              />,
              <TypeScript
                key={"typescript"}
                width={15}
                height={15}
              />,
              <ReactJS
                key={"react-js"}
                width={15}
                height={15}
              />,
              <NodeJS
                key={"node-js"}
                width={15}
                height={15}
              />,
              <ExpressJS
                key={"express-js"}
                width={15}
                height={15}
              />,
              <MySQL
                key={"my-sql"}
                width={15}
                height={15}
              />,
              <TailwindCSS
                key={"tailwind-css"}
                width={15}
                height={15}
              />,
              <GIT
                key={"git"}
                width={15}
                height={15}
              />
            ]
          }
        ]
      },
      {
        month: "Nov",
        details: [
          {
            type: "freelance",
            organization: "Upwork",
            location: "Remote",
            logoUrls: ["/images/collaborators/upwork.webp"],
            role: "Fullstack Developer",
            timeSpan: {
              from: new Date("2023-11-01"),
              till: new Date("2024-02-01")
            },
            techStack: [
              <TypeScript
                key={"typescript"}
                width={15}
                height={15}
              />,
              <NextJS
                key={"next-js"}
                width={15}
                height={15}
              />,
              <ReduxJS
                key={"redux-js"}
                width={15}
                height={15}
              />,
              <MongooseJS
                key={"mongoose-js"}
                width={15}
                height={15}
              />,
              <MongoDB
                key={"mongodb"}
                width={15}
                height={15}
              />,
              <Redis
                key={"redis"}
                width={15}
                height={15}
              />,
              <TailwindCSS
                key={"tailwind-css"}
                width={15}
                height={15}
              />,
              <GIT
                key={"git"}
                width={15}
                height={15}
              />
            ]
          }
        ]
      }
    ]
  },
  {
    year: 2022,
    events: [
      {
        month: "Jul",
        details: [
          {
            type: "freelance",
            organization: "Upwork",
            location: "Remote",
            logoUrls: ["/images/collaborators/upwork.webp"],
            role: "Frontend Developer",
            timeSpan: {
              from: new Date("2022-07-01"),
              till: new Date("2023-05-01")
            },
            techStack: [
              <JavaScript
                key={"javascript"}
                width={15}
                height={15}
              />,
              <ReactJS
                key={"react-js"}
                width={15}
                height={15}
              />,
              <CSS
                key={"css"}
                width={15}
                height={15}
              />,
              <GIT
                key={"git"}
                width={15}
                height={15}
              />
            ]
          }
        ]
      }
    ]
  },
  {
    year: 2021,
    events: [
      {
        month: "Aug",
        details: [
          {
            type: "part-time",
            organization: "IDA Business Solutions Pvt Ltd",
            location: "Remote",
            logoUrls: ["/images/collaborators/ida.webp"],
            role: "Software Developer",
            timeSpan: {
              from: new Date("2021-08-01"),
              till: new Date("2022-07-01")
            },
            techStack: [
              // "3D Experience",
              // "CATIA",
              <VisualBasic
                key={"vb"}
                width={20}
                height={20}
              />,
              <CPlusPlus
                key={"c++"}
                width={15}
                height={15}
              />
            ]
          }
        ]
      }
    ]
  },
  {
    year: 2018,
    events: [
      {
        month: "Aug",
        details: [
          {
            type: "full-time",
            organization: "IDA Business Solutions Pvt Ltd",
            location: "Remote",
            logoUrls: ["/images/collaborators/ida.webp"],
            role: "Software Developer",
            timeSpan: {
              from: new Date("2018-08-01"),
              till: new Date("2021-08-01")
            },
            techStack: [
              // "3D Experience",
              // "CATIA",
              <VisualBasic
                key={"vb"}
                width={20}
                height={20}
              />,
              <CPlusPlus
                key={"c++"}
                width={15}
                height={15}
              />
            ]
          }
        ]
      }
    ]
  },
  {
    year: 2017,
    events: [
      {
        month: "Sep",
        details: [
          {
            type: "freelance",
            organization: "Fiverr",
            location: "Remote",
            logoUrls: ["/images/collaborators/fiverr.webp"],
            role: "Software Developer",
            timeSpan: {
              from: new Date("2017-09-01"),
              till: new Date("2018-08-01")
            },
            techStack: [
              <VisualBasic
                key={"vb"}
                width={20}
                height={20}
              />
            ]
          }
        ]
      }
    ]
  }
];

export const HOMEPAGE_COLLABORATION_COLLABORATORS: ReactNode[] =
  [
    <Image
      key={"giftlaya"}
      src={"/images/collaborators/giftlaya.webp"}
      alt="giftlaya"
      width={300}
      height={200}
      unoptimized
      draggable="false"
      className="h-full w-full object-contain object-center"
    />,
    <Image
      key={"balloondekor"}
      src={"/images/collaborators/balloondekor.webp"}
      alt="balloondekor"
      width={300}
      height={200}
      unoptimized
      draggable="false"
      className="h-full w-full object-contain object-center"
    />,
    <Image
      key={"7eventzz"}
      src={"/images/collaborators/7eventzz.webp"}
      alt="7eventzz"
      width={300}
      height={200}
      unoptimized
      draggable="false"
      className="h-full w-full object-contain object-center"
    />,
    <Image
      key={"webdenso"}
      src={"/images/collaborators/webdenso.webp"}
      alt="webdenso"
      width={300}
      height={200}
      unoptimized
      draggable="false"
      className="h-full w-full object-contain object-center"
    />,
    <Image
      key={"hero"}
      src={"/images/collaborators/hero.webp"}
      alt="hero"
      width={300}
      height={200}
      unoptimized
      draggable="false"
      className="h-full w-full object-contain object-center"
    />,
    <Image
      key={"dassault"}
      src={"/images/collaborators/dassault.webp"}
      alt="dassault"
      width={300}
      height={200}
      unoptimized
      draggable="false"
      className="h-full w-full object-contain object-center"
    />,
    <Image
      key={"ida"}
      src={"/images/collaborators/ida.webp"}
      alt="ida"
      width={300}
      height={200}
      unoptimized
      draggable="false"
      className="h-full w-full object-contain object-center"
    />
  ];
