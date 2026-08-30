export type LeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "CLOSED";

export type JobApplicationStatus =
  | "APPLIED"
  | "UNDER_REVIEW"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "SELECTED"
  | "REJECTED";

export type TalentStatus = "NEW" | "INDEXED" | "CONTACTED" | "MATCHED" | "INACTIVE";

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
