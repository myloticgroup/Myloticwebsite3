import * as React from "react";
import { ArrowRight, CheckCircle2, Upload, FileText, AlertCircle } from "lucide-react";
import { JobOpening } from "@/types";
import { applyToJobApi } from "@/services/careers.service";

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
      const targetJobId = job._id || job.id;
      if (!targetJobId) {
        throw new Error("Job requisition identifier missing.");
      }

      const dataPayload = new FormData();
      dataPayload.append("fullName", formData.fullName.trim());
      dataPayload.append("email", formData.email.trim());
      if (formData.phone.trim()) dataPayload.append("phone", formData.phone.trim());
      if (formData.location.trim()) dataPayload.append("location", formData.location.trim());
      if (formData.linkedInUrl.trim()) dataPayload.append("linkedIn", formData.linkedInUrl.trim());
      if (formData.githubUrl.trim()) dataPayload.append("portfolio", formData.githubUrl.trim());
      if (formData.coverNote.trim()) dataPayload.append("coverLetter", formData.coverNote.trim());

      if (resumeFile) {
        dataPayload.append("resume", resumeFile);
      }

      const res = await applyToJobApi(targetJobId, dataPayload);

      if (!res.success) {
        throw new Error(res.message || "Failed to submit application");
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
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6DE] shadow-card text-center animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-[#F7F5EF] text-[#66705A] border border-[#E8E6DE] flex items-center justify-center mb-6 mx-auto animate-pop">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
          STATUS: APPLICATION RECEIVED
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#171A17] mb-3">
          Application Successfully Transmitted
        </h3>

        <p className="text-sm text-[#555850] max-w-lg mx-auto leading-relaxed mb-6 font-normal">
          Thank you for applying for the <strong className="text-[#171A17]">{job.title}</strong> role at Mylotic Group. Our talent acquisition and engineering leads review every submission carefully and will reach out if your profile matches the current requisition requirements.
        </p>

        <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] max-w-md mx-auto text-xs font-mono text-[#555850] mb-8 space-y-1 text-left">
          <div className="flex justify-between">
            <span>Candidate:</span>
            <span className="text-[#171A17] font-semibold">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span>Target Role:</span>
            <span className="text-[#66705A] font-semibold">{job.title}</span>
          </div>
          <div className="flex justify-between">
            <span>Lifecycle State:</span>
            <span className="text-[#4C5642] font-semibold">Under Review</span>
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
          className="px-6 py-3 rounded-lg bg-[#171A17] hover:bg-[#242622] active:scale-[0.98] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-xs"
        >
          <span>Submit Another Requisition</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col gap-6"
    >
      <div className="border-b border-[#E8E6DE] pb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-1">
          CANDIDATE APPLICATION INTAKE
        </span>
        <h3 className="text-2xl font-bold text-[#171A17]">
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
          <label htmlFor="fullName" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            Full Name <span className="text-[#66705A]">*</span>
          </label>
          <input
            id="fullName"
            required
            type="text"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="appEmail" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            Email Address <span className="text-[#66705A]">*</span>
          </label>
          <input
            id="appEmail"
            required
            type="email"
            placeholder="jane@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            Phone Number <span className="text-[#66705A]">*</span>
          </label>
          <input
            id="phone"
            required
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            Current Location <span className="text-[#66705A]">*</span>
          </label>
          <input
            id="location"
            required
            type="text"
            placeholder="City, Country (e.g. Gurugram, India)"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* LinkedIn */}
        <div className="flex flex-col gap-2">
          <label htmlFor="linkedIn" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            LinkedIn Profile
          </label>
          <input
            id="linkedIn"
            type="url"
            placeholder="https://linkedin.com/in/username"
            value={formData.linkedInUrl}
            onChange={(e) => setFormData({ ...formData, linkedInUrl: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
          />
        </div>

        {/* GitHub / Portfolio */}
        <div className="flex flex-col gap-2">
          <label htmlFor="github" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
            GitHub / Technical Portfolio
          </label>
          <input
            id="github"
            type="url"
            placeholder="https://github.com/username"
            value={formData.githubUrl}
            onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
          />
        </div>
      </div>

      {/* Resume File Upload Dropzone */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold flex items-center justify-between">
          <span>Resume / Curriculum Vitae (PDF or DOCX) <span className="text-[#66705A]">*</span></span>
          <span className="text-[10px] text-[#73766D]">MAX FILE SIZE: 10MB</span>
        </label>
        <div className={`p-6 rounded-xl bg-[#F7F5EF] border-2 border-dashed ${
          resumeFile ? "border-[#66705A] bg-[#F1F0EA]" : "border-[#E8E6DE] hover:border-[#66705A]"
        } transition-all flex flex-col items-center justify-center text-center cursor-pointer relative group`}>
          <input
            type="file"
            accept=".pdf,.docx,.doc"
            required
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
          />
          {resumeFile ? (
            <div className="flex items-center gap-3 text-[#4C5642]">
              <div className="p-2 rounded-lg bg-white border border-[#E8E6DE] text-[#66705A] shadow-2xs">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#171A17] block font-mono">{resumeFile.name}</span>
                <span className="text-[10px] text-[#66705A] font-mono uppercase font-semibold">
                  {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB &bull; READY FOR INGESTION
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-[#555850]">
              <div className="p-3 rounded-full bg-white border border-[#E8E6DE] text-[#66705A] group-hover:scale-110 transition-transform shadow-2xs">
                <Upload className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#171A17]">
                Click to select or drag &amp; drop candidate resume
              </span>
              <span className="text-[11px] font-mono text-[#73766D]">
                ACCEPTED FORMATS: .PDF, .DOCX, .DOC
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Cover Note */}
      <div className="flex flex-col gap-2">
        <label htmlFor="coverNote" className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold">
          Why Mylotic Group? (Brief Cover Note)
        </label>
        <textarea
          id="coverNote"
          rows={4}
          placeholder="Tell us about the hardest engineering problem you solved, or why this role aligns with your craft..."
          value={formData.coverNote}
          onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
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
          className="mt-1 w-4 h-4 rounded border-[#E8E6DE] text-[#66705A] focus:ring-[#66705A] cursor-pointer"
        />
        <label htmlFor="consent" className="text-xs text-[#555850] leading-relaxed cursor-pointer">
          I consent to Mylotic Group storing and processing my candidate information for recruitment evaluation in accordance with the corporate privacy policy.
        </label>
      </div>

      {/* Submit Application Button with Micro-interaction */}
      <div className="pt-4 flex items-center justify-between border-t border-[#E8E6DE]">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-7 py-3.5 rounded-lg bg-[#171A17] hover:bg-[#242622] active:scale-[0.98] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs group"
        >
          <span>{status === "submitting" ? "Transmitting Application..." : "Submit Candidate Application"}</span>
          <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
        </button>
        <span className="text-[11px] font-mono text-[#73766D]">
          CONFIDENTIAL INTAKE
        </span>
      </div>
    </form>
  );
}
