import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, FileText, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { caseStudiesData } from "@/data/case-studies";
import { solutionsData } from "@/data/solutions";

export function WorkPage() {
  const hasCaseStudies = caseStudiesData && caseStudiesData.length > 0;

  const relatedSolutions = solutionsData.slice(0, 3).map((sol) => ({
    title: sol.title,
    description: sol.shortDescription,
    href: `/solutions/${sol.slug}`,
    category: "RELEVANT CAPABILITY",
  }));

  return (
    <>
      {/* Editorial Work Header */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb items={[{ label: "Selected Work" }]} className="mb-8 text-[#5C7690]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <FileText className="w-3.5 h-3.5 text-[#4688B2]" />
              <span>CLIENT DELIVERABLES &amp; CASE STUDIES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              Selected Work &amp; <br />
              <span className="gradient-text-olive font-black">Technical Impact</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              We partner with forward-thinking enterprises to deliver mission-critical software, deploy production AI models, and optimize cloud architectures under demanding operational environments.
            </p>
          </div>
        </Container>
      </Section>

      {/* Case Studies Gallery or Verified Confidentiality Protocol */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
        <div className="ambient-glow-icy w-96 h-96 -bottom-10 -right-10 opacity-40" />

        <Container size="default" className="relative z-10">
          {hasCaseStudies ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudiesData.map((study) => (
                <div
                  key={study.id}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    <span className="text-xs font-mono uppercase text-[#4688B2] font-bold tracking-wider">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl font-bold text-[#10213B] mt-2 mb-3 group-hover:text-[#182A43] transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-sm text-[#243B53] leading-relaxed font-normal mb-6">
                      {study.summary}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#D0E3F0]/70 flex items-center justify-between">
                    <Link
                      to={`/work/${study.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#10213B] hover:text-[#4688B2] transition-colors group/link cursor-pointer"
                    >
                      <span>Read Technical Narrative</span>
                      <ArrowUpRight className="w-4 h-4 text-[#4688B2] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-white border border-white/80 p-8 sm:p-12 lg:p-16 shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#F0F7FB] border border-[#D0E3F0] text-xs font-mono uppercase tracking-wider text-[#10213B] font-semibold shadow-2xs">
                  <Lock className="w-3.5 h-3.5 text-[#4688B2]" />
                  <span>ENTERPRISE PRIVACY &amp; NON-DISCLOSURE GOVERNANCE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10213B] tracking-tight leading-snug">
                  Case Studies in Release Preparation
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#243B53] leading-relaxed font-normal">
                  To adhere strictly to enterprise non-disclosure agreements and IP governance, our in-depth case studies, architectural blueprints, and performance metrics are published following formal client verification and data sanitization.
                </p>

                <div className="mt-8 pt-6 border-t border-[#D0E3F0]/70 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5C7690] font-mono">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-2xs">
                    <FileText className="w-4 h-4 text-[#4688B2] shrink-0" />
                    <span className="font-medium text-[#10213B]">AI Model Integration Studies • In Review</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-2xs">
                    <FileText className="w-4 h-4 text-[#4688B2] shrink-0" />
                    <span className="font-medium text-[#10213B]">Distributed Microservices Migrations • In Review</span>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-cta-blue hover:shadow-cta-blue-hover group cursor-pointer border border-white/60"
                  >
                    <span>Request Confidential Capability Walkthrough</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#10213B]" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* Contextual Navigation */}
      <RelatedContent
        title="Explore Our Core Engineering Solutions"
        eyebrow="CAPABILITIES & PRACTICES"
        links={relatedSolutions}
      />
    </>
  );
}

export default WorkPage;
