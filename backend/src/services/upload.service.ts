import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Resolve relative to this file (server/src/services -> server/uploads), so the
// upload location is stable no matter what directory the process is started from.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.resolve(__dirname, "../../uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

const allowedMime = ["image/png", "image/jpeg", "image/webp", "image/svg+xml", "application/pdf"];

export const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB
  fileFilter: (_req, file, cb) => {
    if (!allowedMime.includes(file.mimetype)) {
      return cb(new Error("Unsupported file type"));
    }
    cb(null, true);
  },
});

export function fileUrl(filename: string) {
  return `/uploads/${filename}`;
}

// Exported so server.ts serves the exact same directory multer writes to.
export { uploadDir };
