export interface BlogPost {
  id: string;
  slug: string;
  code: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  content: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-01",
    slug: "how-ai-is-changing-enterprise-software",
    code: "01",
    title: "How AI Is Changing Enterprise Software",
    category: "AI & MACHINE LEARNING",
    date: "August 2026",
    readTime: "5 min read",
    excerpt:
      "Exploring deterministic model pipelines, private vector indexing, and how modern organizations move beyond experimental prototypes into production-grade systems.",
    author: {
      name: "Engineering Practice Lead",
      role: "AI & Systems Architecture",
    },
    tags: ["Applied AI", "Vector Indexing", "Enterprise ML", "Deterministic Guardrails"],
    content: [
      {
        heading: "The Shift from Experimental to Deterministic AI",
        paragraphs: [
          "Enterprise artificial intelligence is undergoing a critical transition. While early generative AI adoption was characterized by exploratory chat interfaces and ad-hoc scripts, production systems demand deterministic guarantees, sub-100ms response latencies, and strict data sovereignty.",
          "Building production-grade intelligence requires treating machine learning models not as magical black boxes, but as asynchronous computing nodes within a tightly governed distributed architecture.",
        ],
      },
      {
        heading: "Governed RAG and Vector Retrieval Topologies",
        paragraphs: [
          "Retrieval-Augmented Generation (RAG) has matured from basic cosine-similarity queries into multi-stage retrieval pipelines. Production architectures now combine semantic embeddings with exact keyword search, cross-encoder reranking, and dynamic context trimming.",
          "By implementing deterministic JSON validation layers and strict schema enforcement at the boundary, organizations ensure that LLM outputs can safely trigger automated transactional business workflows without manual intervention.",
        ],
      },
      {
        heading: "Operational Readiness and Guardrails",
        paragraphs: [
          "Security, privacy, and compliance remain non-negotiable. Modern enterprise AI stacks must operate within isolated sandboxes, ensuring proprietary IP and client records never leak into public foundation model training sets.",
        ],
      },
    ],
  },
  {
    id: "blog-02",
    slug: "building-reliable-apis-for-production-systems",
    code: "02",
    title: "Building Reliable APIs for Production Systems",
    category: "SOFTWARE ENGINEERING",
    date: "August 2026",
    readTime: "6 min read",
    excerpt:
      "Architectural patterns for high-throughput REST and gRPC interfaces, idempotent contract design, and resilient service-to-service communication.",
    author: {
      name: "Distributed Systems Team",
      role: "Backend Engineering",
    },
    tags: ["gRPC", "API Architecture", "Microservices", "Idempotency"],
    content: [
      {
        heading: "Designing for Failure as a Default State",
        paragraphs: [
          "In distributed systems operating at scale, network partitions, temporary service degradation, and latency spikes are guaranteed occurrences. Resilient API design requires assuming that dependencies will fail and building self-healing communication channels.",
          "Implementing strict circuit breaking, exponential backoff with jitter, and dead-letter queueing prevents localized service outages from cascading across downstream consumer applications.",
        ],
      },
      {
        heading: "Idempotency Keys and Contract Strictness",
        paragraphs: [
          "Every state-mutating API endpoint must enforce idempotency. By attaching unique client-generated request tokens stored in low-latency in-memory state stores, distributed services guarantee that network retries never result in duplicate billing or double-written database rows.",
          "End-to-end typed contracts via Protocol Buffers and TypeScript schemas ensure runtime compatibility and eliminate silent payload drift across independently deployed microservices.",
        ],
      },
    ],
  },
  {
    id: "blog-03",
    slug: "cloud-architecture-designing-for-scale-and-resilience",
    code: "03",
    title: "Cloud Architecture: Designing for Scale and Resilience",
    category: "CLOUD & DEVOPS",
    date: "July 2026",
    readTime: "7 min read",
    excerpt:
      "Declarative multi-region topologies, automated infrastructure cutovers, and maintaining 99.99% availability during complex migrations.",
    author: {
      name: "Cloud Infrastructure Pod",
      role: "DevOps & SRE",
    },
    tags: ["Terraform", "Kubernetes", "Multi-Cloud", "High Availability"],
    content: [
      {
        heading: "Infrastructure as Code as Single Source of Truth",
        paragraphs: [
          "Manual infrastructure provisioning creates configuration drift and unrepeatable staging environments. Modern cloud engineering mandates declarative Terraform and Kubernetes manifests stored under rigorous version control.",
          "Every VPC, subnetwork, security group, and load balancer is created through automated CI/CD pipelines that validate cost, compliance, and architectural invariants before applying changes to production.",
        ],
      },
      {
        heading: "Zero-Downtime Blue-Green & Canary Rollouts",
        paragraphs: [
          "Achieving 99.99% operational uptime requires decoupling deployment from release. Automated canary cutovers gradually shift 5%, 25%, and 100% of live production traffic while monitoring error budgets and latency metrics in real time.",
        ],
      },
    ],
  },
  {
    id: "blog-04",
    slug: "what-makes-a-modern-engineering-team-effective",
    code: "04",
    title: "What Makes a Modern Engineering Team Effective?",
    category: "ENGINEERING CULTURE",
    date: "July 2026",
    readTime: "4 min read",
    excerpt:
      "How small, high-agency pods with end-to-end typed standards and continuous automated feedback outperform bloated organizational hierarchies.",
    author: {
      name: "Engineering Leadership",
      role: "People & Process",
    },
    tags: ["Engineering Culture", "Agile Pods", "Team Velocity", "Code Quality"],
    content: [
      {
        heading: "High Agency and Small Autonomous Pods",
        paragraphs: [
          "Large, siloed engineering organizations suffer from communication overhead and fragmented ownership. The most effective digital systems are delivered by small, cross-functional pods comprised of systems architects, engineers, and product designers.",
          "When engineers have full visibility into the business context and end-to-end architectural constraints, decisions happen rapidly at the code level rather than stalling in committee reviews.",
        ],
      },
      {
        heading: "Automating the Monotonous to Empower Creativity",
        paragraphs: [
          "Continuous integration, automated static analysis, and end-to-end type safety free engineers from tedious manual testing. By turning quality standards into automated build gates, teams focus their energy on solving core algorithmic and architectural challenges.",
        ],
      },
    ],
  },
  {
    id: "blog-05",
    slug: "from-prototype-to-production-building-better-digital-products",
    code: "05",
    title: "From Prototype to Production: Building Better Digital Products",
    category: "PRODUCT ENGINEERING",
    date: "June 2026",
    readTime: "6 min read",
    excerpt:
      "Bridging the gap between initial software architecture, rapid design velocity, and robust enterprise operational readiness.",
    author: {
      name: "Product Design & Tech Lead",
      role: "Digital Engineering",
    },
    tags: ["Product Engineering", "Design Systems", "Performance", "Scalability"],
    content: [
      {
        heading: "The Trap of Disposable Prototypes",
        paragraphs: [
          "Too often, digital product initiatives build quick prototypes that have to be completely scrapped when scaling to enterprise user volumes. Product engineering must balance speed with architectural integrity from sprint one.",
          "By employing modular domain-driven boundaries and a unified design system, teams can iterate on user interfaces rapidly while keeping underlying data models clean and scalable.",
        ],
      },
      {
        heading: "Performance as a Core Feature",
        paragraphs: [
          "User experience is fundamentally tied to responsiveness. Sub-100ms interaction feedback, optimized asset delivery, and efficient client-server hydration ensure digital products feel immediate, tactile, and enterprise-grade.",
        ],
      },
    ],
  },
  {
    id: "blog-06",
    slug: "why-observability-matters-in-modern-applications",
    code: "06",
    title: "Why Observability Matters in Modern Applications",
    category: "TECHNOLOGY",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "Moving beyond passive server logs toward distributed tracing, real-time latency budgets, and telemetry-driven incident response.",
    author: {
      name: "Telemetry & SRE Pod",
      role: "Systems Reliability",
    },
    tags: ["Observability", "Distributed Tracing", "OpenTelemetry", "Metrics"],
    content: [
      {
        heading: "Logs Tell You What Happened; Traces Tell You Why",
        paragraphs: [
          "Traditional monoliths relied on grepping server log files. In microservices and serverless environments handling thousands of concurrent requests across dozens of services, distributed tracing is essential.",
          "OpenTelemetry instrumentation allows engineering teams to follow a single transaction across edge load balancers, API gateways, database transactions, and background workers with microsecond precision.",
        ],
      },
      {
        heading: "Actionable Alerting Over Notification Noise",
        paragraphs: [
          "Effective monitoring focuses on user-impacting Service Level Objectives (SLOs) rather than raw CPU spikes. Alerting on latency degradation and error budget burn rates empowers on-call engineers to resolve issues before end users notice.",
        ],
      },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPostsData;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPostsData.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPost[] {
  return blogPostsData.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
