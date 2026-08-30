import { Schema, model, Document } from "mongoose";

/** One document per page visited within a session — builds the visitor's journey. */
export interface IPageView extends Document {
  sessionId: string;
  page: string;
  title?: string;
  durationSeconds?: number; // time spent on the previous page, reported on next beacon
  occurredAt: Date;
}

const pageViewSchema = new Schema<IPageView>(
  {
    sessionId: { type: String, required: true, index: true },
    page: { type: String, required: true },
    title: String,
    durationSeconds: Number,
    occurredAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

pageViewSchema.index({ sessionId: 1, occurredAt: 1 });

export const PageView = model<IPageView>("PageView", pageViewSchema);
