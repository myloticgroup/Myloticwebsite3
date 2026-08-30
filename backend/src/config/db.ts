import mongoose from "mongoose";
import { env } from "./env.js";
import { logger } from "../utils/logger.js";

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(env.MONGO_URI);
    logger.info(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (err) {
    logger.error("MongoDB connection failed", err);
    process.exit(1);
  }
}
