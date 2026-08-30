import { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/api-response.js";
import { config } from "../config/env.js";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("[Server Error]", err);

  const statusCode = (err as { status?: number }).status || 500;
  const message =
    config.nodeEnv === "production"
      ? "An unexpected error occurred while processing your request."
      : err.message || "Internal server error";

  return sendError(res, message, statusCode);
}
