/**
 * Input sanitization utility for Express backend security
 * Prevents HTML injection, script tags, and normalizes string payloads.
 */

export function sanitizeString(input: unknown): string {
  if (typeof input !== "string") {
    return "";
  }

  return input
    // Strip <script>...</script> tags and contents
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    // Strip <style>...</style> tags and contents
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    // Strip <iframe>...</iframe> tags and contents
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    // Strip remaining HTML tags
    .replace(/<[^>]*>?/gm, "")
    // Normalize excessive whitespace
    .replace(/\s+/g, " ")
    // Remove dangerous control characters while preserving valid newlines/tabs
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim();
}

export function sanitizeOptionalString(input: unknown): string | undefined {
  if (input === undefined || input === null || input === "") {
    return undefined;
  }
  const sanitized = sanitizeString(input);
  return sanitized.length > 0 ? sanitized : undefined;
}

export function sanitizeEmail(email: unknown): string {
  if (typeof email !== "string") {
    return "";
  }
  return email.toLowerCase().trim();
}

export function sanitizePhone(phone: unknown): string | undefined {
  if (typeof phone !== "string" || !phone.trim()) {
    return undefined;
  }
  return phone.replace(/[^\d+()\s-]/g, "").trim();
}

export function sanitizeUrl(url: unknown): string | undefined {
  if (typeof url !== "string" || !url.trim()) {
    return undefined;
  }
  const trimmed = url.trim();
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.href;
    }
    return undefined;
  } catch {
    if (/^[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+$/.test(trimmed)) {
      return trimmed;
    }
    return undefined;
  }
}
