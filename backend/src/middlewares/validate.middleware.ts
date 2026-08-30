import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import { sendError } from "../utils/apiResponse.js";

/**
 * Validates req.body against a zod schema before it reaches the controller.
 * Keeps controllers focused on business logic, not input shape checking.
 */
export function validateBody(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return sendError(res, "Validation failed", 422, result.error.flatten().fieldErrors as Record<string, string[]>);
    }
    req.body = result.data;
    next();
  };
}
