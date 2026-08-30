import * as React from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  Calendar,
  CheckCircle2,
  Cpu,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getJobBySlugApi } from "@/services/careers.service";
import { JobOpening } from "@/types";
import { JobApplicationForm } from "./application-form";

export function JobDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = React.useState<JobOpening | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    setError(null);
    getJobBySlugApi(slug)
      .then((res) => {
        if (res.success && res.data) {
          setJob(res.data);
        } else {
          setError(res.message || "Job requisition not found.");
        }
      })
      .catch((err: unknown) => {
        console.error("[JobDetailPage] Error fetching job:", err);
        setError((err as Error).message || "Failed to load job details.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <Section spacing="spacious" className="py-24 text-center bg-[#7CC7EA]">
        <Container size="default">
          <Loader2 className="w-8 h-8 text-[#66705A] animate-spin mx-auto mb-4" />
          <p className="text-sm font-mono text-[#5F6872]">Loading role specifications from backend CMS...</p>
        </Container>
      </Section>
    );
  }

  if (!job || error) {
    return (
      <Section spacing="spacious" className="py-24 text-center bg-[#7CC7EA]">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#101418]">Job Requisition Not Found</h1>
          <p className="mt-4 text-[#5F6872]">{error || "The requested career position does not exist or has been closed."}</p>
          <Link to="/careers" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#66705A]">
            &larr; Back to all open roles
          </Link>
        </Container>
      </Section>
    );
  }

  const summaryText = job.summary || job.description || "";
  const responsibilities = job.responsibilities || [];
  const requirements = job.requirements || [];
  const niceToHave = job.niceToHave || [];
  const skills = job.skills || [];
  const workplace = job.workplaceType || "Hybrid";
  const expLevel = job.experienceLevel || "Senior";
  const empType = job.employmentType || "Full-time";
  const postedDate = job.postedAt || (job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "Recently");

  return (
    <>
      {/* 01 Bento Requisition Hero */}
      <Section
        spacing="spacious"
        className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden"
      >
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Careers", href: "/careers" },
              { label: job.title },
            ]}
            className="mb-6 text-[#5F6872]"
          />

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
            <Link
              to="/careers"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#66705A] hover:text-[#4C5642] transition-colors mb-6 group font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all open roles</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-[#4C5642] text-xs font-mono uppercase font-semibold">
                {job.department}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-[#5F6872] text-xs font-mono uppercase font-medium">
                {workplace}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101418] leading-[1.12]">
              {job.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#7A8490]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#66705A]" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#66705A]" />
                <span>
                  {expLevel} • {empType}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#66705A]" />
                <span>Posted {postedDate}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Job Details & Application Form Split Layout */}
      <Section
        spacing="spacious"
        className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24"
      >
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Role Details & Requirements Bento Container (Span 7) */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col gap-10">
              {/* Summary */}
              {summaryText && (
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                    ROLE OVERVIEW
                  </span>
                  <p className="text-base text-[#5F6872] leading-relaxed font-normal">
                    {summaryText}
                  </p>
                </div>
              )}

              {/* Responsibilities */}
              {responsibilities.length > 0 && (
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                    PRIMARY RESPONSIBILITIES
                  </span>
                  <div className="space-y-3">
                    {responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-sm text-[#5F6872]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {requirements.length > 0 && (
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                    REQUIREMENTS &amp; PREREQUISITES
                  </span>
                  <div className="space-y-3">
                    {requirements.map((req, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-sm text-[#5F6872]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#4C5642] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Nice to have */}
              {niceToHave.length > 0 && (
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                    NICE TO HAVE / ADVANTAGES
                  </span>
                  <div className="space-y-3">
                    {niceToHave.map((nth, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-sm text-[#7A8490]"
                      >
                        <span className="text-[#66705A] font-bold">•</span>
                        <span className="leading-relaxed">{nth}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tag Group */}
              {skills.length > 0 && (
                <div className="pt-6 border-t border-[#E1E7EF]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#7A8490] font-semibold block mb-3">
                    PRIMARY TECHNICAL SKILLS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#F0F4F8] text-[#101418] border border-[#E1E7EF] flex items-center gap-1.5"
                      >
                        <Cpu className="w-3.5 h-3.5 text-[#66705A]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
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

