import { ShieldCheck, Users, Code2, HeartHandshake, Compass, Cpu, Layers, Zap, Trophy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CareersClient } from "./careers-client";
import { jobOpeningsData } from "@/data/careers";

export function CareersPage() {
  const culturePrinciples = [
    {
      num: "01",
      title: "High Autonomy & Ownership",
      desc: "Engineers have direct authority over architecture decisions, technology choices, and implementation roadmaps.",
      icon: <Zap className="w-5 h-5 text-[#4688B2]" />,
    },
    {
      num: "02",
      title: "Zero Bureaucracy",
      desc: "We eliminate administrative friction and unnecessary meetings so problem-solvers can focus purely on craft and execution.",
      icon: <ShieldCheck className="w-5 h-5 text-[#4688B2]" />,
    },
    {
      num: "03",
      title: "Real Enterprise Impact",
      desc: "Every system we architect supports mission-critical workflows across global finance, education, and media infrastructure.",
      icon: <Trophy className="w-5 h-5 text-[#4688B2]" />,
    },
    {
      num: "04",
      title: "Continuous Craft Evolution",
      desc: "Dedicated time and budgets to master emerging AI models, distributed protocols, and modern cloud technologies.",
      icon: <Users className="w-5 h-5 text-[#4688B2]" />,
    },
    {
      num: "05",
      title: "Deterministic Quality",
      desc: "Static typing, automated regression test suites, and strict peer code audits embedded into every release cycle.",
      icon: <Code2 className="w-5 h-5 text-[#4688B2]" />,
    },
  ];

  const lifePillars = [
    {
      title: "Distributed First, High Context",
      desc: "Asynchronous documentation, transparent roadmaps, and flexible work modes across India and remote hubs.",
      icon: <Compass className="w-4 h-4 text-[#4688B2]" />,
    },
    {
      title: "Deep Technical Exploration",
      desc: "Quarterly hack weeks, open-source sponsorships, and internal research whitepaper drafting.",
      icon: <Cpu className="w-4 h-4 text-[#4688B2]" />,
    },
    {
      title: "Human-Centric Benefits",
      desc: "Comprehensive health coverage, continuous learning allowances, and premium hardware setups.",
      icon: <HeartHandshake className="w-4 h-4 text-[#4688B2]" />,
    },
    {
      title: "Direct Client Architecture",
      desc: "Engineers interface directly with client engineering leads without filtering through non-technical layers.",
      icon: <Layers className="w-4 h-4 text-[#4688B2]" />,
    },
  ];

  return (
    <>
      {/* 01 Editorial Careers Hero */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-20 sm:pb-28 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb items={[{ label: "Careers" }]} className="mb-8 text-[#5C7690]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-ping" />
              <span>CAREERS AT MYLOTIC GROUP</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#10213B] leading-[1.04]">
              BUILD WHAT&apos;S <br />
              <span className="gradient-text-olive font-black">NEXT.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              Work with engineers, systems architects, and machine learning practitioners building systems that matter for modern enterprises.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Why Mylotic & 5 Engineering Culture Principles */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
        <div className="ambient-glow-icy w-96 h-96 -bottom-10 -right-10 opacity-40" />

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
              WHY MYLOTIC
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10213B] mb-4">
              5 Principles of Our Engineering Culture
            </h2>
            <p className="text-sm sm:text-base text-[#243B53] leading-relaxed font-normal">
              We structure our organization around high context, extreme ownership, and deep technical respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {culturePrinciples.map((principle) => (
              <div
                key={principle.num}
                className="p-6 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#D0E3F0]/70 mb-4">
                    <span className="font-mono text-xs font-bold text-[#4688B2]">
                      PRINCIPLE {principle.num}
                    </span>
                    <div className="p-2 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#4688B2] shadow-2xs group-hover:scale-110 transition-transform">
                      {principle.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#10213B] mb-2 leading-snug group-hover:text-[#182A43] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-[#243B53] leading-relaxed font-normal">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 03 Life at Mylotic Visual Horizontal Strip */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#EAF6FC] text-[#10213B] py-20 sm:py-28 relative overflow-hidden">
        <Container size="default">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
              LIFE AT MYLOTIC
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B]">
              Built for Sustainable High Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="p-2.5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#4688B2] w-fit mb-4 shadow-2xs group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#10213B] mb-2 group-hover:text-[#182A43] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#243B53] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 04 Interactive Jobs Portal & Talent Community */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <Container size="default">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
              ACTIVE REQUISITIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10213B]">
              Open Positions
            </h2>
          </div>

          <CareersClient jobs={jobOpeningsData} />
        </Container>
      </Section>
    </>
  );
}

export default CareersPage;
