import * as React from "react";
import type { Metadata } from "next";
import { ShieldCheck, Zap, Users, Trophy, Code2, HeartHandshake, Compass, Cpu, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CareersClient } from "./careers-client";
import { jobOpeningsData } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers & Open Roles | Mylotic Group",
  description:
    "Explore engineering, AI systems, cloud architecture, and product design career opportunities at Mylotic Group. Join our specialized high-autonomy technical teams.",
};

export default function CareersPage() {
  const culturePrinciples = [
    {
      num: "01",
      title: "High Autonomy & Ownership",
      desc: "Engineers have direct authority over architecture decisions, technology choices, and implementation roadmaps.",
      icon: <Zap className="w-5 h-5 text-[#66705A]" />,
    },
    {
      num: "02",
      title: "Zero Bureaucracy",
      desc: "We eliminate administrative friction and unnecessary meetings so problem-solvers can focus purely on craft and execution.",
      icon: <ShieldCheck className="w-5 h-5 text-[#4C5642]" />,
    },
    {
      num: "03",
      title: "Real Enterprise Impact",
      desc: "Every system we architect supports mission-critical workflows across global finance, education, and media infrastructure.",
      icon: <Trophy className="w-5 h-5 text-[#66705A]" />,
    },
    {
      num: "04",
      title: "Continuous Craft Evolution",
      desc: "Dedicated time and budgets to master emerging AI models, distributed protocols, and modern cloud technologies.",
      icon: <Users className="w-5 h-5 text-[#4C5642]" />,
    },
    {
      num: "05",
      title: "Deterministic Quality",
      desc: "Static typing, automated regression test suites, and strict peer code audits embedded into every release cycle.",
      icon: <Code2 className="w-5 h-5 text-[#66705A]" />,
    },
  ];

  const lifePillars = [
    {
      title: "Distributed First, High Context",
      desc: "Asynchronous documentation, transparent roadmaps, and flexible work modes across India and remote hubs.",
      icon: <Compass className="w-4 h-4 text-[#66705A]" />,
    },
    {
      title: "Deep Technical Exploration",
      desc: "Quarterly hack weeks, open-source sponsorships, and internal research whitepaper drafting.",
      icon: <Cpu className="w-4 h-4 text-[#4C5642]" />,
    },
    {
      title: "Human-Centric Benefits",
      desc: "Comprehensive health coverage, continuous learning allowances, and premium hardware setups.",
      icon: <HeartHandshake className="w-4 h-4 text-[#66705A]" />,
    },
    {
      title: "Direct Client Architecture",
      desc: "Engineers interface directly with client engineering leads without filtering through non-technical layers.",
      icon: <Layers className="w-4 h-4 text-[#4C5642]" />,
    },
  ];

  return (
    <>
      {/* 01 Editorial Careers Hero */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-20 sm:pb-28 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Careers" }]} className="mb-8 text-[#73766D]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6">
              <span>CAREERS AT MYLOTIC GROUP</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171A17] leading-[1.08]">
              BUILD WHAT&apos;S <br />
              <span className="gradient-text-olive font-black">NEXT.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              Work with engineers, systems architects, and machine learning practitioners building systems that matter for modern enterprises.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Why Mylotic & 5 Engineering Culture Principles */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
              WHY MYLOTIC
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171A17] mb-4">
              5 Principles of Our Engineering Culture
            </h2>
            <p className="text-sm sm:text-base text-[#555850] leading-relaxed font-normal">
              We structure our organization around high context, extreme ownership, and deep technical respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {culturePrinciples.map((principle) => (
              <div
                key={principle.num}
                className="p-6 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E6DE] mb-4">
                    <span className="font-mono text-xs font-bold text-[#66705A]">
                      PRINCIPLE {principle.num}
                    </span>
                    <div className="p-2 rounded bg-white border border-[#E8E6DE] text-[#66705A]">
                      {principle.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#171A17] mb-2 leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-[#555850] leading-relaxed font-normal">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 03 Life at Mylotic Visual Horizontal Strip */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F1F0EA] text-[#171A17] py-16 sm:py-24">
        <Container size="default">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
              LIFE AT MYLOTIC
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171A17]">
              Built for Sustainable High Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-colors"
              >
                <div>
                  <div className="p-2.5 rounded-lg bg-[#F7F5EF] border border-[#E8E6DE] text-[#66705A] w-fit mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#171A17] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#555850] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 04 Interactive Jobs Portal & Talent Community */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
              ACTIVE REQUISITIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171A17]">
              Open Positions
            </h2>
          </div>

          <CareersClient jobs={jobOpeningsData} />
        </Container>
      </Section>
    </>
  );
}
