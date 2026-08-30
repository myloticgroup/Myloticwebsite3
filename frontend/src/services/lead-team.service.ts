import { apiClient } from "./api-client";
import { ApiResponse } from "@/types/auth.types";

export interface AnalyticsOverviewData {
  activeSessions: number;
  totalPageViews: number;
  topPages: { _id: string; views: number }[];
  convertedSessions: number;
}

export interface LiveVisitorSession {
  _id: string;
  sessionId: string;
  landingPage: string;
  referrer?: string;
  device?: string;
  lastSeenAt: string;
  firstSeenAt: string;
  pageViewCount: number;
  isConvertedToLead: boolean;
}

export interface PageViewEvent {
  _id: string;
  sessionId: string;
  page: string;
  title?: string;
  occurredAt: string;
}

export interface SessionJourneyData {
  session: LiveVisitorSession | null;
  pageViews: PageViewEvent[];
}

export async function getLeadsApi(
  type = "contact",
  status?: string,
  page = 1,
  limit = 20
): Promise<ApiResponse<any[]>> {
  const query = new URLSearchParams({ type, page: String(page), limit: String(limit) });
  if (status) query.append("status", status);

  return apiClient<any[]>(`/api/lead-team/leads?${query.toString()}`, { method: "GET" });
}

export async function updateLeadStatusApi(
  type: string,
  id: string,
  status: string,
  notes?: string
): Promise<ApiResponse<any>> {
  return apiClient(`/api/lead-team/leads/${type}/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status, notes }),
  });
}

export async function getAnalyticsOverviewApi(hours = 24): Promise<ApiResponse<AnalyticsOverviewData>> {
  return apiClient<AnalyticsOverviewData>(`/api/lead-team/analytics/overview?hours=${hours}`, { method: "GET" });
}

export async function getLiveVisitorsApi(minutes = 5): Promise<ApiResponse<LiveVisitorSession[]>> {
  return apiClient<LiveVisitorSession[]>(`/api/lead-team/analytics/live?minutes=${minutes}`, { method: "GET" });
}

export async function getSessionJourneyApi(sessionId: string): Promise<ApiResponse<SessionJourneyData>> {
  return apiClient<SessionJourneyData>(`/api/lead-team/analytics/session/${sessionId}`, { method: "GET" });
}
