import { EdTechConsultationLead } from "@/types/consultation.types";

/**
 * EdTech Consultation Lead Ingestion Pipeline
 * Connects directly to Express backend API (/api/consultations).
 */
export async function submitEdTechConsultationLead(
  lead: Omit<EdTechConsultationLead, "id" | "source" | "status" | "submittedAt">
): Promise<{ success: boolean; leadId: string; message: string }> {
  try {
    const payload = {
      ...lead,
      organization: lead.company,
      role: lead.jobTitle,
      educationRequirement: lead.requirement,
    };

    const res = await fetch("/api/consultations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result.message || "Failed to submit consultation request");
    }

    return {
      success: true,
      leadId: result.data?.id || `lead-${Date.now()}`,
      message: result.message || "Consultation request successfully logged and queued for architectural review.",
    };
  } catch (err) {
    console.error("[submitEdTechConsultationLead] Error:", err);
    throw err;
  }
}
