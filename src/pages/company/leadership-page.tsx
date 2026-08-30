import { ShieldCheck, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";

export function LeadershipPage() {
  const leaders = [
    {
      name: "Manjeet",
      role: "Director & Executive Leadership",
      focus: "Technical Strategy, AI Practices & Systems Architecture",
    },
    {
      name: "Riya Sharma",
      role: "Director & Executive Leadership",
      focus: "Operational Excellence, Talent Capability & Enterprise Partnerships",
    },
  ];

  const relatedCompany = [
    {
      title: "About Mylotic Group",
      description: "Our mission, operating context, and core company values.",
      href: "/company",
      category: "COMPANY",
    },
    {
      title: "Our Delivery Approach",
      description: "How we structure and execute complex engineering engagements.",
      href: "/company/approach",
      category: "METHODOLOGY",
    },
    {
      title: "Careers & Culture",
      description: "Explore opportunities with our growing engineering organization.",
      href: "/careers",
      category: "TALENT",
    },
  ];

  return (
    <>
      {/* Editorial Leadership Header */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Company", href: "/company" },
              { label: "Leadership" },
            ]}
            className="mb-8 text-[#73766D]"
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold">
              <UserCheck className="w-3.5 h-3.5 text-[#66705A]" />
              <span>Corporate Governance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              Leadership &amp; <br />
              <span className="gradient-text-olive font-black">Corporate Governance</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              Our leadership guides Mylotic Group with a steadfast commitment to engineering excellence, operational integrity, and sustainable client value creation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Leadership Profile Grid */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {leaders.map((leader, idx) => (
              <div
                key={leader.name}
                className="p-8 sm:p-10 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#E8E6DE] mb-6">
                    <span className="font-mono text-xs text-[#66705A] font-bold uppercase">
                      EXECUTIVE 0{idx + 1}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#66705A]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#171A17] mb-1">{leader.name}</h2>
                  <span className="text-sm font-mono text-[#66705A] font-semibold block mb-4">
                    {leader.role}
                  </span>
                  <p className="text-xs text-[#555850] leading-relaxed font-mono">
                    <span className="text-[#73766D] uppercase">Focus:</span> {leader.focus}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8E6DE] flex items-center justify-between text-xs font-mono text-[#73766D]">
                  <span>Mylotic Group Private Limited</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Corporate Governance Principles */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F1F0EA] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
              GOVERNANCE PILLARS
            </span>
            <h2 className="text-3xl font-bold text-[#171A17]">
              Our Governance Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white border border-[#E8E6DE] shadow-xs">
              <span className="font-mono text-xs text-[#66705A] font-bold">01 / INTEGRITY</span>
              <h3 className="text-base font-bold text-[#171A17]">Engineering Transparency</h3>
              <p className="text-xs text-[#555850] leading-relaxed">
                Open communication, honest architectural trade-off evaluations, and clear delivery timelines.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white border border-[#E8E6DE] shadow-xs">
              <span className="font-mono text-xs text-[#66705A] font-bold">02 / SECURITY</span>
              <h3 className="text-base font-bold text-[#171A17]">IP &amp; Data Governance</h3>
              <p className="text-xs text-[#555850] leading-relaxed">
                Strict enterprise non-disclosure, isolated environments, and data sovereignty compliance.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white border border-[#E8E6DE] shadow-xs">
              <span className="font-mono text-xs text-[#66705A] font-bold">03 / VALUE</span>
              <h3 className="text-base font-bold text-[#171A17]">Long-Term Impact</h3>
              <p className="text-xs text-[#555850] leading-relaxed">
                Prioritizing architectures that minimize technical debt and maximize operational longevity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contextual Navigation */}
      <RelatedContent
        title="More About Mylotic Group"
        eyebrow="ORGANIZATIONAL PERSPECTIVE"
        links={relatedCompany}
      />
    </>
  );
}

export default LeadershipPage;
