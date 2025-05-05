export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
  details: {
    overview: string;
    challenges: string;
    solutions: string;
    technologies: string[];
    highlights: string[];
    gallery: string[];
  };
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}