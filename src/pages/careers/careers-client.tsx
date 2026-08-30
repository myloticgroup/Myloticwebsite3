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
      <div className="p-6 rounded-2xl bg-white border border-[#E8E6DE] shadow-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Keyword Search */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-[#73766D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by role title, framework, skill (e.g. PyTorch, Kubernetes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E8E6DE] bg-[#F7F5EF] text-sm text-[#171A17] placeholder:text-[#73766D] focus:outline-none focus:border-[#66705A] transition-colors"
            />
          </div>

          {/* Department Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E6DE] bg-[#F7F5EF] text-sm text-[#171A17] focus:outline-none focus:border-[#66705A] transition-colors font-mono"
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
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E6DE] bg-[#F7F5EF] text-sm text-[#171A17] focus:outline-none focus:border-[#66705A] transition-colors font-mono"
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
        <div className="mt-4 pt-4 border-t border-[#E8E6DE] flex items-center justify-between text-xs font-mono text-[#73766D]">
          <span>Showing {filteredJobs.length} active position{filteredJobs.length === 1 ? "" : "s"}</span>
          {(searchQuery || selectedDept !== "All" || selectedType !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDept("All");
                setSelectedType("All");
              }}
              className="text-[#66705A] hover:underline cursor-pointer"
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
              className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE]/70 mb-4">
                  <span className="font-mono text-xs font-bold text-[#66705A] uppercase">
                    {job.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#F7F5EF] border border-[#E8E6DE] text-[#4C5642] text-xs font-medium uppercase font-mono">
                    {job.workplaceType}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#171A17] mb-2 group-hover:text-[#4C5642] transition-colors">
                  {job.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555850] leading-relaxed line-clamp-2 mb-6 font-normal">
                  {job.summary}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#73766D] mb-6">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#66705A]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#66705A]" />
                    <span>{job.experienceLevel} • {job.employmentType}</span>
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1.5">
                  {job.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#F7F5EF] text-[#242622] border border-[#E8E6DE]"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono text-[#73766D]">
                      +{job.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E6DE]/70 flex items-center justify-between">
                <Link
                  to={`/careers/${job.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors"
                >
                  <span>View Role Specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 rounded-2xl bg-white border border-[#E8E6DE] text-center mb-20">
          <p className="text-base text-[#555850] font-normal mb-3">
            No positions currently match your filter criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedDept("All");
              setSelectedType("All");
            }}
            className="text-xs font-mono uppercase font-semibold text-[#66705A] hover:underline cursor-pointer"
          >
            Clear all search filters
          </button>
        </div>
      )}

      {/* 03 Talent Community Intake Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#171A17] text-[#F7F5EF] border border-[#333830] shadow-card">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#242622] text-[#A5AC92] text-xs font-mono uppercase tracking-widest font-semibold mb-4">
            <UserPlus className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>GENERAL TALENT INTAKE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F5EF] mb-3">
            Don&apos;t see an exact match? Join our Talent Network.
          </h3>
          <p className="text-sm text-[#A5AC92] leading-relaxed mb-8">
            We continuously form dedicated engineering pods for new enterprise AI and cloud engagements. Submit your profile for immediate consideration when relevant opportunities emerge.
          </p>

          {talentStatus === "success" ? (
            <div className="p-6 rounded-2xl bg-[#242622] border border-[#4C5642] flex items-center gap-4 text-[#A5AC92]">
              <CheckCircle2 className="w-6 h-6 text-[#A5AC92] shrink-0" />
              <div>
                <h4 className="font-bold text-white text-base">Profile Received &amp; Indexed</h4>
                <p className="text-xs text-[#A5AC92] mt-0.5">
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
                  className="px-4 py-3 rounded-lg bg-[#242622] border border-[#333830] text-sm text-[#F7F5EF] placeholder:text-[#73766D] focus:outline-none focus:border-[#A5AC92] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Personal / Contact Email *"
                  value={talentData.email}
                  onChange={(e) => setTalentData({ ...talentData, email: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-[#242622] border border-[#333830] text-sm text-[#F7F5EF] placeholder:text-[#73766D] focus:outline-none focus:border-[#A5AC92] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Key Technical Skills (e.g. Go, PyTorch, Kubernetes) *"
                  value={talentData.skills}
                  onChange={(e) => setTalentData({ ...talentData, skills: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-[#242622] border border-[#333830] text-sm text-[#F7F5EF] placeholder:text-[#73766D] focus:outline-none focus:border-[#A5AC92] transition-colors"
                />
                <input
                  type="url"
                  placeholder="LinkedIn or GitHub Profile URL"
                  value={talentData.linkedIn}
                  onChange={(e) => setTalentData({ ...talentData, linkedIn: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-[#242622] border border-[#333830] text-sm text-[#F7F5EF] placeholder:text-[#73766D] focus:outline-none focus:border-[#A5AC92] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={talentStatus === "submitting"}
                  className="px-6 py-3.5 rounded-lg bg-[#F7F5EF] hover:bg-white text-[#171A17] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <span>{talentStatus === "submitting" ? "Transmitting..." : "Submit to Talent Pool"}</span>
                  <ArrowRight className="w-4 h-4 text-[#66705A]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
