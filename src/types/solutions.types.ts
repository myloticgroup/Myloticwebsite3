export interface SolutionCapability {
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  capabilities: SolutionCapability[];
  technologies: string[];
  deliverables: string[];
  isFeatured: boolean;
}
