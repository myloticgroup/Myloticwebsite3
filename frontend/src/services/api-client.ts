import { apiUrl } from "@/lib/api-config";
import { ApiResponse } from "@/types/auth.types";

let memoryToken: string | null = localStorage.getItem("mylotic_access_token");

export function setAccessToken(token: string | null) {
  memoryToken = token;
  if (token) {
    localStorage.setItem("mylotic_access_token", token);
  } else {
    localStorage.removeItem("mylotic_access_token");
  }
}

export function getAccessToken(): string | null {
  return memoryToken || localStorage.getItem("mylotic_access_token");
}

interface FetchOptions extends RequestInit {
  skipAuth?: boolean;
  isRetry?: boolean;
}

export async function apiClient<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const { skipAuth = false, isRetry = false, headers = {}, ...customConfig } = options;

  const requestHeaders: Record<string, string> = {
    ...((headers as Record<string, string>) || {}),
  };

  if (!(customConfig.body instanceof FormData) && !requestHeaders["Content-Type"]) {
    requestHeaders["Content-Type"] = "application/json";
  }

  const token = getAccessToken();
  if (token && !skipAuth) {
    requestHeaders["Authorization"] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...customConfig,
    headers: requestHeaders,
    credentials: "include", // Required for HttpOnly refresh cookies
  };

  const url = endpoint.startsWith("http") ? endpoint : apiUrl(endpoint);

  try {
    let response = await fetch(url, config);

    // Attempt token refresh on 401 Unauthorized if not a retry and not auth login/refresh
    if (
      response.status === 401 &&
      !isRetry &&
      !endpoint.includes("/auth/login") &&
      !endpoint.includes("/auth/refresh")
    ) {
      const refreshed = await refreshAccessToken();
      if (refreshed) {
        requestHeaders["Authorization"] = `Bearer ${getAccessToken()}`;
        response = await fetch(url, { ...config, headers: requestHeaders });
      }
    }

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const error = new Error(data.message || `HTTP error! Status: ${response.status}`);
      (error as any).status = response.status;
      (error as any).data = data;
      throw error;
    }

    return data as ApiResponse<T>;
  } catch (err) {
    console.error(`[API Client Error] ${endpoint}:`, err);
    throw err;
  }
}

export async function refreshAccessToken(): Promise<boolean> {
  try {
    const res = await fetch(apiUrl("/api/auth/refresh"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!res.ok) {
      setAccessToken(null);
      return false;
    }

    const data = await res.json();
    if (data.success && data.data?.accessToken) {
      setAccessToken(data.data.accessToken);
      return true;
    }

    setAccessToken(null);
    return false;
  } catch {
    setAccessToken(null);
    return false;
  }
}
