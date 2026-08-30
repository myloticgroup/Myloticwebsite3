import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark, BookOpen, Tv, Cpu, Sparkles, Code2, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { industriesData } from "@/data/industries";

const industryIcons: Record<string, React.ReactNode> = {
  "ai-intelligent-technology": <Sparkles className="w-5 h-5 text-[#66705A]" />,
  "it-digital-technology": <Code2 className="w-5 h-5 text-[#66705A]" />,
  "global-capability-centers": <Globe className="w-5 h-5 text-[#66705A]" />,
  fintech: <Landmark className="w-5 h-5 text-[#66705A]" />,
  edtech: <BookOpen className="w-5 h-5 text-[#66705A]" />,
  "media-advertising": <Tv className="w-5 h-5 text-[#66705A]" />,
  "enterprise-tech": <Cpu className="w-5 h-5 text-[#66705A]" />,
};

export function IndustriesSection() {
  return (
    <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F1F0EA] text-[#171A17] relative overflow-hidden py-20 sm:py-28">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E6DE] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#66705A] font-semibold">
              <span>05 / INDUSTRY DOMAIN PRACTICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A17] leading-tight">
              Tailored Industry Verticals
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555850] max-w-md font-normal leading-relaxed">
            Architectures engineered to solve domain-specific regulatory constraints, high-concurrency loads, and mission-critical workflows.
          </p>
        </div>

        {/* 2-Column Asymmetric Editorial Industry Panels with Card Lift & Arrow Slide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesData.map((industry, idx) => {
            const rowNumber = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={industry.id}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-[#E8E6DE]/70">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#F7F5EF] border border-[#E8E6DE] group-hover:scale-110 group-hover:border-[#66705A]/40 transition-all duration-200 shadow-2xs">
                        {industryIcons[industry.slug] || <Cpu className="w-5 h-5 text-[#66705A]" />}
                      </div>
                      <span className="font-mono text-xs text-[#73766D] font-semibold uppercase">
                        VERTICAL {rowNumber}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#4C5642] font-semibold uppercase bg-[#F7F5EF] px-2.5 py-0.5 rounded border border-[#E8E6DE]">
                      VERIFIED DOMAIN
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#171A17] mt-6 mb-2 group-hover:text-[#4C5642] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-[#555850] leading-relaxed font-normal mb-6">
                    {industry.headline}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#E8E6DE]/70">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#73766D] font-semibold block mb-2">
                      Engineered Capabilities:
                    </span>
                    {industry.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-[#555850]">
                        <span className="text-[#66705A] font-bold mt-0.5">•</span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8E6DE]/70 flex items-center justify-between">
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors"
                  >
                    <span>Explore industry</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#66705A]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
