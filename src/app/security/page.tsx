import * as React from "react";
import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Security & Governance Standards | Mylotic Group",
  description: "Enterprise security architecture, data governance, and compliance principles of Mylotic Group.",
};

export default function SecurityPage() {
  return (
    <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
      <Container size="narrow">
        <Breadcrumb items={[{ label: "Security & Governance" }]} className="mb-8 text-[#73766D]" />
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#66705A]" />
          <span>Security Protocol</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#171A17] mb-6">Security & Data Governance</h1>
        <div className="space-y-6 text-sm text-[#555850] leading-relaxed font-normal">
          <p>
            At {companyData.legalName}, security and enterprise privacy are fundamental engineering constraints embedded into every software architecture, data pipeline, and delivery pod.
          </p>
          
          <div className="p-6 rounded-2xl bg-white border border-[#E8E6DE] shadow-card my-8 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#171A17] block">Isolated Client Environments</span>
                <span className="text-xs text-[#73766D]">All development and testing sandboxes are strictly segregated with role-based access control.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#171A17] block">End-to-End Encryption</span>
                <span className="text-xs text-[#73766D]">Data in transit and at rest is secured using industry-standard cryptographic protocols (TLS 1.3, AES-256).</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#171A17] block">Continuous Vulnerability Auditing</span>
                <span className="text-xs text-[#73766D]">Automated dependency audits, static code analysis, and container vulnerability scans integrated into CI/CD.</span>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-bold text-[#171A17] mt-8 mb-2">Responsible Disclosure</h2>
          <p>
            If you identify a security issue or vulnerability, please reach out directly to our technical team at {companyData.email}.
          </p>
        </div>
      </Container>
    </Section>
  );
}
