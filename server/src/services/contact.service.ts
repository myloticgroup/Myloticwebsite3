import { ContactLeadModel, IContactLead, ContactLeadStatus } from "../models/contact-lead.model.js";
import { ContactLeadInput } from "../validation/schemas.js";
import { sanitizeString, sanitizeEmail, sanitizePhone, sanitizeOptionalString } from "../utils/sanitizer.js";
import { NotificationService } from "./notifications/notification.service.js";
import { isDbConnected } from "../config/database.js";

export interface ContactLeadFilterQuery {
  page?: number;
  limit?: number;
  search?: string;
  status?: ContactLeadStatus;
  service?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export class ContactService {
  static async createContactLead(
    input: ContactLeadInput,
    metadata?: { ipAddress?: string; userAgent?: string }
  ): Promise<IContactLead | Record<string, unknown>> {
    const sanitizedData = {
      fullName: sanitizeString(input.fullName),
      email: sanitizeEmail(input.email),
      phone: sanitizePhone(input.phone),
      company: sanitizeOptionalString(input.company),
      service: sanitizeString(input.service),
      message: sanitizeString(input.message),
      consentGiven: Boolean(input.consentGiven),
      ipAddress: metadata?.ipAddress,
      userAgent: metadata?.userAgent,
      status: "NEW" as ContactLeadStatus,
      submittedAt: new Date(),
    };

    let lead: IContactLead | Record<string, unknown>;

    if (isDbConnected()) {
      try {
        lead = await ContactLeadModel.create(sanitizedData);
      } catch (err) {
        console.warn("[ContactService] Database write error:", (err as Error).message);
        lead = { id: `contact-${Date.now()}`, ...sanitizedData };
      }
    } else {
      lead = { id: `contact-${Date.now()}`, ...sanitizedData };
    }

    NotificationService.notifyContactLeadReceived(lead as IContactLead).catch((err) => {
      console.error("[ContactService] Notification dispatch failed:", err);
    });

    return lead;
  }

  static async getContactLeads(query: ContactLeadFilterQuery = {}) {
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
    if (query.service) {
      filter.service = { $regex: query.service, $options: "i" };
    }
    if (query.search) {
      const search = query.search.trim();
      filter.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    const sortField = query.sortBy || "submittedAt";
    const sortDirection = query.sortOrder === "asc" ? 1 : -1;

    const [leads, total] = await Promise.all([
      ContactLeadModel.find(filter)
        .sort({ [sortField]: sortDirection })
        .skip(skip)
        .limit(limit)
        .lean(),
      ContactLeadModel.countDocuments(filter),
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

  static async getContactLeadById(id: string) {
    if (!isDbConnected()) return null;
    try {
      return await ContactLeadModel.findById(id).lean();
    } catch {
      return null;
    }
  }

  static async updateContactLeadStatus(id: string, status: ContactLeadStatus, notes?: string) {
    if (!isDbConnected()) return null;
    try {
      return await ContactLeadModel.findByIdAndUpdate(
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
