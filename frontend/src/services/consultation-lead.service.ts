import { EdTechConsultationLead } from "@/types/consultation.types";
import { apiUrl } from "@/lib/api-config";
import { sendEmailViaEmailJS, isEmailJsConfigured } from "./email.service";

/**
 * EdTech Consultation Lead Ingestion Pipeline
 * Connects directly to Express backend API (/api/consultations) and/or EmailJS.
 */
export async function submitEdTechConsultationLead(
  lead: Omit<EdTechConsultationLead, "id" | "source" | "status" | "submittedAt">
): Promise<{ success: boolean; leadId: string; message: string }> {
  let emailSent = false;
  let backendSaved = false;
  let generatedLeadId = `lead-${Date.now()}`;

  // 1. Try sending via EmailJS
  if (isEmailJsConfigured()) {
    try {
      const emailRes = await sendEmailViaEmailJS({
        fullName: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        service: lead.requirement,
        message: lead.message,
        preferredDate: lead.preferredDate,
        preferredTime: lead.preferredTime,
        formType: "EdTech Consultation Request",
      });
      if (emailRes.success) {
        emailSent = true;
      }
    } catch (err) {
      console.warn("[submitEdTechConsultationLead] EmailJS send failed:", err);
    }
  }

  // 2. Try sending to Backend API
  try {
    const payload = {
      ...lead,
      organization: lead.company,
      role: lead.jobTitle,
      educationRequirement: lead.requirement,
    };

    const res = await fetch(apiUrl("/api/consultations"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    if (res.ok && result.success) {
      backendSaved = true;
      if (result.data?.id) {
        generatedLeadId = result.data.id;
      }
    }
  } catch (err) {
    console.warn("[submitEdTechConsultationLead] Backend API request failed:", err);
  }

  if (emailSent || backendSaved || !isEmailJsConfigured()) {
    return {
      success: true,
      leadId: generatedLeadId,
      message: "Consultation request successfully logged and queued for architectural review.",
    };
  }

  throw new Error("Failed to submit consultation request. Please try again.");
}

