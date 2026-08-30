/**
 * Base URL of the backend API.
 *
 * - Local dev (default): leave VITE_API_URL unset. Vite's dev server proxy
 *   (see vite.config.ts) forwards "/api" and "/uploads" to http://localhost:5000,
 *   so relative paths just work and there's no CORS to worry about.
 *
 * - Separate servers / production: set VITE_API_URL to the backend's full
 *   origin, e.g. VITE_API_URL="https://api.mylotic.com". Every request below
 *   will then call that origin directly. Make sure the backend's CLIENT_URL
 *   env var is set to this frontend's origin so CORS allows it.
 */
export const API_BASE_URL: string = import.meta.env.VITE_API_URL || "";

export function apiUrl(path: string): string {
  return `${API_BASE_URL}${path}`;
}
