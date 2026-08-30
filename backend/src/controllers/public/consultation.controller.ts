import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendSuccess } from "../../utils/apiResponse.js";
import { ConsultationLead } from "../../models/consultationLead.model.js";
import { VisitorSession } from "../../models/visitorSession.model.js";
import { notifyLeadTeam } from "../../services/notification.service.js";

/**
 * POST /api/consultations
 * Matches the endpoint your frontend's consultation-lead.service.ts already
 * calls. Every submission notifies the Lead Team (this is a booking-intent
 * lead, not a general enquiry, so it doesn't go through CEO-escalation logic).
 */
export const submitConsultation = asyncHandler(async (req: Request, res: Response) => {
  const lead = await ConsultationLead.create(req.body);

  if (req.body.sessionId) {
    await VisitorSession.findOneAndUpdate({ sessionId: req.body.sessionId }, { isConvertedToLead: true });
  }

  await notifyLeadTeam(
    `New EdTech consultation request: ${lead.fullName}`,
    `<p><b>${lead.fullName}</b> (${lead.email}) requested a consultation for "${lead.educationRequirement}".</p>
     <p>Preferred: ${lead.preferredDate || "—"} ${lead.preferredTime || ""}</p>
     <p>${lead.message || ""}</p>`
  );

  return sendSuccess(
    res,
    { id: lead.id },
    "Consultation request successfully logged and queued for review.",
    201
  );
});
