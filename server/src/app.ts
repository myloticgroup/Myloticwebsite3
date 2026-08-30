import express from "express";
import cors from "cors";
import path from "path";
import { apiRouter } from "./routes/index.js";
import { errorHandler } from "./middleware/error-handler.js";
import { config } from "./config/env.js";

export const app = express();

// Enable CORS for client
app.use(
  cors({
    origin: config.clientUrl || "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Admin-Api-Key"],
    credentials: true,
  })
);

// Body parsing
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Static file serving for uploads in development
const uploadsDir = path.join(process.cwd(), "public", "uploads");
app.use("/uploads", express.static(uploadsDir));

// Health check
app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Mylotic Backend API",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api", apiRouter);

// Global Error Handler
app.use(errorHandler);
