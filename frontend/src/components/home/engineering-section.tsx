import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Sparkles, Layers, Cpu, Cloud, Database, Activity } from "lucide-react";

export function EngineeringSection() {
  const stackLayers = [
    {
      id: "experience",
      layerName: "01 // EXPERIENCE",
      title: "Client Runtimes & User Interfaces",
      description: "Sub-50ms paint times, typed client endpoints, and real-time state synchronization.",
      icon: <Layers className="w-5 h-5 text-[#66705A]" />,
      technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "HTML5"],
      telemetry: "PAINT: 38MS • ZERO JANK",
      iconAnimClass: "group-hover:scale-105",
    },
    {
      id: "application",
      layerName: "02 // DISTRIBUTED SYSTEMS",
      title: "Microservices & Distributed APIs",
      description: "High-concurrency event loops, asynchronous queues, and resilient service communication.",
      icon: <Cpu className="w-5 h-5 text-[#4C5642] group-hover:animate-node-flow" />,
      technologies: ["Node.js", "Python", "gRPC", "FastAPI", "REST APIs"],
      telemetry: "THROUGHPUT: 14.2K REQ/S",
      iconAnimClass: "group-hover:scale-105 group-hover:border-[#4C5642]/50",
    },
    {
      id: "intelligence",
      layerName: "03 // APPLIED AI",
      title: "Applied AI & Model Orchestration",
      description: "Deterministic guardrails, vector embeddings, fine-tuned domain models, and RAG pipelines.",
      icon: <Sparkles className="w-5 h-5 text-[#66705A] group-hover:animate-ai-pulse" />,
      technologies: ["PyTorch", "LangChain", "Vector Indexing", "OpenAI APIs", "Hugging Face"],
      telemetry: "INFERENCE: ACTIVE • SOC2",
      iconAnimClass: "group-hover:scale-105 group-hover:border-[#66705A]/50",
    },
    {
      id: "data",
      layerName: "04 // DATA & PERSISTENCE",
      title: "ACID Persistence & In-Memory State",
      description: "Relational ACID integrity, sub-millisecond in-memory caching, and vector indexing.",
      icon: <Database className="w-5 h-5 text-[#4C5642]" />,
      technologies: ["PostgreSQL", "Redis", "pgvector", "ACID Storage", "Kafka"],
      telemetry: "UPTIME: 99.99% • REPLICATED",
      iconAnimClass: "group-hover:scale-105",
    },
    {
      id: "cloud",
      layerName: "05 // MULTI-CLOUD IAC",
      title: "Multi-Cloud Topologies & DevOps",
      description: "Declarative Terraform IaC, containerized Kubernetes orchestration, and automated CI/CD gating.",
      icon: <Cloud className="w-5 h-5 text-[#66705A] group-hover:animate-cloud-flow" />,
      technologies: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      telemetry: "DEPLOYMENT: CANARY • ZERO DOWNTIME",
      iconAnimClass: "group-hover:scale-105 group-hover:border-[#66705A]/50",
    },
  ];

  return (
    <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] relative overflow-hidden py-12 sm:py-16">
      <Container size="default">
        {/* Dark Bento Outer Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#101418] text-[#F7F9FB] border border-[#232A32] shadow-bento relative overflow-hidden">
          {/* Subtle Ambient Grid Background */}
          <div className="absolute inset-0 bg-arch-grid-dark opacity-30 pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#232A32] gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-[#1B2026] border border-[#232A32] text-xs font-mono tracking-widest uppercase text-[#A5AC92] font-semibold">
                <span>04 // ARCHITECTURAL TOPOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                The System Behind the Product
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3.5 py-2 rounded-xl bg-[#1B2026] border border-[#232A32] flex items-center gap-2 text-xs font-mono shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#66705A] animate-beacon" />
                <span className="text-[#A5AC92]">TOPOLOGY:</span>
                <span className="text-white font-bold">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Connected Architecture Layers Map */}
          <div className="space-y-3.5 relative z-10">
            {stackLayers.map((layer) => (
              <div
                key={layer.id}
                className="p-6 rounded-2xl bg-[#1B2026] border border-[#2E3640] flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#66705A] hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                {/* Left: Layer Identity */}
                <div className="flex items-start gap-4 lg:w-5/12">
                  <div className="p-3 rounded-xl bg-[#101418] border border-[#2E3640] text-[#66705A] shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-[#66705A] transition-all duration-300">
                    {layer.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#A5AC92] font-bold block mb-1">
                      {layer.layerName}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#A5AC92] transition-colors duration-200">
                      {layer.title}
                    </h3>
                    <p className="text-xs text-[#9AA4AF] mt-1 leading-relaxed font-normal">
                      {layer.description}
                    </p>
                  </div>
                </div>

                {/* Center: Technologies */}
                <div className="lg:w-4/12 flex flex-wrap gap-1.5">
                  {layer.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#101418] text-[#F7F9FB] border border-[#2E3640] group-hover:border-[#66705A]/40 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Right: Telemetry Metric */}
                <div className="lg:w-3/12 flex lg:justify-end items-center">
                  <span className="text-xs font-mono text-[#A5AC92] flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#101418] border border-[#2E3640] shadow-2xs group-hover:border-[#66705A] transition-colors">
                    <Activity className="w-3.5 h-3.5 text-[#66705A]" />
                    <span>{layer.telemetry}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
