import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Compass, Cpu, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";

export function PositioningSection() {
  const stages = [
    {
      num: "01",
      title: "ARCHITECT",
      tagline: "Design systems before building them.",
      desc: "Clear system models, schema definitions, and capacity planning to prevent architectural dead-ends.",
      icon: <Compass className="w-5 h-5 text-[#4688B2]" />,
      spec: "BLUEPRINT / SCHEMA PROTOCOLS",
      badge: "PHASE 01",
      deliverable: "Deterministic System Schemas",
    },
    {
      num: "02",
      title: "ENGINEER",
      tagline: "Build for real-world conditions.",
      desc: "High-throughput APIs, typed frontends, and automated testing built for continuous production scale.",
      icon: <Cpu className="w-5 h-5 text-[#182A43]" />,
      spec: "100% TYPED / CI/CD GATED",
      badge: "PHASE 02",
      deliverable: "End-to-End Typed Runtimes",
    },
    {
      num: "03",
      title: "EVOLVE",
      tagline: "Improve continuously after launch.",
      desc: "Telemetry monitoring, zero-downtime rollouts, and model tuning as business workloads expand.",
      icon: <TrendingUp className="w-5 h-5 text-[#4688B2]" />,
      spec: "24/7 TELEMETRY / ZERO DOWNTIME",
      badge: "PHASE 03",
      deliverable: "Live Cluster Telemetry",
    },
  ];

  return (
    <Section
      spacing="spacious"
      className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] relative overflow-hidden py-20 sm:py-28"
    >
      {/* Subtle Background Pattern & Atmospheric Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="ambient-glow-icy w-96 h-96 -bottom-10 -right-10 opacity-40" />
      <div className="ambient-glow-white w-80 h-80 top-1/4 -left-10 opacity-30" />

      <Container size="default" className="relative z-10">
        {/* Editorial Eyebrow Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D0E3F0] text-xs font-mono text-[#243B53]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2]" />
            <span className="font-semibold uppercase tracking-wider text-[#10213B]">
              ENGINEERING LIFECYCLE // PROTOCOL
            </span>
          </div>
          <span className="font-semibold text-[#4688B2]">HOW WE OPERATE</span>
        </div>

        {/* Editorial Statement */}
        <div className="py-14 sm:py-18 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.12]">
            Technology should move <span className="gradient-text-olive">business forward.</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-2xl">
            We design resilient digital systems that turn complex organizational problems into high-velocity production products.
          </p>
        </div>

        {/* 3 Visual Connected Stages */}
        <div className="pt-10 border-t border-[#D0E3F0] grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="p-8 sm:p-9 rounded-3xl bg-white/95 border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle Stage Number Watermark */}
              <span className="absolute -bottom-4 -right-2 text-7xl font-mono font-black text-[#10213B]/[0.03] select-none pointer-events-none group-hover:text-[#4688B2]/[0.06] transition-colors">
                {stage.num}
              </span>

              {/* Top Card Gradient Sheen */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4688B2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0] mb-6">
                  <span className="font-mono text-xs text-[#4688B2] font-bold tracking-widest uppercase">
                    STAGE {stage.num} // {stage.title}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] group-hover:scale-110 group-hover:border-[#4688B2]/40 transition-all duration-200 shadow-2xs">
                    {stage.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#10213B] mb-2 group-hover:text-[#182A43] transition-colors">
                  {stage.title}
                </h3>
                <p className="text-sm font-semibold text-[#182A43] mb-3">
                  {stage.tagline}
                </p>
                <p className="text-xs text-[#243B53] leading-relaxed font-normal mb-6">
                  {stage.desc}
                </p>

                {/* Diagrammatic Visual Inset */}
                <div className="p-3.5 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-2xs text-[10px] font-mono text-[#243B53] space-y-1.5 group-hover:border-[#4688B2]/30 transition-colors">
                  <div className="flex items-center justify-between text-[#182A43] font-semibold">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#4688B2]" /> {stage.spec}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white text-[#4688B2] font-bold border border-[#D0E3F0]">
                      {stage.badge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D0E3F0] flex items-center justify-between text-[11px] font-mono text-[#5C7690] relative z-10">
                <span>STAGE {stage.num} GATE</span>
                <span className="text-[#182A43] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#4688B2]" /> VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
