import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark, BookOpen, Tv, Cpu, Sparkles, Code2, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { industriesData } from "@/data/industries";
import { mediaAssets, MediaAsset } from "@/data/media";

const industryIcons: Record<string, React.ReactNode> = {
  "ai-intelligent-technology": <Sparkles className="w-5 h-5 text-[#4688B2]" />,
  "it-digital-technology": <Code2 className="w-5 h-5 text-[#4688B2]" />,
  "global-capability-centers": <Globe className="w-5 h-5 text-[#4688B2]" />,
  fintech: <Landmark className="w-5 h-5 text-[#4688B2]" />,
  "financial-services-fintech": <Landmark className="w-5 h-5 text-[#4688B2]" />,
  edtech: <BookOpen className="w-5 h-5 text-[#4688B2]" />,
  "education-edtech": <BookOpen className="w-5 h-5 text-[#4688B2]" />,
  "media-advertising": <Tv className="w-5 h-5 text-[#4688B2]" />,
  "media-telecom": <Tv className="w-5 h-5 text-[#4688B2]" />,
  "enterprise-tech": <Cpu className="w-5 h-5 text-[#4688B2]" />,
  "enterprise-platforms": <Cpu className="w-5 h-5 text-[#4688B2]" />,
};

const industryMediaFallback: Record<string, MediaAsset> = {
  "ai-intelligent-technology": mediaAssets.aiSystems,
  "it-digital-technology": mediaAssets.softwareEngineering,
  "global-capability-centers": mediaAssets.gcc,
  fintech: mediaAssets.fintech,
  "financial-services-fintech": mediaAssets.fintech,
  edtech: mediaAssets.edTechTraining,
  "education-edtech": mediaAssets.edTechTraining,
  "media-advertising": mediaAssets.media,
  "media-telecom": mediaAssets.media,
  "enterprise-tech": mediaAssets.cloudInfrastructure,
  "enterprise-platforms": mediaAssets.cloudInfrastructure,
};

export function IndustriesSection() {
  return (
    <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#EAF6FC] text-[#10213B] relative overflow-hidden py-20 sm:py-28">
      {/* Background Dots Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
      <div className="ambient-glow-icy w-96 h-96 -bottom-10 -right-10 opacity-40" />
      <div className="ambient-glow-white w-80 h-80 top-1/4 -left-10 opacity-35" />

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D0E3F0] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white border border-[#D0E3F0] text-xs font-mono tracking-widest uppercase text-[#4688B2] font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2]" />
              <span>05 // INDUSTRY DOMAIN PRACTICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
              Tailored Industry Verticals
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#243B53] max-w-md font-normal leading-relaxed">
            Architectures engineered to solve domain-specific regulatory constraints, high-concurrency loads, and mission-critical workflows.
          </p>
        </div>

        {/* 2-Column Asymmetric Editorial Industry Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesData.map((industry, idx) => {
            const rowNumber = String(idx + 1).padStart(2, "0");
            const media = industryMediaFallback[industry.slug] || mediaAssets.hero;

            return (
              <div
                key={industry.id}
                className="p-7 sm:p-9 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Top Radiant Accent Sheen */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4688B2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-[#D0E3F0]/70">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] group-hover:scale-110 group-hover:border-[#4688B2]/40 transition-all duration-200 shadow-2xs">
                        {industryIcons[industry.slug] || <Cpu className="w-5 h-5 text-[#4688B2]" />}
                      </div>
                      <span className="font-mono text-xs text-[#5C7690] font-bold uppercase tracking-wider">
                        VERTICAL {rowNumber}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#182A43] font-semibold uppercase bg-[#F0F7FB] px-3 py-1 rounded-full border border-[#D0E3F0]">
                      VERIFIED DOMAIN
                    </span>
                  </div>

                  {/* Industry Photographic Media Header */}
                  {media && (
                    <div className="relative rounded-2xl overflow-hidden my-5 border border-[#D0E3F0] aspect-21/9 bg-[#10213B] group/media shadow-xs">
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/media:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10213D]/85 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none text-[10px] font-mono text-white/90">
                        <span className="truncate">{media.caption}</span>
                        <span className="px-2 py-0.5 rounded bg-[#4688B2] text-white font-bold shrink-0">{media.tag}</span>
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-[#10213B] mt-3 mb-2 group-hover:text-[#182A43] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-[#243B53] leading-relaxed font-normal mb-6">
                    {industry.headline}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#D0E3F0]/70">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#5C7690] font-semibold block mb-2">
                      Engineered Capabilities:
                    </span>
                    {industry.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-[#243B53]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] shrink-0 mt-1.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#D0E3F0]/70 flex items-center justify-between">
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#10213B] group-hover:text-[#4688B2] transition-colors cursor-pointer"
                  >
                    <span>Explore industry</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#4688B2]" />
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
