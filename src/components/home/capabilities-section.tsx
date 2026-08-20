"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Cloud,
  Users2,
  ShieldCheck,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { solutionsData } from "@/data/solutions";
import { cn } from "@/lib/utils";

const capabilityIcons: Record<string, React.ReactNode> = {
  ai: <Sparkles className="w-5 h-5 text-[#66705A] group-hover:animate-ai-pulse" />,
  "software-engineering": <Code2 className="w-5 h-5 text-[#66705A] group-hover:animate-node-flow" />,
  "digital-transformation": <Cloud className="w-5 h-5 text-[#66705A] group-hover:animate-cloud-flow" />,
  staffing: <Users2 className="w-5 h-5 text-[#66705A]" />,
  "managed-services": <ShieldCheck className="w-5 h-5 text-[#66705A]" />,
  "edtech-training": <GraduationCap className="w-5 h-5 text-[#66705A]" />,
};

export function CapabilitiesSection() {
  const [activeSolutionId, setActiveSolutionId] = React.useState<string>(
    solutionsData[0]?.id || "ai"
  );
  const [expandedMobileId, setExpandedMobileId] = React.useState<string | null>(
    null
  );

  const activeSolution =
    solutionsData.find((s) => s.id === activeSolutionId) || solutionsData[0];

  return (
    <Section
      id="capabilities"
      spacing="spacious"
      className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] relative overflow-hidden py-20 sm:py-28"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E6DE] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#66705A] font-semibold">
              <span>03 / SERVICES & CORE PRACTICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A17] leading-tight">
              What We Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555850] max-w-md font-normal leading-relaxed">
            Six specialized enterprise practices delivering resilient architectures, intelligent workflows, and technical velocity.
          </p>
        </div>

        {/* DESKTOP INTERACTIVE EXPLORER WITH SMOOTH MICRO-INTERACTIONS */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left Navigation (Span 5) */}
          <div className="col-span-5 flex flex-col gap-2.5">
            {solutionsData.map((solution, idx) => {
              const isActive = activeSolutionId === solution.id;
              const rowNumber = String(idx + 1).padStart(2, "0");

              return (
                <button
                  key={solution.id}
                  type="button"
                  onMouseEnter={() => setActiveSolutionId(solution.id)}
                  onClick={() => setActiveSolutionId(solution.id)}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer select-none group",
                    isActive
                      ? "bg-white border-[#66705A] shadow-card text-[#171A17] translate-x-1.5"
                      : "bg-[#F1F0EA]/80 border-[#E8E6DE] text-[#555850] hover:bg-white hover:text-[#171A17] hover:border-[#E8E6DE]"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold transition-colors",
                        isActive ? "text-[#66705A]" : "text-[#73766D]"
                      )}
                    >
                      {rowNumber}
                    </span>

                    <div
                      className={cn(
                        "p-2 rounded-lg border transition-all duration-200",
                        isActive
                          ? "bg-[#F7F5EF] border-[#66705A]/40 text-[#66705A] scale-105"
                          : "bg-white border-[#E8E6DE] text-[#73766D] group-hover:scale-105"
                      )}
                    >
                      {capabilityIcons[solution.slug] || (
                        <Code2 className="w-4 h-4" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold leading-snug">
                        {solution.title}
                      </h3>
                      <p className="text-[11px] text-[#555850] line-clamp-1 mt-0.5 font-normal">
                        {solution.shortDescription}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-all duration-200",
                      isActive
                        ? "text-[#66705A] translate-x-0.5 opacity-100"
                        : "text-[#B8B3A4] opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Specification Preview (Span 7) */}
          <div className="col-span-7 sticky top-28">
            <div
              key={activeSolution.id}
              className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between min-h-[460px] animate-fade-in transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] mb-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#66705A] font-semibold">
                    PRACTICE ARCHITECTURE // {activeSolution.slug.toUpperCase()}
                  </span>
                  <span className="font-mono text-[11px] text-[#4C5642] font-semibold uppercase bg-[#F1F0EA] px-2.5 py-0.5 rounded">
                    ACTIVE PRACTICE
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#171A17] mb-3">
                  {activeSolution.title}
                </h3>
                <p className="text-sm text-[#555850] leading-relaxed font-normal mb-6">
                  {activeSolution.overview}
                </p>

                {/* Delivered Capabilities */}
                <div className="space-y-3 pt-4 border-t border-[#E8E6DE] mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#73766D] font-semibold block">
                    Delivered Capabilities:
                  </span>
                  {activeSolution.capabilities.slice(0, 3).map((cap) => (
                    <div key={cap.title} className="flex items-start gap-2.5 text-xs text-[#555850]">
                      <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#171A17]">{cap.title}:</strong>{" "}
                        <span>{cap.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & CTA Link */}
              <div className="pt-6 border-t border-[#E8E6DE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#73766D] font-semibold block mb-2">
                    Verified Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSolution.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#F7F5EF] text-[#242622] border border-[#E8E6DE] flex items-center gap-1 hover:border-[#66705A]/40 transition-colors"
                      >
                        <Cpu className="w-3 h-3 text-[#66705A]" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {activeSolution.slug === "edtech-training" && (
                    <Link
                      href="/contact/education-consultation"
                      className="px-3.5 py-2 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] text-xs font-mono uppercase tracking-wider font-semibold transition-all inline-flex items-center gap-1.5 shadow-xs group"
                    >
                      <span>Free Consultation</span>
                      <ArrowRight className="w-3 h-3 text-[#A5AC92] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                  <Link
                    href={`/solutions/${activeSolution.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] transition-colors group"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#66705A]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE ACCORDION */}
        <div className="lg:hidden flex flex-col gap-3">
          {solutionsData.map((solution, idx) => {
            const isExpanded = expandedMobileId === solution.id;
            const rowNumber = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={solution.id}
                className="rounded-xl bg-white border border-[#E8E6DE] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileId(isExpanded ? null : solution.id)
                  }
                  className="w-full p-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#66705A] font-bold">
                      {rowNumber}
                    </span>
                    <h3 className="text-sm font-bold text-[#171A17]">
                      {solution.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-[#73766D] transition-transform duration-200",
                      isExpanded && "rotate-180 text-[#66705A]"
                    )}
                  />
                </button>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-[#E8E6DE] flex flex-col gap-4 animate-fade-in">
                    <p className="text-xs text-[#555850] leading-relaxed mt-3">
                      {solution.overview}
                    </p>

                    <div className="space-y-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#73766D] font-semibold block">
                        Capabilities:
                      </span>
                      {solution.capabilities.map((cap) => (
                        <div
                          key={cap.title}
                          className="flex items-start gap-2 text-xs text-[#555850]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#66705A] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#171A17]">{cap.title}:</strong>{" "}
                            {cap.description}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {solution.slug === "edtech-training" && (
                        <Link
                          href="/contact/education-consultation"
                          className="px-3 py-1.5 rounded-lg bg-[#171A17] text-[#F7F5EF] text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 shadow-xs"
                        >
                          <span>Free Consultation</span>
                          <ArrowRight className="w-3 h-3 text-[#A5AC92]" />
                        </Link>
                      )}
                      <Link
                        href={`/solutions/${solution.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] group"
                      >
                        <span>Explore Practice</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#66705A] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
