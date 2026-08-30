export type JobStatus =
  | "Applied"
  | "Under Review"
  | "Shortlisted"
  | "Interview"
  | "Selected"
  | "Rejected";

export interface JobOpening {
  _id?: string;
  id?: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType?: string;
  experienceLevel?: string;
  workplaceType?: string;
  description?: string;
  summary?: string;
  responsibilities?: string[];
  requirements?: string[];
  niceToHave?: string[];
  skills?: string[];
  isOpen: boolean;
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
  postedAt?: string;
}

export interface CandidateApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedInUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  resumeFileName?: string;
  coverNote?: string;
  consentGiven: boolean;
  status: JobStatus;
  submittedAt: string;
}

export interface TalentNetworkLead {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  primarySkills: string[];
  linkedInUrl?: string;
  resumeFileName?: string;
  submittedAt: string;
}
