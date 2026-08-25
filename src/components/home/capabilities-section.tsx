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
  Cpu,
  Terminal,
  ChevronDown,
  Activity,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { solutionsData } from "@/data/solutions";
import { solutionMediaMap } from "@/data/media";
import { cn } from "@/lib/utils";

const capabilityIcons: Record<string, React.ReactNode> = {
  ai: <Sparkles className="w-5 h-5 text-[#4688B2] group-hover:animate-ai-pulse" />,
  "software-engineering": <Code2 className="w-5 h-5 text-[#4688B2] group-hover:animate-node-flow" />,
  "digital-transformation": <Cloud className="w-5 h-5 text-[#4688B2] group-hover:animate-cloud-flow" />,
  staffing: <Users2 className="w-5 h-5 text-[#4688B2]" />,
  "managed-services": <ShieldCheck className="w-5 h-5 text-[#4688B2]" />,
  "edtech-training": <GraduationCap className="w-5 h-5 text-[#4688B2]" />,
};

const practiceArchitectureFlow: Record<
  string,
  {
    systemId: string;
    telemetry: { label: string; value: string; isVerified?: boolean }[];
    stages: string[];
  }
> = {
  ai: {
    systemId: "SYS // AI-01",
    telemetry: [
      { label: "PIPELINE", value: "LATENT VECTOR INFERENCE" },
      { label: "CONCURRENCY", value: "DETERMINISTIC" },
      { label: "STATUS", value: "VERIFIED", isVerified: true },
    ],
    stages: ["INGESTION", "VECTOR STORE", "LLM INFERENCE", "AUDIT GUARDRAIL"],
  },
  "software-engineering": {
    systemId: "SYS // ENG-02",
    telemetry: [
      { label: "ARCHITECTURE", value: "DISTRIBUTED RUNTIME" },
      { label: "TYPE SAFETY", value: "STRICT // END-TO-END" },
      { label: "STATUS", value: "VERIFIED", isVerified: true },
    ],
    stages: ["CLIENT RUNTIME", "API GATEWAY", "MICROSERVICES", "PERSISTENCE"],
  },
  "digital-transformation": {
    systemId: "SYS // CLOUD-03",
    telemetry: [
      { label: "TOPOLOGY", value: "MULTI-CLOUD HYBRID" },
      { label: "DEPLOYMENT", value: "IAC AUTOMATION" },
      { label: "STATUS", value: "VERIFIED", isVerified: true },
    ],
    stages: ["LEGACY AUDIT", "IAC PIPELINE", "KUBERNETES RUNTIME", "OBSERVABILITY"],
  },
  staffing: {
    systemId: "SYS // POD-04",
    telemetry: [
      { label: "POD STRUCTURE", value: "DEDICATED TEAMS" },
      { label: "VETTING", value: "TOP 2% TECHNICAL" },
      { label: "STATUS", value: "VERIFIED", isVerified: true },
    ],
    stages: ["TALENT INTAKE", "CODE ASSESSMENT", "POD EMBEDDING", "SPRINT VELOCITY"],
  },
  "managed-services": {
    systemId: "SYS // SLA-05",
    telemetry: [
      { label: "MONITORING", value: "24/7/365 REAL-TIME" },
      { label: "SLA TARGET", value: "99.99% UPTIME" },
      { label: "STATUS", value: "VERIFIED", isVerified: true },
    ],
    stages: ["HEALTH TELEMETRY", "SLA WATCHDOG", "AUTO-TRIAGE", "CONTINUOUS TUNING"],
  },
  "edtech-training": {
    systemId: "SYS // EDTECH-06",
    telemetry: [
      { label: "FRAMEWORK", value: "HANDS-ON SIMULATION" },
      { label: "DELIVERY", value: "PRACTITIONER-LED" },
      { label: "STATUS", value: "VERIFIED", isVerified: true },
    ],
    stages: ["CURRICULUM ARCH", "SANDBOX LABS", "CAPSTONE EVAL", "CERTIFICATION"],
  },
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

  const currentFlow =
    practiceArchitectureFlow[activeSolution.slug] ||
    practiceArchitectureFlow["software-engineering"];

  const currentMedia = solutionMediaMap[activeSolution.slug];

  return (
    <Section
      id="capabilities"
      spacing="spacious"
      className="border-b border-[#D0E3F0] bg-[#EAF6FC] text-[#10213B] relative overflow-hidden py-20 sm:py-28"
    >
      {/* Subtle Grid and Ambient Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="ambient-glow-icy w-[32rem] h-[32rem] top-1/4 -right-20 opacity-40" />
      <div className="ambient-glow-white w-96 h-96 -bottom-10 -left-10 opacity-35" />

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#D0E3F0] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white border border-[#D0E3F0] text-xs font-mono tracking-widest uppercase text-[#4688B2] font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-pulse" />
              <span>03 // SERVICES &amp; CORE PRACTICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
              What We Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#243B53] max-w-md font-normal leading-relaxed">
            Six specialized enterprise practices delivering resilient architectures, intelligent workflows, and technical velocity.
          </p>
        </div>

        {/* DESKTOP INTERACTIVE EXPLORER */}
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
                    "p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer select-none group relative overflow-hidden",
                    isActive
                      ? "bg-white border-[#4688B2] shadow-card text-[#10213B] translate-x-1.5"
                      : "bg-[#F0F7FB]/90 border-[#D0E3F0] text-[#243B53] hover:bg-white hover:text-[#10213B] hover:border-[#D0E3F0]"
                  )}
                >
                  {/* Left Active Strip */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4688B2]" />
                  )}

                  <div className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold transition-colors",
                        isActive ? "text-[#4688B2]" : "text-[#5C7690]"
                      )}
                    >
                      {rowNumber}
                    </span>

                    <div
                      className={cn(
                        "p-2.5 rounded-xl border transition-all duration-200 shadow-2xs",
                        isActive
                          ? "bg-[#E8F5FA] border-[#4688B2]/40 text-[#4688B2] scale-105"
                          : "bg-white border-[#D0E3F0] text-[#5C7690] group-hover:scale-105"
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
                      <p className="text-[11px] text-[#243B53] line-clamp-1 mt-0.5 font-normal">
                        {solution.shortDescription}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-all duration-200",
                      isActive
                        ? "text-[#4688B2] translate-x-0.5 opacity-100"
                        : "text-[#A2BACB] opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
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
              className="p-7 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-card flex flex-col justify-between animate-fade-in transition-all duration-300 relative overflow-hidden group hover:border-[#4688B2]/40 hover:shadow-card-hover"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

              <div>
                {/* Practice Header Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#D0E3F0] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#4688B2] font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#4688B2]" /> PRACTICE ARCHITECTURE // {activeSolution.slug.toUpperCase()}
                    </span>
                    <span className="hidden sm:inline-block text-[10px] font-mono text-[#5C7690] px-2 py-0.5 rounded bg-[#F0F7FB] border border-[#D0E3F0]">
                      {currentFlow.systemId}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#182A43] font-semibold uppercase bg-[#F0F7FB] px-2.5 py-0.5 rounded border border-[#D0E3F0] flex items-center gap-1.5 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-pulse" />
                    <span>ACTIVE PRACTICE</span>
                  </span>
                </div>

                {/* 1. Practice Visual Media Banner */}
                {currentMedia && (
                  <div className="relative rounded-2xl overflow-hidden mb-2.5 border border-[#D0E3F0] aspect-21/9 bg-[#10213B] group/media shadow-[0_4px_20px_rgba(70,136,178,0.12)]">
                    <img
                      src={currentMedia.src}
                      alt={currentMedia.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/media:scale-[1.015]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C33]/90 via-[#0D1C33]/25 to-transparent pointer-events-none" />
                    
                    {/* Top Overlay Badge */}
                    <div className="absolute top-2.5 left-3 pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-[#10213B]/80 backdrop-blur-md border border-white/20 text-[9px] font-mono text-white/90 uppercase tracking-wider">
                        PRACTICE ARCHITECTURE // {activeSolution.slug.toUpperCase()}
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none text-[10px] font-mono text-white/95">
                      <span className="truncate tracking-wide font-medium">
                        {currentMedia.caption || `${activeSolution.title.toUpperCase()} // HIGH-THROUGHPUT RUNTIME`}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#4688B2] text-white font-bold shrink-0 flex items-center gap-1 shadow-2xs">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                        <span>VERIFIED</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. Visual Architecture Conduit Connector */}
                <div className="flex items-center justify-center my-1">
                  <div className="w-px h-2.5 bg-gradient-to-b from-[#4688B2]/50 to-[#4688B2]/20" />
                </div>

                {/* 3. Subtle Engineering Metadata & Architecture Flow Strip */}
                <div className="relative rounded-2xl bg-[#F0F7FB]/95 border border-[#D0E3F0] p-3.5 sm:p-4 mb-5 overflow-hidden shadow-2xs">
                  {/* Subtle Blueprint Micro-Grid Background */}
                  <div className="absolute inset-0 bg-tech-grid-fine opacity-30 pointer-events-none" />

                  {/* Top Telemetry Strip */}
                  <div className="relative z-10 grid grid-cols-3 gap-2 pb-2.5 border-b border-[#D0E3F0]/80">
                    {currentFlow.telemetry.map((item) => (
                      <div key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-[#5C7690]">
                          [ {item.label} ]
                        </span>
                        <div className="flex items-center gap-1.5">
                          {item.isVerified && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-pulse" />
                          )}
                          <span className="text-[11px] font-mono font-bold text-[#10213B] truncate">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Pipeline Flow Visual */}
                  <div className="relative z-10 pt-2.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#4688B2] font-semibold flex items-center gap-1">
                        <Activity className="w-3 h-3 text-[#4688B2]" /> ARCHITECTURE SIGNAL FLOW
                      </span>
                      <span className="text-[9px] font-mono text-[#5C7690]">
                        END-TO-END CONCURRENCY
                      </span>
                    </div>

                    {/* Stage Pipeline Line */}
                    <div className="relative py-1">
                      {/* Connecting Line */}
                      <div className="absolute top-1/2 left-2 right-2 h-0.5 -translate-y-1/2 bg-[#D0E3F0] rounded-full overflow-hidden">
                        {/* Moving Signal Trace Dot */}
                        <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#4688B2] to-transparent animate-signal-trace" />
                      </div>

                      {/* Stage Pills */}
                      <div className="relative flex items-center justify-between gap-1">
                        {currentFlow.stages.map((stage, sIdx) => (
                          <div
                            key={stage}
                            className="px-2 py-1 rounded-md bg-white border border-[#D0E3F0] shadow-2xs text-[9px] font-mono font-semibold text-[#182A43] flex items-center gap-1 transition-transform group-hover:scale-105"
                          >
                            <span className="text-[#4688B2] font-bold">0{sIdx + 1}</span>
                            <span className="truncate">{stage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Practice Title & Overview */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-2 tracking-tight">
                  {activeSolution.title}
                </h3>
                <p className="text-sm text-[#243B53] leading-relaxed font-normal mb-5">
                  {activeSolution.overview}
                </p>

                {/* 5. Delivered Capabilities */}
                <div className="space-y-2.5 pt-3.5 border-t border-[#D0E3F0] mb-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#5C7690] font-semibold block flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#4688B2]" /> Delivered Capabilities:
                  </span>
                  {activeSolution.capabilities.slice(0, 3).map((cap) => (
                    <div key={cap.title} className="flex items-start gap-2.5 text-xs text-[#243B53] p-3 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-2xs hover:border-[#4688B2]/40 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#10213B] font-semibold">{cap.title}:</strong>{" "}
                        <span>{cap.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Technologies & CTA Link */}
              <div className="pt-4 border-t border-[#D0E3F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#5C7690] font-semibold block mb-1.5">
                    Verified Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSolution.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] flex items-center gap-1.5 hover:border-[#4688B2]/50 hover:bg-white transition-all shadow-2xs"
                      >
                        <Cpu className="w-3 h-3 text-[#4688B2]" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {activeSolution.slug === "edtech-training" && (
                    <Link
                      to="/contact/education-consultation"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] text-[#10213B] text-xs font-mono uppercase tracking-wider font-bold transition-all inline-flex items-center gap-1.5 shadow-cta-blue group cursor-pointer border border-white/60 hover:from-[#A9DCF4] hover:to-[#85C4E5]"
                    >
                      <span>Free Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#10213B] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                  <Link
                    to={`/solutions/${activeSolution.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#D0E3F0] bg-white hover:bg-[#F0F7FB] text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] hover:text-[#4688B2] transition-all group shadow-2xs cursor-pointer"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#4688B2]" />
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
            const mobileMedia = solutionMediaMap[solution.slug];
            const mobileFlow =
              practiceArchitectureFlow[solution.slug] ||
              practiceArchitectureFlow["software-engineering"];

            return (
              <div
                key={solution.id}
                className="rounded-2xl bg-white border border-[#D0E3F0] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileId(isExpanded ? null : solution.id)
                  }
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#4688B2] font-bold">
                      {rowNumber}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#10213B]">
                      {solution.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-[#5C7690] transition-transform duration-200",
                      isExpanded && "rotate-180 text-[#4688B2]"
                    )}
                  />
                </button>

                {isExpanded && (
                  <div className="p-4 sm:p-5 pt-0 border-t border-[#D0E3F0] flex flex-col gap-4 animate-fade-in bg-[#F0F7FB]/40">
                    {/* Mobile Media Banner */}
                    {mobileMedia && (
                      <div className="relative rounded-xl overflow-hidden mt-3 border border-[#D0E3F0] aspect-21/9 bg-[#10213B]">
                        <img
                          src={mobileMedia.src}
                          alt={mobileMedia.alt}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C33]/90 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none text-[9px] font-mono text-white/95">
                          <span className="truncate">{mobileMedia.caption}</span>
                          <span className="px-1.5 py-0.5 rounded bg-[#4688B2] text-white font-bold shrink-0">
                            VERIFIED
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Mobile Architecture Flow Strip */}
                    <div className="p-3 rounded-xl bg-white border border-[#D0E3F0] text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-[#D0E3F0]/70 mb-2">
                        <span className="text-[9px] font-mono uppercase text-[#4688B2] font-bold">
                          ARCHITECTURE SIGNAL FLOW
                        </span>
                        <span className="text-[9px] font-mono text-[#5C7690]">
                          ACTIVE // 99.99%
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {mobileFlow.stages.map((stage, sIdx) => (
                          <span
                            key={stage}
                            className="px-2 py-0.5 rounded bg-[#F0F7FB] border border-[#D0E3F0] text-[9px] font-mono text-[#182A43] font-semibold"
                          >
                            0{sIdx + 1} {stage}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed font-normal">
                      {solution.overview}
                    </p>

                    <div className="space-y-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#5C7690] font-semibold block">
                        Capabilities:
                      </span>
                      {solution.capabilities.map((cap) => (
                        <div
                          key={cap.title}
                          className="flex items-start gap-2 text-xs text-[#243B53] p-2.5 rounded-xl bg-white border border-[#D0E3F0]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4688B2] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#10213B]">{cap.title}:</strong>{" "}
                            {cap.description}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Mobile Technologies */}
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#5C7690] font-semibold block mb-1.5">
                        Verified Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {solution.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white text-[#182A43] border border-[#D0E3F0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {solution.slug === "edtech-training" && (
                        <Link
                          to="/contact/education-consultation"
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] text-[#10213B] text-xs font-mono uppercase tracking-wider font-bold inline-flex items-center gap-1.5 shadow-cta-blue"
                        >
                          <span>Free Consultation</span>
                          <ArrowRight className="w-3 h-3 text-[#10213B]" />
                        </Link>
                      )}
                      <Link
                        to={`/solutions/${solution.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] hover:text-[#4688B2] group"
                      >
                        <span>Explore Practice</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#4688B2] group-hover:translate-x-1 transition-transform" />
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

export default CapabilitiesSection;
