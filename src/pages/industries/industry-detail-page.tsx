import * as React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Layers,
  Sparkles,
  Cpu,
  Workflow,
  Check,
  Terminal,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { industriesData } from "@/data/industries";
import { expandedIndustriesData } from "@/data/industry-expansion";

function resolveIndustry(slug: string) {
  const normalized =
    slug === "ai"
      ? "ai-intelligent-technology"
      : slug === "it"
      ? "it-digital-technology"
      : slug === "gcc"
      ? "global-capability-centers"
      : slug === "education"
      ? "edtech"
      : slug === "media"
      ? "media-advertising"
      : slug === "enterprise"
      ? "enterprise-tech"
      : slug;

  return industriesData.find((ind) => ind.slug === normalized);
}

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = resolveIndustry(slug || "");

  if (!industry) {
    return (
      <Section spacing="spacious" className="py-24 text-center bg-[#EAF6FC] min-h-[60vh] flex items-center">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#10213B]">Industry Not Found</h1>
          <p className="mt-4 text-[#243B53]">The requested industry vertical does not exist.</p>
          <Link to="/industries" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#4688B2] hover:underline">
            &larr; Back to all industries
          </Link>
        </Container>
      </Section>
    );
  }

  const expansion = expandedIndustriesData[industry.slug];

  const otherIndustries = industriesData
    .filter((ind) => ind.id !== industry.id)
    .slice(0, 3)
    .map((ind) => ({
      title: ind.name,
      description: ind.headline,
      href: `/industries/${ind.slug}`,
      category: "INDUSTRY VERTICAL",
    }));

  return (
    <>
      {/* 01 Editorial Industry Hero */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -right-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.name.split("&")[0].trim() },
            ]}
            className="mb-8 text-[#5C7690]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold w-fit shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-ping" />
                <span>INDUSTRY DOMAIN PRACTICE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
                {industry.name}
              </h1>
              <p className="text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal">
                {industry.headline}
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <button
                    type="button"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2.5 transition-all cursor-pointer shadow-cta-blue hover:shadow-cta-blue-hover group border border-white/60"
                  >
                    <span>{expansion ? expansion.ctaButtonText : "Consult on this Vertical"}</span>
                    <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </Link>
                <Link to="/industries">
                  <button
                    type="button"
                    className="px-8 py-3.5 rounded-xl border border-white/80 bg-white hover:bg-[#F0F7FB] text-[#10213B] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                  >
                    <span>All Industries</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Overview Card */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/80 p-6 sm:p-7 shadow-card flex flex-col gap-4 relative overflow-hidden group hover:border-[#4688B2]/40 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

              <span className="font-mono text-xs uppercase tracking-wider text-[#4688B2] font-bold pb-2 border-b border-[#D0E3F0] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#4688B2]" /> DOMAIN OVERVIEW
              </span>
              <p className="text-xs text-[#243B53] leading-relaxed font-normal">
                {industry.summary}
              </p>
              <div className="pt-2 border-t border-[#D0E3F0] flex items-center justify-between text-[11px] font-mono text-[#5C7690]">
                <span>SECTOR: REGULATED</span>
                <span className="text-[#10213B] font-semibold">STATUS: ACTIVE</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          EXPANDED ARCHITECTURE (AI & INTELLIGENT TECH, IT & DIGITAL TECH, GCC)
          ========================================================================= */}
      {expansion ? (
        <>
          {/* 02 What We Help Build */}
          <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#FFFFFF] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

            <Container size="default" className="relative z-10">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-3">
                  01 / SCOPE &amp; SOLUTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
                  {expansion.whatWeBuildHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.whatWeBuildItems.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-6 sm:p-7 rounded-3xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-card flex flex-col justify-between hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-[#D0E3F0] mb-4">
                        <span className="font-mono text-xs text-[#4688B2] font-bold">
                          0{idx + 1}
                        </span>
                        <Workflow className="w-4 h-4 text-[#5C7690] group-hover:text-[#4688B2] transition-colors" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#10213B] mb-2 leading-snug group-hover:text-[#182A43] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#243B53] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 03 Engineering Capabilities */}
          <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
            <Container size="default">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-3">
                  02 / DOMAIN CAPABILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
                  {expansion.capabilitiesHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.capabilitiesItems.map((cap, cIdx) => (
                  <div
                    key={cap.title}
                    className="p-8 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0] mb-6">
                        <span className="font-mono text-xs text-[#4688B2] font-bold uppercase">
                          CAPABILITY 0{cIdx + 1}
                        </span>
                        <Sparkles className="w-4 h-4 text-[#4688B2]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#10213B] mb-2 group-hover:text-[#182A43] transition-colors">{cap.title}</h3>
                      <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed font-normal">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 04 Common Use Cases */}
          <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#FFFFFF] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

            <Container size="default" className="relative z-10">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-3">
                  03 / PRACTICAL APPLICATIONS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
                  {expansion.useCasesHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {expansion.useCasesList.map((useCase) => (
                  <div
                    key={useCase}
                    className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] flex items-center gap-3 shadow-2xs hover:border-[#4688B2]/60 hover:bg-white transition-all duration-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-white border border-[#D0E3F0] flex items-center justify-center text-[#4688B2] shrink-0 shadow-2xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#10213B]">
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 05 Technology Landscape / Architecture Visual */}
          <Section spacing="spacious" className="bg-gradient-to-b from-[#10213B] via-[#0D1C33] to-[#081220] text-white border-b border-white/10 py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid-fine opacity-20 pointer-events-none" />
            <div className="ambient-glow-blue w-96 h-96 -top-10 -right-10 opacity-30" />

            <Container size="default" className="relative z-10">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#8CC8E8] font-semibold block mb-3">
                  04 / TECHNICAL LANDSCAPE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {expansion.techLandscapeHeading}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#A2BACB] leading-relaxed font-normal">
                  Verified platforms, frameworks, and topologies utilized within this practice domain.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.techLandscapeItems.map((techItem) => (
                  <div
                    key={techItem.category}
                    className="p-6 sm:p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col gap-4 shadow-card hover:border-[#8CC8E8]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs font-mono text-[#8CC8E8] uppercase font-bold">
                      <Cpu className="w-4 h-4 text-[#8CC8E8]" />
                      <span>{techItem.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techItem.stack.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/15 text-[#D8ECF7]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 06 Delivery / Operating Model */}
          <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#FFFFFF] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

            <Container size="default" className="relative z-10">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-3">
                  05 / DELIVERY LIFECYCLE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
                  {expansion.deliveryModelHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.deliveryStages.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-6 sm:p-7 rounded-3xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-card flex flex-col justify-between hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      <span className="font-mono text-xs text-[#4688B2] font-bold uppercase tracking-wider block mb-2">
                        PHASE {stage.step} &bull; {stage.name}
                      </span>
                      <h3 className="text-lg font-bold text-[#10213B] mb-2">{stage.name}</h3>
                      <p className="text-xs text-[#243B53] leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 07 Contextual Closing Consultation CTA Card */}
          <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#EAF6FC] text-[#10213B] py-20 sm:py-28 relative overflow-hidden">
            <Container size="default">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FB] text-xs font-mono uppercase tracking-widest text-[#4688B2] font-semibold mb-3 border border-[#D0E3F0]">
                    <span>STRATEGIC ENGAGEMENT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-2">
                    {expansion.ctaHeading}
                  </h3>
                  <p className="text-sm text-[#243B53] leading-relaxed font-normal">
                    {expansion.ctaSupportingText}
                  </p>
                </div>

                <Link to="/contact" className="group shrink-0">
                  <button
                    type="button"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] active:scale-[0.98] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2.5 shadow-cta-blue hover:shadow-cta-blue-hover cursor-pointer border border-white/60"
                  >
                    <span>{expansion.ctaButtonText}</span>
                    <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </Link>
              </div>
            </Container>
          </Section>
        </>
      ) : (
        /* =========================================================================
           STANDARD ARCHITECTURE (FINTECH, EDTECH, MEDIA, ENTERPRISE TECH)
           ========================================================================= */
        <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#FFFFFF] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
          <Container size="default">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
                SECTOR ANALYSIS &amp; RESPONSE
              </span>
              <h2 className="text-3xl font-bold text-[#10213B]">
                Domain Frictions &amp; Architectural Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Domain Challenges */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-card flex flex-col gap-6 hover:border-[#4688B2]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#5C7690] font-mono text-xs font-semibold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-[#5C7690]" />
                  <span>Sector Frictions</span>
                </div>
                <h3 className="text-2xl font-bold text-[#10213B]">
                  Operational &amp; Technical Constraints
                </h3>
                <ul className="space-y-4">
                  {industry.challenges.map((challenge, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3 text-sm text-[#243B53]">
                      <span className="w-5 h-5 rounded-full bg-[#E8F5FA] text-[#10213B] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                        ✕
                      </span>
                      <span className="leading-relaxed font-normal">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Engineered Capabilities */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-card flex flex-col gap-6 hover:border-[#4688B2]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#4688B2] font-mono text-xs font-semibold uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-[#4688B2]" />
                  <span>Engineered Responses</span>
                </div>
                <h3 className="text-2xl font-bold text-[#10213B]">
                  Mylotic Capability Alignment
                </h3>
                <ul className="space-y-4">
                  {industry.capabilities.map((cap, capIdx) => (
                    <li key={capIdx} className="flex items-start gap-3 text-sm text-[#243B53]">
                      <CheckCircle2 className="w-5 h-5 text-[#4688B2] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-normal">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 08 Contextual Solutions for this Domain */}
      <RelatedContent
        title="Explore Adjacent Industry Verticals"
        eyebrow="CROSS-SECTOR DOMAIN PRACTICES"
        links={otherIndustries}
      />
    </>
  );
}

export default IndustryDetailPage;
