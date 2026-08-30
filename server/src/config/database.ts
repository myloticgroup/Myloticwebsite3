import mongoose from "mongoose";
import { config } from "./env.js";

let isConnected = false;

export async function connectDatabase(): Promise<boolean> {
  if (isConnected) {
    return true;
  }

  if (!config.mongodbUri) {
    console.warn(
      "[Database] MONGODB_URI is not configured in environment variables. Services will operate in local development mode."
    );
    return false;
  }

  try {
    const conn = await mongoose.connect(config.mongodbUri, {
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = conn.connection.readyState === 1;
    console.info(`[Database] MongoDB Connected successfully: ${conn.connection.host}`);
    return isConnected;
  } catch (err) {
    console.warn(
      `[Database] MongoDB connection failed (${(err as Error).message}). Services will operate in resilient development mode.`
    );
    return false;
  }
}

export function isDbConnected(): boolean {
  return isConnected && mongoose.connection.readyState === 1;
}

export async function disconnectDatabase(): Promise<void> {
  if (isConnected) {
    await mongoose.disconnect();
    isConnected = false;
    console.info("[Database] MongoDB Disconnected.");
  }
}
