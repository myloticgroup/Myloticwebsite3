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
      <Section spacing="spacious" className="py-24 text-center bg-[#7CC7EA]">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#101418]">Industry Not Found</h1>
          <p className="mt-4 text-[#5F6872]">The requested industry vertical does not exist.</p>
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
      {/* 01 Bento Industry Hero */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.name.split("&")[0].trim() },
            ]}
            className="mb-6 text-[#5F6872]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <span>Industry Domain Practice</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  {industry.name}
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-[#5F6872] leading-relaxed font-normal">
                  {industry.headline}
                </p>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <button
                    type="button"
                    className="px-6 py-3.5 rounded-xl bg-[#101418] hover:bg-[#1B2026] text-[#EEF3F8] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs group"
                  >
                    <span>{expansion ? expansion.ctaButtonText : "Consult on this Vertical"}</span>
                    <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/industries">
                  <button
                    type="button"
                    className="px-6 py-3.5 rounded-xl border border-[#E1E7EF] bg-[#F0F4F8] hover:bg-[#E1E7EF] text-[#101418] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
                  >
                    <span>All Industries</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Overview Bento Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E1E7EF] p-8 shadow-bento flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#66705A] font-semibold pb-3 border-b border-[#E1E7EF] block">
                  DOMAIN OVERVIEW
                </span>
                <p className="text-xs text-[#5F6872] leading-relaxed font-normal mt-4">
                  {industry.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] flex items-center justify-between text-[11px] font-mono text-[#7A8490]">
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
          <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
            <Container size="default">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  01 / SCOPE &amp; SOLUTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101418] leading-tight">
                  {expansion.whatWeBuildHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.whatWeBuildItems.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-[#E1E7EF] mb-4">
                        <span className="font-mono text-xs text-[#66705A] font-bold">
                          0{idx + 1}
                        </span>
                        <Workflow className="w-4 h-4 text-[#7A8490]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#101418] mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#5F6872] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 03 Engineering Capabilities */}
          <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
            <Container size="default">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  02 / DOMAIN CAPABILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101418] leading-tight">
                  {expansion.capabilitiesHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.capabilitiesItems.map((cap, cIdx) => (
                  <div
                    key={cap.title}
                    className="p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-bento-hover transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-6">
                        <span className="font-mono text-xs text-[#66705A] font-bold uppercase">
                          CAPABILITY 0{cIdx + 1}
                        </span>
                        <Sparkles className="w-4 h-4 text-[#66705A]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#101418] mb-2">{cap.title}</h3>
                      <p className="text-xs sm:text-sm text-[#5F6872] leading-relaxed font-normal">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 04 Common Use Cases */}
          <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
            <Container size="default">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  03 / PRACTICAL APPLICATIONS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101418] leading-tight">
                  {expansion.useCasesHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {expansion.useCasesList.map((useCase) => (
                  <div
                    key={useCase}
                    className="p-5 rounded-2xl bg-white border border-[#E1E7EF] shadow-bento flex items-center gap-3 hover:border-[#66705A]/50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-center text-[#66705A] shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#101418]">
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 05 Technology Landscape / Architecture Visual */}
          <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
            <Container size="default">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#101418] text-[#F7F9FB] border border-[#232A32] shadow-bento">
                <div className="max-w-4xl mb-12">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A5AC92] font-semibold block mb-3">
                    04 / TECHNICAL LANDSCAPE
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {expansion.techLandscapeHeading}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-[#9AA4AF] leading-relaxed font-normal">
                    Verified platforms, frameworks, and topologies utilized within this practice domain.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {expansion.techLandscapeItems.map((techItem) => (
                    <div
                      key={techItem.category}
                      className="p-6 rounded-2xl bg-[#1B2026] border border-[#2E3640] flex flex-col gap-4 shadow-card"
                    >
                      <div className="flex items-center gap-2 pb-3 border-b border-[#2E3640] text-xs font-mono text-[#A5AC92] uppercase font-bold">
                        <Cpu className="w-4 h-4 text-[#66705A]" />
                        <span>{techItem.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {techItem.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#101418] border border-[#2E3640] text-[#EEF3F8]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          {/* 06 Delivery / Operating Model */}
          <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
            <Container size="default">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
                  05 / DELIVERY LIFECYCLE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101418] leading-tight">
                  {expansion.deliveryModelHeading}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expansion.deliveryStages.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 transition-all"
                  >
                    <div>
                      <span className="font-mono text-xs text-[#66705A] font-bold uppercase tracking-wider block mb-2">
                        PHASE {stage.step} &bull; {stage.name}
                      </span>
                      <h3 className="text-lg font-bold text-[#101418] mb-2">{stage.name}</h3>
                      <p className="text-xs text-[#5F6872] leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* 07 Contextual Closing Consultation CTA Card */}
          <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
            <Container size="default">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-bento-hover transition-all">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-3">
                    <span>STRATEGIC ENGAGEMENT</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#101418] mb-2">
                    {expansion.ctaHeading}
                  </h3>
                  <p className="text-sm text-[#5F6872] leading-relaxed font-normal">
                    {expansion.ctaSupportingText}
                  </p>
                </div>

                <Link to="/contact" className="group shrink-0">
                  <button
                    type="button"
                    className="px-8 py-4 rounded-xl bg-[#101418] hover:bg-[#1B2026] active:scale-[0.98] text-[#EEF3F8] font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
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
        <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
          <Container size="default">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                SECTOR ANALYSIS &amp; RESPONSE
              </span>
              <h2 className="text-3xl font-bold text-[#101418]">
                Domain Frictions &amp; Architectural Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Domain Challenges */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#7A8490] font-mono text-xs font-semibold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-[#7A8490]" />
                  <span>Sector Frictions</span>
                </div>
                <h3 className="text-2xl font-bold text-[#101418]">
                  Operational &amp; Technical Constraints
                </h3>
                <ul className="space-y-4">
                  {industry.challenges.map((challenge, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3 text-sm text-[#5F6872]">
                      <span className="w-5 h-5 rounded-full bg-[#F0F4F8] text-[#101418] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 border border-[#E1E7EF]">
                        ✕
                      </span>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Engineered Capabilities */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#4C5642] font-mono text-xs font-semibold uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-[#66705A]" />
                  <span>Engineered Responses</span>
                </div>
                <h3 className="text-2xl font-bold text-[#101418]">
                  Mylotic Capability Alignment
                </h3>
                <ul className="space-y-4">
                  {industry.capabilities.map((cap, capIdx) => (
                    <li key={capIdx} className="flex items-start gap-3 text-sm text-[#5F6872]">
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
