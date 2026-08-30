import { Request, Response, NextFunction } from "express";
import { verifyAccessToken, AccessTokenPayload } from "../utils/jwt.js";
import { sendError } from "../utils/apiResponse.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- required pattern for augmenting Express's Request type
  namespace Express {
    interface Request {
      user?: AccessTokenPayload;
    }
  }
}

/**
 * Verifies the Bearer access token. Used on every Lead Team / Admin route.
 * Public routes never use this middleware.
 */
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return sendError(res, "Authentication required", 401);
  }

  const token = header.split(" ")[1];
  try {
    req.user = verifyAccessToken(token);
    next();
  } catch {
    return sendError(res, "Invalid or expired session, please log in again", 401);
  }
}
