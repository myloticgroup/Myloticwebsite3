import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { companyData } from "@/data/company";

export function TermsPage() {
  return (
    <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-16 sm:pb-24 min-h-[70vh]">
      <Container size="narrow">
        <Breadcrumb items={[{ label: "Terms of Service" }]} className="mb-6 text-[#5F6872]" />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#101418] mb-6">Terms of Service</h1>
          <div className="space-y-6 text-sm text-[#5F6872] leading-relaxed font-normal">
            <p>
              Welcome to the official website of {companyData.legalName}. By accessing this website, you agree to comply with and be bound by the following terms of service.
            </p>
            <h2 className="text-lg font-bold text-[#101418] mt-8 mb-2">1. Intellectual Property</h2>
            <p>
              All content, brand assets, technical blueprints, and documentation displayed on this website are the intellectual property of {companyData.legalName} unless otherwise indicated.
            </p>
            <h2 className="text-lg font-bold text-[#101418] mt-8 mb-2">2. Accuracy of Information</h2>
            <p>
              While we strive to ensure the accuracy of our published capabilities and technical insights, the content is provided for informational and consultative purposes.
            </p>
            <h2 className="text-lg font-bold text-[#101418] mt-8 mb-2">3. Inquiries</h2>
            <p>
              For questions regarding these terms, please contact {companyData.email}.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default TermsPage;
