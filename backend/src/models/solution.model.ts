import { Schema, model, Document } from "mongoose";

export interface ISolution extends Document {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  capabilities: { title: string; description: string }[];
  technologies: string[];
  deliverables: string[];
  isFeatured: boolean;
  isPublished: boolean;
}

const solutionSchema = new Schema<ISolution>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    tagline: { type: String, required: true },
    shortDescription: { type: String, required: true },
    overview: { type: String, required: true },
    capabilities: [{ title: String, description: String }],
    technologies: [String],
    deliverables: [String],
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Solution = model<ISolution>("Solution", solutionSchema);
