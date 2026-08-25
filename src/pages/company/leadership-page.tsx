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
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Company", href: "/company" },
              { label: "Leadership" },
            ]}
            className="mb-8 text-[#5C7690]"
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <UserCheck className="w-3.5 h-3.5 text-[#4688B2]" />
              <span>CORPORATE GOVERNANCE // LEADERSHIP</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              Leadership &amp; <br />
              <span className="gradient-text-olive font-black">Corporate Governance</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              Our leadership guides Mylotic Group with a steadfast commitment to engineering excellence, operational integrity, and sustainable client value creation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Leadership Profile Grid */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {leaders.map((leader, idx) => (
              <div
                key={leader.name}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#D0E3F0]/70 mb-6">
                    <span className="font-mono text-xs text-[#4688B2] font-bold uppercase tracking-wider">
                      EXECUTIVE 0{idx + 1}
                    </span>
                    <div className="p-2.5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#4688B2] shadow-2xs group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-4 h-4 text-[#4688B2]" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-1 group-hover:text-[#182A43] transition-colors">{leader.name}</h2>
                  <span className="text-sm font-mono text-[#4688B2] font-semibold block mb-4">
                    {leader.role}
                  </span>
                  <div className="p-4 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-2xs">
                    <p className="text-xs text-[#243B53] leading-relaxed font-mono">
                      <span className="text-[#5C7690] uppercase font-bold">Focus:</span> {leader.focus}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#D0E3F0]/70 flex items-center justify-between text-xs font-mono text-[#5C7690]">
                  <span>Mylotic Group Private Limited</span>
                  <span className="text-[#10213B] font-semibold">ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Corporate Governance Principles */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#EAF6FC] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <Container size="default">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
              GOVERNANCE PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10213B]">
              Our Governance Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2 p-6 sm:p-8 rounded-3xl bg-white border border-white/80 shadow-card hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <span className="font-mono text-xs text-[#4688B2] font-bold">01 // INTEGRITY</span>
              <h3 className="text-lg font-bold text-[#10213B] mt-1">Engineering Transparency</h3>
              <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed font-normal">
                Open communication, honest architectural trade-off evaluations, and clear delivery timelines.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-6 sm:p-8 rounded-3xl bg-white border border-white/80 shadow-card hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <span className="font-mono text-xs text-[#4688B2] font-bold">02 // SECURITY</span>
              <h3 className="text-lg font-bold text-[#10213B] mt-1">IP &amp; Data Governance</h3>
              <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed font-normal">
                Strict enterprise non-disclosure, isolated environments, and data sovereignty compliance.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-6 sm:p-8 rounded-3xl bg-white border border-white/80 shadow-card hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <span className="font-mono text-xs text-[#4688B2] font-bold">03 // VALUE</span>
              <h3 className="text-lg font-bold text-[#10213B] mt-1">Long-Term Impact</h3>
              <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed font-normal">
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
