import { Request, Response } from "express";
import { User } from "../models/user.model.js";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/jwt.js";
import { sendSuccess, sendError } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
};

/** Only Admin & Lead Team accounts exist — there is no public signup. */
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase(), isActive: true }).select("+password");
  if (!user || !(await user.comparePassword(password))) {
    return sendError(res, "Invalid email or password", 401);
  }

  const accessToken = signAccessToken({ sub: user.id, role: user.role, email: user.email });
  const refreshToken = signRefreshToken({ sub: user.id });

  res.cookie("refreshToken", refreshToken, {
    ...COOKIE_OPTIONS,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return sendSuccess(res, {
    accessToken,
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  }, "Logged in successfully");
});

export const refresh = asyncHandler(async (req: Request, res: Response) => {
  const token = req.cookies?.refreshToken;
  if (!token) return sendError(res, "No refresh token provided", 401);

  try {
    const payload = verifyRefreshToken(token);
    const user = await User.findById(payload.sub);
    if (!user || !user.isActive) return sendError(res, "Session expired, please log in again", 401);

    const accessToken = signAccessToken({ sub: user.id, role: user.role, email: user.email });
    return sendSuccess(res, { accessToken }, "Token refreshed");
  } catch {
    return sendError(res, "Invalid refresh token", 401);
  }
});

export const logout = asyncHandler(async (_req: Request, res: Response) => {
  res.clearCookie("refreshToken", COOKIE_OPTIONS);
  return sendSuccess(res, undefined, "Logged out");
});

export const me = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.user!.sub);
  if (!user) return sendError(res, "User not found", 404);
  return sendSuccess(res, { id: user.id, name: user.name, email: user.email, role: user.role });
});

