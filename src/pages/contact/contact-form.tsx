import * as React from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

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

    try {
      const res = await fetch("/api/contact", {
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

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit inquiry");
      }

      setStatus("success");
    } catch (err) {
      console.error("[ContactForm] Submission failed:", err);
      setErrorMessage((err as Error).message || "An unexpected error occurred. Please try again.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6DE] shadow-card text-center">
        <div className="w-14 h-14 rounded-full bg-[#F7F5EF] text-[#66705A] border border-[#E8E6DE] flex items-center justify-center mb-6 mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
          INQUIRY TRANSMITTED
        </span>

        <h3 className="text-2xl font-bold text-[#171A17] mb-3">
          Thank you for reaching out.
        </h3>

        <p className="text-sm text-[#555850] max-w-md mx-auto leading-relaxed mb-6 font-normal">
          Your architectural inquiry has been routed to our technical leadership team. We will review your project parameters and respond within 1 business day.
        </p>

        <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] max-w-sm mx-auto text-xs font-mono text-[#555850] mb-6 space-y-1 text-left">
          <div className="flex justify-between">
            <span>Primary Contact:</span>
            <span className="text-[#171A17] font-semibold">{formData.fullName}</span>
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
          className="px-6 py-2.5 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
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
          <label htmlFor="contactName" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            Full Name <span className="text-[#66705A]">*</span>
          </label>
          <input
            id="contactName"
            required
            type="text"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A]"
          />
        </div>

        {/* Work Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contactEmail" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            Work Email <span className="text-[#66705A]">*</span>
          </label>
          <input
            id="contactEmail"
            required
            type="email"
            placeholder="jane@company.com"
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Company Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="companyName" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            Company / Organization
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="Enterprise Inc."
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A]"
          />
        </div>

        {/* Practice Area */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="practiceArea" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            Practice Interest
          </label>
          <select
            id="practiceArea"
            value={formData.practiceArea}
            onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
            className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#E8E6DE] text-[#171A17] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] cursor-pointer"
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
        <label htmlFor="projectScope" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
          Project Parameters / Architecture Overview <span className="text-[#66705A]">*</span>
        </label>
        <textarea
          id="projectScope"
          required
          rows={4}
          placeholder="Describe your current system constraints, scale targets, or technical goals..."
          value={formData.projectScope}
          onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A]"
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
          className="mt-1 w-4 h-4 rounded border-[#E8E6DE] text-[#66705A] focus:ring-[#66705A] cursor-pointer"
        />
        <label htmlFor="contactConsent" className="text-xs text-[#555850] leading-relaxed cursor-pointer">
          I agree to allow Mylotic Group to store and process my contact details to evaluate this project consultation in accordance with the corporate privacy policy.
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-3 flex items-center justify-between border-t border-[#E8E6DE]">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-8 py-3.5 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <span>{status === "submitting" ? "Transmitting..." : "Send Enterprise Inquiry"}</span>
          <ArrowRight className="w-4 h-4 text-[#A5AC92]" />
        </button>
        <span className="text-[11px] font-mono text-[#73766D]">
          SLA: 1 BUSINESS DAY
        </span>
      </div>
    </form>
  );
}
