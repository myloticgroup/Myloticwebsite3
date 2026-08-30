import * as React from "react";
import { Link } from "react-router-dom";
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
      className="bg-[#7CC7EA] text-[#101418] relative overflow-hidden py-16 sm:py-24"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E1E7EF] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-white border border-[#E1E7EF] text-xs font-mono tracking-widest uppercase text-[#4C5642] font-semibold shadow-xs">
              <span>03 // SERVICES &amp; CORE PRACTICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101418] leading-tight">
              What We Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5F6872] max-w-md font-normal leading-relaxed">
            Six specialized enterprise practices delivering resilient architectures, intelligent workflows, and technical velocity.
          </p>
        </div>

        {/* DESKTOP INTERACTIVE EXPLORER IN BENTO STYLE */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-start">
          {/* Left Navigation Buttons (Span 5) */}
          <div className="col-span-5 flex flex-col gap-3">
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
                    "p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer select-none group",
                    isActive
                      ? "bg-white border-[#66705A] shadow-bento-hover text-[#101418] translate-x-1"
                      : "bg-white/80 border-[#E1E7EF] text-[#5F6872] hover:bg-white hover:text-[#101418] hover:border-[#E1E7EF] shadow-bento"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold transition-colors",
                        isActive ? "text-[#66705A]" : "text-[#7A8490]"
                      )}
                    >
                      {rowNumber}
                    </span>

                    <div
                      className={cn(
                        "p-2.5 rounded-xl border transition-all duration-200",
                        isActive
                          ? "bg-[#F0F4F8] border-[#66705A]/40 text-[#66705A] scale-105"
                          : "bg-[#F7F9FB] border-[#E1E7EF] text-[#7A8490] group-hover:scale-105"
                      )}
                    >
                      {capabilityIcons[solution.slug] || (
                        <Code2 className="w-4 h-4" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold leading-snug text-[#101418]">
                        {solution.title}
                      </h3>
                      <p className="text-[11px] text-[#5F6872] line-clamp-1 mt-0.5 font-normal">
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

          {/* Right Dynamic Specification Preview Bento Card (Span 7) */}
          <div className="col-span-7 sticky top-28">
            <div
              key={activeSolution.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between min-h-[480px] animate-fade-in transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#66705A] font-semibold">
                    PRACTICE ARCHITECTURE // {activeSolution.slug.toUpperCase()}
                  </span>
                  <span className="font-mono text-[11px] text-[#4C5642] font-semibold uppercase bg-[#F0F4F8] px-2.5 py-1 rounded-lg border border-[#E1E7EF]">
                    ACTIVE PRACTICE
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#101418] mb-3">
                  {activeSolution.title}
                </h3>
                <p className="text-sm text-[#5F6872] leading-relaxed font-normal mb-6">
                  {activeSolution.overview}
                </p>

                {/* Delivered Capabilities */}
                <div className="space-y-3 pt-4 border-t border-[#E1E7EF] mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A8490] font-semibold block">
                    Delivered Capabilities:
                  </span>
                  {activeSolution.capabilities.slice(0, 3).map((cap) => (
                    <div key={cap.title} className="flex items-start gap-2.5 text-xs text-[#5F6872]">
                      <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#101418]">{cap.title}:</strong>{" "}
                        <span>{cap.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & CTA Link */}
              <div className="pt-6 border-t border-[#E1E7EF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A8490] font-semibold block mb-2">
                    Verified Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSolution.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F0F4F8] text-[#101418] border border-[#E1E7EF] flex items-center gap-1 hover:border-[#66705A]/40 transition-colors"
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
                      to="/contact/education-consultation"
                      className="px-4 py-2.5 rounded-xl bg-[#101418] hover:bg-[#1B2026] text-[#EEF3F8] text-xs font-mono uppercase tracking-wider font-semibold transition-all inline-flex items-center gap-1.5 shadow-xs group"
                    >
                      <span>Free Consultation</span>
                      <ArrowRight className="w-3 h-3 text-[#A5AC92] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                  <Link
                    to={`/solutions/${activeSolution.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#101418] hover:text-[#66705A] transition-colors group"
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
                className="rounded-2xl bg-white border border-[#E1E7EF] overflow-hidden transition-all duration-200 shadow-bento"
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
                    <h3 className="text-sm font-bold text-[#101418]">
                      {solution.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-[#7A8490] transition-transform duration-200",
                      isExpanded && "rotate-180 text-[#66705A]"
                    )}
                  />
                </button>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-[#E1E7EF] flex flex-col gap-4 animate-fade-in">
                    <p className="text-xs text-[#5F6872] leading-relaxed mt-3">
                      {solution.overview}
                    </p>

                    <div className="space-y-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A8490] font-semibold block">
                        Capabilities:
                      </span>
                      {solution.capabilities.map((cap) => (
                        <div
                          key={cap.title}
                          className="flex items-start gap-2 text-xs text-[#5F6872]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#66705A] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#101418]">{cap.title}:</strong>{" "}
                            {cap.description}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {solution.slug === "edtech-training" && (
                        <Link
                          to="/contact/education-consultation"
                          className="px-3.5 py-2 rounded-xl bg-[#101418] text-[#EEF3F8] text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 shadow-xs"
                        >
                          <span>Free Consultation</span>
                          <ArrowRight className="w-3 h-3 text-[#A5AC92]" />
                        </Link>
                      )}
                      <Link
                        to={`/solutions/${solution.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#101418] hover:text-[#66705A] group"
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
