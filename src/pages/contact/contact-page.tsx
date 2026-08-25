import { Mail, MapPin, ShieldCheck, Clock, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ContactForm } from "./contact-form";
import { companyData } from "@/data/company";

export function ContactPage() {
  return (
    <>
      {/* 01 Editorial Contact Hero */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-20 sm:pb-28 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb items={[{ label: "Contact" }]} className="mb-8 text-[#5C7690]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-ping" />
              <span>DIRECT ENTERPRISE ENGAGEMENT // PROTOCOL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              Initiate <span className="gradient-text-olive font-black">Technical Dialogue</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              Connect directly with our engineering and engagement leadership to discuss project requirements, technical architecture reviews, or specialized talent pods.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Contact Form & Verified Direct Channels Grid */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        {/* Background Dots Pattern */}
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Verified Channels & Response Standards (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-6">
                  Verified Contact Points
                </h2>

                <div className="space-y-4">
                  {/* Verified Email */}
                  <div className="p-6 rounded-3xl bg-white border border-white/80 shadow-card flex items-start gap-4 hover:border-[#4688B2]/60 hover:shadow-card-hover transition-all duration-300">
                    <div className="p-3 rounded-2xl bg-[#F0F7FB] text-[#4688B2] shrink-0 mt-0.5 border border-[#D0E3F0] shadow-2xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#5C7690] font-semibold">
                        Official Direct Email
                      </span>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-base font-bold text-[#10213B] hover:text-[#4688B2] transition-colors block mt-0.5"
                      >
                        {companyData.email}
                      </a>
                      <span className="text-xs text-[#243B53] mt-1 block">
                        Reviewed directly by engineering leadership
                      </span>
                    </div>
                  </div>

                  {/* Verified Operating Location */}
                  <div className="p-6 rounded-3xl bg-white border border-white/80 shadow-card flex items-start gap-4 hover:border-[#4688B2]/60 hover:shadow-card-hover transition-all duration-300">
                    <div className="p-3 rounded-2xl bg-[#F0F7FB] text-[#4688B2] shrink-0 mt-0.5 border border-[#D0E3F0] shadow-2xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#5C7690] font-semibold">
                        Operating Hub
                      </span>
                      <p className="text-base font-bold text-[#10213B] mt-0.5">
                        Gurugram, Haryana, India
                      </p>
                      <span className="text-xs text-[#243B53] mt-1 block">
                        Serving global enterprise clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement SLA Commitments */}
              <div className="p-6 rounded-3xl bg-white text-[#10213B] border border-white/80 shadow-card">
                <div className="flex items-center gap-2 text-xs font-mono text-[#4688B2] uppercase tracking-wider font-semibold mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Engagement Response Standards</span>
                </div>
                <div className="space-y-3 text-xs text-[#243B53]">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                    <span>Inquiries acknowledged within 1 business day.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                    <span>Initial scoping call with technical lead.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                    <span>Mutual non-disclosure agreements executed upon request.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form (Span 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-white/80 p-8 sm:p-10 shadow-card relative overflow-hidden">
              {/* Top Accent Radiant Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

              <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#4688B2]" /> PROJECT CONSULTATION INTAKE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-6">
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
