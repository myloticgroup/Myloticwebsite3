import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { EducationConsultationForm } from "./consultation-form";
import { ShieldCheck, Calendar, Users2, Sparkles } from "lucide-react";

export function EducationConsultationPage() {
  return (
    <>
      {/* 01 Bento Hero Header */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "EdTech & Training", href: "/solutions/edtech-training" },
              { label: "Free Consultation" },
            ]}
            className="mb-6 text-[#5F6872]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>COMPLIMENTARY ADVISORY SESSION</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  Book a Free <br />
                  <span className="gradient-text-olive font-black">EdTech Consultation</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-[#5F6872] leading-relaxed max-w-2xl font-normal">
                  Let&apos;s discuss your training, learning platform, or education technology requirements with our dedicated practice leaders.
                </p>
              </div>
            </div>

            {/* Quick Consultation Facts Bento Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E1E7EF] p-8 shadow-bento flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#66705A] font-semibold pb-3 border-b border-[#E1E7EF] block">
                  CONSULTATION PROTOCOL
                </span>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3 text-xs text-[#5F6872]">
                    <Calendar className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                    <span>30-minute tailored technical &amp; curriculum discovery session.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#5F6872]">
                    <Users2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                    <span>Led directly by Practice Specialists &amp; Solution Architects.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#5F6872]">
                    <ShieldCheck className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                    <span>Zero sales pressure &bull; 100% confidential discussion.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Interactive Intake Form */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <EducationConsultationForm />
        </Container>
      </Section>
    </>
  );
}

export default EducationConsultationPage;
