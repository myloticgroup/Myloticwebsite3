import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  Calendar,
  CheckCircle2,
  Cpu,
  ArrowLeft,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { jobOpeningsData } from "@/data/careers";
import { JobApplicationForm } from "./application-form";

export function JobDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const job = jobOpeningsData.find((j) => j.slug === slug);

  if (!job) {
    return (
      <Section spacing="spacious" className="py-24 text-center bg-[#EAF6FC] min-h-[60vh] flex items-center">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#10213B]">Job Requisition Not Found</h1>
          <p className="mt-4 text-[#243B53]">The requested career position does not exist or has been closed.</p>
          <Link to="/careers" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#4688B2] hover:underline">
            &larr; Back to all careers
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* 01 Editorial Requisition Hero */}
      <Section
        spacing="spacious"
        className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden"
      >
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Careers", href: "/careers" },
              { label: job.title },
            ]}
            className="mb-8 text-[#5C7690]"
          />

          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#4688B2] hover:text-[#10213B] transition-colors mb-6 group font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all open roles</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-white border border-white/80 text-[#10213B] text-xs font-mono uppercase font-semibold shadow-2xs">
                {job.department}
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-white/80 text-[#243B53] text-xs font-mono uppercase shadow-2xs">
                {job.workplaceType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              {job.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#5C7690]">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-white/80 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#4688B2]" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-white/80 shadow-2xs">
                <Briefcase className="w-3.5 h-3.5 text-[#4688B2]" />
                <span>
                  {job.experienceLevel} • {job.employmentType}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-white/80 shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-[#4688B2]" />
                <span>Posted {job.postedAt}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Job Details & Application Form Split Layout */}
      <Section
        spacing="spacious"
        className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-20 sm:py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Role Details & Requirements (Span 7) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Summary */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-white/80 shadow-card">
                <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
                  ROLE OVERVIEW
                </span>
                <p className="text-base text-[#243B53] leading-relaxed font-normal">
                  {job.summary}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-white/80 shadow-card">
                <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-4">
                  PRIMARY RESPONSIBILITIES
                </span>
                <div className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#243B53] p-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-white/80 shadow-card">
                <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-4">
                  REQUIREMENTS &amp; PREREQUISITES
                </span>
                <div className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#243B53] p-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nice to have */}
              {job.niceToHave && job.niceToHave.length > 0 && (
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-white/80 shadow-card">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-4">
                    NICE TO HAVE / ADVANTAGES
                  </span>
                  <div className="space-y-3">
                    {job.niceToHave.map((nth, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-sm text-[#243B53] p-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0]"
                      >
                        <span className="text-[#4688B2] font-bold">•</span>
                        <span className="leading-relaxed">{nth}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tag Group */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-white/80 shadow-card">
                <span className="font-mono text-xs uppercase tracking-widest text-[#5C7690] font-semibold block mb-3">
                  PRIMARY TECHNICAL SKILLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] flex items-center gap-1.5 shadow-2xs hover:border-[#4688B2]/40 transition-colors"
                    >
                      <Cpu className="w-3 h-3 text-[#4688B2]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Application Form (Span 5) */}
            <div className="lg:col-span-5 sticky top-28">
              <JobApplicationForm job={job} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default JobDetailPage;
