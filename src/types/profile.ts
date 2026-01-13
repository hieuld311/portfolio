export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  name: string;
  github: string;
  techStack: string[];
  highlights: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  details: string;
}

export interface ProfileData {
  key: "web" | "android";
  displayTitle: string;
  role: string;
  contact: ContactInfo;
  summary: string;
  skills: SkillGroup[];
  experience?: Experience[];
  projects: Project[];
  education: Education;
  certifications?: {
    name: string;
    issuer: string;
    date: string;
    link: string;
  }[];
}
