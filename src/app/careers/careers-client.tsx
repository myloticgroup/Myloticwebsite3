"use client";

import * as React from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, ArrowRight, CheckCircle2, UserPlus } from "lucide-react";
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

  const handleTalentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTalentStatus("submitting");
    setTimeout(() => {
      setTalentStatus("success");
    }, 600);
  };

  return (
    <div>
      {/* 01 Job Search & Filter Controls */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-[#73766D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search roles by title, skill, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all duration-200"
            />
          </div>

          {/* Department Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] cursor-pointer transition-all duration-200"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "All" ? "All Departments" : dept}
                </option>
              ))}
            </select>
          </div>

          {/* Workplace Type Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] cursor-pointer transition-all duration-200"
            >
              {workplaceTypes.map((type) => (
                <option key={type} value={type}>
                  {type === "All" ? "All Workplace Modes" : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 pt-4 border-t border-[#E8E6DE] flex items-center justify-between text-xs font-mono text-[#73766D]">
          <span>SHOWING {filteredJobs.length} OPEN POSITIONS</span>
          {(searchQuery || selectedDept !== "All" || selectedType !== "All") && (
            <button
              type="button"
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
                  href={`/careers/${job.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors"
                >
                  <span>View role & apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#66705A]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 rounded-2xl bg-white border border-[#E8E6DE] text-center mb-20 shadow-xs">
          <p className="text-base text-[#171A17] mb-2 font-medium">No active roles matched your filter criteria.</p>
          <p className="text-xs text-[#73766D] mb-6">Try broadening your search or join our talent community below.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedDept("All");
              setSelectedType("All");
            }}
            className="px-6 py-2.5 rounded-lg bg-[#171A17] text-[#F7F5EF] text-xs font-mono uppercase font-semibold cursor-pointer active:scale-[0.98] transition-transform"
          >
            View All Open Roles
          </button>
        </div>
      )}

      {/* 03 Talent Community Intake Portal */}
      <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E8E6DE] shadow-card">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase text-[#66705A] font-semibold">
            <UserPlus className="w-4 h-4 text-[#66705A]" />
            <span>TALENT COMMUNITY NETWORK</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#171A17] mb-2">
            Don&apos;t see the right role today?
          </h3>
          <p className="text-sm text-[#555850] leading-relaxed font-normal">
            Join our private engineering talent network. When new specialized requisitions open in AI, distributed systems, or cloud architecture, our leadership reaches out directly.
          </p>
        </div>

        {talentStatus === "success" ? (
          <div className="p-6 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] flex items-center gap-3 text-[#4C5642] animate-pop">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-[#66705A]" />
            <span className="text-sm font-medium">
              Profile submitted to our Talent Community. Thank you for connecting with Mylotic Group.
            </span>
          </div>
        ) : (
          <form onSubmit={handleTalentSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold block mb-1.5">
                Full Name *
              </label>
              <input
                required
                type="text"
                placeholder="Jane Doe"
                value={talentData.fullName}
                onChange={(e) => setTalentData({ ...talentData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold block mb-1.5">
                Email Address *
              </label>
              <input
                required
                type="email"
                placeholder="jane@domain.com"
                value={talentData.email}
                onChange={(e) => setTalentData({ ...talentData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold block mb-1.5">
                Primary Skills / Specializations *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Next.js, PyTorch, Kubernetes, Go"
                value={talentData.skills}
                onChange={(e) => setTalentData({ ...talentData, skills: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#242622] font-semibold block mb-1.5">
                LinkedIn / GitHub Profile
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={talentData.linkedIn}
                onChange={(e) => setTalentData({ ...talentData, linkedIn: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] text-[#171A17] placeholder:text-[#73766D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#66705A] transition-all"
              />
            </div>

            <div className="sm:col-span-2 pt-2 flex justify-start">
              <button
                type="submit"
                disabled={talentStatus === "submitting"}
                className="px-8 py-3.5 rounded-lg bg-[#171A17] hover:bg-[#242622] active:scale-[0.98] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer"
              >
                <span>{talentStatus === "submitting" ? "Submitting..." : "Join Talent Network"}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
