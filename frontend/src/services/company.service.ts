import { apiClient } from "./api-client";
import { ApiResponse } from "@/types/auth.types";

export async function getTeamMembersApi(): Promise<ApiResponse<any[]>> {
  return apiClient<any[]>("/api/company/team", { method: "GET" });
}
