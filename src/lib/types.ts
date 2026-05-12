// Shared TypeScript types for the website
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  process: string;
  techStack: string[];
  challenges: string[];
  outcome: string;
  image?: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Summer {
  id: string;
  year: number;
  title: string;
  description: string;
  theme: string;
  projects?: Project[];
  memories?: string[];
}

export interface SectionConfig {
  id: string;
  title: string;
  description: string;
  emoji?: string;
}
