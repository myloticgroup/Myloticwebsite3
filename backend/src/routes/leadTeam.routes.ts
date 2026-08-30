import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/rbac.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { listLeads, updateLeadStatus } from "../controllers/leadTeam/leads.controller.js";
import { overview, liveVisitors, sessionJourney } from "../controllers/leadTeam/analytics.controller.js";
import { updateLeadStatusSchema } from "../validators/index.js";

const router = Router();

// Every route below requires a logged-in Admin or Lead Team member.
router.use(requireAuth, authorize(["ADMIN", "LEAD_TEAM"]));

router.get("/leads", listLeads);
router.patch("/leads/:type/:id/status", validateBody(updateLeadStatusSchema), updateLeadStatus);

router.get("/analytics/overview", overview);
router.get("/analytics/live", liveVisitors);
router.get("/analytics/session/:sessionId", sessionJourney);

export default router;
