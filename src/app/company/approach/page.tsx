import * as React from "react";
import type { Metadata } from "next";
import { Compass, Layers, Code2, Cloud, RefreshCw, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { solutionsData } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Our Delivery Approach & Methodology | Mylotic Group",
  description:
    "Explore how Mylotic Group structures technology engagements: Discover, Architect, Build, Deploy, and Evolve.",
};

export default function ApproachPage() {
  const phases = [
    {
      step: "01",
      name: "DISCOVER",
      title: "Technical Discovery & Needs Assessment",
      icon: <Compass className="w-5 h-5 text-[#66705A]" />,
      description:
        "We analyze your existing architecture, identify system bottlenecks, evaluate data readiness, and establish clear delivery parameters.",
      deliverables: ["Current-State Technical Audit", "Requirements Specification", "Risk & Feasibility Analysis"],
    },
    {
      step: "02",
      name: "ARCHITECT",
      title: "System Architecture & Solution Blueprint",
      icon: <Layers className="w-5 h-5 text-[#4C5642]" />,
      description:
        "We draft modular, cloud-ready architecture diagrams, define API contracts, select target technology stacks, and map data security boundaries.",
      deliverables: ["Target System Blueprint", "API & Data Flow Specifications", "Security & Compliance Framework"],
    },
    {
      step: "03",
      name: "BUILD",
      title: "Iterative Engineering & Quality Sprints",
      icon: <Code2 className="w-5 h-5 text-[#66705A]" />,
      description:
        "Dedicated engineering pods execute focused development sprints with continuous code reviews, automated unit testing, and weekly progress demos.",
      deliverables: ["Production-Ready Codebase", "Automated Test Suites", "Weekly Sprint Demonstrations"],
    },
    {
      step: "04",
      name: "DEPLOY",
      title: "Infrastructure Automation & Cutover",
      icon: <Cloud className="w-5 h-5 text-[#4C5642]" />,
      description:
        "We automate CI/CD release pipelines, provision containerized infrastructure via IaC, and manage low-risk, zero-downtime cutovers.",
      deliverables: ["CI/CD Release Automation", "Infrastructure-as-Code Setup", "Production Verification & Cutover"],
    },
    {
      step: "05",
      name: "EVOLVE",
      title: "Telemetry, Governance & Continuous Scaling",
      icon: <RefreshCw className="w-5 h-5 text-[#66705A]" />,
      description:
        "Continuous performance monitoring, security patching, and proactive roadmap evolution to support high-growth business needs.",
      deliverables: ["24/7 Monitoring Dashboards", "Ongoing Performance Tuning", "Knowledge Transfer & Documentation"],
    },
  ];

  const relatedSolutions = solutionsData.slice(0, 3).map((sol) => ({
    title: sol.title,
    description: sol.shortDescription,
    href: `/solutions/${sol.slug}`,
    category: "ENGINEERING SOLUTION",
  }));

  return (
    <>
      {/* Editorial Approach Header */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Company", href: "/company" },
              { label: "Our Approach" },
            ]}
            className="mb-8 text-[#73766D]"
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold">
              <Compass className="w-3.5 h-3.5 text-[#66705A]" />
              <span>Engagement Methodology</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              How We Architect, <br />
              <span className="gradient-text-olive font-black">Engineer & Deliver</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              Complex software and AI initiatives require disciplined execution. Our 5-stage lifecycle balances architectural foresight with agile sprint velocity.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5-Phase Engagement System */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="divide-y divide-[#E8E6DE] border-b border-[#E8E6DE]">
            {phases.map((phase) => (
              <div
                key={phase.step}
                className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-[#F7F5EF]/50 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl transition-colors"
              >
                {/* Left: Step & Title (Span 5) */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#66705A] font-bold uppercase">
                    <span>STAGE {phase.step}</span>
                    <span>•</span>
                    <span>{phase.name}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#171A17] leading-snug">
                    {phase.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#555850] leading-relaxed font-normal">
                    {phase.description}
                  </p>
                </div>

                {/* Right: Key Deliverables (Span 7) */}
                <div className="lg:col-span-7 bg-[#F7F5EF] rounded-2xl border border-[#E8E6DE] p-6 sm:p-8 shadow-card flex flex-col gap-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#66705A] font-semibold">
                    Key Outputs & Deliverables:
                  </span>
                  <ul className="space-y-3">
                    {phase.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-3 text-sm text-[#242622]">
                        <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contextual Solutions */}
      <RelatedContent
        title="Solutions Executed with this Approach"
        eyebrow="APPLIED PRACTICE"
        links={relatedSolutions}
      />
    </>
  );
}
