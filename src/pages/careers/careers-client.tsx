import * as React from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Briefcase, ArrowRight, CheckCircle2, UserPlus, AlertCircle } from "lucide-react";
import { JobOpening } from "@/types";

interface CareersClientProps {
  jobs: JobOpening[];
}

export function CareersClient({ jobs }: CareersClientProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedDept, setSelectedDept] = React.useState<string>("All");
  const [selectedType, setSelectedType] = React.useState<string>("All");

  // Talent Network Form State
  const [talentStatus, setTalentStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const [talentError, setTalentError] = React.useState<string | null>(null);
  const [talentData, setTalentData] = React.useState({
    fullName: "",
    email: "",
    skills: "",
    linkedIn: "",
  });

  const departments = ["All", "AI/ML", "Software Engineering", "Cloud", "Frontend", "Design", "Business Development"];
  const workplaceTypes = ["All", "Remote", "Hybrid", "On-site"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.summary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesType = selectedType === "All" || job.workplaceType === selectedType;

    return matchesSearch && matchesDept && matchesType;
  });

  const handleTalentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTalentStatus("submitting");
    setTalentError(null);

    try {
      const res = await fetch("/api/talent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: talentData.fullName.trim(),
          email: talentData.email.trim(),
          skills: talentData.skills.trim(),
          linkedinUrl: talentData.linkedIn.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit talent network application.");
      }

      setTalentStatus("success");
    } catch (err: unknown) {
      setTalentError((err as Error).message || "Submission failed. Please check your inputs and try again.");
      setTalentStatus("idle");
    }
  };

  return (
    <div>
      {/* 01 Interactive Search & Filter Controls */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-white/80 shadow-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Keyword Search */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-[#5C7690] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by role title, framework, skill (e.g. PyTorch, Kubernetes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#D0E3F0] bg-[#F0F7FB] text-sm text-[#10213B] placeholder:text-[#5C7690] focus:outline-none focus:border-[#4688B2] focus:bg-white transition-colors"
            />
          </div>

          {/* Department Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#D0E3F0] bg-[#F0F7FB] text-sm text-[#10213B] focus:outline-none focus:border-[#4688B2] focus:bg-white transition-colors font-mono"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "All" ? "All Disciplines" : dept}
                </option>
              ))}
            </select>
          </div>

          {/* Workplace Type Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#D0E3F0] bg-[#F0F7FB] text-sm text-[#10213B] focus:outline-none focus:border-[#4688B2] focus:bg-white transition-colors font-mono"
            >
              {workplaceTypes.map((type) => (
                <option key={type} value={type}>
                  {type === "All" ? "All Locations" : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 pt-4 border-t border-[#D0E3F0]/70 flex items-center justify-between text-xs font-mono text-[#5C7690]">
          <span>Showing {filteredJobs.length} active position{filteredJobs.length === 1 ? "" : "s"}</span>
          {(searchQuery || selectedDept !== "All" || selectedType !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDept("All");
                setSelectedType("All");
              }}
              className="text-[#4688B2] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* 02 Jobs List Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0]/70 mb-4">
                  <span className="font-mono text-xs font-bold text-[#4688B2] uppercase">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FB] border border-[#D0E3F0] text-[#182A43] text-xs font-medium uppercase font-mono">
                    {job.workplaceType}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#10213B] mb-2 group-hover:text-[#182A43] transition-colors">
                  {job.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed line-clamp-2 mb-6 font-normal">
                  {job.summary}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#5C7690] mb-6">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#4688B2]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#4688B2]" />
                    <span>{job.experienceLevel} • {job.employmentType}</span>
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1.5">
                  {job.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0]"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#5C7690]">
                      +{job.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D0E3F0]/70 flex items-center justify-between">
                <Link
                  to={`/careers/${job.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] group-hover:text-[#4688B2] transition-colors cursor-pointer"
                >
                  <span>View Role Specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#4688B2]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 rounded-3xl bg-white border border-white/80 text-center mb-20">
          <p className="text-base text-[#243B53] font-normal mb-3">
            No positions currently match your filter criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedDept("All");
              setSelectedType("All");
            }}
            className="text-xs font-mono uppercase font-semibold text-[#4688B2] hover:underline cursor-pointer"
          >
            Clear all search filters
          </button>
        </div>
      )}

      {/* 03 Talent Community Intake Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#10213B] via-[#0D1C33] to-[#081220] text-white border border-white/10 shadow-card">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#8CC8E8] text-xs font-mono uppercase tracking-widest font-semibold mb-4 border border-white/15">
            <UserPlus className="w-3.5 h-3.5 text-[#8CC8E8]" />
            <span>GENERAL TALENT INTAKE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Don&apos;t see an exact match? Join our Talent Network.
          </h3>
          <p className="text-sm text-[#A2BACB] leading-relaxed mb-8">
            We continuously form dedicated engineering pods for new enterprise AI and cloud engagements. Submit your profile for immediate consideration when relevant opportunities emerge.
          </p>

          {talentStatus === "success" ? (
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-4 text-[#8CC8E8]">
              <CheckCircle2 className="w-6 h-6 text-[#8CC8E8] shrink-0" />
              <div>
                <h4 className="font-bold text-white text-base">Profile Received &amp; Indexed</h4>
                <p className="text-xs text-[#D8ECF7] mt-0.5">
                  Our recruitment and engineering leads will reach out when tailored roles align with your capabilities.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleTalentSubmit} className="space-y-4">
              {talentError && (
                <div className="p-4 rounded-xl bg-red-950/60 border border-red-800/80 text-red-200 text-xs flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{talentError}</span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Legal Name *"
                  value={talentData.fullName}
                  onChange={(e) => setTalentData({ ...talentData, fullName: e.target.value })}
                  className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-[#748D9E] focus:outline-none focus:border-[#8CC8E8] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Personal / Contact Email *"
                  value={talentData.email}
                  onChange={(e) => setTalentData({ ...talentData, email: e.target.value })}
                  className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-[#748D9E] focus:outline-none focus:border-[#8CC8E8] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Key Technical Skills (e.g. Go, PyTorch, Kubernetes) *"
                  value={talentData.skills}
                  onChange={(e) => setTalentData({ ...talentData, skills: e.target.value })}
                  className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-[#748D9E] focus:outline-none focus:border-[#8CC8E8] transition-colors"
                />
                <input
                  type="url"
                  placeholder="LinkedIn or GitHub Profile URL"
                  value={talentData.linkedIn}
                  onChange={(e) => setTalentData({ ...talentData, linkedIn: e.target.value })}
                  className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-[#748D9E] focus:outline-none focus:border-[#8CC8E8] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={talentStatus === "submitting"}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer shadow-cta-blue hover:shadow-cta-blue-hover disabled:opacity-50 border border-white/60"
                >
                  <span>{talentStatus === "submitting" ? "Transmitting..." : "Submit to Talent Pool"}</span>
                  <ArrowRight className="w-4 h-4 text-[#10213B]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
