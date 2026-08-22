export interface StoredFile {
  key: string;
  url: string;
  fileName: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
}

export interface StorageUploadOptions {
  folder?: string;
  allowedMimeTypes?: string[];
  maxSizeBytes?: number;
}

export interface StorageService {
  uploadFile(
    buffer: Buffer | Uint8Array,
    originalName: string,
    mimeType: string,
    options?: StorageUploadOptions
  ): Promise<StoredFile>;
  deleteFile(key: string): Promise<boolean>;
  getFileUrl(key: string): Promise<string>;
}
