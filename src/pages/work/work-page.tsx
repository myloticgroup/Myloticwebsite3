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
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
        <Container size="default">
          <Breadcrumb items={[{ label: "Selected Work" }]} className="mb-8 text-[#73766D]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold">
              <FileText className="w-3.5 h-3.5 text-[#66705A]" />
              <span>Client Deliverables &amp; Case Studies</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              Selected Work &amp; <br />
              <span className="gradient-text-olive font-black">Technical Impact</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              We partner with forward-thinking enterprises to deliver mission-critical software, deploy production AI models, and optimize cloud architectures under demanding operational environments.
            </p>
          </div>
        </Container>
      </Section>

      {/* Case Studies Gallery or Verified Confidentiality Protocol */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          {hasCaseStudies ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudiesData.map((study) => (
                <div
                  key={study.id}
                  className="p-8 sm:p-10 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all duration-200"
                >
                  <div>
                    <span className="text-xs font-mono uppercase text-[#66705A] font-semibold tracking-wider">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl font-bold text-[#171A17] mt-2 mb-3">
                      {study.title}
                    </h2>
                    <p className="text-sm text-[#555850] leading-relaxed font-normal mb-6">
                      {study.summary}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#E8E6DE] flex items-center justify-between">
                    <Link
                      to={`/work/${study.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] transition-colors"
                    >
                      <span>Read Technical Narrative</span>
                      <ArrowUpRight className="w-4 h-4 text-[#66705A]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] p-8 sm:p-12 lg:p-16 shadow-card">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-white border border-[#E8E6DE] text-xs font-mono uppercase tracking-wider text-[#4C5642] font-semibold">
                  <Lock className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Enterprise Privacy &amp; Non-Disclosure Governance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#171A17] tracking-tight leading-snug">
                  Case Studies in Release Preparation
                </h2>
                <p className="mt-4 text-base text-[#555850] leading-relaxed font-normal">
                  To adhere strictly to enterprise non-disclosure agreements and IP governance, our in-depth case studies, architectural blueprints, and performance metrics are published following formal client verification and data sanitization.
                </p>

                <div className="mt-8 pt-6 border-t border-[#E8E6DE] grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#73766D] font-mono">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#66705A] shrink-0" />
                    <span>AI Model Integration Studies • In Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#66705A] shrink-0" />
                    <span>Distributed Microservices Migrations • In Review</span>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] transition-colors group"
                  >
                    <span>Request Confidential Capability Walkthrough</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#66705A]" />
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
