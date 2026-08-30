import { Response } from "express";

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export function sendSuccess<T>(
  res: Response,
  data?: T,
  message = "Success",
  statusCode = 200,
  meta?: PaginationMeta
) {
  return res.status(statusCode).json({ success: true, message, data, meta });
}

export function sendError(
  res: Response,
  message = "Something went wrong",
  statusCode = 400,
  errors?: Record<string, string[]>
) {
  return res.status(statusCode).json({ success: false, message, errors });
}

export function buildPaginationMeta(page: number, limit: number, total: number): PaginationMeta {
  return { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) };
}
