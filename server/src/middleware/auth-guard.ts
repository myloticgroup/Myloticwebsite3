import { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import { sendUnauthorized, sendForbidden } from "../utils/api-response.js";
import { config } from "../config/env.js";

function safeCompare(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a);
    const bufB = Buffer.from(b);
    if (bufA.length !== bufB.length) {
      return false;
    }
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

export function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const adminApiKey = config.adminApiKey;

  const apiKeyHeader = req.headers["x-admin-api-key"] as string | undefined;
  const authHeader = req.headers["authorization"];
  const bearerToken = authHeader?.startsWith("Bearer ")
    ? authHeader.substring(7).trim()
    : undefined;

  const providedKey = apiKeyHeader || bearerToken;

  if (adminApiKey && adminApiKey.trim().length > 0) {
    if (!providedKey) {
      return sendUnauthorized(
        res,
        "Admin authentication required. Please provide X-Admin-Api-Key header."
      );
    }

    if (!safeCompare(providedKey, adminApiKey)) {
      return sendForbidden(res, "Invalid administrator credentials.");
    }

    return next();
  }

  if (config.nodeEnv !== "production") {
    return next();
  }

  return sendUnauthorized(res, "ADMIN_API_KEY not configured on server.");
}
