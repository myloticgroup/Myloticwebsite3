import { Request, Response, NextFunction } from "express";
import { sendRateLimit } from "../utils/api-response.js";

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

export function createRateLimiter(options: {
  windowMs?: number;
  maxRequests?: number;
  message?: string;
  keyPrefix?: string;
}) {
  const windowMs = options.windowMs || 60 * 1000;
  const maxRequests = options.maxRequests || 10;
  const message =
    options.message || "Too many requests. Please wait before submitting again.";
  const keyPrefix = options.keyPrefix || "rl";

  return (req: Request, res: Response, next: NextFunction) => {
    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "127.0.0.1";

    const key = `${keyPrefix}:${ip}`;
    const now = Date.now();
    const entry = rateLimitStore.get(key);

    if (!entry || now > entry.resetTime) {
      rateLimitStore.set(key, {
        count: 1,
        resetTime: now + windowMs,
      });
      res.setHeader("X-RateLimit-Limit", maxRequests);
      res.setHeader("X-RateLimit-Remaining", maxRequests - 1);
      return next();
    }

    if (entry.count >= maxRequests) {
      const retryAfterSec = Math.max(1, Math.ceil((entry.resetTime - now) / 1000));
      res.setHeader("X-RateLimit-Limit", maxRequests);
      res.setHeader("X-RateLimit-Remaining", 0);
      return sendRateLimit(res, message, retryAfterSec);
    }

    entry.count += 1;
    res.setHeader("X-RateLimit-Limit", maxRequests);
    res.setHeader("X-RateLimit-Remaining", maxRequests - entry.count);
    return next();
  };
}

export const publicFormRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 5,
  message: "Submission rate limit exceeded. Please wait 1 minute before submitting again.",
  keyPrefix: "form",
});

export const adminApiRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 60,
  message: "Administrative rate limit exceeded.",
  keyPrefix: "admin",
});
