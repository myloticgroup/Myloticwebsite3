import { Schema, model, Document } from "mongoose";

/**
 * One document per anonymous visitor session (no login required).
 * sessionId is generated client-side and stored in a cookie so repeat
 * pageviews within the same visit roll up into one session.
 */
export interface IVisitorSession extends Document {
  sessionId: string;
  ipHash?: string; // hashed, never store raw IP
  userAgent?: string;
  referrer?: string;
  landingPage: string;
  country?: string;
  city?: string;
  device?: "desktop" | "mobile" | "tablet" | "unknown";
  pageViewCount: number;
  firstSeenAt: Date;
  lastSeenAt: Date;
  isConvertedToLead: boolean; // flips true once this session submits any form
}

const visitorSessionSchema = new Schema<IVisitorSession>(
  {
    sessionId: { type: String, required: true, unique: true },
    ipHash: String,
    userAgent: String,
    referrer: String,
    landingPage: { type: String, required: true },
    country: String,
    city: String,
    device: { type: String, enum: ["desktop", "mobile", "tablet", "unknown"], default: "unknown" },
    pageViewCount: { type: Number, default: 0 },
    firstSeenAt: { type: Date, default: Date.now },
    lastSeenAt: { type: Date, default: Date.now },
    isConvertedToLead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

visitorSessionSchema.index({ lastSeenAt: -1 });

export const VisitorSession = model<IVisitorSession>("VisitorSession", visitorSessionSchema);
