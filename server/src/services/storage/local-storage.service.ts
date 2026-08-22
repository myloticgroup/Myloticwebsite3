import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { StorageService, StoredFile, StorageUploadOptions } from "./storage.interface.js";

const DEFAULT_ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const FORBIDDEN_EXTENSIONS = [
  ".exe",
  ".bat",
  ".cmd",
  ".sh",
  ".bin",
  ".js",
  ".ts",
  ".mjs",
  ".php",
  ".py",
  ".pl",
  ".jar",
  ".vbs",
  ".scr",
  ".msi",
  ".html",
  ".htm",
  ".svg",
];

const DEFAULT_MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export class LocalStorageService implements StorageService {
  private baseDir: string;
  private publicPrefix: string;

  constructor() {
    this.baseDir = path.join(process.cwd(), "public", "uploads");
    this.publicPrefix = "/uploads";
  }

  async uploadFile(
    buffer: Buffer | Uint8Array,
    originalName: string,
    mimeType: string,
    options: StorageUploadOptions = {}
  ): Promise<StoredFile> {
    const maxSizeBytes = options.maxSizeBytes || DEFAULT_MAX_SIZE_BYTES;
    const allowedMimes = options.allowedMimeTypes || DEFAULT_ALLOWED_MIME_TYPES;

    if (buffer.length > maxSizeBytes) {
      throw new Error(
        `File size exceeds maximum allowed limit of ${maxSizeBytes / (1024 * 1024)}MB.`
      );
    }

    if (!allowedMimes.includes(mimeType.toLowerCase())) {
      throw new Error(
        `Invalid file type "${mimeType}". Allowed types: ${allowedMimes.join(", ")}.`
      );
    }

    const parsedExt = path.extname(originalName).toLowerCase();
    if (!parsedExt || FORBIDDEN_EXTENSIONS.includes(parsedExt)) {
      throw new Error(
        `Forbidden file extension "${parsedExt}". Executable and script uploads are strictly prohibited.`
      );
    }

    const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
    if (!ALLOWED_EXTENSIONS.includes(parsedExt)) {
      throw new Error(
        `Invalid file extension "${parsedExt}". Allowed extensions: ${ALLOWED_EXTENSIONS.join(", ")}.`
      );
    }

    const nodeBuf = Buffer.from(buffer);
    if (nodeBuf.length < 4) {
      throw new Error("Invalid file content: file is too small or empty.");
    }

    const isWindowsExecutable = nodeBuf[0] === 0x4d && nodeBuf[1] === 0x5a;
    const isLinuxExecutable =
      nodeBuf[0] === 0x7f && nodeBuf[1] === 0x45 && nodeBuf[2] === 0x4c && nodeBuf[3] === 0x46;
    const isScriptShebang = nodeBuf[0] === 0x23 && nodeBuf[1] === 0x21;
    if (isWindowsExecutable || isLinuxExecutable || isScriptShebang) {
      throw new Error("Executable and binary scripts are strictly prohibited.");
    }

    const isPdf = nodeBuf.subarray(0, 5).toString("ascii").startsWith("%PDF");
    const isDocxOrZip =
      nodeBuf[0] === 0x50 &&
      nodeBuf[1] === 0x4b &&
      (nodeBuf[2] === 0x03 || nodeBuf[2] === 0x05);
    const isLegacyDoc =
      nodeBuf[0] === 0xd0 &&
      nodeBuf[1] === 0xcf &&
      nodeBuf[2] === 0x11 &&
      nodeBuf[3] === 0xe0;

    if (!isPdf && !isDocxOrZip && !isLegacyDoc) {
      throw new Error(
        "File content signature does not match expected document format (PDF or Word Document)."
      );
    }

    const sanitizedOriginalName = path
      .basename(originalName)
      .replace(/[^a-zA-Z0-9._-]/g, "_");

    const folder = options.folder
      ? options.folder.replace(/[^a-zA-Z0-9_-]/g, "")
      : "resumes";
    const uniqueId = crypto.randomBytes(16).toString("hex");
    const uniqueFileName = `${uniqueId}-${sanitizedOriginalName}`;
    const targetDir = path.join(this.baseDir, folder);
    const targetFilePath = path.join(targetDir, uniqueFileName);

    await fs.mkdir(targetDir, { recursive: true });
    await fs.writeFile(targetFilePath, Buffer.from(buffer));

    const key = `${folder}/${uniqueFileName}`;
    const url = `${this.publicPrefix}/${folder}/${uniqueFileName}`;

    return {
      key,
      url,
      fileName: uniqueFileName,
      originalName: sanitizedOriginalName,
      mimeType,
      sizeBytes: buffer.length,
    };
  }

  async deleteFile(key: string): Promise<boolean> {
    try {
      const safeKey = path.normalize(key).replace(/^(\.\.(\/|\\|$))+/, "");
      const fullPath = path.join(this.baseDir, safeKey);
      await fs.unlink(fullPath);
      return true;
    } catch {
      return false;
    }
  }

  async getFileUrl(key: string): Promise<string> {
    const safeKey = path.normalize(key).replace(/^(\.\.(\/|\\|$))+/, "");
    return `${this.publicPrefix}/${safeKey.replace(/\\/g, "/")}`;
  }
}
