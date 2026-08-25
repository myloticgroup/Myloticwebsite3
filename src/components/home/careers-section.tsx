import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { jobOpeningsData } from "@/data/careers";

export function CareersSection() {
  const featuredJobs = jobOpeningsData.slice(0, 3);

  return (
    <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#EAF6FC] text-[#10213B] relative overflow-hidden py-20 sm:py-28">
      {/* Background Dots Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
      <div className="ambient-glow-icy w-96 h-96 -top-10 -right-10 opacity-40" />
      <div className="ambient-glow-white w-80 h-80 -bottom-10 -left-10 opacity-35" />

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D0E3F0] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white border border-[#D0E3F0] text-xs font-mono tracking-widest uppercase text-[#4688B2] font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2]" />
              <span>07 // CAREERS AT MYLOTIC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
              Build What&apos;s Next.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#243B53] max-w-md font-normal leading-relaxed">
            Work with engineers, designers and problem-solvers building systems that matter for modern global enterprises.
          </p>
        </div>

        {/* Featured Open Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Accent Radiant Sheen */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4688B2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0]/70 mb-4">
                  <span className="font-mono text-xs font-bold text-[#4688B2] uppercase tracking-wider">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FB] text-[#182A43] text-xs font-medium uppercase font-mono border border-[#D0E3F0]">
                    {job.workplaceType}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#10213B] mb-2 group-hover:text-[#182A43] transition-colors leading-snug">
                  {job.title}
                </h3>
                <p className="text-xs text-[#243B53] leading-relaxed line-clamp-2 mb-6 font-normal">
                  {job.summary}
                </p>

                <div className="space-y-2 text-xs text-[#5C7690] font-mono p-3.5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#4688B2]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#4688B2]" />
                    <span>{job.experienceLevel} • {job.employmentType}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D0E3F0]/70 flex items-center justify-between">
                <Link
                  to={`/careers/${job.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] group-hover:text-[#4688B2] transition-colors cursor-pointer"
                >
                  <span>VIEW ROLE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#4688B2]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Positions Link Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs hover:shadow-card transition-all duration-300">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5 text-xs font-mono uppercase text-[#4688B2] font-semibold">
              <Users2 className="w-4 h-4 text-[#4688B2]" />
              <span>GLOBAL ENGINEERING TALENT NETWORK</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#10213B]">
              Looking for a different engineering specialization?
            </h4>
            <p className="text-xs sm:text-sm text-[#243B53] mt-1 leading-relaxed font-normal">
              Explore all active open roles or join our talent community network.
            </p>
          </div>

          <Link to="/careers" className="group shrink-0">
            <button
              type="button"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] active:scale-[0.98] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2.5 cursor-pointer shadow-cta-blue hover:shadow-cta-blue-hover border border-white/60"
            >
              <span>Explore All Jobs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#10213B] group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
