import { Router } from "express";
import { CareersController } from "../controllers/careers.controller.js";
import { uploadResume } from "../middleware/upload.js";
import { publicFormRateLimiter } from "../middleware/rate-limiter.js";

export const careersRouter = Router();

careersRouter.post(
  "/apply",
  publicFormRateLimiter,
  uploadResume.single("resume"),
  CareersController.submitApplication
);
