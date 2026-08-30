import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { logger } from "./utils/logger.js";
import apiRoutes from "./routes/index.js";
import { notFoundHandler, errorHandler } from "./middlewares/errorHandler.middleware.js";
import { uploadDir } from "./services/upload.service.js";

const app = express();

app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files (case study/blog images, resumes) statically — same
// directory multer writes to in upload.service.ts, so this always stays in sync.
app.use("/uploads", express.static(uploadDir));

app.get("/api/health", (_req, res) => res.json({ success: true, message: "ok" }));

app.use("/api", apiRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

async function start() {
  await connectDB();
  app.listen(Number(env.PORT), () => {
    logger.info(`Server running on http://localhost:${env.PORT} [${env.NODE_ENV}]`);
  });
}

start();
