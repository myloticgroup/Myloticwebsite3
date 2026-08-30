import { Industry } from "@/types";

export const industriesData: Industry[] = [
  {
    id: "ai-intelligent-technology",
    slug: "ai-intelligent-technology",
    name: "AI & Intelligent Technology",
    headline:
      "From intelligent automation to production-ready AI systems, we help organizations turn AI capabilities into practical business solutions.",
    summary:
      "Architecting production-grade machine learning pipelines, autonomous agents, and enterprise AI workflows with deterministic security and performance.",
    challenges: [
      "Operationalizing LLM applications and complex agentic workflows into production",
      "Ensuring deterministic data governance, privacy, and zero IP leakage",
      "Managing latency budgets and compute cost efficiency for high-volume inference",
    ],
    capabilities: [
      "Generative AI & LLM Applications",
      "AI Agents & Automation",
      "RAG & Knowledge Systems",
      "AI/ML Platforms",
      "AI Governance",
    ],
    isFeatured: true,
  },
  {
    id: "it-digital-technology",
    slug: "it-digital-technology",
    name: "IT & Digital Technology",
    headline:
      "Modernize applications, infrastructure and digital operations with scalable engineering and cloud-native technology.",
    summary:
      "Empowering enterprise technology organizations with full-stack software development, cloud infrastructure automation, and legacy modernization.",
    challenges: [
      "Addressing accumulated legacy technical debt and rigid monolithic architectures",
      "Achieving continuous delivery velocity with automated security compliance",
      "Integrating heterogeneous distributed systems across multi-cloud environments",
    ],
    capabilities: [
      "Digital Transformation",
      "Application Modernization",
      "Cloud & DevOps",
      "Enterprise Software",
      "Data & APIs",
      "Managed IT Engineering",
    ],
    isFeatured: true,
  },
  {
    id: "global-capability-centers",
    slug: "global-capability-centers",
    name: "Global Capability Centers (GCC)",
    headline:
      "Build and scale high-performing technology capabilities for global organizations through engineering, AI, cloud and specialized talent.",
    summary:
      "Enabling global enterprises to establish, scale, and mature digital engineering and AI centers of excellence with dedicated technical talent pods.",
    challenges: [
      "Accelerating GCC technology setup with enterprise-grade governance",
      "Sourcing, vetting, and embedding specialized AI and distributed systems engineers",
      "Maintaining global delivery standards, observability, and operational velocity",
    ],
    capabilities: [
      "Engineering Centers of Excellence",
      "AI & Data CoEs",
      "Cloud & Platform Teams",
      "Product Engineering",
      "Technical Talent Pods",
      "GCC Technology Scaling",
    ],
    isFeatured: true,
  },
  {
    id: "fintech",
    slug: "fintech",
    name: "Financial Services & FinTech",
    headline:
      "Secure, compliant architectures for digital transactions, banking workflows, and data processing.",
    summary:
      "Engineering robust financial platforms requiring strict data integrity, real-time transaction processing, and rigorous regulatory compliance.",
    challenges: [
      "Strict data privacy and financial regulatory compliance",
      "High-throughput, low-latency transaction processing",
      "Legacy banking core integration with modern APIs",
    ],
    capabilities: [
      "Secure API gateways and payment integration",
      "Automated fraud detection heuristics and data auditing",
      "Scalable microservices for financial reporting",
    ],
    isFeatured: true,
  },
  {
    id: "edtech",
    slug: "edtech",
    name: "Education & Learning Platforms",
    headline:
      "Scalable digital learning management platforms, interactive portals, and capability training systems.",
    summary:
      "Building responsive educational technology platforms that deliver seamless content distribution, student analytics, and collaborative learning environments.",
    challenges: [
      "Scaling video and interactive content delivery for thousands of concurrent users",
      "Tracking granular learner progress and skill assessments",
      "Cross-platform accessibility across mobile and desktop devices",
    ],
    capabilities: [
      "Custom learning management systems (LMS) development",
      "Real-time progress dashboards and automated grading workflows",
      "Interactive assessment and certification pipelines",
    ],
    isFeatured: true,
  },
  {
    id: "media-advertising",
    slug: "media-advertising",
    name: "Digital Media & Advertising",
    headline:
      "High-performance content delivery, campaign management tools, and audience analytics platforms.",
    summary:
      "Developing low-latency media distribution architectures and data-driven ad management tools built for high traffic volumes.",
    challenges: [
      "Handling massive concurrent traffic spikes during media releases",
      "Aggregating distributed analytics across multiple channels in real time",
      "Optimizing Core Web Vitals and ad-load latency",
    ],
    capabilities: [
      "Edge-cached content delivery architectures",
      "Custom campaign management and reporting dashboards",
      "Real-time audience engagement telemetry",
    ],
    isFeatured: true,
  },
  {
    id: "enterprise-tech",
    slug: "enterprise-tech",
    name: "Enterprise Software & Tech Providers",
    headline:
      "Accelerating product roadmaps and engineering velocity for software and technology companies.",
    summary:
      "Partnering with software product organizations to provide dedicated engineering pods, cloud modernization, and specialized technical execution.",
    challenges: [
      "Engineering bandwidth constraints and hiring lead times",
      "Managing technical debt during rapid scaling phases",
      "Maintaining CI/CD velocity with multi-tenant deployments",
    ],
    capabilities: [
      "Vetted engineering pod integration",
      "Modern cloud architecture and containerization",
      "Automated testing and continuous delivery infrastructure",
    ],
    isFeatured: true,
  },
];
