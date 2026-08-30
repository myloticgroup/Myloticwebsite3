import dotenv from "dotenv";
import path from "path";

// Load .env from workspace root
dotenv.config({ path: path.resolve(process.cwd(), ".env") });
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

export const config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  clientUrl: process.env.CORS_ORIGIN || process.env.CLIENT_URL || "http://localhost:5173",
  mongodbUri: process.env.MONGODB_URI || "",
  adminApiKey: process.env.ADMIN_API_KEY || "dev-admin-key",
  emailFrom: process.env.EMAIL_FROM || "notifications@mylotic.com",
  notificationEmail: process.env.NOTIFICATION_EMAIL || "leads@mylotic.com",
  recruitmentEmail: process.env.RECRUITMENT_EMAIL || "careers@mylotic.com",
  storageBucket: process.env.STORAGE_BUCKET || "",
  storageEndpoint: process.env.STORAGE_ENDPOINT || "",
  storageRegion: process.env.STORAGE_REGION || "us-east-1",
  storageAccessKey: process.env.STORAGE_ACCESS_KEY || "",
  storageSecretKey: process.env.STORAGE_SECRET_KEY || "",
  storagePublicUrl: process.env.STORAGE_PUBLIC_URL || "",
};
