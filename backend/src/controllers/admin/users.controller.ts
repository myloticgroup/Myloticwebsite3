import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendSuccess, sendError } from "../../utils/apiResponse.js";
import { User } from "../../models/user.model.js";

/**
 * Only Admins can create accounts — there is no public signup anywhere on
 * this site. This is how you onboard new Lead Team members or other Admins.
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const existing = await User.findOne({ email: req.body.email.toLowerCase() });
  if (existing) return sendError(res, "A user with this email already exists", 409);

  const user = await User.create(req.body);
  return sendSuccess(
    res,
    { id: user.id, name: user.name, email: user.email, role: user.role },
    "User created",
    201
  );
});

export const listUsers = asyncHandler(async (_req: Request, res: Response) => {
  const users = await User.find().select("name email role isActive createdAt").sort({ createdAt: -1 });
  return sendSuccess(res, users);
});

/** Deactivate instead of delete — preserves audit trail of who took what lead actions. */
export const setUserActive = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(req.params.id, { isActive: req.body.isActive }, { new: true });
  if (!user) return sendError(res, "User not found", 404);
  return sendSuccess(res, { id: user.id, isActive: user.isActive }, "User updated");
});
