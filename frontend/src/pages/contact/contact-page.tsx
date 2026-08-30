import { Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ContactForm } from "./contact-form";
import { companyData } from "@/data/company";

export function ContactPage() {
  return (
    <>
      {/* 01 Bento Contact Hero */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Contact" }]} className="mb-6 text-[#5F6872]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <Mail className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Direct Enterprise Engagement Channels</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  Initiate <span className="gradient-text-olive font-black">Technical Dialogue</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
                  Connect directly with our engineering and engagement leadership to discuss project requirements, technical architecture reviews, or specialized talent pods.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E7EF] mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F6872]">
                <span className="font-semibold text-[#101418]">RESPONSE SLA: 1 BUSINESS DAY</span>
                <span>&bull;</span>
                <span>MUTUAL NDA READY</span>
              </div>
            </div>

            {/* Right Col: Communication Visualizer Bento Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4 text-xs font-mono">
                  <span className="font-semibold text-[#101418] tracking-wider uppercase">
                    DIRECT DISCOVERY PROTOCOL
                  </span>
                  <span className="text-[#66705A] font-semibold text-[10px] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E1E7EF]">
                    CONFIDENTIAL
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Technical Review</span>
                      <p className="text-xs font-bold text-[#101418]">Evaluated by Lead Solution Architect</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">DIRECT ACCESS</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">NDA Protection</span>
                      <p className="text-xs font-bold text-[#101418]">Executed Prior to Deep Blueprints</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">PROTECTED</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Operating Base</span>
                      <p className="text-xs font-bold text-[#101418]">Gurugram, India • Serving Global</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">24/7 COVERAGE</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5F6872]">
                <span>NO SALES PRESSURE</span>
                <span className="text-[#101418] font-semibold">100% CONFIDENTIAL</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Contact Form & Verified Direct Channels Grid */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Verified Channels & Response Standards (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-2xl font-bold text-[#101418] mb-6">
                  Verified Contact Points
                </h2>

                <div className="space-y-4">
                  {/* Verified Email */}
                  <div className="p-6 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-start gap-4 hover:border-[#66705A]/40 transition-colors">
                    <div className="p-2.5 rounded-xl bg-white text-[#66705A] shrink-0 mt-0.5 border border-[#E1E7EF]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#7A8490] font-semibold">
                        Official Direct Email
                      </span>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-base font-bold text-[#101418] hover:text-[#66705A] transition-colors block mt-0.5"
                      >
                        {companyData.email}
                      </a>
                      <span className="text-xs text-[#5F6872] mt-1 block">
                        Reviewed directly by engineering leadership
                      </span>
                    </div>
                  </div>

                  {/* Verified Operating Location */}
                  <div className="p-6 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-start gap-4 hover:border-[#66705A]/40 transition-colors">
                    <div className="p-2.5 rounded-xl bg-white text-[#66705A] shrink-0 mt-0.5 border border-[#E1E7EF]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#7A8490] font-semibold">
                        Operating Hub
                      </span>
                      <p className="text-base font-bold text-[#101418] mt-0.5">
                        Gurugram, Haryana, India
                      </p>
                      <span className="text-xs text-[#5F6872] mt-1 block">
                        Serving global enterprise clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement SLA Commitments */}
              <div className="p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
                <div className="flex items-center gap-2 text-xs font-mono text-[#66705A] uppercase tracking-wider font-semibold mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Engagement Response Standards</span>
                </div>
                <div className="space-y-3 text-xs text-[#5F6872]">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#4C5642] shrink-0 mt-0.5" />
                    <span>Inquiries acknowledged within 1 business day.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#4C5642] shrink-0 mt-0.5" />
                    <span>Initial scoping call with technical lead.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#4C5642] shrink-0 mt-0.5" />
                    <span>Mutual non-disclosure agreements executed upon request.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form Bento Container (Span 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E1E7EF] p-8 sm:p-12 shadow-bento">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                PROJECT CONSULTATION INTAKE
              </span>
              <h2 className="text-2xl font-bold text-[#101418] mb-6">
                Send an Enterprise Inquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default ContactPage;
