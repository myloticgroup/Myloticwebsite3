import * as React from "react";
import { ArrowRight, CheckCircle2, Upload, FileText, AlertCircle } from "lucide-react";
import { JobOpening } from "@/types";

interface JobApplicationFormProps {
  job: JobOpening;
}

export function JobApplicationForm({ job }: JobApplicationFormProps) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [resumeFile, setResumeFile] = React.useState<File | null>(null);
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedInUrl: "",
    githubUrl: "",
    coverNote: "",
    consentGiven: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentGiven) {
      alert("Please agree to the data processing consent to submit your application.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const dataPayload = new FormData();
      dataPayload.append("jobId", job.id);
      dataPayload.append("jobTitle", job.title);
      dataPayload.append("fullName", formData.fullName.trim());
      dataPayload.append("email", formData.email.trim());
      dataPayload.append("phone", formData.phone.trim());
      dataPayload.append("location", formData.location.trim());
      if (formData.linkedInUrl.trim()) dataPayload.append("linkedinUrl", formData.linkedInUrl.trim());
      if (formData.githubUrl.trim()) dataPayload.append("githubUrl", formData.githubUrl.trim());
      if (formData.coverNote.trim()) dataPayload.append("coverNote", formData.coverNote.trim());
      dataPayload.append("consentGiven", "true");

      if (resumeFile) {
        dataPayload.append("resume", resumeFile);
      }

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: dataPayload,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Failed to submit application");
      }

      setStatus("success");
    } catch (err) {
      console.error("[JobApplicationForm] Submission error:", err);
      setErrorMessage((err as Error).message || "An unexpected error occurred. Please try again.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card text-center animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-[#F0F7FB] text-[#4688B2] border border-[#D0E3F0] flex items-center justify-center mb-6 mx-auto animate-pop">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
          STATUS: APPLICATION RECEIVED
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-3">
          Application Successfully Transmitted
        </h3>

        <p className="text-sm text-[#243B53] max-w-lg mx-auto leading-relaxed mb-6 font-normal">
          Thank you for applying for the <strong className="text-[#10213B]">{job.title}</strong> role at Mylotic Group. Our talent acquisition and engineering leads review every submission carefully and will reach out if your profile matches the current requisition requirements.
        </p>

        <div className="p-4 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] max-w-md mx-auto text-xs font-mono text-[#243B53] mb-8 space-y-1 text-left">
          <div className="flex justify-between">
            <span>Candidate:</span>
            <span className="text-[#10213B] font-semibold">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span>Target Role:</span>
            <span className="text-[#4688B2] font-semibold">{job.title}</span>
          </div>
          <div className="flex justify-between">
            <span>Lifecycle State:</span>
            <span className="text-[#182A43] font-semibold">Under Review</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setResumeFile(null);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              location: "",
              linkedInUrl: "",
              githubUrl: "",
              coverNote: "",
              consentGiven: false,
            });
          }}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer shadow-cta-blue border border-white/60"
        >
          <span>Submit Another Requisition</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col gap-6"
    >
      <div className="border-b border-[#D0E3F0]/70 pb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-1">
          CANDIDATE APPLICATION INTAKE
        </span>
        <h3 className="text-2xl font-bold text-[#10213B]">
          Apply for {job.title}
        </h3>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Full Name <span className="text-[#4688B2]">*</span>
          </label>
          <input
            id="fullName"
            required
            type="text"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="appEmail" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Email Address <span className="text-[#4688B2]">*</span>
          </label>
          <input
            id="appEmail"
            required
            type="email"
            placeholder="jane@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Phone Number <span className="text-[#4688B2]">*</span>
          </label>
          <input
            id="phone"
            required
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            Current Location <span className="text-[#4688B2]">*</span>
          </label>
          <input
            id="location"
            required
            type="text"
            placeholder="City, Country (e.g. Gurugram, India)"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* LinkedIn */}
        <div className="flex flex-col gap-2">
          <label htmlFor="linkedIn" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            LinkedIn Profile
          </label>
          <input
            id="linkedIn"
            type="url"
            placeholder="https://linkedin.com/in/username"
            value={formData.linkedInUrl}
            onChange={(e) => setFormData({ ...formData, linkedInUrl: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
          />
        </div>

        {/* GitHub / Portfolio */}
        <div className="flex flex-col gap-2">
          <label htmlFor="github" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
            GitHub / Technical Portfolio
          </label>
          <input
            id="github"
            type="url"
            placeholder="https://github.com/username"
            value={formData.githubUrl}
            onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Resume File Upload */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
          Resume / Curriculum Vitae (PDF or DOCX) <span className="text-[#4688B2]">*</span>
        </label>
        <div className="p-6 rounded-2xl bg-[#F0F7FB] border border-dashed border-[#D0E3F0] hover:border-[#4688B2] transition-colors flex flex-col items-center justify-center text-center cursor-pointer relative">
          <input
            type="file"
            accept=".pdf,.docx,.doc"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          />
          {resumeFile ? (
            <div className="flex items-center gap-2 text-[#182A43]">
              <FileText className="w-5 h-5 text-[#4688B2]" />
              <span className="text-sm font-semibold">{resumeFile.name}</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-[#5C7690]">
              <Upload className="w-6 h-6 text-[#4688B2]" />
              <span className="text-xs">Click to browse or drop your resume here (Max 10MB)</span>
            </div>
          )}
        </div>
      </div>

      {/* Cover Note */}
      <div className="flex flex-col gap-2">
        <label htmlFor="coverNote" className="text-xs font-mono uppercase tracking-wider text-[#182A43] font-semibold">
          Why Mylotic Group? (Brief Cover Note)
        </label>
        <textarea
          id="coverNote"
          rows={4}
          placeholder="Tell us about the hardest engineering problem you solved, or why this role aligns with your craft..."
          value={formData.coverNote}
          onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#10213B] placeholder:text-[#5C7690] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4688B2] focus:bg-white transition-all"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 pt-2">
        <input
          id="consent"
          type="checkbox"
          required
          checked={formData.consentGiven}
          onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
          className="mt-1 w-4 h-4 rounded border-[#D0E3F0] text-[#4688B2] focus:ring-[#4688B2] cursor-pointer"
        />
        <label htmlFor="consent" className="text-xs text-[#243B53] leading-relaxed cursor-pointer">
          I consent to Mylotic Group storing and processing my candidate information for recruitment evaluation in accordance with the corporate privacy policy.
        </label>
      </div>

      {/* Submit Application Button with Micro-interaction */}
      <div className="pt-4 flex items-center justify-between border-t border-[#D0E3F0]/70">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer shadow-cta-blue hover:shadow-cta-blue-hover group disabled:opacity-50 border border-white/60"
        >
          <span>{status === "submitting" ? "Transmitting Application..." : "Submit Candidate Application"}</span>
          <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1 transition-transform" />
        </button>
        <span className="text-[11px] font-mono text-[#5C7690]">
          CONFIDENTIAL INTAKE
        </span>
      </div>
    </form>
  );
}
