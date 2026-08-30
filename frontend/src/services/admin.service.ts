import { apiClient } from "./api-client";
import { ApiResponse } from "@/types/auth.types";

export type AdminContentResource =
  | "solutions"
  | "case-studies"
  | "testimonials"
  | "blog"
  | "jobs"
  | "team";

export async function getContentListApi(
  resource: AdminContentResource,
  page = 1,
  limit = 20
): Promise<ApiResponse<any[]>> {
  return apiClient<any[]>(`/api/admin/content/${resource}?page=${page}&limit=${limit}`, { method: "GET" });
}

export async function getContentItemApi(
  resource: AdminContentResource,
  id: string
): Promise<ApiResponse<any>> {
  return apiClient(`/api/admin/content/${resource}/${id}`, { method: "GET" });
}

export async function createContentItemApi(
  resource: AdminContentResource,
  data: any
): Promise<ApiResponse<any>> {
  return apiClient(`/api/admin/content/${resource}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateContentItemApi(
  resource: AdminContentResource,
  id: string,
  data: any
): Promise<ApiResponse<any>> {
  return apiClient(`/api/admin/content/${resource}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteContentItemApi(
  resource: AdminContentResource,
  id: string
): Promise<ApiResponse<any>> {
  return apiClient(`/api/admin/content/${resource}/${id}`, { method: "DELETE" });
}

export async function uploadMediaApi(file: File): Promise<ApiResponse<{ url: string }>> {
  const formData = new FormData();
  formData.append("file", file);

  return apiClient<{ url: string }>("/api/admin/upload", {
    method: "POST",
    body: formData,
  });
}

export async function getUsersApi(): Promise<ApiResponse<any[]>> {
  return apiClient<any[]>("/api/admin/users", { method: "GET" });
}

export async function createUserApi(userData: {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "LEAD_TEAM";
}): Promise<ApiResponse<any>> {
  return apiClient("/api/admin/users", {
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export async function setUserActiveApi(id: string, isActive: boolean): Promise<ApiResponse<any>> {
  return apiClient(`/api/admin/users/${id}/active`, {
    method: "PATCH",
    body: JSON.stringify({ isActive }),
  });
}
