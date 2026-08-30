import { Router } from "express";
import { login, refresh, logout, me } from "../controllers/auth.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { authLimiter } from "../middlewares/rateLimiter.middleware.js";
import { loginSchema } from "../validators/index.js";

const router = Router();

router.post("/login", authLimiter, validateBody(loginSchema), login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.get("/me", requireAuth, me);

export default router;
