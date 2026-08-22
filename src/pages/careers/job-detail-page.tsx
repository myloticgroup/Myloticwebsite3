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
      <Section spacing="spacious" className="py-24 text-center">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#171A17]">Job Requisition Not Found</h1>
          <p className="mt-4 text-[#555850]">The requested career position does not exist or has been closed.</p>
          <Link to="/careers" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#66705A]">
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
        className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-24 relative overflow-hidden"
      >
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Careers", href: "/careers" },
              { label: job.title },
            ]}
            className="mb-8 text-[#73766D]"
          />

          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#66705A] hover:text-[#4C5642] transition-colors mb-6 group font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all open roles</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-[#E8E6DE] text-[#4C5642] text-xs font-mono uppercase font-semibold">
                {job.department}
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#E8E6DE] text-[#555850] text-xs font-mono uppercase">
                {job.workplaceType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              {job.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#73766D]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#66705A]" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#66705A]" />
                <span>
                  {job.experienceLevel} • {job.employmentType}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#66705A]" />
                <span>Posted {job.postedAt}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Job Details & Application Form Split Layout */}
      <Section
        spacing="spacious"
        className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-16 sm:py-24"
      >
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Role Details & Requirements (Span 7) */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              {/* Summary */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                  ROLE OVERVIEW
                </span>
                <p className="text-base text-[#555850] leading-relaxed font-normal">
                  {job.summary}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  PRIMARY RESPONSIBILITIES
                </span>
                <div className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#555850]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  REQUIREMENTS &amp; PREREQUISITES
                </span>
                <div className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#555850]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#4C5642] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nice to have */}
              {job.niceToHave && job.niceToHave.length > 0 && (
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                    NICE TO HAVE / ADVANTAGES
                  </span>
                  <div className="space-y-3">
                    {job.niceToHave.map((nth, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-sm text-[#73766D]"
                      >
                        <span className="text-[#66705A] font-bold">•</span>
                        <span className="leading-relaxed">{nth}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tag Group */}
              <div className="pt-6 border-t border-[#E8E6DE]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#73766D] font-semibold block mb-3">
                  PRIMARY TECHNICAL SKILLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-[#F7F5EF] text-[#242622] border border-[#E8E6DE] flex items-center gap-1.5"
                    >
                      <Cpu className="w-3 h-3 text-[#66705A]" />
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
