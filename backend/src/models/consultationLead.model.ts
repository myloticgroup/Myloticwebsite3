import { Schema, model, Document } from "mongoose";

export interface IConsultationLead extends Document {
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  role?: string;
  location?: string;
  educationRequirement: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  status: string;
  sessionId?: string;
  source: "EdTech Consultation";
}

const consultationLeadSchema = new Schema<IConsultationLead>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    organization: String,
    role: String,
    location: String,
    educationRequirement: { type: String, required: true },
    preferredDate: String,
    preferredTime: String,
    message: String,
    status: {
      type: String,
      enum: [
        "NEW",
        "CONTACTED",
        "SCHEDULED",
        "QUALIFIED",
        "CONVERTED",
        "CLOSED",
        "New",
        "Contacted",
        "Consultation Scheduled",
        "Consultation Completed",
        "Qualified",
        "Proposal / Next Step",
        "Closed",
      ],
      default: "NEW",
    },
    sessionId: String,
    source: { type: String, default: "EdTech Consultation" },
  },
  { timestamps: true }
);

export const ConsultationLead = model<IConsultationLead>("ConsultationLead", consultationLeadSchema);
