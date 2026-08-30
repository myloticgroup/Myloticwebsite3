import { Request, Response } from "express";
import { Model } from "mongoose";
import { asyncHandler } from "./asyncHandler.js";
import { sendSuccess, sendError, buildPaginationMeta } from "./apiResponse.js";

/**
 * Admin CRUD factory — every admin content controller (solutions, case studies,
 * blog, jobs, testimonials, team) is just a thin call to this, keeping business
 * rules (like slug uniqueness via the model's schema) in one place.
 */
export function makeAdminCrud<T>(model: Model<T>, resourceName: string) {
  const list = asyncHandler(async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const [items, total] = await Promise.all([
      model.find().sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
      model.countDocuments(),
    ]);
    return sendSuccess(res, items, `${resourceName} list`, 200, buildPaginationMeta(page, limit, total));
  });

  const getOne = asyncHandler(async (req: Request, res: Response) => {
    const item = await model.findById(req.params.id);
    if (!item) return sendError(res, `${resourceName} not found`, 404);
    return sendSuccess(res, item);
  });

  const create = asyncHandler(async (req: Request, res: Response) => {
    const item = await model.create(req.body);
    return sendSuccess(res, item, `${resourceName} created`, 201);
  });

  const update = asyncHandler(async (req: Request, res: Response) => {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return sendError(res, `${resourceName} not found`, 404);
    return sendSuccess(res, item, `${resourceName} updated`);
  });

  const remove = asyncHandler(async (req: Request, res: Response) => {
    const item = await model.findByIdAndDelete(req.params.id);
    if (!item) return sendError(res, `${resourceName} not found`, 404);
    return sendSuccess(res, undefined, `${resourceName} deleted`);
  });

  return { list, getOne, create, update, remove };
}

/** Public read-only access: published items only, lookup by slug instead of _id. */
export function makePublicReader<T>(model: Model<T>, publishedField = "isPublished") {
  const list = asyncHandler(async (_req: Request, res: Response) => {
    const items = await model.find({ [publishedField]: true } as any).sort({ createdAt: -1 });
    return sendSuccess(res, items);
  });

  const getBySlug = asyncHandler(async (req: Request, res: Response) => {
    const item = await model.findOne({ slug: req.params.slug, [publishedField]: true } as any);
    if (!item) return sendError(res, "Not found", 404);
    return sendSuccess(res, item);
  });

  return { list, getBySlug };
}
