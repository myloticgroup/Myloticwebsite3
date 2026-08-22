import mongoose, { Document, Schema } from "mongoose";

export type JobApplicationLifecycle =
  | "APPLIED"
  | "UNDER_REVIEW"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "SELECTED"
  | "REJECTED";

export interface IJobApplication extends Document {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  resumeFileName?: string;
  resumeMimeType?: string;
  resumeSizeBytes?: number;
  coverNote?: string;
  consentGiven: boolean;
  status: JobApplicationLifecycle;
  ipAddress?: string;
  userAgent?: string;
  internalNotes?: string;
  submittedAt: Date;
  updatedAt: Date;
}

const JobApplicationSchema = new Schema<IJobApplication>(
  {
    jobId: { type: String, required: true, trim: true, index: true },
    jobTitle: { type: String, required: true, trim: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    phone: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    linkedinUrl: { type: String, trim: true },
    githubUrl: { type: String, trim: true },
    portfolioUrl: { type: String, trim: true },
    resumeUrl: { type: String },
    resumeFileName: { type: String },
    resumeMimeType: { type: String },
    resumeSizeBytes: { type: Number },
    coverNote: { type: String },
    consentGiven: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["APPLIED", "UNDER_REVIEW", "SHORTLISTED", "INTERVIEW", "SELECTED", "REJECTED"],
      default: "APPLIED",
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

JobApplicationSchema.set("toJSON", {
  virtuals: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform: (_doc, ret: any) => {
    ret.id = ret._id?.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export const JobApplicationModel = mongoose.model<IJobApplication>(
  "JobApplication",
  JobApplicationSchema
);
