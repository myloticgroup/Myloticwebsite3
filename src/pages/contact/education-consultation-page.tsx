import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { EducationConsultationForm } from "./consultation-form";
import { ShieldCheck, Calendar, Users2, Sparkles, Terminal } from "lucide-react";

export function EducationConsultationPage() {
  return (
    <>
      {/* 01 Editorial Hero Header */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -right-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "EdTech & Training", href: "/solutions/edtech-training" },
              { label: "Free Consultation" },
            ]}
            className="mb-8 text-[#5C7690]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold w-fit shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#4688B2]" />
                <span>COMPLIMENTARY ADVISORY SESSION // EDTECH</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
                Book a Free <br />
                <span className="gradient-text-olive font-black">EdTech Consultation</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#243B53] leading-relaxed max-w-2xl font-normal">
                Let&apos;s discuss your training, learning platform, or education technology requirements with our dedicated practice leaders.
              </p>
            </div>

            {/* Quick Consultation Facts */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/80 p-6 sm:p-7 shadow-card flex flex-col gap-4 relative overflow-hidden group hover:border-[#4688B2]/40 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

              <span className="font-mono text-xs uppercase tracking-wider text-[#4688B2] font-bold pb-2 border-b border-[#D0E3F0] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#4688B2]" /> CONSULTATION PROTOCOL
              </span>
              <div className="flex items-start gap-3 text-xs text-[#243B53] p-3 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0]">
                <Calendar className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                <span>30-minute tailored technical &amp; curriculum discovery session.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#243B53] p-3 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0]">
                <Users2 className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                <span>Led directly by Practice Specialists &amp; Solution Architects.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#243B53] p-3 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0]">
                <ShieldCheck className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                <span>Zero sales pressure &bull; 100% confidential discussion.</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Interactive Intake Form */}
      <Section spacing="spacious" className="bg-[#DCEFF8] text-[#10213B] border-b border-[#D0E3F0] py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
        <Container size="default" className="relative z-10">
          <EducationConsultationForm />
        </Container>
      </Section>
    </>
  );
}

export default EducationConsultationPage;
