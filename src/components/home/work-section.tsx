import * as React from "react";
import { Link } from "react-router-dom";
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
      approach: "Deployed vector embeddings, isolated tenant React runtimes, and real-time streaming telemetry pipelines.",
      outcome: "Zero model drift and personalized assessment feedback delivered across thousands of concurrent learners.",
      technologies: ["Applied AI", "Vector Indexing", "React 19", "Python"],
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
      className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] relative overflow-hidden py-20 sm:py-28"
    >
      {/* Subtle Background Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="ambient-glow-icy w-96 h-96 -top-10 -left-10 opacity-40" />
      <div className="ambient-glow-blue w-80 h-80 bottom-10 right-10 opacity-30" />

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D0E3F0] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white border border-[#D0E3F0] text-xs font-mono tracking-widest uppercase text-[#4688B2] font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2]" />
              <span>06 // SELECTED CASE ENGAGEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
              Architectural Impact &amp; Case Studies
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#243B53] max-w-md font-normal leading-relaxed">
            Selected engineering engagements delivering measurable architectural velocity and resilient digital capability under bilateral client non-disclosure protocols.
          </p>
        </div>

        {/* Portfolio-Grade Editorial Dossiers */}
        {hasCaseStudies ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/40 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 group"
              >
                <div>
                  <span className="text-xs font-mono uppercase text-[#4688B2] font-semibold">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-[#10213B] mt-2 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-sm text-[#243B53] leading-relaxed font-normal mb-6">
                    {study.summary}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#D0E3F0] flex items-center justify-between">
                  <Link
                    to={`/work/${study.slug}`}
                    className="text-xs sm:text-sm font-semibold text-[#10213B] hover:text-[#4688B2] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 text-[#4688B2]" />
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
                  className="p-8 sm:p-9 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Top Radiant Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4688B2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Oversized Number & Clearance Badge */}
                    <div className="flex items-start justify-between pb-5 border-b border-[#D0E3F0] mb-6">
                      <span className="font-mono text-3xl sm:text-4xl font-black text-[#10213B] tracking-tight">
                        CASE // {item.caseNumber}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] font-mono text-[10px] font-semibold uppercase shadow-2xs">
                        <Lock className="w-3 h-3 text-[#4688B2]" />
                        {item.status}
                      </span>
                    </div>

                    {/* Sector & Title */}
                    <span className="font-mono text-xs text-[#4688B2] font-bold uppercase tracking-wider block mb-1">
                      {item.sector}
                    </span>
                    <h3 className="text-xl font-bold text-[#10213B] mb-3 group-hover:text-[#182A43] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#182A43] mb-6 leading-relaxed">
                      {item.tagline}
                    </p>

                    {/* Problem / Approach / Outcome Dossier */}
                    <div className="space-y-4 pt-4 border-t border-[#D0E3F0] text-xs">
                      <div className="p-3 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0]">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#5C7690] tracking-wider block mb-1">
                          01 // THE PROBLEM
                        </span>
                        <p className="text-[#243B53] leading-relaxed font-normal">
                          {item.problem}
                        </p>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0]">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#182A43] tracking-wider block mb-1">
                          02 // OUR APPROACH
                        </span>
                        <p className="text-[#243B53] leading-relaxed font-normal">
                          {item.approach}
                        </p>
                      </div>

                      <div className="p-3 rounded-2xl bg-white border border-[#D0E3F0] shadow-2xs">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#10213B] tracking-wider block mb-1">
                          03 // MEASURED OUTCOME
                        </span>
                        <p className="text-[#10213B] font-semibold leading-relaxed">
                          {item.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Technologies & Request Briefing Link */}
                  <div className="mt-8 pt-5 border-t border-[#D0E3F0]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] shadow-2xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#10213B]">
                      <span className="text-[#4688B2] font-bold uppercase">ARCHITECTURAL BRIEF</span>
                      <ArrowUpRight className="w-4 h-4 text-[#4688B2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Protocol Statement Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs hover:shadow-card transition-all duration-300">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono uppercase text-[#4688B2] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#4688B2]" />
                  <span>Client Non-Disclosure &amp; Private Briefing Protocol</span>
                </div>
                <p className="text-sm text-[#243B53] leading-relaxed font-normal">
                  Detailed architectural diagrams, benchmark numbers, and source repositories are shared during private technical consultations under bilateral disclosure agreements.
                </p>
              </div>

              <Link to="/contact" className="shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] transition-all font-mono text-xs uppercase tracking-wider font-bold cursor-pointer shadow-cta-blue hover:shadow-cta-blue-hover border border-white/60"
                >
                  <span>Request Capability Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#10213B]" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
