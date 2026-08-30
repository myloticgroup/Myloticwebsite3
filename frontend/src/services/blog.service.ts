import { apiClient } from "./api-client";
import { ApiResponse } from "@/types/auth.types";

export async function getBlogPostsApi(): Promise<ApiResponse<any[]>> {
  return apiClient<any[]>("/api/blog", { method: "GET" });
}

export async function getBlogPostBySlugApi(slug: string): Promise<ApiResponse<any>> {
  return apiClient<any>(`/api/blog/${slug}`, { method: "GET" });
}
