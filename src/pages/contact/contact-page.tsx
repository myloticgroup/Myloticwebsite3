import { Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ContactForm } from "./contact-form";
import { companyData } from "@/data/company";

export function ContactPage() {
  return (
    <>
      {/* 01 Editorial Contact Hero */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-20 sm:pb-28 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Contact" }]} className="mb-8 text-[#73766D]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6">
              <span>Direct Enterprise Engagement Channels</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              Initiate <span className="gradient-text-olive font-black">Technical Dialogue</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              Connect directly with our engineering and engagement leadership to discuss project requirements, technical architecture reviews, or specialized talent pods.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Contact Form & Verified Direct Channels Grid */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Verified Channels & Response Standards (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-2xl font-bold text-[#171A17] mb-6">
                  Verified Contact Points
                </h2>

                <div className="space-y-4">
                  {/* Verified Email */}
                  <div className="p-6 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-xs flex items-start gap-4 hover:border-[#66705A]/40 transition-colors">
                    <div className="p-2.5 rounded-lg bg-white text-[#66705A] shrink-0 mt-0.5 border border-[#E8E6DE]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#73766D] font-semibold">
                        Official Direct Email
                      </span>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-base font-bold text-[#171A17] hover:text-[#66705A] transition-colors block mt-0.5"
                      >
                        {companyData.email}
                      </a>
                      <span className="text-xs text-[#555850] mt-1 block">
                        Reviewed directly by engineering leadership
                      </span>
                    </div>
                  </div>

                  {/* Verified Operating Location */}
                  <div className="p-6 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-xs flex items-start gap-4 hover:border-[#66705A]/40 transition-colors">
                    <div className="p-2.5 rounded-lg bg-white text-[#66705A] shrink-0 mt-0.5 border border-[#E8E6DE]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#73766D] font-semibold">
                        Operating Hub
                      </span>
                      <p className="text-base font-bold text-[#171A17] mt-0.5">
                        Gurugram, Haryana, India
                      </p>
                      <span className="text-xs text-[#555850] mt-1 block">
                        Serving global enterprise clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement SLA Commitments */}
              <div className="p-6 rounded-2xl bg-[#F1F0EA] text-[#171A17] border border-[#E8E6DE] shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono text-[#66705A] uppercase tracking-wider font-semibold mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Engagement Response Standards</span>
                </div>
                <div className="space-y-3 text-xs text-[#555850]">
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

            {/* Right Column: Interactive Inquiry Form (Span 7) */}
            <div className="lg:col-span-7 bg-[#F7F5EF] rounded-2xl border border-[#E8E6DE] p-8 sm:p-10 shadow-card">
              <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                PROJECT CONSULTATION INTAKE
              </span>
              <h2 className="text-2xl font-bold text-[#171A17] mb-6">
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
