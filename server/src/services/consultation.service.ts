import {
  ConsultationLeadModel,
  IConsultationLead,
  ConsultationLeadStatus,
} from "../models/consultation-lead.model.js";
import { ConsultationLeadInput } from "../validation/schemas.js";
import {
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  sanitizeOptionalString,
} from "../utils/sanitizer.js";
import { NotificationService } from "./notifications/notification.service.js";
import { isDbConnected } from "../config/database.js";

export interface ConsultationLeadFilterQuery {
  page?: number;
  limit?: number;
  search?: string;
  status?: ConsultationLeadStatus;
  educationRequirement?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export class ConsultationService {
  static async createConsultationLead(
    input: ConsultationLeadInput,
    metadata?: { ipAddress?: string; userAgent?: string }
  ): Promise<IConsultationLead | Record<string, unknown>> {
    const sanitizedData = {
      fullName: sanitizeString(input.fullName),
      email: sanitizeEmail(input.email),
      phone: sanitizePhone(input.phone),
      organization: sanitizeOptionalString(input.organization || input.company),
      role: sanitizeOptionalString(input.role || input.jobTitle),
      educationRequirement: sanitizeString(input.educationRequirement || input.requirement || ""),
      preferredDate: sanitizeOptionalString(input.preferredDate),
      preferredTime: sanitizeOptionalString(input.preferredTime),
      preferredContactMethod: sanitizeOptionalString(input.preferredContactMethod),
      location: sanitizeOptionalString(input.location),
      message: sanitizeOptionalString(input.message),
      ipAddress: metadata?.ipAddress,
      userAgent: metadata?.userAgent,
      status: "NEW" as ConsultationLeadStatus,
      submittedAt: new Date(),
    };

    let lead: IConsultationLead | Record<string, unknown>;

    if (isDbConnected()) {
      try {
        lead = await ConsultationLeadModel.create(sanitizedData);
      } catch (err) {
        console.warn("[ConsultationService] Database write error:", (err as Error).message);
        lead = { id: `consultation-${Date.now()}`, ...sanitizedData };
      }
    } else {
      lead = { id: `consultation-${Date.now()}`, ...sanitizedData };
    }

    NotificationService.notifyConsultationLeadReceived(lead as IConsultationLead).catch(
      (err) => {
        console.error("[ConsultationService] Notification dispatch failed:", err);
      }
    );

    return lead;
  }

  static async getConsultationLeads(query: ConsultationLeadFilterQuery = {}) {
    const page = Math.max(1, query.page || 1);
    const limit = Math.min(100, Math.max(1, query.limit || 20));
    const skip = (page - 1) * limit;

    if (!isDbConnected()) {
      return {
        leads: [],
        meta: { page: 1, limit, total: 0, totalPages: 1 },
      };
    }

    const filter: Record<string, unknown> = {};
    if (query.status) {
      filter.status = query.status;
    }
    if (query.educationRequirement) {
      filter.educationRequirement = { $regex: query.educationRequirement, $options: "i" };
    }
    if (query.search) {
      const search = query.search.trim();
      filter.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { organization: { $regex: search, $options: "i" } },
        { educationRequirement: { $regex: search, $options: "i" } },
      ];
    }

    const sortField = query.sortBy || "submittedAt";
    const sortDirection = query.sortOrder === "asc" ? 1 : -1;

    const [leads, total] = await Promise.all([
      ConsultationLeadModel.find(filter)
        .sort({ [sortField]: sortDirection })
        .skip(skip)
        .limit(limit)
        .lean(),
      ConsultationLeadModel.countDocuments(filter),
    ]);

    return {
      leads,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit) || 1,
      },
    };
  }

  static async getConsultationLeadById(id: string) {
    if (!isDbConnected()) return null;
    try {
      return await ConsultationLeadModel.findById(id).lean();
    } catch {
      return null;
    }
  }

  static async updateConsultationLeadStatus(
    id: string,
    status: ConsultationLeadStatus,
    notes?: string
  ) {
    if (!isDbConnected()) return null;
    try {
      return await ConsultationLeadModel.findByIdAndUpdate(
        id,
        {
          status,
          ...(notes !== undefined ? { notes: sanitizeString(notes) } : {}),
        },
        { new: true }
      ).lean();
    } catch {
      return null;
    }
  }
}
