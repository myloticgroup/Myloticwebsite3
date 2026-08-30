import { Schema, model, Document } from "mongoose";

export interface IBlogPost extends Document {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImageUrl?: string;
  author: string;
  tags: string[];
  isPublished: boolean;
  publishedAt?: Date;
}

const blogPostSchema = new Schema<IBlogPost>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImageUrl: String,
    author: { type: String, required: true },
    tags: [String],
    isPublished: { type: Boolean, default: false },
    publishedAt: Date,
  },
  { timestamps: true }
);

export const BlogPost = model<IBlogPost>("BlogPost", blogPostSchema);
