import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Cpu, Database, Cloud, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const techLogos = ["AWS", "Microsoft", "Google Cloud", "MongoDB", "Docker", "Kubernetes"];

export function HeroSection() {
  return (
    <Section
      spacing="none"
      className="relative overflow-hidden bg-[#7CC7EA] text-[#10253F] min-h-[740px] sm:min-h-[790px] lg:min-h-[830px] pt-4 sm:pt-8 pb-14 sm:pb-16"
    >
      {/* Reference-style ambient field */}
      <div className="absolute inset-0 pointer-events-none hero-sky">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-white/20 blur-3xl" />
        <div className="absolute left-[7%] top-[22%] w-48 h-48 rounded-full bg-[#D8F3FF]/20 blur-3xl" />
        <div className="absolute right-[4%] bottom-[8%] w-72 h-72 rounded-full bg-[#54B8E6]/25 blur-3xl" />
        <div className="absolute inset-0 opacity-20 hero-wave-lines" />
      </div>

      <Container size="default" className="relative z-10">
        {/* Main reference composition */}
        <div className="relative min-h-[660px] sm:min-h-[710px] lg:min-h-[750px]">
          {/* Central glass organic panel */}
          <div className="absolute left-[6%] right-[6%] sm:left-[8%] sm:right-[8%] top-[72px] bottom-[90px] sm:bottom-[100px] lg:bottom-[105px] rounded-[48%_52%_46%_54%/38%_42%_58%_62%] bg-white/25 border border-white/45 backdrop-blur-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,.55),0_30px_80px_rgba(25,105,150,.10)] pointer-events-none" />

          {/* Fine technical line decoration */}
          <div className="absolute left-[18%] top-[90px] w-[62%] h-[470px] rounded-full border border-white/20 rotate-[-8deg] pointer-events-none" />
          <div className="absolute left-[23%] top-[120px] w-[54%] h-[410px] rounded-full border border-white/15 rotate-[8deg] pointer-events-none" />

          {/* Hero content */}
          <div className="relative z-20 flex flex-col items-center text-center pt-[88px] sm:pt-[105px] lg:pt-[112px] px-4">
            {/* 1. Refined Engineering Status Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/40 px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#0E3554] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_2px_10px_rgba(16,42,67,0.06)] select-none animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E3A5D] opacity-45" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0E3554]" />
              </span>
              AI • ENGINEERING • INNOVATION
            </div>

            {/* 2. Main Focal Headline */}
            <h1 className="mt-6 sm:mt-7 max-w-[840px] text-[36px] sm:text-[54px] md:text-[66px] lg:text-[76px] xl:text-[82px] leading-[1.04] sm:leading-[1.0] lg:leading-[0.98] tracking-[-0.04em] font-black text-[#0B2542] animate-fade-up delay-75">
              <span className="block">WE BUILD</span>
              <span className="block mt-1 sm:mt-1.5">INTELLIGENT SYSTEMS</span>
              <span className="block mt-1 sm:mt-1.5 text-[#071F38]">THAT SCALE.</span>
            </h1>

            {/* 3. Description Paragraph */}
            <p className="mt-5 sm:mt-6 max-w-[560px] sm:max-w-[620px] text-sm sm:text-base lg:text-[17px] leading-relaxed sm:leading-relaxed text-[#143B5C]/90 font-normal animate-fade-up delay-150">
              AI, software architecture and multi-cloud systems built for enterprise speed, security and real-world scale.
            </p>

            {/* 4. Action Gateways (Dual Enterprise CTAs) */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto relative z-30 animate-fade-up delay-200">
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-[#0F2742] to-[#0A1A2D] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-white border border-[#16385C] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_rgba(10,26,45,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#153457] hover:to-[#0C2138] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_12px_28px_rgba(10,26,45,0.3)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2742]"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 text-white/90" />
              </Link>

              <a
                href="#capabilities"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/70 bg-white/55 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-[#0B2542] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_4px_16px_rgba(14,48,74,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/80 hover:border-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_24px_rgba(14,48,74,0.14)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2542]"
              >
                <span>EXPLORE</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5 text-[#0F3559]" />
              </a>
            </div>
          </div>

          {/* Small floating technology markers */}
          <div className="absolute z-20 hidden xl:flex left-[4%] 2xl:left-[6%] top-[180px] items-center gap-2 rounded-xl border border-white/35 bg-white/20 px-3 py-2 text-[10px] font-mono text-[#1C4B69] backdrop-blur-md pointer-events-none select-none">
            <Cpu className="h-3.5 w-3.5" /> AI SYSTEMS
          </div>

          <div className="absolute z-20 hidden xl:flex left-[3%] 2xl:left-[5%] bottom-[195px] lg:bottom-[210px] items-center gap-2 rounded-xl border border-white/35 bg-white/20 px-3 py-2 text-[10px] font-mono text-[#1C4B69] backdrop-blur-md pointer-events-none select-none">
            <Database className="h-3.5 w-3.5" /> DATA + VECTOR SEARCH
          </div>

          <div className="absolute z-20 hidden xl:flex right-[3%] 2xl:right-[5%] bottom-[195px] lg:bottom-[210px] items-center gap-2 rounded-xl border border-white/35 bg-white/20 px-3 py-2 text-[10px] font-mono text-[#1C4B69] backdrop-blur-md pointer-events-none select-none">
            <Cloud className="h-3.5 w-3.5" /> MULTI-CLOUD
          </div>

          {/* Technology / trust strip */}
          <div className="absolute z-40 left-0 right-0 bottom-3 sm:bottom-4 lg:bottom-5 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-3 px-4 text-[#EFFAFF]">
            {techLogos.map((name) => (
              <div key={name} className="flex items-center gap-2 opacity-90">
                <span className="h-6 w-6 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                <span className="font-semibold tracking-wide text-sm sm:text-base">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HeroSection;
