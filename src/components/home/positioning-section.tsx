import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Compass, Cpu, TrendingUp } from "lucide-react";

export function PositioningSection() {
  const stages = [
    {
      num: "01",
      title: "ARCHITECT",
      tagline: "Design systems before building them.",
      desc: "Clear system models, schema definitions, and capacity planning to prevent architectural dead-ends.",
      icon: <Compass className="w-5 h-5 text-[#66705A]" />,
    },
    {
      num: "02",
      title: "ENGINEER",
      tagline: "Build for real-world conditions.",
      desc: "High-throughput APIs, typed frontends, and automated testing built for continuous production scale.",
      icon: <Cpu className="w-5 h-5 text-[#4C5642]" />,
    },
    {
      num: "03",
      title: "EVOLVE",
      tagline: "Improve continuously after launch.",
      desc: "Telemetry monitoring, zero-downtime rollouts, and model tuning as business workloads expand.",
      icon: <TrendingUp className="w-5 h-5 text-[#66705A]" />,
    },
  ];

  return (
    <Section
      spacing="spacious"
      className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] relative overflow-hidden py-20 sm:py-28"
    >
      <Container size="default">
        {/* Editorial Eyebrow */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8E6DE] text-xs font-mono text-[#555850]">
          <span className="font-semibold uppercase tracking-wider text-[#242622]">
            TECHNOLOGY / ENGINEERING
          </span>
          <span>HOW WE OPERATE</span>
        </div>

        {/* Editorial Statement */}
        <div className="py-12 sm:py-16 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.14]">
            Technology should move business forward.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal max-w-2xl">
            We design resilient digital systems that turn complex ideas into working products.
          </p>
        </div>

        {/* 3 Visual Stages with Subtle Lift & Icon Micro-Interaction */}
        <div className="pt-10 border-t border-[#E8E6DE] grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="p-8 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group relative"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] mb-6">
                  <span className="font-mono text-xs text-[#66705A] font-bold tracking-widest uppercase">
                    {stage.num} — {stage.title}
                  </span>
                  <div className="p-2.5 rounded-lg bg-white border border-[#E8E6DE] group-hover:scale-110 group-hover:border-[#66705A]/40 transition-all duration-200 shadow-2xs">
                    {stage.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#171A17] mb-2 group-hover:text-[#4C5642] transition-colors">
                  {stage.title}
                </h3>
                <p className="text-sm font-semibold text-[#242622] mb-3">
                  {stage.tagline}
                </p>
                <p className="text-xs text-[#555850] leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E6DE] flex items-center justify-between text-[11px] font-mono text-[#73766D]">
                <span>STAGE {stage.num}</span>
                <span className="text-[#4C5642] font-semibold">VERIFIED GATE</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
