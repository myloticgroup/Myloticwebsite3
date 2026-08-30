import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendSuccess, sendError } from "../../utils/apiResponse.js";
import { JobApplication } from "../../models/jobApplication.model.js";
import { TalentLead } from "../../models/talentLead.model.js";
import { Job } from "../../models/job.model.js";
import { fileUrl } from "../../services/upload.service.js";
import { notifyLeadTeam } from "../../services/notification.service.js";

/**
 * POST /api/careers/jobs/:jobId/apply
 * multipart/form-data: resume file (field name "resume") + text fields.
 * Resume upload is required — this is what actually differentiates a real
 * application from a talent-pool signup.
 */
export const applyToJob = asyncHandler(async (req: Request, res: Response) => {
  const job = await Job.findById(req.params.jobId);
  if (!job || !job.isOpen) return sendError(res, "This position is not currently open", 404);

  const file = req.file;
  if (!file) return sendError(res, "A resume file is required", 422);

  const application = await JobApplication.create({
    ...req.body,
    jobId: job.id,
    resumeUrl: fileUrl(file.filename),
  });

  await notifyLeadTeam(
    `New application: ${job.title}`,
    `<p><b>${application.fullName}</b> (${application.email}) applied for <b>${job.title}</b>.</p>`
  );

  return sendSuccess(res, { id: application.id }, "Application submitted successfully", 201);
});

/**
 * POST /api/careers/talent
 * General "join our talent pool" signup, not tied to a specific open role —
 * feeds the Lead Team's talent pipeline for future matching.
 */
export const joinTalentPool = asyncHandler(async (req: Request, res: Response) => {
  const file = req.file;
  const lead = await TalentLead.create({
    ...req.body,
    resumeUrl: file ? fileUrl(file.filename) : undefined,
  });

  return sendSuccess(res, { id: lead.id }, "Thanks for your interest — we'll be in touch when a fit opens up.", 201);
});
