export type NavPage = 'home' | 'about' | 'services' | 'work' | 'innovation' | 'process' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  timeline: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web' | 'Mobile' | 'Custom Software' | 'AI & Cloud';
  client: string;
  description: string;
  stats: { label: string; value: string };
  tags: string[];
  imageBg: string;
}

export interface InnovationItem {
  id: string;
  title: string;
  tagline: string;
  status: 'In Production' | 'Active R&D' | 'Experimental';
  description: string;
  highlight: string;
}

export interface ProcessStep {
  step: string;
  duration: string;
  title: string;
  summary: string;
  milestones: string[];
}
