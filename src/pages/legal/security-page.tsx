import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { companyData } from "@/data/company";

export function SecurityPage() {
  return (
    <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
      <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
      <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

      <Container size="narrow" className="relative z-10">
        <Breadcrumb items={[{ label: "Security & Governance" }]} className="mb-8 text-[#5C7690]" />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-white/80 shadow-card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#F0F7FB] border border-[#D0E3F0] text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4688B2]" />
            <span>SECURITY PROTOCOL &amp; DATA GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10213B] mb-6 tracking-tight">Security &amp; Data Governance</h1>
          <div className="space-y-6 text-sm sm:text-base text-[#243B53] leading-relaxed font-normal">
            <p>
              At {companyData.legalName}, security and enterprise privacy are fundamental engineering constraints embedded into every software architecture, data pipeline, and delivery pod.
            </p>
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-2xs my-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#4688B2] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#10213B] block">Isolated Client Environments</span>
                  <span className="text-xs sm:text-sm text-[#5C7690]">All development and testing sandboxes are strictly segregated with role-based access control.</span>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#4688B2] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#10213B] block">End-to-End Encryption</span>
                  <span className="text-xs sm:text-sm text-[#5C7690]">Data in transit and at rest is secured using industry-standard cryptographic protocols (TLS 1.3, AES-256).</span>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#4688B2] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#10213B] block">Continuous Vulnerability Auditing</span>
                  <span className="text-xs sm:text-sm text-[#5C7690]">Automated dependency audits, static code analysis, and container vulnerability scans integrated into CI/CD.</span>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#10213B] mt-8 mb-2">Responsible Disclosure</h2>
            <p>
              If you identify a security issue or vulnerability, please reach out directly to our technical team at <span className="font-mono font-semibold text-[#10213B]">{companyData.email}</span>.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SecurityPage;
