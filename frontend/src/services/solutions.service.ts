import { apiClient } from "./api-client";
import { ApiResponse } from "@/types/auth.types";

export async function getSolutionsApi(): Promise<ApiResponse<any[]>> {
  return apiClient<any[]>("/api/solutions", { method: "GET" });
}

export async function getSolutionBySlugApi(slug: string): Promise<ApiResponse<any>> {
  return apiClient<any>(`/api/solutions/${slug}`, { method: "GET" });
}
