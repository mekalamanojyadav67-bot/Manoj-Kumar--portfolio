export interface SkillItem {
  name: string;
  category: 'Language' | 'Web' | 'AI & Concept';
  levelName: string;
  percentage: number;
  description: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  language: string;
  level: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  keyConcepts: string[];
  sampleCode: string;
  githubUrl: string;
}

export interface JourneyMilestone {
  step: string;
  title: string;
  period: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  summary: string;
  learnings: string[];
}
