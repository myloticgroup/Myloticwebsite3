import { Router } from "express";
import * as content from "../controllers/public/content.controller.js";
import { submitContact } from "../controllers/public/contact.controller.js";
import { submitConsultation } from "../controllers/public/consultation.controller.js";
import { applyToJob, joinTalentPool } from "../controllers/public/careers.controller.js";
import { track } from "../controllers/public/tracking.controller.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { publicFormLimiter, trackingLimiter } from "../middlewares/rateLimiter.middleware.js";
import { upload } from "../services/upload.service.js";
import {
  contactLeadSchema,
  consultationLeadSchema,
  jobApplicationSchema,
  talentLeadSchema,
  trackEventSchema,
} from "../validators/index.js";

const router = Router();

// ---- Content browsing (visitor, no login) ----
router.get("/solutions", content.solutions.list);
router.get("/solutions/:slug", content.solutions.getBySlug);

router.get("/work", content.caseStudies.list);
router.get("/work/:slug", content.caseStudies.getBySlug);

router.get("/testimonials", content.testimonialsList);

router.get("/blog", content.blogPosts.list);
router.get("/blog/:slug", content.blogPosts.getBySlug);

router.get("/careers/jobs", content.jobs.list);
router.get("/careers/jobs/:slug", content.jobs.getBySlug);

router.get("/company/team", content.team.list);

// ---- Form submissions (visitor, no login, rate-limited) ----
router.post("/contact", publicFormLimiter, validateBody(contactLeadSchema), submitContact);
router.post("/consultations", publicFormLimiter, validateBody(consultationLeadSchema), submitConsultation);

router.post(
  "/careers/jobs/:jobId/apply",
  publicFormLimiter,
  upload.single("resume"),
  validateBody(jobApplicationSchema),
  applyToJob
);

router.post(
  "/careers/talent",
  publicFormLimiter,
  upload.single("resume"),
  validateBody(talentLeadSchema),
  joinTalentPool
);

// ---- Anonymous visitor analytics beacon ----
router.post("/track", trackingLimiter, validateBody(trackEventSchema), track);

export default router;
