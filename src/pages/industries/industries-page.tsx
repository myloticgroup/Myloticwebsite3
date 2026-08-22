import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark, BookOpen, Tv, Cpu, Sparkles, Code2, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { industriesData } from "@/data/industries";
import { solutionsData } from "@/data/solutions";

const industryIcons: Record<string, React.ReactNode> = {
  "ai-intelligent-technology": <Sparkles className="w-5 h-5 text-[#66705A]" />,
  "it-digital-technology": <Code2 className="w-5 h-5 text-[#66705A]" />,
  "global-capability-centers": <Globe className="w-5 h-5 text-[#66705A]" />,
  fintech: <Landmark className="w-5 h-5 text-[#66705A]" />,
  edtech: <BookOpen className="w-5 h-5 text-[#66705A]" />,
  "media-advertising": <Tv className="w-5 h-5 text-[#66705A]" />,
  "enterprise-tech": <Cpu className="w-5 h-5 text-[#66705A]" />,
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
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
        <Container size="default">
          <Breadcrumb items={[{ label: "Industries" }]} className="mb-8 text-[#73766D]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold">
              <Landmark className="w-3.5 h-3.5 text-[#66705A]" />
              <span>Domain Verticals</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              Industry Engineering &amp; <br />
              <span className="gradient-text-olive font-black">Domain Practice</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              Every vertical operates under unique constraints — from strict financial regulatory mandates to high-throughput media traffic spikes. We build domain-aligned architectures designed for real-world conditions.
            </p>
          </div>
        </Container>
      </Section>

      {/* Editorial Industries Directory */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industriesData.map((industry, idx) => {
              const rowNum = String(idx + 1).padStart(2, "0");
              return (
                <div
                  key={industry.id}
                  className="p-8 sm:p-10 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-[#E8E6DE] mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-white border border-[#E8E6DE] group-hover:scale-105 transition-transform">
                          {industryIcons[industry.slug] || <Cpu className="w-5 h-5 text-[#66705A]" />}
                        </div>
                        <span className="font-mono text-xs text-[#73766D] font-semibold uppercase">
                          DOMAIN {rowNum}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#4C5642] font-semibold uppercase bg-white px-2.5 py-0.5 rounded border border-[#E8E6DE]">
                        VERIFIED PRACTICE
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#171A17] mb-3 group-hover:text-[#4C5642] transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-sm text-[#555850] leading-relaxed font-normal mb-6">
                      {industry.headline}
                    </p>

                    <div className="pt-4 border-t border-[#E8E6DE] space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#73766D] font-semibold block mb-2">
                        Core Challenges Solved:
                      </span>
                      {industry.challenges.map((c, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-[#555850]">
                          <span className="text-[#66705A] font-bold">•</span>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E8E6DE] flex items-center justify-between">
                    <Link
                      to={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] transition-colors group"
                    >
                      <span>Explore {industry.name.split("&")[0].trim()}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
