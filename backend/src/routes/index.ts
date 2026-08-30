import { Router } from "express";
import authRoutes from "./auth.routes.js";
import publicRoutes from "./public.routes.js";
import leadTeamRoutes from "./leadTeam.routes.js";
import adminRoutes from "./admin.routes.js";

const router = Router();

router.use("/auth", authRoutes); // /api/auth/*        (login/refresh/logout/me)
router.use("/", publicRoutes); // /api/*              (public content + form submissions)
router.use("/lead-team", leadTeamRoutes); // /api/lead-team/*   (ADMIN + LEAD_TEAM)
router.use("/admin", adminRoutes); // /api/admin/*        (ADMIN only)

export default router;
