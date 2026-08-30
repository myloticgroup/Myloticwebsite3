export interface WhatWeBuildItem {
  title: string;
  description: string;
}

export interface DomainCapabilityItem {
  title: string;
  description: string;
}

export interface DeliveryStageItem {
  step: string;
  name: string;
  description: string;
}

export interface ExpandedIndustryContent {
  slug: string;
  whatWeBuildHeading: string;
  whatWeBuildItems: WhatWeBuildItem[];
  capabilitiesHeading: string;
  capabilitiesItems: DomainCapabilityItem[];
  useCasesHeading: string;
  useCasesList: string[];
  techLandscapeHeading: string;
  techLandscapeItems: { category: string; stack: string[] }[];
  deliveryModelHeading: string;
  deliveryStages: DeliveryStageItem[];
  ctaHeading: string;
  ctaSupportingText: string;
  ctaButtonText: string;
}

export const expandedIndustriesData: Record<string, ExpandedIndustryContent> = {
  "ai-intelligent-technology": {
    slug: "ai-intelligent-technology",
    whatWeBuildHeading: "What We Help Build",
    whatWeBuildItems: [
      {
        title: "Generative AI Applications",
        description: "Custom generative systems tailored to domain workflows, private documents, and enterprise datasets.",
      },
      {
        title: "Enterprise LLM Solutions",
        description: "High-throughput language model integration with deterministic guardrails, schema enforcement, and cost optimization.",
      },
      {
        title: "AI Agents & Agentic Workflows",
        description: "Task-oriented AI agents capable of autonomous tool execution, database lookups, and transactional actions.",
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description: "Production-grade hybrid vector and keyword retrieval systems with semantic reranking and private knowledge grounding.",
      },
      {
        title: "Intelligent Automation",
        description: "End-to-end cognitive process automation replacing repetitive manual back-office and operational workflows.",
      },
      {
        title: "AI-powered Decision Systems",
        description: "High-velocity probabilistic modeling and heuristic scoring engines for real-time operational decisions.",
      },
      {
        title: "Machine Learning Platforms",
        description: "MLOps pipelines managing dataset versioning, training runs, model registries, and zero-downtime serving.",
      },
      {
        title: "Computer Vision",
        description: "Visual inspection pipelines, document OCR, automated layout parsing, and spatial object detection.",
      },
      {
        title: "Natural Language Processing",
        description: "Multi-lingual entity extraction, sentiment analysis, document classification, and conversational intelligence.",
      },
      {
        title: "AI Analytics & Knowledge Systems",
        description: "Unifying unstructured enterprise documents into structured, queryable semantic knowledge graphs.",
      },
    ],
    capabilitiesHeading: "AI Engineering Capabilities",
    capabilitiesItems: [
      {
        title: "AI Strategy & Architecture",
        description: "Design practical AI architectures aligned with business requirements, latency budgets, and security constraints.",
      },
      {
        title: "LLM & Generative AI",
        description: "Build production-oriented applications using LLMs, retrieval, tools and structured validation workflows.",
      },
      {
        title: "RAG & Enterprise Knowledge",
        description: "Connect AI systems with controlled enterprise knowledge sources and verified data isolation boundaries.",
      },
      {
        title: "AI Agents",
        description: "Design task-oriented AI agents capable of using tools, executing workflows, and integrating with business systems.",
      },
      {
        title: "ML Engineering",
        description: "Build, deploy, monitor, and maintain machine-learning pipelines and high-concurrency inference systems.",
      },
      {
        title: "AI Integration",
        description: "Integrate AI capabilities into existing applications, backend APIs, and enterprise operational workflows.",
      },
      {
        title: "AI Governance",
        description: "Incorporate security, role-based access control, benchmark evaluation, telemetry monitoring, and responsible deployment.",
      },
    ],
    useCasesHeading: "Common AI Use Cases",
    useCasesList: [
      "Intelligent Customer Support",
      "Enterprise Knowledge Assistants",
      "Document Intelligence",
      "Workflow Automation",
      "Recommendation Systems",
      "Predictive Analytics",
      "Internal AI Copilots",
      "AI-powered Search",
      "Content Intelligence",
      "Business Process Automation",
    ],
    techLandscapeHeading: "AI Technology Landscape",
    techLandscapeItems: [
      { category: "AI / ML Frameworks", stack: ["PyTorch", "Hugging Face", "Scikit-Learn"] },
      { category: "LLM Orchestration", stack: ["LangChain", "OpenAI APIs", "Anthropic Claude"] },
      { category: "RAG & Vector Search", stack: ["pgvector", "Pinecone", "Hybrid Search"] },
      { category: "Runtime & APIs", stack: ["Python", "FastAPI", "Next.js", "TypeScript"] },
      { category: "Data & Storage", stack: ["PostgreSQL", "Redis", "Kafka Streams"] },
      { category: "Cloud & Ops", stack: ["AWS SageMaker", "Docker", "Kubernetes", "Datadog"] },
    ],
    deliveryModelHeading: "AI Delivery Approach",
    deliveryStages: [
      { step: "01", name: "DISCOVER", description: "Identify the business problem, data readiness, and ROI parameters." },
      { step: "02", name: "DESIGN", description: "Define the AI architecture, model selection, and evaluation strategy." },
      { step: "03", name: "BUILD", description: "Develop the AI application, data pipelines, and supporting backend systems." },
      { step: "04", name: "VALIDATE", description: "Evaluate quality benchmarks, security boundaries, and inference reliability." },
      { step: "05", name: "DEPLOY", description: "Move the solution into production with automated CI/CD and canary cutovers." },
      { step: "06", name: "EVOLVE", description: "Continuously improve model performance with real-world telemetry feedback." },
    ],
    ctaHeading: "Discuss an AI initiative",
    ctaSupportingText: "Let’s evaluate your AI opportunity, architecture and path to production.",
    ctaButtonText: "CONSULT ON THIS VERTICAL",
  },

  "it-digital-technology": {
    slug: "it-digital-technology",
    whatWeBuildHeading: "What We Help Build",
    whatWeBuildItems: [
      {
        title: "Enterprise Applications",
        description: "Maintainable, scalable web and backend applications built on end-to-end typed architectural standards.",
      },
      {
        title: "Digital Products",
        description: "Responsive, user-centric digital platforms engineered with sub-100ms response latencies and modern design systems.",
      },
      {
        title: "Cloud-native Platforms",
        description: "Resilient Kubernetes and container topologies provisioned with declarative Infrastructure as Code.",
      },
      {
        title: "API & Microservices",
        description: "Idempotent REST and gRPC service layers designed for distributed high-throughput workloads.",
      },
      {
        title: "Legacy Modernization",
        description: "Strangler-fig migrations decomposing legacy monoliths into maintainable modular services without downtime.",
      },
      {
        title: "Data Platforms",
        description: "ACID relational storage, high-speed in-memory state stores, and analytical streaming pipelines.",
      },
      {
        title: "Internal Business Systems",
        description: "Custom operational tools, workflow portals, and administrative management platforms.",
      },
      {
        title: "Digital Transformation Platforms",
        description: "Unified enterprise operational layers connecting legacy backends with modern web interfaces.",
      },
      {
        title: "Developer Platforms",
        description: "Internal developer tooling, automated CI/CD release gates, and developer portal workflows.",
      },
      {
        title: "Managed Technology Solutions",
        description: "24/7 proactive monitoring, security patching, and SLA-backed infrastructure governance.",
      },
    ],
    capabilitiesHeading: "IT Engineering Capabilities",
    capabilitiesItems: [
      {
        title: "Software Engineering",
        description: "Design and build maintainable, high-performance applications for modern business environments.",
      },
      {
        title: "Application Modernization",
        description: "Modernize legacy applications and gradually move monolithic workloads toward contemporary architectures.",
      },
      {
        title: "Cloud & Infrastructure",
        description: "Design scalable cloud infrastructure, declarative Terraform topologies, and automated deployment workflows.",
      },
      {
        title: "API & Integration",
        description: "Connect applications, services and enterprise systems through reliable APIs and integration layers.",
      },
      {
        title: "DevOps & Platform Engineering",
        description: "Improve deployment automation, observability pipelines, and engineering workflows across multi-cloud environments.",
      },
      {
        title: "Data Engineering",
        description: "Build reliable data pipelines, ACID relational storage, and real-time analytics foundations.",
      },
      {
        title: "Digital Product Engineering",
        description: "Turn product ideas into scalable digital experiences with fast client-server hydration and high availability.",
      },
    ],
    useCasesHeading: "Common IT Use Cases",
    useCasesList: [
      "Legacy Application Modernization",
      "Enterprise Portal Development",
      "SaaS Product Engineering",
      "API Platform Development",
      "Cloud Migration",
      "Workflow Automation",
      "Internal Tools",
      "Data Platform Modernization",
      "DevOps Transformation",
      "Application Support & Evolution",
    ],
    techLandscapeHeading: "IT Technology Landscape",
    techLandscapeItems: [
      { category: "Frontend Runtimes", stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"] },
      { category: "Backend Services", stack: ["Node.js", "Python", "FastAPI", "Go", "gRPC"] },
      { category: "APIs & Integration", stack: ["REST", "GraphQL", "Protocol Buffers", "WebSockets"] },
      { category: "Data Storage", stack: ["PostgreSQL", "Redis", "ACID Persistence", "Kafka"] },
      { category: "Cloud & DevOps", stack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"] },
      { category: "Observability", stack: ["Datadog", "Prometheus", "OpenTelemetry", "Grafana"] },
    ],
    deliveryModelHeading: "IT Delivery Model",
    deliveryStages: [
      { step: "01", name: "DISCOVER", description: "Understand existing systems, technical debt, and business requirements." },
      { step: "02", name: "ARCHITECT", description: "Define the technical direction, schema contracts, and target blueprints." },
      { step: "03", name: "BUILD", description: "Develop, test, and integrate the solution in test-driven iterative sprints." },
      { step: "04", name: "DEPLOY", description: "Release through controlled automated engineering CI/CD workflows." },
      { step: "05", name: "OPERATE", description: "Monitor, manage, and maintain production systems with real-time alerting." },
      { step: "06", name: "EVOLVE", description: "Continuously improve the platform as user scale and workloads grow." },
    ],
    ctaHeading: "Modernize your technology foundation",
    ctaSupportingText: "Talk with our engineering team about applications, infrastructure or digital transformation.",
    ctaButtonText: "CONSULT ON THIS VERTICAL",
  },

  "global-capability-centers": {
    slug: "global-capability-centers",
    whatWeBuildHeading: "What We Help GCCs Build",
    whatWeBuildItems: [
      {
        title: "Engineering Centers of Excellence",
        description: "Specialized engineering hubs delivering core software roadmaps with global standards.",
      },
      {
        title: "AI & Data Centers of Excellence",
        description: "Dedicated capability hubs focused on applied machine learning, MLOps, and enterprise data modeling.",
      },
      {
        title: "Product Engineering Teams",
        description: "Cross-functional product development pods working directly with global product leadership.",
      },
      {
        title: "Cloud & Platform Engineering",
        description: "Infrastructure and platform pods managing multi-cloud topologies and developer efficiency.",
      },
      {
        title: "Digital Engineering Functions",
        description: "High-velocity delivery teams modernizing consumer-facing applications and digital workflows.",
      },
      {
        title: "Technical Talent Pods",
        description: "Fully embedded, pre-vetted senior software pods integrated directly into sprint workflows.",
      },
      {
        title: "Enterprise Architecture Teams",
        description: "Dedicated technical oversight teams establishing architecture standards and technical governance.",
      },
      {
        title: "Data & Analytics Functions",
        description: "End-to-end data pipeline, telemetry ingestion, and business intelligence analytics hubs.",
      },
      {
        title: "DevOps & SRE Capabilities",
        description: "Site reliability engineering pods guaranteeing 99.99% availability and release automation.",
      },
      {
        title: "Technology Operations",
        description: "24/7 managed operations, security patching, and incident response governance.",
      },
    ],
    capabilitiesHeading: "GCC Capabilities",
    capabilitiesItems: [
      {
        title: "GCC Technology Strategy",
        description: "Define the technology capabilities, operating model and engineering priorities required for a scalable GCC.",
      },
      {
        title: "Engineering CoEs",
        description: "Build specialized engineering capabilities around AI, cloud, data, platforms and software engineering.",
      },
      {
        title: "Product Engineering",
        description: "Create dedicated product engineering teams supporting global product roadmaps.",
      },
      {
        title: "AI & Data CoEs",
        description: "Establish specialized AI, ML, data engineering and analytics capabilities.",
      },
      {
        title: "Cloud & Platform Engineering",
        description: "Develop internal cloud, infrastructure and developer-platform capabilities.",
      },
      {
        title: "Technical Talent Pods",
        description: "Create focused engineering teams around specific technologies or business initiatives.",
      },
      {
        title: "Engineering Governance",
        description: "Introduce engineering standards, architecture practices, quality processes and measurable delivery workflows.",
      },
    ],
    useCasesHeading: "GCC Use Cases",
    useCasesList: [
      "New GCC Technology Setup",
      "GCC Engineering Expansion",
      "AI Center of Excellence",
      "Cloud Center of Excellence",
      "Product Engineering Hub",
      "Data & Analytics Center",
      "Platform Engineering Team",
      "Digital Transformation Hub",
      "Technical Talent Scaling",
      "Engineering Capability Transformation",
    ],
    techLandscapeHeading: "GCC Technology Domains",
    techLandscapeItems: [
      { category: "AI & ML CoE", stack: ["PyTorch", "LLM Pipelines", "Vector Indexing", "MLOps"] },
      { category: "Software Engineering", stack: ["Next.js", "TypeScript", "Node.js", "Python", "gRPC"] },
      { category: "Cloud & Platform", stack: ["AWS", "GCP", "Kubernetes", "Terraform IaC"] },
      { category: "Data & Analytics", stack: ["PostgreSQL", "Kafka", "Data Warehousing", "Telemetry"] },
      { category: "DevOps & Security", stack: ["CI/CD Automation", "SOC2 Compliance", "Role-Based Access"] },
      { category: "Technical Talent", stack: ["Pre-Vetted Pods", "Global Delivery Standards", "SLA Governance"] },
    ],
    deliveryModelHeading: "GCC Operating Model",
    deliveryStages: [
      { step: "01", name: "STRATEGY", description: "Define the GCC technology vision, operational charter, and capability roadmap." },
      { step: "02", name: "FOUNDATION", description: "Establish architecture standards, developer tooling, security processes, and governance." },
      { step: "03", name: "TALENT", description: "Source, evaluate, and embed specialized technical pods aligned with core domains." },
      { step: "04", name: "DELIVERY", description: "Create measurable global delivery workflows, sprint reviews, and velocity metrics." },
      { step: "05", name: "SCALE", description: "Expand teams, capabilities, and technology functions sustainably across practices." },
      { step: "06", name: "EVOLVE", description: "Continuously improve the GCC operating model with ongoing performance audits." },
    ],
    ctaHeading: "Build your next technology capability",
    ctaSupportingText: "Discuss GCC setup, engineering expansion, technology CoEs or specialized delivery teams with our team.",
    ctaButtonText: "CONSULT ON THIS VERTICAL",
  },
};
