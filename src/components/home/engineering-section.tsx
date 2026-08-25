import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Sparkles, Layers, Cpu, Cloud, Database, Activity, CheckCircle2, Terminal } from "lucide-react";

export function EngineeringSection() {
  const stackLayers = [
    {
      id: "experience",
      layerName: "01 // EXPERIENCE",
      title: "Client Runtimes & User Interfaces",
      description: "Sub-50ms paint times, typed client endpoints, and real-time state synchronization.",
      icon: <Layers className="w-5 h-5 text-[#4688B2]" />,
      technologies: ["React 19", "Vite 6", "TypeScript", "Tailwind CSS", "HTML5"],
      telemetry: "PAINT: 38MS • ZERO JANK",
      status: "OPTIMIZED",
    },
    {
      id: "application",
      layerName: "02 // DISTRIBUTED SYSTEMS",
      title: "Microservices & Distributed APIs",
      description: "High-concurrency event loops, asynchronous queues, and resilient service communication.",
      icon: <Cpu className="w-5 h-5 text-[#182A43] group-hover:animate-node-flow" />,
      technologies: ["Node.js", "Express", "Python", "gRPC", "REST APIs"],
      telemetry: "THROUGHPUT: 14.2K REQ/S",
      status: "ACTIVE",
    },
    {
      id: "intelligence",
      layerName: "03 // APPLIED AI",
      title: "Applied AI & Model Orchestration",
      description: "Deterministic guardrails, vector embeddings, fine-tuned domain models, and RAG pipelines.",
      icon: <Sparkles className="w-5 h-5 text-[#4688B2] group-hover:animate-ai-pulse" />,
      technologies: ["PyTorch", "LangChain", "Vector Indexing", "OpenAI APIs", "Hugging Face"],
      telemetry: "INFERENCE: ACTIVE • SOC2",
      status: "VERIFIED",
    },
    {
      id: "data",
      layerName: "04 // DATA & PERSISTENCE",
      title: "ACID Persistence & In-Memory State",
      description: "Relational ACID integrity, MongoDB document persistence, sub-millisecond in-memory caching.",
      icon: <Database className="w-5 h-5 text-[#182A43]" />,
      technologies: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Kafka"],
      telemetry: "UPTIME: 99.99% • REPLICATED",
      status: "ENCRYPTED",
    },
    {
      id: "cloud",
      layerName: "05 // MULTI-CLOUD IAC",
      title: "Multi-Cloud Topologies & DevOps",
      description: "Declarative Terraform IaC, containerized Kubernetes orchestration, and automated CI/CD gating.",
      icon: <Cloud className="w-5 h-5 text-[#4688B2] group-hover:animate-cloud-flow" />,
      technologies: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      telemetry: "DEPLOYMENT: CANARY • ZERO DOWNTIME",
      status: "AUTOMATED",
    },
  ];

  return (
    <Section spacing="spacious" className="bg-[#DCEFF8] text-[#10213B] border-b border-[#D0E3F0] relative overflow-hidden py-20 sm:py-28">
      {/* Background Dots Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="ambient-glow-icy w-[30rem] h-[30rem] top-1/3 -left-20 opacity-40" />
      <div className="ambient-glow-blue w-96 h-96 -bottom-10 -right-10 opacity-35" />

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#D0E3F0] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white border border-[#D0E3F0] text-xs font-mono tracking-widest uppercase text-[#4688B2] font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-pulse" />
              <span>04 // ARCHITECTURAL TOPOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
              The System Behind the Product
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-white border border-[#D0E3F0] flex items-center gap-2 text-xs font-mono shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4688B2] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4688B2]" />
              </span>
              <span className="text-[#243B53]">TOPOLOGY:</span>
              <span className="text-[#10213B] font-bold">100% NOMINAL</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Composition: Left Media Anchor + Right Connected Architecture Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual System Anchor & Real-Time Telemetry (Span 5) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            {/* Main Visual Image Panel */}
            <div className="relative rounded-3xl overflow-hidden border border-white/80 shadow-card bg-[#10213B] group/media aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-[340px]">
              <img
                src="/images/cloud_distributed_systems.jpg"
                alt="Mylotic Enterprise Cloud Infrastructure & Distributed Systems"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/media:scale-[1.015]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C33]/95 via-[#0D1C33]/35 to-transparent pointer-events-none" />

              {/* Top Accent Badge */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-md bg-[#10213B]/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#8CC8E8] font-semibold uppercase tracking-wider">
                  ENTERPRISE TOPOLOGY // MULTI-CLOUD
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#4688B2] text-white text-[10px] font-mono font-bold uppercase shadow-2xs">
                  NOMINAL
                </span>
              </div>

              {/* Bottom Inset Readout */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white pointer-events-none">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8CC8E8] mb-1 font-semibold">
                  <Activity className="w-3.5 h-3.5 text-[#8CC8E8]" />
                  <span>LIVE CLUSTER TELEMETRY</span>
                </div>
                <p className="text-xs text-[#D8ECF7] font-normal leading-relaxed line-clamp-2">
                  End-to-end typed runtimes, sub-millisecond in-memory state replication, and multi-region automated failover.
                </p>
              </div>
            </div>

            {/* Supplementary Engineering Telemetry Module */}
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm border border-white/80 p-4 shadow-card relative overflow-hidden">
              {/* Subtle Blueprint Micro-Grid */}
              <div className="absolute inset-0 bg-tech-grid-fine opacity-30 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-2 gap-3 pb-3 border-b border-[#D0E3F0]/80">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#5C7690]">
                    [ SYSTEM STATUS ]
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-[#10213B]">
                      ONLINE // 99.99% SLA
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#5C7690]">
                    [ REGION ]
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#10213B]">
                    GLOBAL MULTI-ZONE
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#5C7690]">
                    [ INFRASTRUCTURE ]
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#10213B]">
                    MULTI-CLOUD IAC
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#5C7690]">
                    [ TELEMETRY ]
                  </span>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#4688B2]" />
                    <span className="text-[11px] font-mono font-bold text-[#10213B]">
                      REAL-TIME ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Blueprint Tag */}
              <div className="relative z-10 pt-2.5 flex items-center justify-between text-[9px] font-mono text-[#5C7690]">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-[#4688B2]" /> CLUSTER // PROD-01
                </span>
                <span className="text-[#10213B] font-semibold">END-TO-END CONCURRENCY</span>
              </div>
            </div>
          </div>

          {/* Right Column: Connected Architecture Pipeline Layers (Span 7) */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-8 space-y-3.5">
            {/* Vertical Connected Conduit Rail */}
            <div className="absolute left-2 sm:left-3 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#4688B2]/50 via-[#4688B2]/20 to-[#4688B2]/50 rounded-full overflow-hidden pointer-events-none">
              {/* Traveling Signal Pulse Dot */}
              <div className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-[#4688B2] to-transparent animate-signal-trace" />
            </div>

            {stackLayers.map((layer, idx) => (
              <div
                key={layer.id}
                className="relative p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-sm border border-white/80 flex flex-col gap-3.5 hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group cursor-default shadow-card overflow-hidden"
              >
                {/* Left Architecture Node Indicator on the Conduit Rail */}
                <div className="absolute -left-[1.65rem] sm:-left-[2.15rem] top-6 w-3 h-3 rounded-full bg-white border-2 border-[#4688B2] shadow-2xs group-hover:scale-125 group-hover:bg-[#4688B2] transition-transform duration-300 flex items-center justify-center pointer-events-none">
                  <span className="w-1 h-1 rounded-full bg-[#4688B2] group-hover:bg-white transition-colors" />
                </div>

                {/* Left Active Sheen Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top: Layer Identity & Telemetry Chip */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#4688B2] shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-[#4688B2]/40 transition-all duration-300">
                      {layer.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#4688B2] font-bold block">
                          {layer.layerName}
                        </span>
                        <span className="text-[9px] font-mono text-[#5C7690] px-1.5 py-0.2 rounded bg-[#F0F7FB] border border-[#D0E3F0]">
                          LAYER 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#10213B] group-hover:text-[#182A43] transition-colors duration-200 mt-0.5">
                        {layer.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#243B53] px-3 py-1 rounded-full bg-[#F0F7FB] border border-[#D0E3F0] shrink-0 flex items-center gap-1 shadow-2xs">
                    <Activity className="w-3 h-3 text-[#4688B2]" />
                    <span>{layer.telemetry}</span>
                  </span>
                </div>

                {/* Layer Description */}
                <p className="text-xs text-[#243B53] leading-relaxed font-normal">
                  {layer.description}
                </p>

                {/* Verified Technologies Pill Row */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#D0E3F0]/60">
                  {layer.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] group-hover:border-[#4688B2]/40 group-hover:bg-white transition-all shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default EngineeringSection;
