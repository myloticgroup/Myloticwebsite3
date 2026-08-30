import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { companyData } from "@/data/company";

export function PrivacyPage() {
  return (
    <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-16 sm:pb-24 min-h-[70vh]">
      <Container size="narrow">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} className="mb-6 text-[#5F6872]" />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#101418] mb-6">Privacy Policy</h1>
          <div className="space-y-6 text-sm text-[#5F6872] leading-relaxed font-normal">
            <p>
              {companyData.legalName} is committed to protecting the privacy and confidentiality of our clients, partners, and website visitors.
            </p>
            <h2 className="text-lg font-bold text-[#101418] mt-8 mb-2">1. Information Collection</h2>
            <p>
              We collect personal information solely when voluntarily provided through our contact forms or direct email inquiries for the purpose of business communication and engineering consultations.
            </p>
            <h2 className="text-lg font-bold text-[#101418] mt-8 mb-2">2. Data Usage &amp; Security</h2>
            <p>
              We do not sell, rent, or trade client information. All project scopes, architectural discussions, and technical requirements are handled under strict confidentiality protocols.
            </p>
            <h2 className="text-lg font-bold text-[#101418] mt-8 mb-2">3. Contact</h2>
            <p>
              For privacy inquiries, please contact us at {companyData.email}.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default PrivacyPage;
