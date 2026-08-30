import { Router } from "express";
import { ConsultationController } from "../controllers/consultation.controller.js";
import { publicFormRateLimiter } from "../middleware/rate-limiter.js";

export const consultationRouter = Router();

consultationRouter.post("/", publicFormRateLimiter, ConsultationController.submitConsultation);
