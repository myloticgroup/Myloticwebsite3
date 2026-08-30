import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendSuccess } from "../../utils/apiResponse.js";
import { getAnalyticsOverview, getLiveVisitors, getSessionJourney } from "../../services/analytics.service.js";

/** GET /api/lead-team/analytics/overview?hours=24 — dashboard summary cards. */
export const overview = asyncHandler(async (req: Request, res: Response) => {
  const hours = Number(req.query.hours) || 24;
  const data = await getAnalyticsOverview(hours);
  return sendSuccess(res, data);
});

/** GET /api/lead-team/analytics/live?minutes=5 — "who's on the site right now". */
export const liveVisitors = asyncHandler(async (req: Request, res: Response) => {
  const minutes = Number(req.query.minutes) || 5;
  const data = await getLiveVisitors(minutes);
  return sendSuccess(res, data);
});

/** GET /api/lead-team/analytics/session/:sessionId — one visitor's full page-by-page journey. */
export const sessionJourney = asyncHandler(async (req: Request, res: Response) => {
  const data = await getSessionJourney(String(req.params.sessionId));
  return sendSuccess(res, data);
});
