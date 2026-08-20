import * as React from "react";
import type { Metadata } from "next";
import { MapPin, ShieldCheck, Cpu, Users, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "About Mylotic Group | Enterprise Technology & AI",
  description:
    "Learn about Mylotic Group's mission, engineering approach, and enterprise technology practices.",
};

export default function CompanyPage() {
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
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
        <Container size="default">
          <Breadcrumb items={[{ label: "Company" }]} className="mb-8 text-[#73766D]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#66705A]" />
              <span>Corporate Overview</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              Engineering the Operating Foundation of <br />
              <span className="gradient-text-olive font-black">Modern Business</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              {companyData.summary}
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Operating Context */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold">
                [ PURPOSE & VALUES ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171A17] leading-snug">
                Architectural Clarity in an Era of Complexity
              </h2>
              <p className="text-xs text-[#73766D] font-mono">
                Legal Entity: {companyData.legalName}
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-6 text-base text-[#555850] leading-relaxed font-normal">
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
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F1F0EA] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card">
              <div className="p-2.5 rounded-lg bg-[#F7F5EF] border border-[#E8E6DE] w-fit mb-6">
                <Target className="w-5 h-5 text-[#66705A]" />
              </div>
              <h3 className="text-xl font-bold text-[#171A17] mb-2">Architectural Rigor</h3>
              <p className="text-sm text-[#555850] leading-relaxed font-normal">
                Every line of code and infrastructure diagram is designed for high concurrency, security compliance, and long-term maintainability.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card">
              <div className="p-2.5 rounded-lg bg-[#F7F5EF] border border-[#E8E6DE] w-fit mb-6">
                <Cpu className="w-5 h-5 text-[#4C5642]" />
              </div>
              <h3 className="text-xl font-bold text-[#171A17] mb-2">Applied AI Focus</h3>
              <p className="text-sm text-[#555850] leading-relaxed font-normal">
                We bridge the gap between theoretical machine learning research and dependable, production-ready enterprise workflows.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card">
              <div className="p-2.5 rounded-lg bg-[#F7F5EF] border border-[#E8E6DE] w-fit mb-6">
                <Users className="w-5 h-5 text-[#66705A]" />
              </div>
              <h3 className="text-xl font-bold text-[#171A17] mb-2">Specialized Talent</h3>
              <p className="text-sm text-[#555850] leading-relaxed font-normal">
                Our pre-vetted engineers and technical pods seamlessly integrate with client teams to accelerate roadmap velocity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Operating Hub Location */}
      <Section spacing="spacious" className="bg-[#171A17] text-[#F7F5EF] border-b border-[#333830] py-16 sm:py-20">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#A5AC92] font-semibold block mb-2">
                OPERATIONAL BASE
              </span>
              <h2 className="text-3xl font-bold text-[#F7F5EF]">
                Gurugram Technical Hub
              </h2>
              <p className="text-[#A5AC92] text-sm mt-2 max-w-md">
                Headquartered in Gurugram, Haryana, supporting enterprise clients and global capability centers.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono bg-[#242622] border border-[#333830] px-4 py-3 rounded-lg text-[#E8E6DE]">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
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
