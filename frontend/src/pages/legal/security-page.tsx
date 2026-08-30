import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { companyData } from "@/data/company";

export function SecurityPage() {
  return (
    <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-16 sm:pb-24 min-h-[70vh]">
      <Container size="narrow">
        <Breadcrumb items={[{ label: "Security & Governance" }]} className="mb-6 text-[#5F6872]" />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#66705A]" />
            <span>Security Protocol</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#101418] mb-6">Security &amp; Data Governance</h1>
          <div className="space-y-6 text-sm text-[#5F6872] leading-relaxed font-normal">
            <p>
              At {companyData.legalName}, security and enterprise privacy are fundamental engineering constraints embedded into every software architecture, data pipeline, and delivery pod.
            </p>
            
            <div className="p-6 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] my-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#101418] block">Isolated Client Environments</span>
                  <span className="text-xs text-[#7A8490]">All development and testing sandboxes are strictly segregated with role-based access control.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#101418] block">End-to-End Encryption</span>
                  <span className="text-xs text-[#7A8490]">Data in transit and at rest is secured using industry-standard cryptographic protocols (TLS 1.3, AES-256).</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#101418] block">Continuous Vulnerability Auditing</span>
                  <span className="text-xs text-[#7A8490]">Automated dependency audits, static code analysis, and container vulnerability scans integrated into CI/CD.</span>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-bold text-[#101418] mt-8 mb-2">Responsible Disclosure</h2>
            <p>
              If you identify a security issue or vulnerability, please reach out directly to our technical team at {companyData.email}.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SecurityPage;
