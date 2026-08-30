import { Schema, model, Document } from "mongoose";

export interface IJob extends Document {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experienceLevel: string;
  workplaceType: string;
  summary?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  skills: string[];
  isOpen: boolean;
  isPublished: boolean;
}

const jobSchema = new Schema<IJob>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    employmentType: { type: String, default: "Full-time" },
    experienceLevel: { type: String, default: "Senior" },
    workplaceType: { type: String, default: "Hybrid" },
    summary: { type: String },
    description: { type: String, required: true },
    responsibilities: { type: [String], default: [] },
    requirements: { type: [String], default: [] },
    niceToHave: { type: [String], default: [] },
    skills: { type: [String], default: [] },
    isOpen: { type: Boolean, default: true },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Pre-validate hook to sync description and summary if only one is passed
jobSchema.pre("validate", function (next) {
  if (this.summary && !this.description) {
    this.description = this.summary;
  } else if (this.description && !this.summary) {
    this.summary = this.description;
  }
  next();
});

export const Job = model<IJob>("Job", jobSchema);

