import { Schema, model, Document } from "mongoose";

/** Powers Company > Leadership page. */
export interface ITeamMember extends Document {
  name: string;
  title: string;
  bio?: string;
  photoUrl?: string;
  linkedIn?: string;
  isCeo: boolean;
  displayOrder: number;
  isPublished: boolean;
}

const teamMemberSchema = new Schema<ITeamMember>(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: String,
    photoUrl: String,
    linkedIn: String,
    isCeo: { type: Boolean, default: false },
    displayOrder: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const TeamMember = model<ITeamMember>("TeamMember", teamMemberSchema);
