import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertCircle, GraduationCap, Calendar, Clock } from "lucide-react";
import { EdTechRequirement } from "@/types/consultation.types";
import { submitEdTechConsultationLead } from "@/services/consultation-lead.service";

const requirementOptions: EdTechRequirement[] = [
  "Corporate Training",
  "Technical Training",
  "EdTech Platform",
  "LMS / Learning Portal",
  "AI-powered Learning",
  "Skill Development",
  "Training Automation",
  "Other",
];

const timeSlotOptions = [
  "Morning (09:00 AM - 12:00 PM)",
  "Afternoon (12:00 PM - 04:00 PM)",
  "Evening (04:00 PM - 07:00 PM)",
  "Flexible / Any Time",
];

export function EducationConsultationForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const [submittedLeadId, setSubmittedLeadId] = React.useState<string | null>(null);

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    location: "",
    requirement: "Corporate Training" as EdTechRequirement,
    preferredDate: "",
    preferredTime: "Flexible / Any Time",
    message: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Minimum selectable date is today
  const todayStr = React.useMemo(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }, []);

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (formData.phone && !/^[0-9+\s\-().]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number format.";
    }

    if (formData.preferredDate && formData.preferredDate < todayStr) {
      errs.preferredDate = "Consultation date cannot be in the past.";
    }

    if (!formData.requirement) {
      errs.requirement = "Please select what you are looking for.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await submitEdTechConsultationLead({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        company: formData.company.trim() || undefined,
        jobTitle: formData.jobTitle.trim() || undefined,
        location: formData.location.trim() || undefined,
        requirement: formData.requirement,
        preferredDate: formData.preferredDate || undefined,
        preferredTime: formData.preferredTime || undefined,
        message: formData.message.trim() || undefined,
      });

      setSubmittedLeadId(response.leadId);
      setStatus("success");
    } catch {
      setErrors({ form: "An error occurred while submitting your consultation request. Please try again." });
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-white/80 shadow-card text-center animate-fade-in max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-[#F0F7FB] text-[#4688B2] border border-[#D0E3F0] flex items-center justify-center mb-6 mx-auto animate-pop">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
          STATUS: CONFIRMED
        </span>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-3">
          CONSULTATION REQUEST RECEIVED
        </h2>

        <p className="text-base text-[#243B53] leading-relaxed mb-6 font-normal">
          Thank you. Our team will review your requirements and get in touch to schedule your free consultation.
        </p>

        {submittedLeadId && (
          <div className="p-4 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] max-w-md mx-auto text-xs font-mono text-[#243B53] mb-8 space-y-1.5 text-left">
            <div className="flex justify-between">
              <span>Lead Reference:</span>
              <span className="text-[#10213B] font-semibold">{submittedLeadId}</span>
            </div>
            <div className="flex justify-between">
              <span>Domain:</span>
              <span className="text-[#4688B2] font-semibold">{formData.requirement}</span>
            </div>
            {formData.preferredDate && (
              <div className="flex justify-between">
                <span>Preferred Date:</span>
                <span className="text-[#10213B]">{formData.preferredDate}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-[#182A43] font-semibold">New / Review Queued</span>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/solutions/edtech-training">
            <button
              type="button"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer shadow-cta-blue border border-white/60"
            >
              <span>BACK TO EDTECH &amp; TRAINING</span>
              <ArrowRight className="w-4 h-4 text-[#10213B]" />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-8 sm:p-12 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col gap-6 max-w-3xl mx-auto"
    >
      <div className="border-b border-[#D0E3F0]/70 pb-4">
        <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full bg-[#F0F7FB] text-xs font-mono uppercase tracking-widest text-[#4688B2] font-semibold border border-[#D0E3F0]">
          <GraduationCap className="w-4 h-4 text-[#4688B2]" />
          <span>EDUCATION CONSULTATION INTAKE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B]">
          Schedule a Free EdTech Consultation
        </h2>
        <p className="text-xs sm:text-sm text-[#243B53] mt-1 font-normal">
          Let&apos;s discuss your training, learning platform, or education technology requirements.
        </p>
      </div>

      {errors.form && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errors.form}</span>
        </div>
      )}

      {/* Row 1: Full Name & Work Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Full Name <span className="text-[#4688B2]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: "" });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border ${
              errors.fullName ? "border-red-500 focus:ring-red-500" : "border-[#D0E3F0] focus:ring-[#4688B2]"
            } text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all`}
          />
          {errors.fullName && <span className="text-[11px] text-red-600 font-medium">{errors.fullName}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Work Email <span className="text-[#4688B2]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@company.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-[#D0E3F0] focus:ring-[#4688B2]"
            } text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all`}
          />
          {errors.email && <span className="text-[11px] text-red-600 font-medium">{errors.email}</span>}
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: "" });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border ${
              errors.phone ? "border-red-500 focus:ring-red-500" : "border-[#D0E3F0] focus:ring-[#4688B2]"
            } text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all`}
          />
          {errors.phone && <span className="text-[11px] text-red-600 font-medium">{errors.phone}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Company / Organization
          </label>
          <input
            id="company"
            type="text"
            placeholder="Acme Corp / Institute"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Row 3: Job Title & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="jobTitle" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Job Title
          </label>
          <input
            id="jobTitle"
            type="text"
            placeholder="VP of Engineering / L&amp;D Director"
            value={formData.jobTitle}
            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="location" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="City, Country"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Row 4: What are you looking for? * */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="requirement" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
          What are you looking for? <span className="text-[#4688B2]">*</span>
        </label>
        <select
          id="requirement"
          required
          value={formData.requirement}
          onChange={(e) => setFormData({ ...formData, requirement: e.target.value as EdTechRequirement })}
          className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white cursor-pointer transition-all font-mono"
        >
          {requirementOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Row 5: Preferred Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="preferredDate" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#4688B2]" />
            <span>Preferred Consultation Date</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            min={todayStr}
            value={formData.preferredDate}
            onChange={(e) => {
              setFormData({ ...formData, preferredDate: e.target.value });
              if (errors.preferredDate) setErrors({ ...errors, preferredDate: "" });
            }}
            className={`w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border ${
              errors.preferredDate ? "border-red-500 focus:ring-red-500" : "border-[#D0E3F0] focus:ring-[#4688B2]"
            } text-[#10213B] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all cursor-pointer`}
          />
          {errors.preferredDate && <span className="text-[11px] text-red-600 font-medium">{errors.preferredDate}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="preferredTime" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#4688B2]" />
            <span>Preferred Time Slot</span>
          </label>
          <select
            id="preferredTime"
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white cursor-pointer transition-all font-mono"
          >
            {timeSlotOptions.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 6: Message / Requirements */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
          Message / Requirements
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Briefly describe your team size, current technical challenges, or target implementation timeline..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
        />
      </div>

      {/* Submit CTA */}
      <div className="pt-4 border-t border-[#D0E3F0]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-cta-blue hover:shadow-cta-blue-hover border border-white/60"
        >
          <span>{status === "submitting" ? "Processing Booking..." : "BOOK FREE CONSULTATION"}</span>
          <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1 transition-transform" />
        </button>

        <span className="text-[11px] font-mono text-[#5C7690]">
          NO COMMITMENT REQUIRED &bull; 100% CONFIDENTIAL
        </span>
      </div>
    </form>
  );
}
