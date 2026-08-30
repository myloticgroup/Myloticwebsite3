import mongoose, { Document, Schema } from "mongoose";

export type ConsultationLeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "CLOSED";

export interface IConsultationLead extends Document {
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  role?: string;
  educationRequirement: string;
  preferredDate?: string;
  preferredTime?: string;
  preferredContactMethod?: string;
  location?: string;
  message?: string;
  status: ConsultationLeadStatus;
  ipAddress?: string;
  userAgent?: string;
  notes?: string;
  submittedAt: Date;
  updatedAt: Date;
}

const ConsultationLeadSchema = new Schema<IConsultationLead>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    phone: { type: String, trim: true },
    organization: { type: String, trim: true },
    role: { type: String, trim: true },
    educationRequirement: { type: String, required: true, trim: true, index: true },
    preferredDate: { type: String },
    preferredTime: { type: String },
    preferredContactMethod: { type: String },
    location: { type: String },
    message: { type: String },
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

ConsultationLeadSchema.set("toJSON", {
  virtuals: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform: (_doc, ret: any) => {
    ret.id = ret._id?.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export const ConsultationLeadModel = mongoose.model<IConsultationLead>(
  "ConsultationLead",
  ConsultationLeadSchema
);
