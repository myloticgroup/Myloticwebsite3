import { Schema, model, Document } from "mongoose";

export interface ITestimonial extends Document {
  clientName: string;
  clientTitle?: string;
  clientCompany: string;
  quote: string;
  avatarUrl?: string;
  rating?: number;
  relatedCaseStudySlug?: string;
  isPublished: boolean;
}

const testimonialSchema = new Schema<ITestimonial>(
  {
    clientName: { type: String, required: true },
    clientTitle: String,
    clientCompany: { type: String, required: true },
    quote: { type: String, required: true },
    avatarUrl: String,
    rating: { type: Number, min: 1, max: 5 },
    relatedCaseStudySlug: String,
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Testimonial = model<ITestimonial>("Testimonial", testimonialSchema);
