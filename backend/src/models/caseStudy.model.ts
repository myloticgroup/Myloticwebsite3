import { Schema, model, Document } from "mongoose";

/** Powers the "Work" page — portfolio / case studies. */
export interface ICaseStudy extends Document {
  slug: string;
  clientName: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  coverImageUrl?: string;
  gallery: string[];
  isFeatured: boolean;
  isPublished: boolean;
}

const caseStudySchema = new Schema<ICaseStudy>(
  {
    slug: { type: String, required: true, unique: true },
    clientName: { type: String, required: true },
    title: { type: String, required: true },
    industry: String,
    summary: { type: String, required: true },
    challenge: String,
    solution: String,
    results: [String],
    technologies: [String],
    coverImageUrl: String,
    gallery: [String],
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const CaseStudy = model<ICaseStudy>("CaseStudy", caseStudySchema);
