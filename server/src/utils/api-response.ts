import { Response } from "express";

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export function sendSuccess<T>(
  res: Response,
  data?: T,
  message = "Operation completed successfully",
  statusCode = 200,
  meta?: ApiResponse["meta"]
) {
  const body: ApiResponse<T> = {
    success: true,
    message,
    ...(data !== undefined ? { data } : {}),
    ...(meta ? { meta } : {}),
  };
  return res.status(statusCode).json(body);
}

export function sendError(
  res: Response,
  message = "An error occurred while processing your request",
  statusCode = 500,
  errors?: Record<string, string[]>
) {
  const body: ApiResponse<null> = {
    success: false,
    message,
    ...(errors ? { errors } : {}),
  };
  return res.status(statusCode).json(body);
}

export function sendValidationError(
  res: Response,
  errors: Record<string, string[]>,
  message = "Input validation failed. Please check your submission."
) {
  return sendError(res, message, 400, errors);
}

export function sendUnauthorized(
  res: Response,
  message = "Unauthorized. Proper authentication credentials required."
) {
  return sendError(res, message, 401);
}

export function sendForbidden(
  res: Response,
  message = "Forbidden. You do not have permission to access this resource."
) {
  return sendError(res, message, 403);
}

export function sendNotFound(res: Response, message = "The requested resource was not found.") {
  return sendError(res, message, 404);
}

export function sendRateLimit(
  res: Response,
  message = "Too many requests. Please try again later.",
  retryAfterSeconds?: number
) {
  if (retryAfterSeconds) {
    res.setHeader("Retry-After", String(retryAfterSeconds));
  }
  return sendError(res, message, 429);
}
