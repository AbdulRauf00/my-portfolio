export type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools';

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon: string;
  description: string;
  tag: string;
  highlight?: boolean;
}

export type ProjectCategory = 'all' | 'business' | 'landing-page' | 'dashboard' | 'conversion';

export interface Project {
  id: string;
  title: string;
  category: 'business' | 'landing-page' | 'dashboard' | 'conversion';
  categoryLabel: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
  highlights?: string[];
  deliverables?: string[];
}

export interface Service {
  id: string;
  index: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  deliverables: string[];
  bestFor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export interface WhyChooseMeItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}
