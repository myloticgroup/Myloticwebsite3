import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Mail, ShieldCheck, CheckCircle2, Terminal, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CTASection() {
  return (
    <Section
      spacing="spacious"
      className="bg-gradient-to-b from-[#10213B] via-[#0D1C33] to-[#081220] text-white border-t border-white/10 relative overflow-hidden py-24 sm:py-36"
    >
      {/* Subtle Background Architectural Grid & Multi-Layer Atmospheric Lighting */}
      <div className="absolute inset-0 bg-tech-grid-fine opacity-20 pointer-events-none" />
      <div className="ambient-glow-blue w-[42rem] h-[42rem] -top-20 -left-20 opacity-30" />
      <div className="ambient-glow-icy w-[36rem] h-[36rem] -bottom-20 -right-20 opacity-25" />
      <div className="ambient-glow-white w-80 h-80 top-1/3 left-1/2 -translate-x-1/2 opacity-15" />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Headline & Action Buttons (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-widest text-[#8CC8E8] font-semibold mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8CC8E8] animate-ping" />
              <span>ENGAGEMENT GATEWAY // ARCHITECTURE CONSULTATION</span>
            </div>

            {/* Large Editorial Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              <span className="block font-black">START A</span>
              <span className="block bg-gradient-to-r from-white via-[#D8ECF7] to-[#8CC8E8] bg-clip-text text-transparent font-black">
                CONVERSATION.
              </span>
            </h2>

            {/* Short Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#A2BACB] max-w-xl font-normal leading-relaxed mb-10">
              Connect directly with our engineering leadership to evaluate architecture feasibility, dedicated technical pods, or intelligent systems transformation.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <Link to="/contact" className="w-full sm:w-auto group">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] shadow-cta-blue hover:shadow-cta-blue-hover cursor-pointer border border-white/70"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1.5 transition-transform" />
                </button>
              </Link>

              <Link to="/solutions" className="w-full sm:w-auto group">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all active:scale-[0.98] cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  <span>VIEW OUR CAPABILITIES</span>
                </button>
              </Link>
            </div>

            {/* Verified Location & Direct Contact Channels */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs font-mono text-[#A2BACB]">
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-[#8CC8E8]" />
                <span className="text-white">GURUGRAM, HARYANA, INDIA</span>
              </div>
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Mail className="w-3.5 h-3.5 text-[#8CC8E8]" />
                <span className="text-white font-semibold">ADMIN@MYLOTIC.COM</span>
              </div>
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8CC8E8]" />
                <span className="text-[#8CC8E8] font-semibold">1-DAY SLA RESPONSE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Telemetry & Governance Card (Span 5) */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/15 shadow-cinematic-hero flex flex-col justify-between hover:border-[#8CC8E8]/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              {/* Top Accent Radiant Sheen */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="font-mono text-xs font-bold text-[#8CC8E8] uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#8CC8E8]" /> TECHNICAL PROTOCOL
                  </span>
                  <span className="text-[11px] font-mono text-white font-semibold uppercase bg-white/10 px-3 py-1 rounded-full border border-white/15 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#8CC8E8]" /> DIRECT ACCESS
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  What Happens Next
                </h3>

                <div className="space-y-3.5 text-xs text-[#D8ECF7]">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#8CC8E8] shrink-0 mt-0.5" />
                    <span className="font-normal leading-relaxed text-[#D8ECF7]">
                      Direct review by a Principal Systems Architect within 24 hours.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#8CC8E8] shrink-0 mt-0.5" />
                    <span className="font-normal leading-relaxed text-[#D8ECF7]">
                      Technical scoping call focused purely on architecture, scale constraints, and delivery timelines.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#8CC8E8] shrink-0 mt-0.5" />
                    <span className="font-normal leading-relaxed text-[#D8ECF7]">
                      Bilateral non-disclosure agreements executed prior to deep code or blueprint sharing.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A2BACB]">
                <span>ENGAGEMENT: EMBEDDED PODS</span>
                <span className="text-white font-semibold">100% IN-HOUSE</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
