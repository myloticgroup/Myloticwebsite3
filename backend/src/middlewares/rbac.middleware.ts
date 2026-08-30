import { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/apiResponse.js";

export type Role = "ADMIN" | "LEAD_TEAM";

/**
 * Role gate. Use after requireAuth.
 *   authorize(["ADMIN"])                -> admin-only routes (content uploads, user mgmt)
 *   authorize(["ADMIN", "LEAD_TEAM"])    -> shared routes (leads, analytics)
 */
export function authorize(allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return sendError(res, "Authentication required", 401);
    if (!allowedRoles.includes(req.user.role)) {
      return sendError(res, "You do not have permission to perform this action", 403);
    }
    next();
  };
}
