import { Request, Response } from "express";
import crypto from "crypto";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendSuccess } from "../../utils/apiResponse.js";
import { trackPageView } from "../../services/analytics.service.js";

/**
 * POST /api/track
 * Called by the frontend on every route change. No login required — this is
 * how the Lead Team can "monitor client activity" (which pages a visitor is
 * on, in what order, how long) purely from an anonymous sessionId cookie the
 * frontend generates and sends back on every page view.
 */
export const track = asyncHandler(async (req: Request, res: Response) => {
  const ip = req.ip || req.socket.remoteAddress || "";
  const ipHash = crypto.createHash("sha256").update(ip).digest("hex").slice(0, 16);

  await trackPageView({
    ...req.body,
    ipHash,
    userAgent: req.headers["user-agent"],
  });

  // Beacon calls don't need a body — keep the response tiny.
  return sendSuccess(res, undefined, "ok");
});
