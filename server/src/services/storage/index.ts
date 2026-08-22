import { StorageService } from "./storage.interface.js";
import { LocalStorageService } from "./local-storage.service.js";
import { S3StorageService } from "./s3-storage.service.js";

function createStorageService(): StorageService {
  const s3 = new S3StorageService();
  if (s3.isConfigured()) {
    return s3;
  }
  return new LocalStorageService();
}

export const storageService: StorageService = createStorageService();

export * from "./storage.interface.js";
export * from "./local-storage.service.js";
export * from "./s3-storage.service.js";
