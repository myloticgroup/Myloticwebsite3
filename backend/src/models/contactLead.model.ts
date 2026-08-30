import { Schema, model, Document } from "mongoose";

export type LeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "CLOSED";

export interface IContactLead extends Document {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  requestCeo: boolean; // visitor explicitly asked to speak to the CEO
  priority: "NORMAL" | "CEO_DIRECT";
  status: LeadStatus;
  notes?: string;
  sessionId?: string; // links back to VisitorSession for journey context
  source: "Contact Us";
}

const contactLeadSchema = new Schema<IContactLead>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    company: String,
    service: String,
    message: { type: String, required: true },
    requestCeo: { type: Boolean, default: false },
    priority: { type: String, enum: ["NORMAL", "CEO_DIRECT"], default: "NORMAL" },
    status: { type: String, enum: ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "CLOSED"], default: "NEW" },
    notes: String,
    sessionId: String,
    source: { type: String, default: "Contact Us" },
  },
  { timestamps: true }
);

export const ContactLead = model<IContactLead>("ContactLead", contactLeadSchema);
