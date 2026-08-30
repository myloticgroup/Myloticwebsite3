import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendSuccess } from "../../utils/apiResponse.js";
import { createContactLead } from "../../services/lead.service.js";

/**
 * POST /api/contact
 * The single "Contact Us" form on the frontend. Business logic for deciding
 * whether this reaches the CEO directly (as well as the Lead Team) lives in
 * lead.service.ts — the controller just passes the input through.
 */
export const submitContact = asyncHandler(async (req: Request, res: Response) => {
  const lead = await createContactLead(req.body);
  return sendSuccess(
    res,
    { id: lead.id },
    lead.priority === "CEO_DIRECT"
      ? "Thanks — your message has been routed for priority review."
      : "Thanks for reaching out — our team will be in touch shortly.",
    201
  );
});
