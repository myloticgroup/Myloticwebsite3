import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { companyData } from "@/data/company";

export function PrivacyPage() {
  return (
    <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
      <Container size="narrow">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} className="mb-8 text-[#73766D]" />
        <h1 className="text-3xl sm:text-4xl font-bold text-[#171A17] mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-sm text-[#555850] leading-relaxed font-normal">
          <p>
            {companyData.legalName} is committed to protecting the privacy and confidentiality of our clients, partners, and website visitors.
          </p>
          <h2 className="text-lg font-bold text-[#171A17] mt-8 mb-2">1. Information Collection</h2>
          <p>
            We collect personal information solely when voluntarily provided through our contact forms or direct email inquiries for the purpose of business communication and engineering consultations.
          </p>
          <h2 className="text-lg font-bold text-[#171A17] mt-8 mb-2">2. Data Usage &amp; Security</h2>
          <p>
            We do not sell, rent, or trade client information. All project scopes, architectural discussions, and technical requirements are handled under strict confidentiality protocols.
          </p>
          <h2 className="text-lg font-bold text-[#171A17] mt-8 mb-2">3. Contact</h2>
          <p>
            For privacy inquiries, please contact us at {companyData.email}.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default PrivacyPage;
