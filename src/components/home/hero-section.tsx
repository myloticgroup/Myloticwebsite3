import * as React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Terminal,
  Server,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { HeroArchitecture } from "./hero-architecture";
import { HeroSystemsVisual } from "./hero-systems-visual";

export function HeroSection() {
  const verifiedMetrics = [
    {
      value: "6",
      label: "Specialized Practice Areas",
      desc: "AI, Engineering, Cloud, Staffing, Managed Services, EdTech",
      icon: <Layers className="w-4 h-4 text-[#4688B2]" />,
    },
    {
      value: "100%",
      label: "Typed Architecture Standard",
      desc: "Static end-to-end type safety across backend & client runtimes",
      icon: <CheckCircle2 className="w-4 h-4 text-[#4688B2]" />,
    },
    {
      value: "99.99%",
      label: "Infrastructure SLA Target",
      desc: "Multi-cloud automated failover and zero-downtime CI/CD",
      icon: <ShieldCheck className="w-4 h-4 text-[#4688B2]" />,
    },
    {
      value: "24/7",
      label: "Telemetry & Governance",
      desc: "Real-time distributed tracing and observability",
      icon: <Activity className="w-4 h-4 text-[#4688B2]" />,
    },
  ];

  return (
    <>
      {/* 01 Main Cinematic Layered Enterprise Hero Section */}
      <Section
        spacing="spacious"
        className="relative overflow-hidden pt-6 sm:pt-10 lg:pt-14 pb-20 sm:pb-28 lg:pb-36 bg-atmospheric-hero text-[#10213B] min-h-[clamp(720px,88vh,900px)] flex flex-col justify-between"
      >
        {/* Layer 1: Atmospheric Background Grid & Coordinate Crosshairs */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        
        {/* Layer 2: Atmospheric Radial Ambient Studio Lighting */}
        <div className="ambient-glow-white w-[54rem] h-[54rem] -top-24 left-1/4 opacity-85 pointer-events-none" />
        <div className="ambient-glow-icy w-[46rem] h-[46rem] -top-20 -left-20 opacity-75 pointer-events-none" />
        <div className="ambient-glow-blue w-[42rem] h-[42rem] top-1/3 -right-16 opacity-65 pointer-events-none" />

        {/* Layer 3: Abstract Figma/Technical Architectural System Node Mesh */}
        <HeroSystemsVisual />

        {/* Layer 4: Ambient Top Telemetry Badge Strip */}
        <div className="w-[min(86vw,1290px)] mx-auto px-4 sm:px-6 mb-8 hidden sm:flex items-center justify-between text-[11px] font-mono text-[#5C7690] relative z-20 border-b border-[#D0E3F0]/70 pb-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#10213B] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-ping" />
              GLOBAL ENTERPRISE RUNTIME
            </span>
            <span className="text-[#A2BACB]">//</span>
            <span>SYSTEM NODE: PRODUCTION-01</span>
          </div>
          <div className="flex items-center gap-4 text-[#243B53]">
            <span>LATENCY: 38MS [p99]</span>
            <span className="text-[#A2BACB]">//</span>
            <span className="text-[#10213B] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4688B2]" /> SOC2 VERIFIED
            </span>
          </div>
        </div>

        <Container size="default" className="relative z-20 my-auto">
          {/* MAIN CENTRAL HERO TYPOGRAPHY & CTAs */}
          <div className="flex flex-col items-center text-center max-w-[880px] mx-auto relative z-30 mb-12 sm:mb-16">
            {/* Eyebrow Label with Pulsing Signal */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-white/80 text-xs font-mono tracking-widest uppercase text-[#10213B] font-semibold shadow-xs animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4688B2] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4688B2]" />
              </span>
              <span>DIGITAL SYSTEMS // APPLIED AI ARCHITECTURE</span>
            </div>

            {/* Large Editorial Headline with Balanced Optical Measure */}
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] xl:text-[76px] font-bold tracking-tight text-[#10213B] leading-[1.04] animate-fade-up delay-75 select-none">
              <span className="block font-black tracking-[-0.03em]">WE BUILD</span>
              <span className="block text-[#182A43] font-black tracking-[-0.03em]">DIGITAL SYSTEMS</span>
              <span className="block gradient-text-olive font-black tracking-[-0.03em]">THAT MOVE BUSINESS.</span>
            </h1>

            {/* Short Supporting Text Directly Underneath */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#243B53] leading-relaxed max-w-[640px] font-normal animate-fade-up delay-150">
              Applied AI, distributed software engineering, and resilient cloud topologies built for real-world enterprise scale.
            </p>

            {/* Action Buttons with Rectangular-Rounded Geometry & Micro-Interactions */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-up delay-200">
              <Link to="/contact" className="w-full sm:w-auto group">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-[0.98] shadow-cta-blue hover:shadow-cta-blue-hover cursor-pointer border border-white/70"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowRight className="w-4 h-4 text-[#10213B] transition-transform duration-200 group-hover:translate-x-1.5" />
                </button>
              </Link>

              <a href="#capabilities" className="w-full sm:w-auto group">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/80 bg-white/85 backdrop-blur-md hover:bg-white text-[#10213B] font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-xs hover:shadow-card"
                >
                  <span>EXPLORE CAPABILITIES</span>
                  <ArrowDown className="w-4 h-4 text-[#4688B2] transition-transform duration-200 group-hover:translate-y-1" />
                </button>
              </a>
            </div>

            {/* Core Feature Signals with Interactive Badges */}
            <div className="mt-8 pt-6 border-t border-[#D0E3F0]/80 w-full flex flex-wrap items-center justify-center gap-y-2.5 gap-x-3.5 text-xs font-mono text-[#243B53] animate-fade-up delay-300">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-white/80 text-[#10213B] font-medium transition-all hover:border-[#4688B2]/40 hover:shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#4688B2]" /> Applied AI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-white/80 text-[#10213B] font-medium transition-all hover:border-[#4688B2]/40 hover:shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-[#4688B2]" /> Distributed Systems
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-white/80 text-[#10213B] font-medium transition-all hover:border-[#4688B2]/40 hover:shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-[#4688B2]" /> Multi-Cloud IaC
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-white/80 text-[#10213B] font-medium transition-all hover:border-[#4688B2]/40 hover:shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4688B2]" /> SOC2 Ready
              </span>
            </div>
          </div>

          {/* SPATIAL LAYERED VISUAL SECTION: LEFT MEDIA PANEL + RIGHT CASCADING PROCESS PANEL */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-30">
            {/* Left Column: Floating Engineering Visual Anchor (Span 5) */}
            <div className="lg:col-span-5 relative animate-fade-up delay-300">
              {/* Floating Technical Glass Badge 1 (Top Left Overlap) */}
              <div className="hidden xl:flex items-center gap-2.5 absolute -top-5 -left-4 z-30 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-floating-panel animate-float text-xs font-mono">
                <div className="p-1.5 rounded-lg bg-[#E8F5FA] border border-[#D0E3F0] text-[#4688B2]">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-bold text-[#10213B] text-[11px] leading-tight">ACTIVE NEURAL INFERENCE</div>
                  <div className="text-[10px] text-[#4688B2] leading-tight">Sub-50ms Paint Times</div>
                </div>
              </div>

              {/* Main Left Floating Engineering Media Panel */}
              <div className="p-4 sm:p-5 rounded-3xl bg-[#F0F7FB]/70 backdrop-blur-xl border border-white/80 shadow-floating-panel relative overflow-hidden group/leftmedia">
                <div className="flex items-center justify-between pb-3 border-b border-[#D0E3F0]/70 text-[11px] font-mono text-[#243B53] mb-3">
                  <span className="flex items-center gap-1.5 text-[#10213B] font-semibold">
                    <Server className="w-3.5 h-3.5 text-[#4688B2]" /> DISTRIBUTED RUNTIME ARCHITECTURE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#D0E3F0] text-[10px] font-bold text-[#4688B2] shadow-2xs">
                    STATUS: OPTIMAL
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-16/10 sm:aspect-16/9 bg-[#10213B]">
                  <img
                    src="/images/software_engineering_runtime.jpg"
                    alt="Mylotic Distributed Software Engineering Workspace & Systems Telemetry"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/leftmedia:scale-[1.015]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10213D]/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none text-[10px] font-mono text-white/95">
                    <span className="truncate">DISTRIBUTED RUNTIME ARCHITECTURE // STATIC TYPE SAFETY</span>
                    <span className="px-2 py-0.5 rounded bg-[#4688B2] text-white font-bold shrink-0">LATENCY: 38MS</span>
                  </div>
                </div>
              </div>

              {/* Floating Technical Glass Badge 2 (Bottom Left Overlap) */}
              <div className="hidden xl:flex items-center gap-2.5 absolute -bottom-4 left-6 z-30 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-floating-panel animate-float-reverse text-xs font-mono">
                <div className="p-1.5 rounded-lg bg-[#E8F5FA] border border-[#D0E3F0] text-[#4688B2]">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-bold text-[#10213B] text-[11px] leading-tight">100% TYPED ARCHITECTURE</div>
                  <div className="text-[10px] text-[#182A43] leading-tight">End-to-End Type Safety</div>
                </div>
              </div>
            </div>

            {/* Right Column: Cascading Process Architecture Panel (Span 7) */}
            <div className="lg:col-span-7 relative animate-fade-up delay-300">
              <HeroArchitecture />
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Below-Hero → Stats Transition Strip with Overlap into Next Section */}
      <div className="relative z-20 -mt-14 sm:-mt-16 rounded-t-[36px] border-t border-[#D0E3F0] bg-gradient-to-b from-[#FFFFFF] via-[#F4FAFD] to-[#D8ECF7] py-10 sm:py-14 text-[#10213B] shadow-[0_-20px_60px_rgba(55,100,130,0.10)]">
        <Container size="default">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {verifiedMetrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-card flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1 hover:border-[#4688B2]/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#10213B] font-mono group-hover:text-[#182A43] transition-colors">
                    {metric.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] group-hover:scale-110 group-hover:border-[#4688B2]/40 transition-all duration-200 shadow-2xs">
                    {metric.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#10213B] leading-snug">
                    {metric.label}
                  </h4>
                  <p className="text-[11px] text-[#243B53] mt-1 leading-relaxed font-normal">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default HeroSection;
