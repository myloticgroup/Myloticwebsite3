import { ContactLead } from "../models/contactLead.model.js";
import { notifyLeadTeam, notifyCeo } from "./notification.service.js";
import { VisitorSession } from "../models/visitorSession.model.js";

export interface CreateContactLeadInput {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  requestCeo?: boolean;
  sessionId?: string;
}

/**
 * Business rule for CEO-direct routing:
 *  1. Visitor explicitly ticks "I'd like to speak with the CEO", OR
 *  2. Auto-escalation heuristics: enterprise-scale service request
 *     (e.g. "Managed Services" / "Cloud & Digital Transformation")
 *     combined with a company name present — a signal of a serious
 *     enterprise inquiry rather than a casual one.
 * Both cases keep ONE contact form on the frontend; routing is decided here.
 */
function shouldEscalateToCeo(input: CreateContactLeadInput): boolean {
  if (input.requestCeo) return true;
  const highIntentServices = ["managed-services", "cloud", "ai"];
  if (input.company && input.service && highIntentServices.includes(input.service)) return true;
  return false;
}

export async function createContactLead(input: CreateContactLeadInput) {
  const priority = shouldEscalateToCeo(input) ? "CEO_DIRECT" : "NORMAL";

  const lead = await ContactLead.create({ ...input, priority });

  if (input.sessionId) {
    await VisitorSession.findOneAndUpdate({ sessionId: input.sessionId }, { isConvertedToLead: true });
  }

  const summaryHtml = `
    <p><b>${input.fullName}</b> (${input.email}) submitted the Contact Us form.</p>
    <p>Company: ${input.company || "—"} | Service: ${input.service || "—"}</p>
    <p>${input.message}</p>
  `;

  await notifyLeadTeam(`New contact lead: ${input.fullName}`, summaryHtml);

  if (priority === "CEO_DIRECT") {
    await notifyCeo(`Direct CEO inquiry: ${input.fullName}`, summaryHtml);
  }

  return lead;
}
