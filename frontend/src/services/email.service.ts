import emailjs from "@emailjs/browser";

export interface ContactEmailPayload {
  fullName: string;
  email: string;
  company?: string;
  service?: string;
  phone?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  formType?: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

export const isEmailJsConfigured = (): boolean => {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
};

/**
 * Sends inquiry / lead details via EmailJS.
 * Compatible with standard EmailJS templates using variable names like
 * {{from_name}}, {{from_email}}, {{company}}, {{service}}, {{message}}, {{phone}}
 */
export async function sendEmailViaEmailJS(payload: ContactEmailPayload): Promise<{ success: boolean; message?: string }> {
  if (!isEmailJsConfigured()) {
    console.warn(
      "[EmailJS] Service credentials not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env or Vercel Environment Variables."
    );
    return {
      success: false,
      message: "EmailJS is not configured with valid credentials.",
    };
  }

  const templateParams: Record<string, unknown> = {
    from_name: payload.fullName,
    fullName: payload.fullName,
    from_email: payload.email,
    email: payload.email,
    reply_to: payload.email,
    company: payload.company || "Not specified",
    company_name: payload.company || "Not specified",
    service: payload.service || "General Inquiry",
    practice_area: payload.service || "General Inquiry",
    phone: payload.phone || "Not provided",
    message: payload.message || "No message provided",
    project_scope: payload.message || "No message provided",
    preferred_date: payload.preferredDate || "N/A",
    preferred_time: payload.preferredTime || "N/A",
    form_type: payload.formType || "Contact Inquiry",
    submitted_at: new Date().toLocaleString(),
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      {
        publicKey: PUBLIC_KEY,
      }
    );

    if (response.status === 200 || response.text === "OK") {
      return { success: true };
    }

    return {
      success: false,
      message: `EmailJS responded with status: ${response.status} (${response.text})`,
    };
  } catch (error: any) {
    console.error("[EmailJS] Send error:", error);
    const detail = error?.text || error?.message || (typeof error === "string" ? error : JSON.stringify(error));
    return {
      success: false,
      message: detail || "Failed to send email via EmailJS",
    };
  }
}

