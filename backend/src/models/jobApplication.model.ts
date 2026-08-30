import { Schema, model, Document, Types } from "mongoose";

export type JobApplicationStatus = "APPLIED" | "UNDER_REVIEW" | "SHORTLISTED" | "INTERVIEW" | "SELECTED" | "REJECTED";

export interface IJobApplication extends Document {
  jobId: Types.ObjectId;
  fullName: string;
  email: string;
  phone?: string;
  resumeUrl: string;
  coverLetter?: string;
  linkedIn?: string;
  portfolio?: string;
  status: JobApplicationStatus;
  internalNotes?: string;
}

const jobApplicationSchema = new Schema<IJobApplication>(
  {
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    resumeUrl: { type: String, required: true },
    coverLetter: String,
    linkedIn: String,
    portfolio: String,
    status: {
      type: String,
      enum: ["APPLIED", "UNDER_REVIEW", "SHORTLISTED", "INTERVIEW", "SELECTED", "REJECTED"],
      default: "APPLIED",
    },
    internalNotes: String,
  },
  { timestamps: true }
);

export const JobApplication = model<IJobApplication>("JobApplication", jobApplicationSchema);
