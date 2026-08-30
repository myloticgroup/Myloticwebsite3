import { VisitorSession } from "../models/visitorSession.model.js";
import { PageView } from "../models/pageView.model.js";

export interface TrackEventInput {
  sessionId: string;
  page: string;
  title?: string;
  referrer?: string;
  device?: "desktop" | "mobile" | "tablet" | "unknown";
  ipHash?: string;
  userAgent?: string;
}

/** Upserts the session (first-touch vs repeat visit) and logs the page view. */
export async function trackPageView(input: TrackEventInput) {
  const session = await VisitorSession.findOneAndUpdate(
    { sessionId: input.sessionId },
    {
      $setOnInsert: {
        landingPage: input.page,
        referrer: input.referrer,
        device: input.device,
        ipHash: input.ipHash,
        userAgent: input.userAgent,
        firstSeenAt: new Date(),
      },
      $set: { lastSeenAt: new Date() },
      $inc: { pageViewCount: 1 },
    },
    { upsert: true, new: true }
  );

  await PageView.create({ sessionId: input.sessionId, page: input.page, title: input.title });

  return session;
}

/** Lead Team dashboard: high-level overview numbers. */
export async function getAnalyticsOverview(sinceHours = 24) {
  const since = new Date(Date.now() - sinceHours * 60 * 60 * 1000);

  const [activeSessions, totalPageViews, topPages, convertedSessions] = await Promise.all([
    VisitorSession.countDocuments({ lastSeenAt: { $gte: since } }),
    PageView.countDocuments({ occurredAt: { $gte: since } }),
    PageView.aggregate([
      { $match: { occurredAt: { $gte: since } } },
      { $group: { _id: "$page", views: { $sum: 1 } } },
      { $sort: { views: -1 } },
      { $limit: 10 },
    ]),
    VisitorSession.countDocuments({ lastSeenAt: { $gte: since }, isConvertedToLead: true }),
  ]);

  return { activeSessions, totalPageViews, topPages, convertedSessions };
}

/** Lead Team "monitor this specific visitor" drill-down: full journey, in order. */
export async function getSessionJourney(sessionId: string) {
  const session = await VisitorSession.findOne({ sessionId });
  const pageViews = await PageView.find({ sessionId }).sort({ occurredAt: 1 });
  return { session, pageViews };
}

/** Currently-browsing visitors (active in the last N minutes) — the "who's on our site right now" view. */
export async function getLiveVisitors(activeWithinMinutes = 5) {
  const since = new Date(Date.now() - activeWithinMinutes * 60 * 1000);
  return VisitorSession.find({ lastSeenAt: { $gte: since } }).sort({ lastSeenAt: -1 });
}
