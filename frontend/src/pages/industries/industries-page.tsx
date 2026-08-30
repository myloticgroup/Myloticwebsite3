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
      {/* Bento Industries Hero */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Industries" }]} className="mb-6 text-[#5F6872]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Col: Hero Intro */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <Landmark className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Domain Verticals</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  Industry Engineering &amp; <br />
                  <span className="gradient-text-olive font-black">Domain Practice</span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
                  Every vertical operates under unique constraints — from strict financial regulatory mandates to high-throughput media traffic spikes. We build domain-aligned architectures designed for real-world conditions.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E7EF] mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F6872]">
                <span className="font-semibold text-[#101418]">7 DOMAIN VERTICALS</span>
                <span>&bull;</span>
                <span>FINTECH / EDTECH / GCC / MEDIA</span>
              </div>
            </div>

            {/* Right Col: Data & Metrics Visualizer Bento Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4 text-xs font-mono">
                  <span className="font-semibold text-[#101418] tracking-wider uppercase">
                    DOMAIN METRICS &amp; SLA TELEMETRY
                  </span>
                  <span className="text-[#66705A] font-semibold text-[10px] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E1E7EF]">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Fintech Compliance</span>
                      <p className="text-xs font-bold text-[#101418]">PCI-DSS &amp; ISO 27001 Audited</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">100% PASS</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">GCC Scale</span>
                      <p className="text-xs font-bold text-[#101418]">Global Engineering Center Pods</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">24/7 SLA</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Media &amp; Streaming</span>
                      <p className="text-xs font-bold text-[#101418]">Low-Latency Video Runtimes</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">&lt;40MS</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5F6872]">
                <span>HIGH CONCURRENCY SYSTEMS</span>
                <span className="text-[#101418] font-semibold">ZERO DATA LOSS</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bento Industries Directory */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industriesData.map((industry, idx) => {
              const rowNum = String(idx + 1).padStart(2, "0");
              return (
                <div
                  key={industry.id}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-bento-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-[#E1E7EF] mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] group-hover:scale-105 transition-transform">
                          {industryIcons[industry.slug] || <Cpu className="w-5 h-5 text-[#66705A]" />}
                        </div>
                        <span className="font-mono text-xs text-[#7A8490] font-semibold uppercase">
                          DOMAIN {rowNum}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#4C5642] font-semibold uppercase bg-[#F0F4F8] px-2.5 py-1 rounded-lg border border-[#E1E7EF]">
                        VERIFIED PRACTICE
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#101418] mb-3 group-hover:text-[#4C5642] transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-sm text-[#5F6872] leading-relaxed font-normal mb-6">
                      {industry.headline}
                    </p>

                    <div className="pt-4 border-t border-[#E1E7EF] space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#7A8490] font-semibold block mb-2">
                        Core Challenges Solved:
                      </span>
                      {industry.challenges.map((c, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-[#5F6872]">
                          <span className="text-[#66705A] font-bold">•</span>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E1E7EF] flex items-center justify-between">
                    <Link
                      to={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#101418] hover:text-[#66705A] transition-colors group"
                    >
                      <span>Explore {industry.name.split("&")[0].trim()}</span>
                      <ArrowRight className="w-4 h-4 text-[#66705A] group-hover:translate-x-1 transition-transform" />
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
