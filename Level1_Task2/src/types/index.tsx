export interface HeroData {
  greeting: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  ctaLeft: string;
  ctaRight: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface AboutData {
  bio: string;
  education: EducationItem[];
  skills: SkillItem[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: "HTML/CSS" | "JavaScript" | "React"; 
  tags: string[];
  image: string;
  codeLink: string;
  liveLink: string;
}

export interface ContactData {
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}

// ԱՀԱ ՍԱ Է ԳԼԽԱՎՈՐ ՏԻՊԸ, ՈՐԸ ՓՆՏՐՈՒՄ Է ՄԵՐ ՆԱԽԱԳԻԾԸ
export interface PortfolioDataType {
  hero: HeroData;
  about: AboutData;
  projects: ProjectItem[];
  contact: ContactData;
}