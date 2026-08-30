import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { jobOpeningsData } from "@/data/careers";

export function CareersSection() {
  const featuredJobs = jobOpeningsData.slice(0, 3);

  return (
    <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F1F0EA] text-[#171A17] relative overflow-hidden py-20 sm:py-28">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E6DE] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#66705A] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>07 / CAREERS AT MYLOTIC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A17] leading-tight">
              Build What&apos;s Next.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555850] max-w-md font-normal leading-relaxed">
            Work with engineers, designers and problem-solvers building systems that matter for modern global enterprises.
          </p>
        </div>

        {/* Featured Open Roles Grid with Subtle Hover Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE]/70 mb-4">
                  <span className="font-mono text-xs font-bold text-[#66705A] uppercase">
                    {job.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#F7F5EF] text-[#4C5642] text-xs font-medium uppercase font-mono border border-[#E8E6DE]">
                    {job.workplaceType}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#171A17] mb-2 group-hover:text-[#4C5642] transition-colors">
                  {job.title}
                </h3>
                <p className="text-xs text-[#555850] leading-relaxed line-clamp-2 mb-6 font-normal">
                  {job.summary}
                </p>

                <div className="space-y-1.5 text-xs text-[#73766D] font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#66705A]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#66705A]" />
                    <span>{job.experienceLevel} • {job.employmentType}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E6DE]/70 flex items-center justify-between">
                <Link
                  to={`/careers/${job.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors"
                >
                  <span>VIEW ROLE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#66705A]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Positions Link */}
        <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs hover:shadow-card transition-all duration-200">
          <div>
            <h4 className="text-base font-bold text-[#171A17]">
              Looking for a different engineering specialization?
            </h4>
            <p className="text-xs text-[#555850] mt-0.5">
              Explore all active open roles or join our talent community network.
            </p>
          </div>

          <Link to="/careers" className="group">
            <button
              type="button"
              className="px-6 py-3 rounded-lg bg-[#171A17] text-[#F7F5EF] hover:bg-[#242622] active:scale-[0.98] font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Explore All Jobs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
