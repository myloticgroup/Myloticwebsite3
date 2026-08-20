import * as React from "react";
import Link from "next/link";
import { ArrowRight, Lock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { caseStudiesData } from "@/data/case-studies";

export function WorkSection() {
  const hasCaseStudies = caseStudiesData && caseStudiesData.length > 0;

  const caseEngagements = [
    {
      caseNumber: "01",
      sector: "FINANCIAL SERVICES",
      title: "High-Frequency Transaction Settlement Gateway",
      tagline: "Sub-5ms latency transaction clearing with automated reconciliation pipelines.",
      problem: "Legacy batch settlement architecture created operational bottlenecks as international transaction volume scaled.",
      approach: "Engineered distributed event-driven microservices with deterministic failover, gRPC communication, and replicated state machines.",
      outcome: "99.999% processing reliability achieved with 68% latency reduction during peak trade volatility.",
      technologies: ["Distributed APIs", "PostgreSQL ACID", "Microservices", "Observability"],
      status: "SOC2 RESTRICTED",
    },
    {
      caseNumber: "02",
      sector: "ENTERPRISE EDTECH",
      title: "AI-Powered Adaptive Assessment & Analytics Engine",
      tagline: "Real-time semantic student evaluation and vector-indexed learning pathways.",
      problem: "Static evaluation workflows failed to provide contextual student diagnostics and real-time intervention signals.",
      approach: "Deployed vector embeddings, isolated tenant Next.js runtimes, and real-time streaming telemetry pipelines.",
      outcome: "Zero model drift and personalized assessment feedback delivered across thousands of concurrent learners.",
      technologies: ["Applied AI", "Vector Indexing", "Next.js", "Python"],
      status: "ENTERPRISE CLEARANCE",
    },
    {
      caseNumber: "03",
      sector: "GLOBAL DIGITAL MEDIA",
      title: "Multi-Region Cloud Ingestion & Edge Delivery Mesh",
      tagline: "Global media ingestion pipeline operating with sub-50ms regional edge latency.",
      problem: "Rapid international audience expansion caused edge distribution lag and unpredictable multi-cloud infrastructure costs.",
      approach: "Implemented declarative Terraform topologies, containerized Kubernetes clusters, and automated continuous delivery cutovers.",
      outcome: "Unified global telemetry, zero-downtime rollouts, and predictable multi-region failover.",
      technologies: ["Multi-Cloud IaC", "Kubernetes", "Docker", "Terraform"],
      status: "CONFIDENTIAL NDA",
    },
  ];

  return (
    <Section
      spacing="spacious"
      className="border-b border-[#E8E6DE] bg-[#F3F1EA] text-[#171A17] relative overflow-hidden py-20 sm:py-28"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E6DE] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#66705A] font-semibold">
              <span>06 / SELECTED CASE ENGAGEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A17] leading-tight">
              Architectural Impact & Case Studies
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555850] max-w-md font-normal leading-relaxed">
            Selected engineering engagements delivering measurable architectural velocity and resilient digital capability under bilateral client non-disclosure protocols.
          </p>
        </div>

        {/* Portfolio-Grade Editorial Dossiers */}
        {hasCaseStudies ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all duration-200"
              >
                <div>
                  <span className="text-xs font-mono uppercase text-[#66705A] font-semibold">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-[#171A17] mt-2 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-sm text-[#555850] leading-relaxed font-normal mb-6">
                    {study.summary}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E8E6DE] flex items-center justify-between">
                  <Link
                    href={`/work/${study.slug}`}
                    className="text-xs sm:text-sm font-semibold text-[#171A17] hover:text-[#66705A] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 text-[#66705A]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {/* 3 Asymmetric Editorial Case Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseEngagements.map((item) => (
                <div
                  key={item.caseNumber}
                  className="p-8 sm:p-9 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div>
                    {/* Top Oversized Number & Clearance Badge */}
                    <div className="flex items-start justify-between pb-5 border-b border-[#E8E6DE] mb-6">
                      <span className="font-mono text-3xl sm:text-4xl font-black text-[#171A17] tracking-tight">
                        CASE / {item.caseNumber}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F7F5EF] text-[#4C5642] border border-[#E8E6DE] font-mono text-[10px] font-semibold uppercase">
                        <Lock className="w-3 h-3 text-[#66705A]" />
                        {item.status}
                      </span>
                    </div>

                    {/* Sector & Title */}
                    <span className="font-mono text-xs text-[#66705A] font-bold uppercase tracking-wider block mb-1">
                      {item.sector}
                    </span>
                    <h3 className="text-xl font-bold text-[#171A17] mb-3 group-hover:text-[#4C5642] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#242622] mb-6 leading-relaxed">
                      {item.tagline}
                    </p>

                    {/* Problem / Approach / Outcome Dossier */}
                    <div className="space-y-4 pt-4 border-t border-[#E8E6DE] text-xs">
                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold text-[#73766D] tracking-wider block mb-1">
                          01 / THE PROBLEM
                        </span>
                        <p className="text-[#555850] leading-relaxed">
                          {item.problem}
                        </p>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold text-[#4C5642] tracking-wider block mb-1">
                          02 / OUR APPROACH
                        </span>
                        <p className="text-[#555850] leading-relaxed">
                          {item.approach}
                        </p>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold text-[#171A17] tracking-wider block mb-1">
                          03 / MEASURED OUTCOME
                        </span>
                        <p className="text-[#171A17] font-medium leading-relaxed">
                          {item.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Technologies & Request Briefing Link */}
                  <div className="mt-8 pt-5 border-t border-[#E8E6DE]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F7F5EF] text-[#242622] border border-[#E8E6DE]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#171A17]">
                      <span className="text-[#66705A] font-semibold uppercase">ARCHITECTURAL BRIEF</span>
                      <ArrowUpRight className="w-4 h-4 text-[#66705A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Protocol Statement Banner */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6DE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono uppercase text-[#66705A] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#66705A]" />
                  <span>Client Non-Disclosure & Private Briefing Protocol</span>
                </div>
                <p className="text-sm text-[#555850] leading-relaxed">
                  Detailed architectural diagrams, benchmark numbers, and source repositories are shared during private technical consultations under bilateral disclosure agreements.
                </p>
              </div>

              <Link href="/contact" className="shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] transition-colors font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer shadow-xs"
                >
                  <span>Request Capability Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5AC92]" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
