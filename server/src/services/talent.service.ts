import {
  TalentLeadModel,
  ITalentLead,
  TalentLeadStatus,
} from "../models/talent-lead.model.js";
import { TalentLeadInput } from "../validation/schemas.js";
import {
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  sanitizeUrl,
} from "../utils/sanitizer.js";
import { NotificationService } from "./notifications/notification.service.js";
import { isDbConnected } from "../config/database.js";

export interface TalentLeadFilterQuery {
  page?: number;
  limit?: number;
  search?: string;
  status?: TalentLeadStatus;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export class TalentService {
  static async submitTalentProfile(
    input: TalentLeadInput,
    metadata?: { ipAddress?: string; userAgent?: string }
  ): Promise<ITalentLead | Record<string, unknown>> {
    const sanitizedData = {
      fullName: sanitizeString(input.fullName),
      email: sanitizeEmail(input.email),
      phone: sanitizePhone(input.phone),
      skills: sanitizeString(input.skills),
      linkedinUrl: sanitizeUrl(input.linkedinUrl),
      portfolioUrl: sanitizeUrl(input.portfolioUrl),
      ipAddress: metadata?.ipAddress,
      userAgent: metadata?.userAgent,
      status: "NEW" as TalentLeadStatus,
      submittedAt: new Date(),
    };

    let talentLead: ITalentLead | Record<string, unknown>;

    if (isDbConnected()) {
      try {
        talentLead = await TalentLeadModel.create(sanitizedData);
      } catch (err) {
        console.warn("[TalentService] Database write error:", (err as Error).message);
        talentLead = { id: `talent-${Date.now()}`, ...sanitizedData };
      }
    } else {
      talentLead = { id: `talent-${Date.now()}`, ...sanitizedData };
    }

    NotificationService.notifyTalentLeadReceived(talentLead as ITalentLead).catch(
      (err) => {
        console.error("[TalentService] Notification dispatch failed:", err);
      }
    );

    return talentLead;
  }

  static async getTalentLeads(query: TalentLeadFilterQuery = {}) {
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
    if (query.search) {
      const search = query.search.trim();
      filter.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { skills: { $regex: search, $options: "i" } },
      ];
    }

    const sortField = query.sortBy || "submittedAt";
    const sortDirection = query.sortOrder === "asc" ? 1 : -1;

    const [leads, total] = await Promise.all([
      TalentLeadModel.find(filter)
        .sort({ [sortField]: sortDirection })
        .skip(skip)
        .limit(limit)
        .lean(),
      TalentLeadModel.countDocuments(filter),
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

  static async getTalentLeadById(id: string) {
    if (!isDbConnected()) return null;
    try {
      return await TalentLeadModel.findById(id).lean();
    } catch {
      return null;
    }
  }

  static async updateTalentLeadStatus(
    id: string,
    status: TalentLeadStatus,
    internalNotes?: string
  ) {
    if (!isDbConnected()) return null;
    try {
      return await TalentLeadModel.findByIdAndUpdate(
        id,
        {
          status,
          ...(internalNotes !== undefined
            ? { internalNotes: sanitizeString(internalNotes) }
            : {}),
        },
        { new: true }
      ).lean();
    } catch {
      return null;
    }
  }
}
