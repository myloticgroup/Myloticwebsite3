import { Request, Response, NextFunction } from "express";
import { CareersService } from "../services/careers.service.js";
import { ContactService } from "../services/contact.service.js";
import { ConsultationService } from "../services/consultation.service.js";
import { TalentService } from "../services/talent.service.js";
import {
  paginationQuerySchema,
  updateApplicationStatusSchema,
  updateLeadStatusSchema,
  updateTalentStatusSchema,
  formatZodErrors,
} from "../validation/schemas.js";
import { sendSuccess, sendNotFound, sendValidationError } from "../utils/api-response.js";
import { JobApplicationLifecycle } from "../models/job-application.model.js";
import { ContactLeadStatus } from "../models/contact-lead.model.js";
import { ConsultationLeadStatus } from "../models/consultation-lead.model.js";
import { TalentLeadStatus } from "../models/talent-lead.model.js";

export class AdminController {
  // Applications
  static async getApplications(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = paginationQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }
      const { page, limit, search, status, sortBy, sortOrder } = parsed.data;
      const jobId = req.query.jobId as string | undefined;

      const result = await CareersService.getApplications({
        page,
        limit,
        jobId,
        status: status as JobApplicationLifecycle,
        search,
        sortBy,
        sortOrder,
      });

      return sendSuccess(res, result.applications, "Applications retrieved", 200, result.meta);
    } catch (err) {
      next(err);
    }
  }

  static async getApplicationById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const application = await CareersService.getApplicationById(id);
      if (!application) {
        return sendNotFound(res, `Application with ID "${id}" was not found.`);
      }
      return sendSuccess(res, application, "Application retrieved");
    } catch (err) {
      next(err);
    }
  }

  static async updateApplicationStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const parsed = updateApplicationStatusSchema.safeParse(req.body);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }

      const updated = await CareersService.updateApplicationStatus(
        id,
        parsed.data.status,
        parsed.data.internalNotes
      );

      if (!updated) {
        return sendNotFound(res, `Application with ID "${id}" was not found.`);
      }

      return sendSuccess(res, updated, "Application status updated successfully.");
    } catch (err) {
      next(err);
    }
  }

  // Contact Leads
  static async getContactLeads(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = paginationQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }
      const { page, limit, search, status, sortBy, sortOrder } = parsed.data;
      const service = req.query.service as string | undefined;

      const result = await ContactService.getContactLeads({
        page,
        limit,
        service,
        status: status as ContactLeadStatus,
        search,
        sortBy,
        sortOrder,
      });

      return sendSuccess(res, result.leads, "Contact leads retrieved", 200, result.meta);
    } catch (err) {
      next(err);
    }
  }

  static async getContactLeadById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const lead = await ContactService.getContactLeadById(id);
      if (!lead) {
        return sendNotFound(res, `Contact lead with ID "${id}" was not found.`);
      }
      return sendSuccess(res, lead, "Contact lead retrieved");
    } catch (err) {
      next(err);
    }
  }

  static async updateContactLeadStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const parsed = updateLeadStatusSchema.safeParse(req.body);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }

      const updated = await ContactService.updateContactLeadStatus(
        id,
        parsed.data.status,
        parsed.data.notes
      );

      if (!updated) {
        return sendNotFound(res, `Contact lead with ID "${id}" was not found.`);
      }

      return sendSuccess(res, updated, "Contact lead status updated successfully.");
    } catch (err) {
      next(err);
    }
  }

  // Consultation Leads
  static async getConsultationLeads(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = paginationQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }
      const { page, limit, search, status, sortBy, sortOrder } = parsed.data;
      const educationRequirement = req.query.educationRequirement as string | undefined;

      const result = await ConsultationService.getConsultationLeads({
        page,
        limit,
        educationRequirement,
        status: status as ConsultationLeadStatus,
        search,
        sortBy,
        sortOrder,
      });

      return sendSuccess(res, result.leads, "Consultation leads retrieved", 200, result.meta);
    } catch (err) {
      next(err);
    }
  }

  static async getConsultationLeadById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const lead = await ConsultationService.getConsultationLeadById(id);
      if (!lead) {
        return sendNotFound(res, `Consultation lead with ID "${id}" was not found.`);
      }
      return sendSuccess(res, lead, "Consultation lead retrieved");
    } catch (err) {
      next(err);
    }
  }

  static async updateConsultationLeadStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const parsed = updateLeadStatusSchema.safeParse(req.body);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }

      const updated = await ConsultationService.updateConsultationLeadStatus(
        id,
        parsed.data.status,
        parsed.data.notes
      );

      if (!updated) {
        return sendNotFound(res, `Consultation lead with ID "${id}" was not found.`);
      }

      return sendSuccess(res, updated, "Consultation lead status updated successfully.");
    } catch (err) {
      next(err);
    }
  }

  // Talent Leads
  static async getTalentLeads(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = paginationQuerySchema.safeParse(req.query);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }
      const { page, limit, search, status, sortBy, sortOrder } = parsed.data;

      const result = await TalentService.getTalentLeads({
        page,
        limit,
        status: status as TalentLeadStatus,
        search,
        sortBy,
        sortOrder,
      });

      return sendSuccess(res, result.leads, "Talent leads retrieved", 200, result.meta);
    } catch (err) {
      next(err);
    }
  }

  static async getTalentLeadById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const lead = await TalentService.getTalentLeadById(id);
      if (!lead) {
        return sendNotFound(res, `Talent lead with ID "${id}" was not found.`);
      }
      return sendSuccess(res, lead, "Talent lead retrieved");
    } catch (err) {
      next(err);
    }
  }

  static async updateTalentLeadStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      const parsed = updateTalentStatusSchema.safeParse(req.body);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }

      const updated = await TalentService.updateTalentLeadStatus(
        id,
        parsed.data.status,
        parsed.data.internalNotes
      );

      if (!updated) {
        return sendNotFound(res, `Talent lead with ID "${id}" was not found.`);
      }

      return sendSuccess(res, updated, "Talent lead status updated successfully.");
    } catch (err) {
      next(err);
    }
  }
}
