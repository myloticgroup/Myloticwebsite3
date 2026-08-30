export interface CaseStudyMetric {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  services: string[];
  metrics?: CaseStudyMetric[];
  isFeatured: boolean;
  isPublished: boolean;
}
