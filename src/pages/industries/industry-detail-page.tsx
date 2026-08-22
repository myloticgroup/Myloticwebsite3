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
      <Section spacing="spacious" className="py-24 text-center">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#171A17]">Industry Not Found</h1>
          <p className="mt-4 text-[#555850]">The requested industry vertical does not exist.</p>
          <Link to="/industries" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#66705A]">
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
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-24">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.name.split("&")[0].trim() },
            ]}
            className="mb-8 text-[#73766D]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold w-fit">
                <span>Industry Domain Practice</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
                {industry.name}
              </h1>
              <p className="text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
                {industry.headline}
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <button
                    type="button"
                    className="px-6 py-3.5 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs group"
                  >
                    <span>{expansion ? expansion.ctaButtonText : "Consult on this Vertical"}</span>
                    <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/industries">
                  <button
                    type="button"
                    className="px-6 py-3.5 rounded-lg border border-[#E8E6DE] bg-white hover:bg-[#F1F0EA] text-[#171A17] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
                  >
                    <span>All Industries</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Overview Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#E8E6DE] p-6 shadow-card flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#66705A] font-semibold pb-2 border-b border-[#E8E6DE]">
                DOMAIN OVERVIEW
              </span>
              <p className="text-xs text-[#555850] leading-relaxed font-normal">
                {industry.summary}
              </p>
              <div className="pt-2 border-t border-[#E8E6DE] flex items-center justify-between text-[11px] font-mono text-[#73766D]">
                <span>SECTOR: REGULATED</span>
                <span className="text-[#4C5642] font-semibold">STATUS: ACTIVE</span>
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
          <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
            <Container size="default">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  01 / SCOPE &amp; SOLUTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A17] leading-tight">
                  {expansion.whatWeBuildHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.whatWeBuildItems.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-6 sm:p-7 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DE] mb-4">
                        <span className="font-mono text-xs text-[#66705A] font-bold">
                          0{idx + 1}
                        </span>
                        <Workflow className="w-4 h-4 text-[#73766D]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#171A17] mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#555850] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 03 Engineering Capabilities */}
          <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F1F0EA] text-[#171A17] py-20 sm:py-28">
            <Container size="default">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  02 / DOMAIN CAPABILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A17] leading-tight">
                  {expansion.capabilitiesHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.capabilitiesItems.map((cap, cIdx) => (
                  <div
                    key={cap.title}
                    className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-card-hover transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] mb-6">
                        <span className="font-mono text-xs text-[#66705A] font-bold uppercase">
                          CAPABILITY 0{cIdx + 1}
                        </span>
                        <Sparkles className="w-4 h-4 text-[#66705A]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#171A17] mb-2">{cap.title}</h3>
                      <p className="text-xs sm:text-sm text-[#555850] leading-relaxed font-normal">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 04 Common Use Cases */}
          <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
            <Container size="default">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  03 / PRACTICAL APPLICATIONS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A17] leading-tight">
                  {expansion.useCasesHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {expansion.useCasesList.map((useCase) => (
                  <div
                    key={useCase}
                    className="p-5 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE] flex items-center gap-3 shadow-2xs hover:border-[#66705A]/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-white border border-[#E8E6DE] flex items-center justify-center text-[#66705A] shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#171A17]">
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 05 Technology Landscape / Architecture Visual */}
          <Section spacing="spacious" className="bg-[#171A17] text-[#F7F5EF] border-b border-[#333830] py-20 sm:py-28">
            <Container size="default">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#A5AC92] font-semibold block mb-3">
                  04 / TECHNICAL LANDSCAPE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F5EF] leading-tight">
                  {expansion.techLandscapeHeading}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#A5AC92] leading-relaxed font-normal">
                  Verified platforms, frameworks, and topologies utilized within this practice domain.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.techLandscapeItems.map((techItem) => (
                  <div
                    key={techItem.category}
                    className="p-6 rounded-2xl bg-[#242622] border border-[#333830] flex flex-col gap-4 shadow-card"
                  >
                    <div className="flex items-center gap-2 pb-3 border-b border-[#333830] text-xs font-mono text-[#A5AC92] uppercase font-bold">
                      <Cpu className="w-4 h-4 text-[#A5AC92]" />
                      <span>{techItem.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techItem.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-[#171A17] border border-[#333830] text-[#E8E6DE]"
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
          <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
            <Container size="default">
              <div className="max-w-4xl mb-16">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  05 / DELIVERY LIFECYCLE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A17] leading-tight">
                  {expansion.deliveryModelHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.deliveryStages.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-6 sm:p-7 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all"
                  >
                    <div>
                      <span className="font-mono text-xs text-[#66705A] font-bold uppercase tracking-wider block mb-2">
                        PHASE {stage.step} &bull; {stage.name}
                      </span>
                      <h3 className="text-lg font-bold text-[#171A17] mb-2">{stage.name}</h3>
                      <p className="text-xs text-[#555850] leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 07 Contextual Closing Consultation CTA Card */}
          <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#EEECE4] text-[#171A17] py-16 sm:py-20">
            <Container size="default">
              <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-card-hover transition-all">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-3">
                    <span>STRATEGIC ENGAGEMENT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#171A17] mb-2">
                    {expansion.ctaHeading}
                  </h3>
                  <p className="text-sm text-[#555850] leading-relaxed font-normal">
                    {expansion.ctaSupportingText}
                  </p>
                </div>

                <Link to="/contact" className="group shrink-0">
                  <button
                    type="button"
                    className="px-8 py-4 rounded-lg bg-[#171A17] hover:bg-[#242622] active:scale-[0.98] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>{expansion.ctaButtonText}</span>
                    <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
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
        <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
          <Container size="default">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                SECTOR ANALYSIS &amp; RESPONSE
              </span>
              <h2 className="text-3xl font-bold text-[#171A17]">
                Domain Frictions &amp; Architectural Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Domain Challenges */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#73766D] font-mono text-xs font-semibold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-[#73766D]" />
                  <span>Sector Frictions</span>
                </div>
                <h3 className="text-2xl font-bold text-[#171A17]">
                  Operational &amp; Technical Constraints
                </h3>
                <ul className="space-y-4">
                  {industry.challenges.map((challenge, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3 text-sm text-[#555850]">
                      <span className="w-5 h-5 rounded-full bg-[#E8E6DE] text-[#242622] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                        ✕
                      </span>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Engineered Capabilities */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#4C5642] font-mono text-xs font-semibold uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-[#66705A]" />
                  <span>Engineered Responses</span>
                </div>
                <h3 className="text-2xl font-bold text-[#171A17]">
                  Mylotic Capability Alignment
                </h3>
                <ul className="space-y-4">
                  {industry.capabilities.map((cap, capIdx) => (
                    <li key={capIdx} className="flex items-start gap-3 text-sm text-[#555850]">
                      <CheckCircle2 className="w-5 h-5 text-[#66705A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{cap}</span>
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
