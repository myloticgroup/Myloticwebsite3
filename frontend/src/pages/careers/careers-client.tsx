import * as React from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Briefcase, ArrowRight, CheckCircle2, UserPlus, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { JobOpening } from "@/types";
import { joinTalentPoolApi } from "@/services/careers.service";

interface CareersClientProps {
  jobs: JobOpening[];
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export function CareersClient({ jobs, isLoading = false, error = null, onRetry }: CareersClientProps) {
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
    const summaryText = job.summary || job.description || "";
    const skillsList = job.skills || [];

    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skillsList.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      summaryText.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesType = selectedType === "All" || (job.workplaceType && job.workplaceType === selectedType);

    return matchesSearch && matchesDept && matchesType;
  });

  const handleTalentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTalentStatus("submitting");
    setTalentError(null);

    try {
      const res = await joinTalentPoolApi({
        fullName: talentData.fullName.trim(),
        email: talentData.email.trim(),
        primarySkill: talentData.skills.trim(),
      });

      if (!res.success) {
        throw new Error(res.message || "Failed to submit talent network application.");
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
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Keyword Search */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-[#7A8490] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by role title, framework, skill (e.g. PyTorch, Kubernetes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E1E7EF] bg-[#F0F4F8] text-sm text-[#101418] placeholder:text-[#7A8490] focus:outline-none focus:border-[#66705A] transition-colors"
            />
          </div>

          {/* Department Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E1E7EF] bg-[#F0F4F8] text-sm text-[#101418] focus:outline-none focus:border-[#66705A] transition-colors font-mono"
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
              className="w-full px-4 py-3 rounded-xl border border-[#E1E7EF] bg-[#F0F4F8] text-sm text-[#101418] focus:outline-none focus:border-[#66705A] transition-colors font-mono"
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
        <div className="mt-4 pt-4 border-t border-[#E1E7EF] flex items-center justify-between text-xs font-mono text-[#7A8490]">
          <span>Showing {filteredJobs.length} active position{filteredJobs.length === 1 ? "" : "s"}</span>
          {(searchQuery || selectedDept !== "All" || selectedType !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDept("All");
                setSelectedType("All");
              }}
              className="text-[#66705A] hover:underline cursor-pointer font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Loading Skeleton State */}
      {isLoading ? (
        <div className="p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-16 text-center space-y-4">
          <Loader2 className="w-8 h-8 text-[#66705A] animate-spin mx-auto" />
          <p className="text-sm font-mono text-[#5F6872]">Fetching live open requisitions from backend CMS...</p>
        </div>
      ) : error ? (
        /* Error State */
        <div className="p-8 rounded-3xl bg-red-50 border border-red-200 text-red-800 mb-16 shadow-bento flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
            <div>
              <h4 className="font-bold text-base text-red-900">Unable to load active positions</h4>
              <p className="text-xs text-red-700 mt-0.5">{error}</p>
            </div>
          </div>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 rounded-xl bg-red-800 text-white font-mono text-xs font-semibold flex items-center gap-2 hover:bg-red-900 transition-colors cursor-pointer shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>
          )}
        </div>
      ) : jobs.length === 0 ? (
        /* Empty State — Zero Open Jobs in CMS */
        <div className="p-12 rounded-3xl bg-white border border-[#E1E7EF] text-center mb-16 shadow-bento">
          <Briefcase className="w-10 h-10 text-[#66705A] mx-auto mb-4 opacity-60" />
          <h3 className="text-xl font-bold text-[#101418] mb-2">No Open Positions Right Now</h3>
          <p className="text-sm text-[#5F6872] max-w-md mx-auto leading-relaxed mb-6 font-normal">
            There are currently no active job requisitions listed on our board. We continuously form new engineering pods — join our Talent Network below to be considered for upcoming roles!
          </p>
        </div>
      ) : filteredJobs.length > 0 ? (
        /* 02 Jobs List Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredJobs.map((job) => {
            const keyId = job._id || job.id || job.slug;
            const summaryText = job.summary || job.description || "";
            const skillsList = job.skills || [];
            const workplace = job.workplaceType || "Hybrid";
            const expLevel = job.experienceLevel || "Senior";
            const empType = job.employmentType || "Full-time";

            return (
              <div
                key={keyId}
                className="p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-bento-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4">
                    <span className="font-mono text-xs font-bold text-[#66705A] uppercase">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#F0F4F8] border border-[#E1E7EF] text-[#4C5642] text-xs font-semibold uppercase font-mono">
                      {workplace}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#101418] mb-2 group-hover:text-[#4C5642] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6872] leading-relaxed line-clamp-2 mb-6 font-normal">
                    {summaryText}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#7A8490] mb-6">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#66705A]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#66705A]" />
                      <span>{expLevel} • {empType}</span>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  {skillsList.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {skillsList.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#F0F4F8] text-[#101418] border border-[#E1E7EF]"
                        >
                          {skill}
                        </span>
                      ))}
                      {skillsList.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono text-[#7A8490]">
                          +{skillsList.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-[#E1E7EF] flex items-center justify-between">
                  <Link
                    to={`/careers/${job.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#101418] group-hover:text-[#66705A] transition-colors"
                  >
                    <span>View Role Specifications</span>
                    <ArrowRight className="w-4 h-4 text-[#66705A] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Filter No Match State */
        <div className="p-12 rounded-3xl bg-white border border-[#E1E7EF] text-center mb-16 shadow-bento">
          <p className="text-base text-[#5F6872] font-normal mb-3">
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

      {/* 03 Talent Community Intake Bento Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#101418] text-[#F7F9FB] border border-[#232A32] shadow-bento">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2026] text-[#A5AC92] text-xs font-mono uppercase tracking-widest font-semibold mb-4 border border-[#232A32]">
            <UserPlus className="w-3.5 h-3.5 text-[#66705A]" />
            <span>GENERAL TALENT INTAKE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Don&apos;t see an exact match? Join our Talent Network.
          </h3>
          <p className="text-sm text-[#9AA4AF] leading-relaxed mb-8">
            We continuously form dedicated engineering pods for new enterprise AI and cloud engagements. Submit your profile for immediate consideration when relevant opportunities emerge.
          </p>

          {talentStatus === "success" ? (
            <div className="p-6 rounded-2xl bg-[#1B2026] border border-[#66705A]/40 flex items-center gap-4 text-[#A5AC92]">
              <CheckCircle2 className="w-6 h-6 text-[#66705A] shrink-0" />
              <div>
                <h4 className="font-bold text-white text-base">Profile Received &amp; Indexed</h4>
                <p className="text-xs text-[#9AA4AF] mt-0.5">
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
                  className="px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-sm text-[#EEF3F8] placeholder:text-[#7A8490] focus:outline-none focus:border-[#66705A] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Personal / Contact Email *"
                  value={talentData.email}
                  onChange={(e) => setTalentData({ ...talentData, email: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-sm text-[#EEF3F8] placeholder:text-[#7A8490] focus:outline-none focus:border-[#66705A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Key Technical Skills (e.g. Go, PyTorch, Kubernetes) *"
                  value={talentData.skills}
                  onChange={(e) => setTalentData({ ...talentData, skills: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-sm text-[#EEF3F8] placeholder:text-[#7A8490] focus:outline-none focus:border-[#66705A] transition-colors"
                />
                <input
                  type="url"
                  placeholder="LinkedIn or GitHub Profile URL"
                  value={talentData.linkedIn}
                  onChange={(e) => setTalentData({ ...talentData, linkedIn: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-[#1B2026] border border-[#2E3640] text-sm text-[#EEF3F8] placeholder:text-[#7A8490] focus:outline-none focus:border-[#66705A] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={talentStatus === "submitting"}
                  className="px-7 py-4 rounded-xl bg-[#7CC7EA] hover:bg-white text-[#101418] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
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

