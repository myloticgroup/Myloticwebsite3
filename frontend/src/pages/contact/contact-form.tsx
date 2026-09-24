import * as React from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { apiUrl } from "@/lib/api-config";
import { sendEmailViaEmailJS, isEmailJsConfigured } from "@/services/email.service";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    practiceArea: "ai",
    projectScope: "",
    consentGiven: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentGiven) {
      alert("Please check the consent box to proceed.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    let emailSent = false;
    let backendSaved = false;
    let failureDetail = "";

    // 1. Try sending via EmailJS
    if (isEmailJsConfigured()) {
      try {
        const emailRes = await sendEmailViaEmailJS({
          fullName: formData.fullName.trim(),
          email: formData.workEmail.trim(),
          company: formData.companyName.trim() || undefined,
          service: formData.practiceArea,
          message: formData.projectScope.trim(),
          formType: "General Contact Inquiry",
        });
        if (emailRes.success) {
          emailSent = true;
        } else {
          failureDetail = emailRes.message || "Email delivery failed";
        }
      } catch (err) {
        console.warn("[ContactForm] EmailJS send attempt failed:", err);
        failureDetail = (err as Error)?.message || "Email service error";
      }
    }

    // 2. Try sending to Backend API
    try {
      const res = await fetch(apiUrl("/api/contact"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.workEmail.trim(),
          company: formData.companyName.trim() || undefined,
          service: formData.practiceArea,
          message: formData.projectScope.trim(),
          consentGiven: formData.consentGiven,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        backendSaved = true;
      }
    } catch (err) {
      console.warn("[ContactForm] Backend API call failed:", err);
    }

    // If either EmailJS succeeded OR backend saved
    if (emailSent || backendSaved) {
      setStatus("success");
    } else {
      setErrorMessage(
        failureDetail || "Failed to send inquiry. Please check your EmailJS service setup or network connection."
      );
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento text-center">
        <div className="w-14 h-14 rounded-full bg-[#F0F4F8] text-[#66705A] border border-[#E1E7EF] flex items-center justify-center mb-6 mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
          INQUIRY TRANSMITTED
        </span>

        <h3 className="text-2xl font-bold text-[#101418] mb-3">
          Thank you for reaching out.
        </h3>

        <p className="text-sm text-[#5F6872] max-w-md mx-auto leading-relaxed mb-6 font-normal">
          Your architectural inquiry has been routed to our technical leadership team. We will review your project parameters and respond within 1 business day.
        </p>

        <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] max-w-sm mx-auto text-xs font-mono text-[#5F6872] mb-6 space-y-1 text-left">
          <div className="flex justify-between">
            <span>Primary Contact:</span>
            <span className="text-[#101418] font-semibold">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span>Direct Email:</span>
            <span className="text-[#66705A] font-semibold">{formData.workEmail}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              fullName: "",
              workEmail: "",
              companyName: "",
              practiceArea: "ai",
              projectScope: "",
              consentGiven: false,
            });
          }}
          className="px-6 py-3 rounded-xl bg-[#101418] hover:bg-[#1B2026] text-[#EEF3F8] font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
        >
          <span>Send Another Inquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contactName" className="text-xs font-mono uppercase tracking-wider text-[#101418] font-semibold">
            Full Name <span className="text-[#66705A]">*</span>
          </label>
          <input
            id="contactName"
            required
            type="text"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] text-[#101418] placeholder:text-[#7A8490] text-xs sm:text-sm focus:outline-none focus:border-[#66705A] transition-colors"
          />
        </div>

        {/* Work Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contactEmail" className="text-xs font-mono uppercase tracking-wider text-[#101418] font-semibold">
            Work Email <span className="text-[#66705A]">*</span>
          </label>
          <input
            id="contactEmail"
            required
            type="email"
            placeholder="jane@company.com"
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] text-[#101418] placeholder:text-[#7A8490] text-xs sm:text-sm focus:outline-none focus:border-[#66705A] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Company Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="companyName" className="text-xs font-mono uppercase tracking-wider text-[#101418] font-semibold">
            Company / Organization
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="Enterprise Inc."
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] text-[#101418] placeholder:text-[#7A8490] text-xs sm:text-sm focus:outline-none focus:border-[#66705A] transition-colors"
          />
        </div>

        {/* Practice Area */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="practiceArea" className="text-xs font-mono uppercase tracking-wider text-[#101418] font-semibold">
            Practice Interest
          </label>
          <select
            id="practiceArea"
            value={formData.practiceArea}
            onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
            className="w-full px-3.5 py-3 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] text-[#101418] text-xs sm:text-sm focus:outline-none focus:border-[#66705A] transition-colors cursor-pointer font-mono"
          >
            <option value="ai">AI &amp; Intelligent Systems</option>
            <option value="software-engineering">Software Engineering</option>
            <option value="digital-transformation">Cloud &amp; Modernization</option>
            <option value="staffing">Technical Staffing Pods</option>
            <option value="managed-services">Managed Services &amp; SLA</option>
            <option value="edtech-training">EdTech &amp; Corporate Training</option>
          </select>
        </div>
      </div>

      {/* Project Scope / Description */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectScope" className="text-xs font-mono uppercase tracking-wider text-[#101418] font-semibold">
          Project Parameters / Architecture Overview <span className="text-[#66705A]">*</span>
        </label>
        <textarea
          id="projectScope"
          required
          rows={4}
          placeholder="Describe your current system constraints, scale targets, or technical goals..."
          value={formData.projectScope}
          onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] text-[#101418] placeholder:text-[#7A8490] text-xs sm:text-sm focus:outline-none focus:border-[#66705A] transition-colors"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 pt-1">
        <input
          id="contactConsent"
          type="checkbox"
          required
          checked={formData.consentGiven}
          onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
          className="mt-1 w-4 h-4 rounded border-[#E1E7EF] text-[#66705A] focus:ring-[#66705A] cursor-pointer"
        />
        <label htmlFor="contactConsent" className="text-xs text-[#5F6872] leading-relaxed cursor-pointer">
          I agree to allow Mylotic Group to store and process my contact details to evaluate this project consultation in accordance with the corporate privacy policy.
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-3 flex items-center justify-between border-t border-[#E1E7EF]">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-8 py-4 rounded-xl bg-[#101418] hover:bg-[#1B2026] text-[#EEF3F8] font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
        >
          <span>{status === "submitting" ? "Transmitting..." : "Send Enterprise Inquiry"}</span>
          <ArrowRight className="w-4 h-4 text-[#A5AC92]" />
        </button>
        <span className="text-[11px] font-mono text-[#7A8490]">
          SLA: 1 BUSINESS DAY
        </span>
      </div>
    </form>
  );
}
