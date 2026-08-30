import { MapPin, ShieldCheck, Cpu, Users, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { companyData } from "@/data/company";

export function CompanyPage() {
  const companyLinks = [
    {
      title: "Leadership & Governance",
      description: "Meet the executive leadership guiding Mylotic Group's engineering vision.",
      href: "/company/leadership",
      category: "ORGANIZATION",
    },
    {
      title: "Our Delivery Approach",
      description: "How we structure and execute complex engineering engagements.",
      href: "/company/approach",
      category: "METHODOLOGY",
    },
    {
      title: "Careers & Culture",
      description: "Join our engineering teams building mission-critical enterprise systems.",
      href: "/careers",
      category: "TALENT",
    },
  ];

  return (
    <>
      {/* Bento Company Header */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Company" }]} className="mb-6 text-[#5F6872]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Corporate Overview &amp; Principles</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  Engineering the Operating Foundation of <br />
                  <span className="gradient-text-olive font-black">Modern Business</span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
                  {companyData.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E7EF] mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F6872]">
                <span className="font-semibold text-[#101418]">{companyData.legalName}</span>
                <span>&bull;</span>
                <span>GURUGRAM HQ</span>
              </div>
            </div>

            {/* Right Col: Engineering Methodology Visualizer Bento Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4 text-xs font-mono">
                  <span className="font-semibold text-[#101418] tracking-wider uppercase">
                    ENGINEERING METHODOLOGY &amp; CULTURE
                  </span>
                  <span className="text-[#66705A] font-semibold text-[10px] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E1E7EF]">
                    EMBEDDED PODS
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">High Ownership</span>
                      <p className="text-xs font-bold text-[#101418]">No Transactional Agency Handoffs</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">100% OWNED</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Deterministic Systems</span>
                      <p className="text-xs font-bold text-[#101418]">SOC2 &amp; End-to-End Type Safety</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">STRICT QA</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Enterprise Governance</span>
                      <p className="text-xs font-bold text-[#101418]">Continuous Code Reviews &amp; Audits</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">AUDITED</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5F6872]">
                <span>GLOBAL DELIVERY</span>
                <span className="text-[#101418] font-semibold">24/7 SLA SUPPORT</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Operating Context */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold">
                  [ PURPOSE &amp; VALUES ]
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#101418] leading-snug">
                  Architectural Clarity in an Era of Complexity
                </h2>
                <p className="text-xs text-[#7A8490] font-mono">
                  Legal Entity: {companyData.legalName}
                </p>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-6 text-base text-[#5F6872] leading-relaxed font-normal">
                <p>
                  Enterprises today navigate a rapidly evolving technological terrain: the convergence of production AI models, distributed cloud architectures, and intense demand for elite technical execution.
                </p>
                <p>
                  Mylotic Group was structured to solve this exact friction. We reject transactional IT staffing and opaque consultancy handoffs in favor of embedded, high-ownership engineering partnerships.
                </p>
                <p>
                  From deploying domain-specific AI models to architecting high-throughput microservices and providing dedicated talent pods, we ensure our clients build resilient systems that scale predictably.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Corporate Pillars Bento Grid */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 transition-all duration-300">
              <div>
                <div className="p-3 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] w-fit mb-6 text-[#66705A]">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#101418] mb-2">Architectural Rigor</h3>
                <p className="text-sm text-[#5F6872] leading-relaxed font-normal">
                  Every line of code and infrastructure diagram is designed for high concurrency, security compliance, and long-term maintainability.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 transition-all duration-300">
              <div>
                <div className="p-3 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] w-fit mb-6 text-[#4C5642]">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#101418] mb-2">Applied AI Focus</h3>
                <p className="text-sm text-[#5F6872] leading-relaxed font-normal">
                  We bridge the gap between theoretical machine learning research and dependable, production-ready enterprise workflows.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 transition-all duration-300">
              <div>
                <div className="p-3 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] w-fit mb-6 text-[#66705A]">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#101418] mb-2">Specialized Talent</h3>
                <p className="text-sm text-[#5F6872] leading-relaxed font-normal">
                  Our pre-vetted engineers and technical pods seamlessly integrate with client teams to accelerate roadmap velocity.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Operating Hub Location Bento Block */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#101418] text-[#F7F9FB] border border-[#232A32] shadow-bento flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#A5AC92] font-semibold block mb-2">
                OPERATIONAL BASE
              </span>
              <h2 className="text-3xl font-bold text-white">
                Gurugram Technical Hub
              </h2>
              <p className="text-[#9AA4AF] text-sm mt-2 max-w-md">
                Headquartered in Gurugram, Haryana, supporting enterprise clients and global capability centers.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono bg-[#1B2026] border border-[#2E3640] px-5 py-4 rounded-2xl text-[#EEF3F8]">
              <MapPin className="w-4 h-4 text-[#66705A]" />
              <span>Gurugram, Haryana 122503, India</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contextual Navigation */}
      <RelatedContent
        title="Company Resources & Leadership"
        eyebrow="MORE ABOUT MYLOTIC"
        links={companyLinks}
      />
    </>
  );
}

export default CompanyPage;
