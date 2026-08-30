import path from "path";
import crypto from "crypto";
import { StorageService, StoredFile, StorageUploadOptions } from "./storage.interface.js";
import { config } from "../../config/env.js";

export class S3StorageService implements StorageService {
  private endpoint?: string;
  private bucket?: string;
  private region: string;
  private accessKey?: string;
  private secretKey?: string;
  private publicUrlBase?: string;

  constructor() {
    this.endpoint = config.storageEndpoint;
    this.bucket = config.storageBucket;
    this.region = config.storageRegion;
    this.accessKey = config.storageAccessKey;
    this.secretKey = config.storageSecretKey;
    this.publicUrlBase = config.storagePublicUrl;
  }

  isConfigured(): boolean {
    return Boolean(this.bucket && this.accessKey && this.secretKey);
  }

  async uploadFile(
    buffer: Buffer | Uint8Array,
    originalName: string,
    mimeType: string,
    options: StorageUploadOptions = {}
  ): Promise<StoredFile> {
    if (!this.isConfigured()) {
      throw new Error(
        "S3 Storage is not configured. Please set STORAGE_BUCKET, STORAGE_ACCESS_KEY, and STORAGE_SECRET_KEY in environment variables."
      );
    }

    const sanitizedOriginalName = path
      .basename(originalName)
      .replace(/[^a-zA-Z0-9._-]/g, "_");
    const folder = options.folder
      ? options.folder.replace(/[^a-zA-Z0-9_-]/g, "")
      : "resumes";
    const uniqueId = crypto.randomBytes(16).toString("hex");
    const key = `${folder}/${uniqueId}-${sanitizedOriginalName}`;

    console.info(
      `[Storage Service] Uploading ${key} (${buffer.length} bytes, ${mimeType}) to bucket ${this.bucket}`
    );

    const url = this.publicUrlBase
      ? `${this.publicUrlBase}/${key}`
      : `https://${this.bucket}.s3.${this.region}.amazonaws.com/${key}`;

    return {
      key,
      url,
      fileName: `${uniqueId}-${sanitizedOriginalName}`,
      originalName: sanitizedOriginalName,
      mimeType,
      sizeBytes: buffer.length,
    };
  }

  async deleteFile(key: string): Promise<boolean> {
    if (!this.isConfigured()) {
      return false;
    }
    console.info(`[Storage Service] Deleting ${key} from bucket ${this.bucket}`);
    return true;
  }

  async getFileUrl(key: string): Promise<string> {
    if (this.publicUrlBase) {
      return `${this.publicUrlBase}/${key}`;
    }
    return `https://${this.bucket}.s3.${this.region}.amazonaws.com/${key}`;
  }
}
