import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark, BookOpen, Tv, Cpu, Sparkles, Code2, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { industriesData } from "@/data/industries";
import { solutionsData } from "@/data/solutions";
import { mediaAssets, MediaAsset } from "@/data/media";

const industryIcons: Record<string, React.ReactNode> = {
  "ai-intelligent-technology": <Sparkles className="w-5 h-5 text-[#4688B2]" />,
  "it-digital-technology": <Code2 className="w-5 h-5 text-[#4688B2]" />,
  "global-capability-centers": <Globe className="w-5 h-5 text-[#4688B2]" />,
  fintech: <Landmark className="w-5 h-5 text-[#4688B2]" />,
  edtech: <BookOpen className="w-5 h-5 text-[#4688B2]" />,
  "media-advertising": <Tv className="w-5 h-5 text-[#4688B2]" />,
  "enterprise-tech": <Cpu className="w-5 h-5 text-[#4688B2]" />,
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

export function IndustriesPage() {
  const relatedSolutions = solutionsData.slice(0, 3).map((sol) => ({
    title: sol.title,
    description: sol.shortDescription,
    href: `/solutions/${sol.slug}`,
    category: "ENGINEERING SOLUTION",
  }));

  return (
    <>
      {/* Editorial Industries Header */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb items={[{ label: "Industries" }]} className="mb-8 text-[#5C7690]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <Landmark className="w-3.5 h-3.5 text-[#4688B2]" />
              <span>DOMAIN VERTICALS &amp; ARCHITECTURES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              Industry Engineering &amp; <br />
              <span className="gradient-text-olive font-black">Domain Practice</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              Every vertical operates under unique constraints — from strict financial regulatory mandates to high-throughput media traffic spikes. We build domain-aligned architectures designed for real-world conditions.
            </p>
          </div>
        </Container>
      </Section>

      {/* Editorial Industries Directory */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
        <div className="ambient-glow-icy w-96 h-96 -bottom-10 -right-10 opacity-40" />

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesData.map((industry, idx) => {
              const rowNum = String(idx + 1).padStart(2, "0");
              const media = industryMediaFallback[industry.slug] || mediaAssets.hero;

              return (
                <div
                  key={industry.id}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Top Radiant Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-[#D0E3F0]/70 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#4688B2] group-hover:scale-110 group-hover:border-[#4688B2]/40 transition-all duration-200 shadow-2xs">
                          {industryIcons[industry.slug] || <Cpu className="w-5 h-5 text-[#4688B2]" />}
                        </div>
                        <span className="font-mono text-xs text-[#5C7690] font-bold uppercase tracking-wider">
                          DOMAIN {rowNum}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#182A43] font-semibold uppercase bg-[#F0F7FB] px-3 py-1 rounded-full border border-[#D0E3F0]">
                        VERIFIED PRACTICE
                      </span>
                    </div>

                    {/* Photographic Media Banner */}
                    {media && (
                      <div className="relative rounded-2xl overflow-hidden mb-6 border border-[#D0E3F0] aspect-21/9 bg-[#10213B] group/media shadow-xs">
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

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-3 group-hover:text-[#182A43] transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-sm text-[#243B53] leading-relaxed font-normal mb-6">
                      {industry.headline}
                    </p>

                    <div className="pt-4 border-t border-[#D0E3F0]/70 space-y-2.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#5C7690] font-semibold block mb-2">
                        Core Challenges Solved:
                      </span>
                      {industry.challenges.map((c, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-[#243B53]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] shrink-0 mt-1.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D0E3F0]/70 flex items-center justify-between">
                    <Link
                      to={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#10213B] hover:text-[#4688B2] transition-colors group cursor-pointer"
                    >
                      <span>Explore {industry.name.split("&")[0].trim()}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#4688B2]" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Contextual Related Solutions */}
      <RelatedContent
        title="Solutions Tailored for These Domains"
        eyebrow="CAPABILITY ALIGNMENT"
        links={relatedSolutions}
      />
    </>
  );
}

export default IndustriesPage;
