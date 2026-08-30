import { CompanyInfo } from "@/types";

export const companyData: CompanyInfo = {
  legalName: "Mylotic Group Private Limited",
  brandName: "Mylotic Group",
  cin: "U78100HR2026PTC147183",
  incorporationDate: "2026-06-28",
  tagline: "Enterprise Technology, AI Engineering & Specialized Talent Solutions",
  summary:
    "Mylotic Group provides high-performance enterprise technology, custom software engineering, AI solutions, digital transformation, and specialized talent solutions for modern enterprises.",
  description:
    "Mylotic Group Private Limited is an Indian enterprise technology and business solutions organization based in Gurugram, Haryana. The company partners with forward-thinking organizations to build scalable digital architectures, implement AI-driven automation, and deploy high-performing engineering teams.",
  email: "contact@myloticgroup.com",
  website: "https://myloticgroup.com",
  locations: [
    {
      type: "headquarters",
      city: "Gurugram",
      state: "Haryana",
      country: "India",
      postalCode: "122001",
      addressLine1: "Gurugram Technology Hub",
      addressLine2: "Cyber City Corridor",
    },
    {
      type: "registered_office",
      city: "Gurugram",
      state: "Haryana",
      country: "India",
      postalCode: "122503",
      addressLine1: "House No. 283, V.P.O Janaula, Near Chhacha Rasta",
      addressLine2: "Pataudi, Gurgaon",
    },
  ],
  leadership: [
    {
      name: "Manjeet",
      role: "Director",
      isDirector: true,
      bio: "Executive leadership overseeing strategic technology initiatives, operational expansion, and client partnerships.",
    },
    {
      name: "Riya Sharma",
      role: "Director",
      isDirector: true,
      bio: "Executive director driving talent strategy, corporate governance, and digital capability operations.",
    },
  ],
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/company/mylotic-group",
      label: "LinkedIn",
    },
    {
      platform: "twitter",
      url: "https://twitter.com/myloticgroup",
      label: "X (Twitter)",
    },
    {
      platform: "github",
      url: "https://github.com/myloticgroup",
      label: "GitHub",
    },
  ],
};
