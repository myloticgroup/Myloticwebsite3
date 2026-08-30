import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger.js";
import { sendError } from "../utils/apiResponse.js";

export function notFoundHandler(req: Request, res: Response) {
  sendError(res, `Route not found: ${req.method} ${req.originalUrl}`, 404);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  sendError(res, message, statusCode);
}
