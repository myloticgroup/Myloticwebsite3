export interface MediaAsset {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

export const mediaAssets = {
  hero: {
    src: "/images/hero_architecture_main.jpg",
    alt: "Mylotic Enterprise Computing Infrastructure & Server Cluster",
    caption: "ENTERPRISE COMPUTING INFRASTRUCTURE // HIGH-CONCURRENCY RUNTIME",
    tag: "SYS-CORE // 01",
  },
  aiSystems: {
    src: "/images/ai_intelligent_systems.jpg",
    alt: "Applied AI Neural Architecture & Vector Inference Pipeline",
    caption: "NEURAL ORCHESTRATION // DETERMINISTIC LATENT INFERENCE",
    tag: "PRACTICE // AI-01",
  },
  softwareEngineering: {
    src: "/images/software_engineering_runtime.jpg",
    alt: "Distributed Software Engineering Workspace & Systems Telemetry",
    caption: "DISTRIBUTED RUNTIME ARCHITECTURE // STATIC TYPE SAFETY",
    tag: "PRACTICE // ENG-02",
  },
  cloudInfrastructure: {
    src: "/images/cloud_distributed_systems.jpg",
    alt: "Enterprise Cloud Datacenter & Resilient Storage Topologies",
    caption: "MULTI-CLOUD TOPOLOGY // RESILIENT ACID PERSISTENCE",
    tag: "PRACTICE // CLOUD-03",
  },
  edTechTraining: {
    src: "/images/edtech_executive_training.jpg",
    alt: "Executive AI Workshop & Enterprise Engineering Masterclass",
    caption: "EXECUTIVE TECHNICAL FACILITY // ENTERPRISE CRAFT",
    tag: "PRACTICE // EDTECH-06",
  },
  fintech: {
    src: "/images/industry_fintech.jpg",
    alt: "Financial Technology, Ledger Verification & Trading Systems",
    caption: "FINANCIAL INFRASTRUCTURE // SECURE CRYPTOGRAPHIC LEDGER",
    tag: "DOMAIN // FINTECH",
  },
  gcc: {
    src: "/images/industry_gcc.jpg",
    alt: "Global Capability Center Collaborative Engineering Operations",
    caption: "GLOBAL CAPABILITY CENTER // DISTRIBUTED DELIVERY MODEL",
    tag: "DOMAIN // GCC",
  },
  media: {
    src: "/images/industry_media.jpg",
    alt: "High-Throughput Digital Media & Content Delivery Network",
    caption: "MEDIA DISTRIBUTION // REAL-TIME CDN OBSERVALBILITY",
    tag: "DOMAIN // MEDIA",
  },
  companyHub: {
    src: "/images/company_engineering_hub.jpg",
    alt: "Mylotic Technology Headquarters & Engineering Studio in Gurugram",
    caption: "HEADQUARTERS & ENGINEERING STUDIO // GURUGRAM, INDIA",
    tag: "FACILITY // HQ-01",
  },
} as const;

export const solutionMediaMap: Record<string, MediaAsset> = {
  ai: mediaAssets.aiSystems,
  "software-engineering": mediaAssets.softwareEngineering,
  "digital-transformation": mediaAssets.cloudInfrastructure,
  staffing: mediaAssets.gcc,
  "managed-services": mediaAssets.hero,
  "edtech-training": mediaAssets.edTechTraining,
};

export const industryMediaMap: Record<string, MediaAsset> = {
  "ai-intelligent-technology": mediaAssets.aiSystems,
  "it-digital-technology": mediaAssets.softwareEngineering,
  "global-capability-centers": mediaAssets.gcc,
  "financial-services-fintech": mediaAssets.fintech,
  "education-edtech": mediaAssets.edTechTraining,
  "media-telecom": mediaAssets.media,
  "enterprise-platforms": mediaAssets.cloudInfrastructure,
};
