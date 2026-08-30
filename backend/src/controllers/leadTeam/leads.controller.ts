import { Request, Response } from "express";
import { Model } from "mongoose";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendSuccess, sendError, buildPaginationMeta } from "../../utils/apiResponse.js";
import { ContactLead } from "../../models/contactLead.model.js";
import { ConsultationLead } from "../../models/consultationLead.model.js";
import { JobApplication } from "../../models/jobApplication.model.js";
import { TalentLead } from "../../models/talentLead.model.js";

// Typed as `Model<any>` on purpose: each lead type has a different shape, and
// these endpoints operate generically across all of them (status/notes/pagination
// only), so a precise union type isn't needed here — the model-specific
// validation still happens via each schema's own Mongoose validators.
const LEAD_MODELS: Record<string, Model<any>> = {
  contact: ContactLead,
  consultation: ConsultationLead,
  jobApplication: JobApplication,
  talent: TalentLead,
};

type LeadType = keyof typeof LEAD_MODELS;

function isLeadType(value: string): value is LeadType {
  return value in LEAD_MODELS;
}

/**
 * GET /api/lead-team/leads?type=contact|consultation|jobApplication|talent&status=NEW&page=1
 * A unified inbox — the Lead Team picks a tab per lead type on the frontend,
 * this endpoint just filters/paginates whichever model that tab needs.
 */
export const listLeads = asyncHandler(async (req: Request, res: Response) => {
  const type = String(req.query.type || "contact");
  if (!isLeadType(type)) return sendError(res, "Invalid lead type", 400);

  const model = LEAD_MODELS[type];
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;

  const filter: Record<string, unknown> = {};
  if (req.query.status) filter.status = req.query.status;

  const [items, total] = await Promise.all([
    model.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
    model.countDocuments(filter),
  ]);

  return sendSuccess(res, items, "Leads", 200, buildPaginationMeta(page, limit, total));
});

/**
 * PATCH /api/lead-team/leads/:type/:id/status
 * Moves any lead type through its lifecycle (NEW -> CONTACTED -> ... ), so the
 * Lead Team can log outreach progress as they follow up with visitors.
 */
export const updateLeadStatus = asyncHandler(async (req: Request, res: Response) => {
  const type = String(req.params.type);
  const id = String(req.params.id);
  if (!isLeadType(type)) return sendError(res, "Invalid lead type", 400);

  const model = LEAD_MODELS[type];
  const notesField = type === "jobApplication" || type === "talent" ? "internalNotes" : "notes";

  const update: Record<string, unknown> = { status: req.body.status };
  if (req.body.notes) update[notesField] = req.body.notes;

  const lead = await model.findByIdAndUpdate(id, update, { new: true, runValidators: true });
  if (!lead) return sendError(res, "Lead not found", 404);

  return sendSuccess(res, lead, "Lead updated");
});
