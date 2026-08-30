export type EdTechRequirement =
  | "Corporate Training"
  | "Technical Training"
  | "EdTech Platform"
  | "LMS / Learning Portal"
  | "AI-powered Learning"
  | "Skill Development"
  | "Training Automation"
  | "Other";

export type ConsultationLeadLifecycle =
  | "New"
  | "Contacted"
  | "Consultation Scheduled"
  | "Consultation Completed"
  | "Qualified"
  | "Proposal / Next Step"
  | "Closed";

export interface EdTechConsultationLead {
  id: string;
  source: "EdTech Consultation";
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  location?: string;
  requirement: EdTechRequirement;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  status: ConsultationLeadLifecycle;
  submittedAt: string;
}
