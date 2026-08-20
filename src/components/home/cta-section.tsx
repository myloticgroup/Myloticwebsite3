import * as React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CTASection() {
  return (
    <Section
      spacing="spacious"
      className="bg-[#EEECE4] text-[#171A17] border-b border-[#E8E6DE] relative overflow-hidden py-24 sm:py-32"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Headline & Action Buttons (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6">
              <span>ENGAGEMENT GATEWAY</span>
            </div>

            {/* Large Editorial Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#171A17] leading-[1.06] mb-6">
              <span className="block font-black">START A</span>
              <span className="block gradient-text-olive font-black">CONVERSATION.</span>
            </h2>

            {/* Short Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#555850] max-w-xl font-normal leading-relaxed mb-8">
              Connect directly with our engineering leadership to evaluate architecture feasibility, dedicated technical pods, or intelligent systems transformation.
            </p>

            {/* Primary & Secondary Action Buttons with Micro-interactions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link href="/contact" className="w-full sm:w-auto group">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-xs cursor-pointer"
                >
                  <span>START A CONVERSATION</span>
                  <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/solutions" className="w-full sm:w-auto group">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg border border-[#E8E6DE] bg-white hover:bg-[#F7F5EF] text-[#171A17] font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all active:scale-[0.98] cursor-pointer shadow-2xs"
                >
                  <span>VIEW OUR CAPABILITIES</span>
                </button>
              </Link>
            </div>

            {/* Verified Location & Direct Contact Channels */}
            <div className="pt-6 border-t border-[#E8E6DE] w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-[#555850]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#66705A]" />
                <span>GURUGRAM, HARYANA, INDIA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#66705A]" />
                <span className="text-[#171A17] font-semibold">ADMIN@MYLOTIC.COM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#66705A]" />
                <span className="text-[#4C5642] font-semibold">1-DAY SLA RESPONSE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Telemetry & Governance Card (Span 5) */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] mb-6">
                  <span className="font-mono text-xs font-bold text-[#66705A] uppercase tracking-wider">
                    TECHNICAL CONSULTATION PROTOCOL
                  </span>
                  <span className="text-[11px] font-mono text-[#4C5642] font-semibold uppercase bg-[#F7F5EF] px-2.5 py-0.5 rounded">
                    DIRECT ACCESS
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#171A17] mb-3">
                  What Happens Next
                </h3>

                <div className="space-y-3.5 text-xs text-[#555850]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                    <span>Direct review by a Principal Systems Architect within 24 hours.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                    <span>Technical scoping call focused purely on architecture, scale constraints, and delivery timelines.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                    <span>Bilateral non-disclosure agreements executed prior to deep code or blueprint sharing.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E8E6DE] flex items-center justify-between text-[11px] font-mono text-[#73766D]">
                <span>ENGAGEMENT MODEL: EMBEDDED PODS</span>
                <span className="text-[#171A17] font-semibold">100% IN-HOUSE</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
