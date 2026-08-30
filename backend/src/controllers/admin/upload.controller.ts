import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendSuccess, sendError } from "../../utils/apiResponse.js";
import { fileUrl } from "../../services/upload.service.js";

/**
 * POST /api/admin/upload  (multipart/form-data, field name "file")
 * Generic media upload used by the Admin panel when creating/editing any
 * content type (case study cover images, testimonial avatars, blog images).
 * Returns a URL the Admin then pastes into the relevant content's image field.
 */
export const uploadFile = asyncHandler(async (req: Request, res: Response) => {
  if (!req.file) return sendError(res, "No file provided", 422);
  return sendSuccess(res, { url: fileUrl(req.file.filename) }, "File uploaded", 201);
});
