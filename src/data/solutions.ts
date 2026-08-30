import { Solution } from "@/types";

export const solutionsData: Solution[] = [
  {
    id: "ai-solutions",
    slug: "ai",
    title: "AI Solutions & Intelligent Automation",
    tagline: "Operationalize artificial intelligence to automate complex workflows and accelerate decision-making.",
    shortDescription:
      "Enterprise AI deployment, machine learning integration, and intelligent automation systems engineered for scalability and data security.",
    overview:
      "Mylotic Group designs and deploys production-grade AI architectures that transform unstructured data into actionable intelligence. We integrate custom machine learning models and generative intelligence directly into core business processes.",
    capabilities: [
      {
        title: "Enterprise AI & Model Integration",
        description: "Deploying and fine-tuning domain-specific AI models to automate high-volume operational workflows.",
      },
      {
        title: "Intelligent Process Automation",
        description: "Automating repetitive data tasks and decision workflows with end-to-end auditability.",
      },
      {
        title: "Data Engineering & Pipelines",
        description: "Building robust data ingestion, feature stores, and real-time processing infrastructure.",
      },
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenAI", "LangChain", "Vector DBs"],
    deliverables: ["AI Architecture Blueprints", "Trained & Deployed Models", "API Integration Layer", "Monitoring & Guardrails"],
    isFeatured: true,
  },
  {
    id: "software-engineering",
    slug: "software-engineering",
    title: "Web Development & Software Engineering",
    tagline: "Architecting reliable, high-performance web applications and enterprise platforms.",
    shortDescription:
      "Full-lifecycle web and software engineering delivering resilient architectures, modern microservices, and responsive user experiences.",
    overview:
      "We build robust, maintainable digital products utilizing modern full-stack frameworks and distributed system design. Our engineering practices prioritize performance, security, and long-term maintainability.",
    capabilities: [
      {
        title: "Full-Stack Web Engineering",
        description: "Modern web platforms built with Next.js, React, Node.js, and TypeScript.",
      },
      {
        title: "API & Microservices Architecture",
        description: "Scalable REST and GraphQL backend services designed for high concurrency.",
      },
      {
        title: "System Refactoring & Modernization",
        description: "Upgrading legacy codebases into modular, cloud-ready architectures.",
      },
    ],
    technologies: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "GraphQL"],
    deliverables: ["Production Web Applications", "API Documentation & SDKs", "Automated Test Suites", "CI/CD Pipelines"],
    isFeatured: true,
  },
  {
    id: "digital-transformation",
    slug: "digital-transformation",
    title: "Digital Transformation & Cloud Infrastructure",
    tagline: "Modernize legacy systems, migrate workloads, and scale infrastructure on secure cloud platforms.",
    shortDescription:
      "Comprehensive digital modernization strategies, cloud migration, and DevOps automation to drive operational agility.",
    overview:
      "Mylotic helps organizations transition from fragmented systems to unified, cloud-native operational ecosystems. We streamline deployment workflows and build scalable infrastructure environments.",
    capabilities: [
      {
        title: "Cloud Migration & Architecture",
        description: "Secure workload migration to AWS, Azure, and Google Cloud with optimized cost governance.",
      },
      {
        title: "DevOps & Infrastructure as Code",
        description: "Automating deployment pipelines using Terraform, Docker, and Kubernetes.",
      },
      {
        title: "Enterprise System Integration",
        description: "Connecting core ERP, CRM, and third-party data platforms seamlessly.",
      },
    ],
    technologies: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
    deliverables: ["Cloud Migration Roadmap", "IaC Configurations", "Observability Dashboards", "Disaster Recovery Plans"],
    isFeatured: true,
  },
  {
    id: "recruitment-staffing",
    slug: "staffing",
    title: "Technical Staffing & Talent Augmentation",
    tagline: "Deploy specialized engineering talent and high-performing technical teams on demand.",
    shortDescription:
      "Vetted software engineers, AI specialists, and technical leads integrated into your development cycles to accelerate velocity.",
    overview:
      "Finding and embedding elite technical talent is a critical bottleneck for scaling organizations. Mylotic provides structured staff augmentation and specialized recruitment solutions tailored to your technical stack and culture.",
    capabilities: [
      {
        title: "Dedicated Engineering Pods",
        description: "Self-managing cross-functional teams with tech leads, developers, and QA specialists.",
      },
      {
        title: "Staff Augmentation",
        description: "Individual specialized engineers embedded directly into your active sprints.",
      },
      {
        title: "Technical Executive Search",
        description: "Rigorous sourcing and vetting for key architecture and engineering leadership roles.",
      },
    ],
    technologies: ["Full-Stack", "Cloud & DevOps", "AI / ML Engineering", "QA Automation"],
    deliverables: ["Pre-Vetted Technical Candidates", "Rapid Onboarding Protocols", "Time & Delivery Tracking"],
    isFeatured: true,
  },
  {
    id: "managed-services",
    slug: "managed-services",
    title: "Managed IT & Global Capability Solutions",
    tagline: "Ensure 24/7 reliability, maintenance, and technical governance for critical systems.",
    shortDescription:
      "Proactive infrastructure management, system maintenance, and global capability support to ensure uninterrupted business continuity.",
    overview:
      "Our managed services provide comprehensive operational coverage for your applications and cloud infrastructure, ensuring high availability, security patching, and ongoing performance optimization.",
    capabilities: [
      {
        title: "24/7 Monitoring & Incident Response",
        description: "Real-time health monitoring and SLA-backed incident resolution for production environments.",
      },
      {
        title: "Security & Compliance Audits",
        description: "Regular vulnerability assessments, patch management, and compliance checks.",
      },
      {
        title: "Performance Optimization",
        description: "Continuous database tuning, caching optimization, and resource scaling.",
      },
    ],
    technologies: ["Datadog", "Prometheus", "Grafana", "AWS CloudWatch", "Sentry"],
    deliverables: ["Monthly SLA Reports", "Incident Post-Mortems", "Security Compliance Logs"],
    isFeatured: false,
  },
  {
    id: "edtech-training",
    slug: "edtech-training",
    title: "EdTech Training & Capability Development",
    tagline: "Upskill technical workforces with modern engineering and AI paradigms.",
    shortDescription:
      "Targeted corporate training programs and technical curriculum design in modern development frameworks and AI technologies.",
    overview:
      "Mylotic delivers structured technical upskilling programs to help enterprise engineering teams transition to modern web frameworks, cloud-native methodologies, and applied AI tools.",
    capabilities: [
      {
        title: "Corporate Upskilling Bootcamps",
        description: "Intensive, project-based training modules in modern full-stack development and AI.",
      },
      {
        title: "Technical Curriculum Design",
        description: "Customized learning pathways tailored to enterprise technology adoption roadmaps.",
      },
      {
        title: "Mentorship & Code Reviews",
        description: "Hands-on architectural guidance and code review workshops for internal developers.",
      },
    ],
    technologies: ["Modern JavaScript", "Python for AI", "Cloud Architecture", "DevOps Pipelines"],
    deliverables: ["Curriculum Modules", "Practical Coding Labs", "Learner Progress Assessments"],
    isFeatured: false,
  },
];
