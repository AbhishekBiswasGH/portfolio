// types
import type { ReactNode } from "react";

export type TimelineEventDetail = {
  type:
    | "full-time"
    | "part-time"
    | "freelance"
    | "internship";
  organization: string;
  logoUrls: string[];
  location: string;
  role: string;
  timeSpan: {
    from: Date;
    till: Date;
  };
  techStack: ReactNode[];
};

export type TimelineEvent = {
  month:
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "May"
    | "Jun"
    | "Jul"
    | "Aug"
    | "Sep"
    | "Oct"
    | "Nov"
    | "Dec";
  details: TimelineEventDetail[];
};

export type Timeline = {
  year: number;
  events: TimelineEvent[];
}[];
