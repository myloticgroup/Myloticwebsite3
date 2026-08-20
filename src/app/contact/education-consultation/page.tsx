import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { EducationConsultationForm } from "./consultation-form";
import { ShieldCheck, Calendar, Users2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Free EdTech & Training Consultation | Mylotic Group",
  description:
    "Schedule a complimentary consultation with Mylotic Group's education technology architects and corporate training specialists.",
};

export default function EducationConsultationPage() {
  return (
    <>
      {/* 01 Editorial Hero Header */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "EdTech & Training", href: "/solutions/edtech-training" },
              { label: "Free Consultation" },
            ]}
            className="mb-8 text-[#73766D]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#66705A]" />
                <span>COMPLIMENTARY ADVISORY SESSION</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
                Book a Free <br />
                <span className="gradient-text-olive font-black">EdTech Consultation</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#555850] leading-relaxed max-w-2xl font-normal">
                Let&apos;s discuss your training, learning platform, or education technology requirements with our dedicated practice leaders.
              </p>
            </div>

            {/* Quick Consultation Facts */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#E8E6DE] p-6 shadow-card flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#66705A] font-semibold pb-2 border-b border-[#E8E6DE]">
                CONSULTATION PROTOCOL
              </span>
              <div className="flex items-start gap-3 text-xs text-[#555850]">
                <Calendar className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                <span>30-minute tailored technical &amp; curriculum discovery session.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#555850]">
                <Users2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                <span>Led directly by Practice Specialists &amp; Solution Architects.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#555850]">
                <ShieldCheck className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                <span>Zero sales pressure &bull; 100% confidential discussion.</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Interactive Intake Form */}
      <Section spacing="spacious" className="bg-[#FFFFFF] text-[#171A17] border-b border-[#E8E6DE] py-16 sm:py-24">
        <Container size="default">
          <EducationConsultationForm />
        </Container>
      </Section>
    </>
  );
}
