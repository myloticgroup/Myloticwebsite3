import { apiClient } from "./api-client";
import { ApiResponse } from "@/types/backend.types";
import { JobOpening } from "@/types/careers.types";

/**
 * Fetch all published/open jobs from backend CMS
 * GET /api/careers/jobs
 */
export async function getJobsApi(): Promise<ApiResponse<JobOpening[]>> {
  return apiClient<JobOpening[]>("/api/careers/jobs", { method: "GET", skipAuth: true });
}

/**
 * Fetch a single open job by its unique slug from backend CMS
 * GET /api/careers/jobs/:slug
 */
export async function getJobBySlugApi(slug: string): Promise<ApiResponse<JobOpening>> {
  return apiClient<JobOpening>(`/api/careers/jobs/${slug}`, { method: "GET", skipAuth: true });
}

/**
 * Submit job application for a specific open job
 * POST /api/careers/jobs/:jobId/apply
 */
export async function applyToJobApi(
  jobId: string,
  formData: FormData
): Promise<ApiResponse<{ id: string }>> {
  return apiClient<{ id: string }>(`/api/careers/jobs/${jobId}/apply`, {
    method: "POST",
    body: formData,
    skipAuth: true,
  });
}

/**
 * Submit general profile intake for talent network pool
 * POST /api/careers/talent
 */
export async function joinTalentPoolApi(data: {
  fullName: string;
  email: string;
  primarySkill: string;
  phone?: string;
  yearsExperience?: number;
}): Promise<ApiResponse<{ id: string }>> {
  return apiClient<{ id: string }>("/api/careers/talent", {
    method: "POST",
    body: JSON.stringify(data),
    skipAuth: true,
  });
}
