import {
  JobApplicationModel,
  IJobApplication,
  JobApplicationLifecycle,
} from "../models/job-application.model.js";
import { JobApplicationInput } from "../validation/schemas.js";
import {
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  sanitizeOptionalString,
  sanitizeUrl,
} from "../utils/sanitizer.js";
import { storageService } from "./storage/index.js";
import { NotificationService } from "./notifications/notification.service.js";
import { isDbConnected } from "../config/database.js";

export interface JobApplicationFilterQuery {
  page?: number;
  limit?: number;
  jobId?: string;
  status?: JobApplicationLifecycle;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export class CareersService {
  static async submitApplication(
    input: JobApplicationInput,
    file?: { buffer: Buffer; originalName: string; mimeType: string },
    metadata?: { ipAddress?: string; userAgent?: string }
  ): Promise<IJobApplication | Record<string, unknown>> {
    let resumeUrl: string | undefined;
    let resumeFileName: string | undefined;
    let resumeMimeType: string | undefined;
    let resumeSizeBytes: number | undefined;

    if (file) {
      const stored = await storageService.uploadFile(
        file.buffer,
        file.originalName,
        file.mimeType,
        {
          folder: "resumes",
          maxSizeBytes: 10 * 1024 * 1024,
        }
      );
      resumeUrl = stored.url;
      resumeFileName = stored.fileName;
      resumeMimeType = stored.mimeType;
      resumeSizeBytes = stored.sizeBytes;
    }

    const sanitizedData = {
      jobId: sanitizeString(input.jobId),
      jobTitle: sanitizeString(input.jobTitle),
      fullName: sanitizeString(input.fullName),
      email: sanitizeEmail(input.email),
      phone: sanitizePhone(input.phone) || "",
      location: sanitizeString(input.location),
      linkedinUrl: sanitizeUrl(input.linkedinUrl),
      githubUrl: sanitizeUrl(input.githubUrl),
      portfolioUrl: sanitizeUrl(input.portfolioUrl),
      coverNote: sanitizeOptionalString(input.coverNote),
      consentGiven: Boolean(input.consentGiven),
      resumeUrl,
      resumeFileName,
      resumeMimeType,
      resumeSizeBytes,
      ipAddress: metadata?.ipAddress,
      userAgent: metadata?.userAgent,
      status: "APPLIED" as JobApplicationLifecycle,
      submittedAt: new Date(),
    };

    let application: IJobApplication | Record<string, unknown>;

    if (isDbConnected()) {
      try {
        application = await JobApplicationModel.create(sanitizedData);
      } catch (err) {
        console.warn("[CareersService] Database write error:", (err as Error).message);
        application = { id: `app-${Date.now()}`, ...sanitizedData };
      }
    } else {
      application = { id: `app-${Date.now()}`, ...sanitizedData };
    }

    NotificationService.notifyJobApplicationReceived(application as IJobApplication).catch(
      (err) => {
        console.error("[CareersService] Notification dispatch failed:", err);
      }
    );

    return application;
  }

  static async getApplications(query: JobApplicationFilterQuery = {}) {
    const page = Math.max(1, query.page || 1);
    const limit = Math.min(100, Math.max(1, query.limit || 20));
    const skip = (page - 1) * limit;

    if (!isDbConnected()) {
      return {
        applications: [],
        meta: { page: 1, limit, total: 0, totalPages: 1 },
      };
    }

    const filter: Record<string, unknown> = {};
    if (query.jobId) {
      filter.jobId = query.jobId;
    }
    if (query.status) {
      filter.status = query.status;
    }
    if (query.search) {
      const search = query.search.trim();
      filter.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { jobTitle: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    const sortField = query.sortBy || "submittedAt";
    const sortDirection = query.sortOrder === "asc" ? 1 : -1;

    const [applications, total] = await Promise.all([
      JobApplicationModel.find(filter)
        .sort({ [sortField]: sortDirection })
        .skip(skip)
        .limit(limit)
        .lean(),
      JobApplicationModel.countDocuments(filter),
    ]);

    return {
      applications,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit) || 1,
      },
    };
  }

  static async getApplicationById(id: string) {
    if (!isDbConnected()) return null;
    try {
      return await JobApplicationModel.findById(id).lean();
    } catch {
      return null;
    }
  }

  static async updateApplicationStatus(
    id: string,
    status: JobApplicationLifecycle,
    internalNotes?: string
  ) {
    if (!isDbConnected()) return null;
    try {
      return await JobApplicationModel.findByIdAndUpdate(
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
