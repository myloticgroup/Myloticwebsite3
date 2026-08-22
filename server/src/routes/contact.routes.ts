import { Router } from "express";
import { ContactController } from "../controllers/contact.controller.js";
import { publicFormRateLimiter } from "../middleware/rate-limiter.js";

export const contactRouter = Router();

contactRouter.post("/", publicFormRateLimiter, ContactController.submitContact);
