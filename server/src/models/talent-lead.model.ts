import mongoose, { Document, Schema } from "mongoose";

export type TalentLeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "ARCHIVED";

export interface ITalentLead extends Document {
  fullName: string;
  email: string;
  phone?: string;
  skills: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  resumeFileName?: string;
  status: TalentLeadStatus;
  ipAddress?: string;
  userAgent?: string;
  internalNotes?: string;
  submittedAt: Date;
  updatedAt: Date;
}

const TalentLeadSchema = new Schema<ITalentLead>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    phone: { type: String, trim: true },
    skills: { type: String, required: true, trim: true },
    linkedinUrl: { type: String, trim: true },
    portfolioUrl: { type: String, trim: true },
    resumeUrl: { type: String },
    resumeFileName: { type: String },
    status: {
      type: String,
      enum: ["NEW", "CONTACTED", "QUALIFIED", "ARCHIVED"],
      default: "NEW",
      index: true,
    },
    ipAddress: { type: String },
    userAgent: { type: String },
    internalNotes: { type: String },
    submittedAt: { type: Date, default: Date.now, index: true },
  },
  {
    timestamps: true,
  }
);

TalentLeadSchema.set("toJSON", {
  virtuals: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform: (_doc, ret: any) => {
    ret.id = ret._id?.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export const TalentLeadModel = mongoose.model<ITalentLead>("TalentLead", TalentLeadSchema);
