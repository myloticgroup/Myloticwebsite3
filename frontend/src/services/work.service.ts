import { apiClient } from "./api-client";
import { ApiResponse } from "@/types/auth.types";

export async function getCaseStudiesApi(): Promise<ApiResponse<any[]>> {
  return apiClient<any[]>("/api/work", { method: "GET" });
}

export async function getCaseStudyBySlugApi(slug: string): Promise<ApiResponse<any>> {
  return apiClient<any>(`/api/work/${slug}`, { method: "GET" });
}

export async function getTestimonialsApi(): Promise<ApiResponse<any[]>> {
  return apiClient<any[]>("/api/testimonials", { method: "GET" });
}
