import { Router } from "express";
import { AdminController } from "../controllers/admin.controller.js";
import { requireAdminAuth } from "../middleware/auth-guard.js";
import { adminApiRateLimiter } from "../middleware/rate-limiter.js";

export const adminRouter = Router();

// Apply auth and rate limiting to all admin routes
adminRouter.use(requireAdminAuth);
adminRouter.use(adminApiRateLimiter);

// Job Applications
adminRouter.get("/applications", AdminController.getApplications);
adminRouter.get("/applications/:id", AdminController.getApplicationById);
adminRouter.patch("/applications/:id", AdminController.updateApplicationStatus);

// Contact Leads
adminRouter.get("/contact-leads", AdminController.getContactLeads);
adminRouter.get("/contact-leads/:id", AdminController.getContactLeadById);
adminRouter.patch("/contact-leads/:id", AdminController.updateContactLeadStatus);

// Consultation Leads
adminRouter.get("/consultation-leads", AdminController.getConsultationLeads);
adminRouter.get("/consultation-leads/:id", AdminController.getConsultationLeadById);
adminRouter.patch("/consultation-leads/:id", AdminController.updateConsultationLeadStatus);

// Talent Leads
adminRouter.get("/talent-leads", AdminController.getTalentLeads);
adminRouter.get("/talent-leads/:id", AdminController.getTalentLeadById);
adminRouter.patch("/talent-leads/:id", AdminController.updateTalentLeadStatus);
