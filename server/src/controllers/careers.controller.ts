import { Request, Response, NextFunction } from "express";
import { CareersService } from "../services/careers.service.js";
import { jobApplicationSchema, formatZodErrors } from "../validation/schemas.js";
import { sendSuccess, sendValidationError, sendError } from "../utils/api-response.js";

export class CareersController {
  static async submitApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const rawData = {
        jobId: req.body.jobId,
        jobTitle: req.body.jobTitle,
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location,
        linkedinUrl: req.body.linkedinUrl || undefined,
        githubUrl: req.body.githubUrl || undefined,
        portfolioUrl: req.body.portfolioUrl || undefined,
        coverNote: req.body.coverNote || undefined,
        consentGiven: req.body.consentGiven === "true" || req.body.consentGiven === true,
      };

      const parsed = jobApplicationSchema.safeParse(rawData);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }

      let fileData: { buffer: Buffer; originalName: string; mimeType: string } | undefined;
      if (req.file) {
        fileData = {
          buffer: req.file.buffer,
          originalName: req.file.originalname,
          mimeType: req.file.mimetype,
        };
      }

      const ipAddress =
        (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
        req.socket.remoteAddress;
      const userAgent = req.headers["user-agent"];

      const application = await CareersService.submitApplication(
        parsed.data,
        fileData,
        { ipAddress, userAgent }
      );

      return sendSuccess(
        res,
        {
          id: (application as { id: string }).id,
          jobId: (application as { jobId: string }).jobId,
          jobTitle: (application as { jobTitle: string }).jobTitle,
          status: (application as { status: string }).status,
          submittedAt: (application as { submittedAt: Date }).submittedAt,
        },
        "Application submitted successfully. Our talent team will review your profile.",
        201
      );
    } catch (err) {
      if ((err as Error).message.includes("File size exceeds") || (err as Error).message.includes("signature")) {
        return sendError(res, (err as Error).message, 400);
      }
      next(err);
    }
  }
}
