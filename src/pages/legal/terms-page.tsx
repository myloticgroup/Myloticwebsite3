import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { companyData } from "@/data/company";

export function TermsPage() {
  return (
    <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
      <Container size="narrow">
        <Breadcrumb items={[{ label: "Terms of Service" }]} className="mb-8 text-[#73766D]" />
        <h1 className="text-3xl sm:text-4xl font-bold text-[#171A17] mb-6">Terms of Service</h1>
        <div className="space-y-6 text-sm text-[#555850] leading-relaxed font-normal">
          <p>
            Welcome to the official website of {companyData.legalName}. By accessing this website, you agree to comply with and be bound by the following terms of service.
          </p>
          <h2 className="text-lg font-bold text-[#171A17] mt-8 mb-2">1. Intellectual Property</h2>
          <p>
            All content, brand assets, technical blueprints, and documentation displayed on this website are the intellectual property of {companyData.legalName} unless otherwise indicated.
          </p>
          <h2 className="text-lg font-bold text-[#171A17] mt-8 mb-2">2. Accuracy of Information</h2>
          <p>
            While we strive to ensure the accuracy of our published capabilities and technical insights, the content is provided for informational and consultative purposes.
          </p>
          <h2 className="text-lg font-bold text-[#171A17] mt-8 mb-2">3. Inquiries</h2>
          <p>
            For questions regarding these terms, please contact {companyData.email}.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default TermsPage;
