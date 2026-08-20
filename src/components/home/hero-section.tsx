import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, Sparkles, Layers, Cpu, ShieldCheck, CheckCircle2, Activity } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { HeroArchitecture } from "./hero-architecture";

export function HeroSection() {
  const verifiedMetrics = [
    {
      value: "6",
      label: "Specialized Practice Areas",
      desc: "AI, Engineering, Cloud, Staffing, Managed Services, EdTech",
      icon: <Layers className="w-4 h-4 text-[#66705A]" />,
    },
    {
      value: "100%",
      label: "Typed Architecture Standard",
      desc: "Static end-to-end type safety across backend & client runtimes",
      icon: <CheckCircle2 className="w-4 h-4 text-[#66705A]" />,
    },
    {
      value: "99.99%",
      label: "Infrastructure SLA Target",
      desc: "Multi-cloud automated failover and zero-downtime CI/CD",
      icon: <ShieldCheck className="w-4 h-4 text-[#66705A]" />,
    },
    {
      value: "24/7",
      label: "Telemetry & Governance",
      desc: "Real-time distributed tracing and observability",
      icon: <Activity className="w-4 h-4 text-[#66705A]" />,
    },
  ];

  return (
    <>
      {/* 01 Main Warm Editorial Hero Section with Phase 7.13 Animations */}
      <Section
        spacing="spacious"
        className="relative border-b border-[#E8E6DE] overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-28 bg-[#F7F5EF] text-[#171A17]"
      >
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Storytelling Headline & Actions (Span 7) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono tracking-widest uppercase text-[#4C5642] font-semibold animate-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-[#66705A] animate-beacon" />
                <span>DIGITAL ENGINEERING / APPLIED AI</span>
              </div>

              {/* Large Editorial Headline with Staggered Fade Up */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171A17] leading-[1.08] animate-fade-up delay-75">
                <span className="block font-black">WE BUILD</span>
                <span className="block text-[#4C5642] font-black">DIGITAL SYSTEMS</span>
                <span className="block gradient-text-olive font-black">THAT MOVE BUSINESS.</span>
              </h1>

              {/* Short Supporting Text */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#555850] leading-relaxed max-w-xl font-normal animate-fade-up delay-150">
                AI, software and cloud systems built for real-world scale.
              </p>

              {/* Action Buttons with Micro-interactions */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto animate-fade-up delay-200">
                <Link href="/contact" className="w-full sm:w-auto group">
                  <button
                    type="button"
                    className="w-full sm:w-auto px-7 py-4 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] shadow-xs cursor-pointer"
                  >
                    <span>START A CONVERSATION</span>
                    <ArrowRight className="w-4 h-4 text-[#A5AC92] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="#capabilities" className="w-full sm:w-auto group">
                  <button
                    type="button"
                    className="w-full sm:w-auto px-7 py-4 rounded-lg border border-[#E8E6DE] bg-white hover:bg-[#F1F0EA] text-[#242622] font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-2xs"
                  >
                    <span>EXPLORE CAPABILITIES</span>
                    <ArrowDown className="w-4 h-4 text-[#66705A] transition-transform duration-200 group-hover:translate-y-0.5" />
                  </button>
                </Link>
              </div>

              {/* Core Feature Signals */}
              <div className="mt-12 pt-8 border-t border-[#E8E6DE] w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-[#555850] animate-fade-up delay-300">
                <span className="inline-flex items-center gap-1.5 text-[#242622] font-medium transition-colors hover:text-[#66705A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#66705A]" /> Applied AI
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#242622] font-medium transition-colors hover:text-[#66705A]">
                  <Layers className="w-3.5 h-3.5 text-[#66705A]" /> Distributed Systems
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#242622] font-medium transition-colors hover:text-[#66705A]">
                  <Cpu className="w-3.5 h-3.5 text-[#66705A]" /> Multi-Cloud IaC
                </span>
              </div>
            </div>

            {/* Right Column: Visual Architecture Composition (Span 5) */}
            <div className="lg:col-span-5 relative animate-fade-up delay-200">
              <HeroArchitecture />
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Hero → Stats Transition Strip with Hover Elevation */}
      <div className="border-b border-[#E8E6DE] bg-[#F1F0EA] py-8 sm:py-10 text-[#171A17]">
        <Container size="default">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {verifiedMetrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-5 rounded-xl bg-white border border-[#E8E6DE] shadow-xs flex flex-col justify-between hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#171A17] font-mono group-hover:text-[#4C5642] transition-colors">
                    {metric.value}
                  </span>
                  <div className="p-2 rounded-md bg-[#F7F5EF] border border-[#E8E6DE] group-hover:scale-105 transition-transform duration-200">
                    {metric.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#171A17] leading-snug">
                    {metric.label}
                  </h4>
                  <p className="text-[11px] text-[#555850] mt-0.5 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
