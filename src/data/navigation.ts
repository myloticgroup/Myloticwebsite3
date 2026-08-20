import { HeaderNavigation, FooterNavigation } from "@/types";

export const headerNavigation: HeaderNavigation = {
  mainNav: [
    {
      title: "Solutions",
      href: "/solutions",
      items: [
        {
          title: "AI Solutions",
          href: "/solutions/ai",
          description: "Enterprise machine learning, intelligent workflows, and custom model integration.",
        },
        {
          title: "Software Engineering",
          href: "/solutions/software-engineering",
          description: "High-concurrency web platforms, microservices, and modern API architectures.",
        },
        {
          title: "Cloud & Digital Transformation",
          href: "/solutions/cloud",
          description: "Cloud migration, infrastructure as code, and enterprise DevOps automation.",
        },
        {
          title: "Technical Staffing",
          href: "/solutions/staffing",
          description: "Pre-vetted software engineers and specialized technical pods on demand.",
        },
        {
          title: "Managed Services",
          href: "/solutions/managed-services",
          description: "24/7 monitoring, security patching, and managed infrastructure governance.",
        },
        {
          title: "EdTech Training",
          href: "/solutions/edtech",
          description: "Corporate upskilling bootcamps and enterprise technology curriculum design.",
        },
      ],
    },
    {
      title: "Industries",
      href: "/industries",
      items: [
        {
          title: "AI & Intelligent Technology",
          href: "/industries/ai-intelligent-technology",
          description: "Production-ready AI systems, agentic workflows, and intelligent automation.",
        },
        {
          title: "IT & Digital Technology",
          href: "/industries/it-digital-technology",
          description: "Application modernization, cloud DevOps, and enterprise software engineering.",
        },
        {
          title: "Global Capability Centers (GCC)",
          href: "/industries/global-capability-centers",
          description: "Dedicated engineering centers of excellence and specialized talent pods.",
        },
        {
          title: "Financial Services & FinTech",
          href: "/industries/fintech",
          description: "Compliant transactional platforms and secure data pipelines.",
        },
        {
          title: "Education & EdTech",
          href: "/industries/education",
          description: "Scalable learning management and interactive assessment tools.",
        },
        {
          title: "Digital Media & Advertising",
          href: "/industries/media",
          description: "Edge-cached media distribution and campaign analytics engines.",
        },
        {
          title: "Enterprise Software",
          href: "/industries/enterprise",
          description: "Accelerating engineering velocity and product roadmaps.",
        },
      ],
    },
    {
      title: "Technology",
      href: "/technology",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Company",
      href: "/company",
      items: [
        {
          title: "About Mylotic",
          href: "/company",
          description: "Our corporate mission, engineering philosophy, and operating values.",
        },
        {
          title: "Leadership",
          href: "/company/leadership",
          description: "Executive leadership and corporate governance.",
        },
        {
          title: "Our Approach",
          href: "/company/approach",
          description: "How we architect, execute, and deliver enterprise technology.",
        },
      ],
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  cta: {
    title: "Start a conversation",
    href: "/contact",
  },
};

export const footerNavigation: FooterNavigation = {
  columns: [
    {
      title: "Solutions",
      items: [
        { title: "AI Solutions & Automation", href: "/solutions/ai" },
        { title: "Software Engineering", href: "/solutions/software-engineering" },
        { title: "Cloud & Infrastructure", href: "/solutions/cloud" },
        { title: "Technical Staffing", href: "/solutions/staffing" },
        { title: "Managed IT Services", href: "/solutions/managed-services" },
        { title: "EdTech & Upskilling", href: "/solutions/edtech" },
      ],
    },
    {
      title: "Industries",
      items: [
        { title: "AI & Intelligent Technology", href: "/industries/ai-intelligent-technology" },
        { title: "IT & Digital Technology", href: "/industries/it-digital-technology" },
        { title: "Global Capability Centers", href: "/industries/global-capability-centers" },
        { title: "Financial Services & FinTech", href: "/industries/fintech" },
        { title: "Education & Learning", href: "/industries/education" },
        { title: "Media & Advertising", href: "/industries/media" },
        { title: "Enterprise Technology", href: "/industries/enterprise" },
      ],
    },
    {
      title: "Company & Practice",
      items: [
        { title: "About Mylotic", href: "/company" },
        { title: "Technology Stack", href: "/technology" },
        { title: "Selected Work", href: "/work" },
        { title: "Our Approach", href: "/company/approach" },
        { title: "Leadership", href: "/company/leadership" },
        { title: "Careers", href: "/careers" },
        { title: "Blog", href: "/blog" },
        { title: "Contact Us", href: "/contact" },
      ],
    },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Security & Governance", href: "/security" },
  ],
};
