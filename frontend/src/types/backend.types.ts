export type LeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "CLOSED";

export type ConsultationStatus = "NEW" | "CONTACTED" | "SCHEDULED" | "QUALIFIED" | "CONVERTED" | "CLOSED";

export type JobApplicationStatus =
  | "APPLIED"
  | "UNDER_REVIEW"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "SELECTED"
  | "REJECTED";

export type TalentStatus = "NEW" | "INDEXED" | "CONTACTED" | "MATCHED" | "INACTIVE";

export const LEAD_STATUS_OPTIONS: Record<string, { value: string; label: string }[]> = {
  contact: [
    { value: "NEW", label: "NEW" },
    { value: "CONTACTED", label: "CONTACTED" },
    { value: "QUALIFIED", label: "QUALIFIED" },
    { value: "CONVERTED", label: "CONVERTED" },
    { value: "CLOSED", label: "CLOSED" },
  ],
  consultation: [
    { value: "NEW", label: "NEW" },
    { value: "CONTACTED", label: "CONTACTED" },
    { value: "SCHEDULED", label: "SCHEDULED" },
    { value: "QUALIFIED", label: "QUALIFIED" },
    { value: "CONVERTED", label: "CONVERTED" },
    { value: "CLOSED", label: "CLOSED" },
  ],
  jobApplication: [
    { value: "APPLIED", label: "APPLIED" },
    { value: "UNDER_REVIEW", label: "UNDER REVIEW" },
    { value: "SHORTLISTED", label: "SHORTLISTED" },
    { value: "INTERVIEW", label: "INTERVIEW" },
    { value: "SELECTED", label: "SELECTED" },
    { value: "REJECTED", label: "REJECTED" },
  ],
  talent: [
    { value: "NEW", label: "NEW" },
    { value: "INDEXED", label: "INDEXED" },
    { value: "CONTACTED", label: "CONTACTED" },
    { value: "MATCHED", label: "MATCHED" },
    { value: "INACTIVE", label: "INACTIVE" },
  ],
};

/**
 * Standard API Response envelope structure
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
  meta?: PaginationMeta;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/**
 * Query parameters for list/search endpoints
 */
export interface PaginationQuery {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface ContactLeadFilterQuery extends PaginationQuery {
  status?: LeadStatus;
  service?: string;
}

export interface ConsultationLeadFilterQuery extends PaginationQuery {
  status?: LeadStatus;
  educationRequirement?: string;
}

export interface JobApplicationFilterQuery extends PaginationQuery {
  status?: JobApplicationStatus;
  jobId?: string;
}

export interface TalentLeadFilterQuery extends PaginationQuery {
  status?: TalentStatus;
  skill?: string;
}

/**
 * Lead & Application Status Update payloads
 */
export interface UpdateLeadStatusDto {
  status: LeadStatus;
  notes?: string;
}

export interface UpdateApplicationStatusDto {
  status: JobApplicationStatus;
  internalNotes?: string;
}

export interface UpdateTalentStatusDto {
  status: TalentStatus;
  internalNotes?: string;
}
