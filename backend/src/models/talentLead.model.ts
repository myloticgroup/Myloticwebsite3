import { Schema, model, Document } from "mongoose";

export type TalentStatus = "NEW" | "INDEXED" | "CONTACTED" | "MATCHED" | "INACTIVE";

/** General "we're interested in working with you" talent pool signups (not tied to one job req). */
export interface ITalentLead extends Document {
  fullName: string;
  email: string;
  phone?: string;
  primarySkill: string;
  yearsExperience?: number;
  resumeUrl?: string;
  status: TalentStatus;
  internalNotes?: string;
}

const talentLeadSchema = new Schema<ITalentLead>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    primarySkill: { type: String, required: true },
    yearsExperience: Number,
    resumeUrl: String,
    status: { type: String, enum: ["NEW", "INDEXED", "CONTACTED", "MATCHED", "INACTIVE"], default: "NEW" },
    internalNotes: String,
  },
  { timestamps: true }
);

export const TalentLead = model<ITalentLead>("TalentLead", talentLeadSchema);
