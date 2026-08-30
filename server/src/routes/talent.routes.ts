import { Router } from "express";
import { TalentController } from "../controllers/talent.controller.js";
import { publicFormRateLimiter } from "../middleware/rate-limiter.js";

export const talentRouter = Router();

talentRouter.post("/", publicFormRateLimiter, TalentController.submitTalentProfile);
