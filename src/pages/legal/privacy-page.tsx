import { Lock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { companyData } from "@/data/company";

export function PrivacyPage() {
  return (
    <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
      <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
      <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

      <Container size="narrow" className="relative z-10">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} className="mb-8 text-[#5C7690]" />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-white/80 shadow-card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#F0F7FB] border border-[#D0E3F0] text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold shadow-2xs">
            <Lock className="w-3.5 h-3.5 text-[#4688B2]" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10213B] mb-6 tracking-tight">Privacy Policy</h1>
          <div className="space-y-6 text-sm sm:text-base text-[#243B53] leading-relaxed font-normal">
            <p>
              {companyData.legalName} is committed to protecting the privacy and confidentiality of our clients, partners, and website visitors.
            </p>
            <h2 className="text-lg font-bold text-[#10213B] mt-8 mb-2">1. Information Collection</h2>
            <p>
              We collect personal information solely when voluntarily provided through our contact forms or direct email inquiries for the purpose of business communication and engineering consultations.
            </p>
            <h2 className="text-lg font-bold text-[#10213B] mt-8 mb-2">2. Data Usage &amp; Security</h2>
            <p>
              We do not sell, rent, or trade client information. All project scopes, architectural discussions, and technical requirements are handled under strict confidentiality protocols.
            </p>
            <h2 className="text-lg font-bold text-[#10213B] mt-8 mb-2">3. Contact</h2>
            <p>
              For privacy inquiries, please contact us at <span className="font-mono font-semibold text-[#10213B]">{companyData.email}</span>.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default PrivacyPage;
