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
      className="relative overflow-hidden bg-[#7CC7EA] text-[#10253F] min-h-[700px] lg:min-h-[760px] pt-4 sm:pt-8 pb-10"
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
        <div className="relative min-h-[620px] lg:min-h-[660px]">
          {/* Central glass organic panel */}
          <div className="absolute left-[8%] right-[8%] top-[72px] bottom-[70px] rounded-[48%_52%_46%_54%/38%_42%_58%_62%] bg-white/25 border border-white/45 backdrop-blur-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,.55),0_30px_80px_rgba(25,105,150,.10)]" />

          {/* Fine technical line decoration */}
          <div className="absolute left-[18%] top-[90px] w-[62%] h-[470px] rounded-full border border-white/20 rotate-[-8deg] pointer-events-none" />
          <div className="absolute left-[23%] top-[120px] w-[54%] h-[410px] rounded-full border border-white/15 rotate-[8deg] pointer-events-none" />

          {/* Hero content */}
          <div className="relative z-20 flex flex-col items-center text-center pt-[88px] sm:pt-[105px] lg:pt-[112px] px-4">
            <div className="inline-flex items-center rounded-full border border-white/50 bg-white/25 px-4 py-2 text-[10px] sm:text-xs font-mono tracking-[0.18em] uppercase text-[#163B59] backdrop-blur-md shadow-sm animate-fade-up">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#173B5A] animate-beacon" />
              AI • ENGINEERING • INNOVATION
            </div>

            <h1 className="mt-5 max-w-[780px] text-[42px] sm:text-6xl lg:text-[76px] xl:text-[82px] leading-[0.96] tracking-[-0.045em] font-black text-[#0D2744] animate-fade-up delay-75">
              <span className="block">WE BUILD</span>
              <span className="block">INTELLIGENT SYSTEMS</span>
              <span className="block">THAT SCALE.</span>
            </h1>

            <p className="mt-6 max-w-[650px] text-sm sm:text-base lg:text-lg leading-relaxed text-[#173C58]/90 animate-fade-up delay-150">
              AI, software architecture and multi-cloud systems built for enterprise speed, security and real-world scale.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center gap-3 animate-fade-up delay-200">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#10253F] px-6 py-3.5 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-white shadow-lg shadow-[#1B6D95]/15 transition-all hover:-translate-y-0.5 hover:bg-[#173A5A] active:scale-[0.98]"
              >
                START A CONVERSATION
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#capabilities"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/45 px-6 py-3.5 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-[#10253F] backdrop-blur-md transition-all hover:bg-white/65 active:scale-[0.98]"
              >
                EXPLORE
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Small floating technology markers */}
          <div className="absolute z-20 hidden xl:flex left-[18%] top-[175px] items-center gap-2 rounded-xl border border-white/35 bg-white/20 px-3 py-2 text-[10px] font-mono text-[#1C4B69] backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5" /> AI SYSTEMS
          </div>

          <div className="absolute z-20 hidden xl:flex left-[16%] bottom-[145px] items-center gap-2 rounded-xl border border-white/35 bg-white/20 px-3 py-2 text-[10px] font-mono text-[#1C4B69] backdrop-blur-md">
            <Database className="h-3.5 w-3.5" /> DATA + VECTOR SEARCH
          </div>

          <div className="absolute z-20 hidden xl:flex right-[25%] bottom-[120px] items-center gap-2 rounded-xl border border-white/35 bg-white/20 px-3 py-2 text-[10px] font-mono text-[#1C4B69] backdrop-blur-md">
            <Cloud className="h-3.5 w-3.5" /> MULTI-CLOUD
          </div>

          {/* Technology / trust strip */}
          <div className="absolute z-40 left-0 right-0 bottom-0 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-3 px-4 text-[#EFFAFF]">
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
