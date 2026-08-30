import mongoose, { Document, Schema } from "mongoose";

export type ContactLeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "CLOSED";

export interface IContactLead extends Document {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  consentGiven: boolean;
  status: ContactLeadStatus;
  ipAddress?: string;
  userAgent?: string;
  notes?: string;
  submittedAt: Date;
  updatedAt: Date;
}

const ContactLeadSchema = new Schema<IContactLead>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    service: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    consentGiven: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "CLOSED"],
      default: "NEW",
      index: true,
    },
    ipAddress: { type: String },
    userAgent: { type: String },
    notes: { type: String },
    submittedAt: { type: Date, default: Date.now, index: true },
  },
  {
    timestamps: true,
  }
);

// Virtual for clean JSON serialization
ContactLeadSchema.set("toJSON", {
  virtuals: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform: (_doc, ret: any) => {
    ret.id = ret._id?.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export const ContactLeadModel = mongoose.model<IContactLead>("ContactLead", ContactLeadSchema);
