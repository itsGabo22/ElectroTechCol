export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: IconName;
};

export type Specialty = {
  title: string;
  description: string;
  metric: string;
  icon: IconName;
};

export type TrustMetric = {
  value: string;
  label: string;
};

export type ValueProp = {
  title: string;
  description: string;
  icon: IconName;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Guarantee = {
  title: string;
  description: string;
  icon: IconName;
};

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  avatar: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
};

export type IconName =
  | "bolt"
  | "cpu"
  | "panel"
  | "settings"
  | "repeat"
  | "battery"
  | "sun"
  | "wrench"
  | "shield"
  | "users"
  | "timer"
  | "check"
  | "file"
  | "message"
  | "map"
  | "phone"
  | "mail";
