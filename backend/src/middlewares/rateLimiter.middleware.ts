import rateLimit from "express-rate-limit";

/**
 * Protects public write endpoints (contact/consultation/job-application forms
 * and the analytics beacon) from spam and scraping abuse.
 */
export const publicFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions from this device. Please try again later.",
  },
});

export const trackingLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 60, // generous, since page navigation fires this often
  standardHeaders: true,
  legacyHeaders: false,
});

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many login attempts. Please try again later." },
});
