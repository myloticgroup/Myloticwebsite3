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
      {/* Editorial Company Header */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb items={[{ label: "Company" }]} className="mb-8 text-[#5C7690]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4688B2]" />
              <span>CORPORATE OVERVIEW // PHILOSOPHY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              Engineering the Operating Foundation of <br />
              <span className="gradient-text-olive font-black">Modern Business</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              {companyData.summary}
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Operating Context */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#FFFFFF] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-bold">
                [ PURPOSE &amp; VALUES ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B] leading-snug">
                Architectural Clarity in an Era of Complexity
              </h2>
              <p className="text-xs text-[#5C7690] font-mono px-3.5 py-1.5 rounded-full bg-[#F0F7FB] border border-[#D0E3F0] w-fit">
                Legal Entity: {companyData.legalName}
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-6 text-base sm:text-lg text-[#243B53] leading-relaxed font-normal">
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
        </Container>
      </Section>

      {/* Corporate Pillars */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-3 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] w-fit mb-6 shadow-2xs group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5 text-[#4688B2]" />
              </div>
              <h3 className="text-xl font-bold text-[#10213B] mb-2 group-hover:text-[#182A43] transition-colors">Architectural Rigor</h3>
              <p className="text-sm text-[#243B53] leading-relaxed font-normal">
                Every line of code and infrastructure diagram is designed for high concurrency, security compliance, and long-term maintainability.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-3 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] w-fit mb-6 shadow-2xs group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5 text-[#4688B2]" />
              </div>
              <h3 className="text-xl font-bold text-[#10213B] mb-2 group-hover:text-[#182A43] transition-colors">Applied AI Focus</h3>
              <p className="text-sm text-[#243B53] leading-relaxed font-normal">
                We bridge the gap between theoretical machine learning research and dependable, production-ready enterprise workflows.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-3 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] w-fit mb-6 shadow-2xs group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-[#4688B2]" />
              </div>
              <h3 className="text-xl font-bold text-[#10213B] mb-2 group-hover:text-[#182A43] transition-colors">Specialized Talent</h3>
              <p className="text-sm text-[#243B53] leading-relaxed font-normal">
                Our pre-vetted engineers and technical pods seamlessly integrate with client teams to accelerate roadmap velocity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Operating Hub Location */}
      <Section spacing="spacious" className="bg-gradient-to-b from-[#10213B] via-[#0D1C33] to-[#081220] text-white border-b border-white/10 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-fine opacity-20 pointer-events-none" />
        <div className="ambient-glow-blue w-96 h-96 -top-10 -right-10 opacity-30" />

        <Container size="default" className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#8CC8E8] font-bold block mb-2">
                OPERATIONAL BASE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Gurugram Technical Hub
              </h2>
              <p className="text-[#A2BACB] text-sm sm:text-base mt-2 max-w-md font-normal leading-relaxed">
                Headquartered in Gurugram, Haryana, supporting enterprise clients and global capability centers.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono bg-white/10 border border-white/15 px-5 py-3.5 rounded-2xl text-[#D8ECF7] shadow-card">
              <MapPin className="w-4 h-4 text-[#8CC8E8]" />
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
