import { apiClient, setAccessToken } from "./api-client";
import { AuthResponseData, AuthUser, LoginCredentials } from "@/types/auth.types";

export async function loginApi(credentials: LoginCredentials): Promise<{ accessToken: string; user: AuthUser }> {
  const res = await apiClient<AuthResponseData>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    skipAuth: true,
  });

  if (res.success && res.data) {
    setAccessToken(res.data.accessToken);
    return res.data;
  }
  throw new Error(res.message || "Login failed");
}

export async function logoutApi(): Promise<void> {
  try {
    await apiClient("/api/auth/logout", { method: "POST" });
  } finally {
    setAccessToken(null);
  }
}

export async function getMeApi(): Promise<AuthUser> {
  const res = await apiClient<AuthUser>("/api/auth/me", { method: "GET" });
  if (res.success && res.data) {
    return res.data;
  }
  throw new Error(res.message || "Failed to fetch user profile");
}
