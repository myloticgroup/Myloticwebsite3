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
      className="bg-[#7CC7EA] text-[#101418] relative overflow-hidden py-16 sm:py-24"
    >
      <Container size="default">
        {/* Editorial Eyebrow Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E1E7EF] text-xs font-mono text-[#5F6872]">
          <span className="font-semibold uppercase tracking-wider text-[#101418] px-3.5 py-1.5 rounded-full bg-white border border-[#E1E7EF] shadow-xs">
            02 // HOW WE OPERATE
          </span>
          <span>ENGINEERING PHILOSOPHY</span>
        </div>

        {/* Editorial Statement Card */}
        <div className="my-10 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101418] leading-[1.14]">
            Technology should move business forward.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-[#5F6872] leading-relaxed font-normal max-w-2xl">
            We design resilient digital systems that turn complex ideas into working enterprise products.
          </p>
        </div>

        {/* 3 Visual Stages in Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-bento-hover hover:-translate-y-1 transition-all duration-300 group relative"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-6">
                  <span className="font-mono text-xs text-[#66705A] font-bold tracking-widest uppercase">
                    {stage.num} — {stage.title}
                  </span>
                  <div className="p-3 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] group-hover:scale-110 transition-transform duration-200 shadow-2xs">
                    {stage.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#101418] mb-2 group-hover:text-[#4C5642] transition-colors">
                  {stage.title}
                </h3>
                <p className="text-sm font-semibold text-[#101418] mb-3">
                  {stage.tagline}
                </p>
                <p className="text-xs text-[#5F6872] leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E1E7EF] flex items-center justify-between text-[11px] font-mono text-[#7A8490]">
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
