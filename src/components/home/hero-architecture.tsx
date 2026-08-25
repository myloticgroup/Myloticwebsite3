import * as React from "react";
import {
  Sparkles,
  Layers,
  Cpu,
  Cloud,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Activity,
  Terminal,
  Radio,
  Server,
  Network,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroArchitecture() {
  const [activeLayer, setActiveLayer] = React.useState<number>(2);
  const [viewMode, setViewMode] = React.useState<"topology" | "infrastructure" | "telemetry">("topology");

  const layers = [
    {
      id: 1,
      type: "interface",
      name: "INTERFACE RUNTIME",
      title: "Edge Delivery & React Runtimes",
      desc: "Sub-50ms paint times, typed client endpoints, and real-time state synchronization.",
      badge: "SUB-50MS",
      icon: <Layers className="w-4 h-4 text-[#4688B2]" />,
      telemetry: "LATENCY: 38MS • 99.99% EDGE HIT",
      spec: "REACT 19 • VITE 6 • TAILWIND",
      status: "OPTIMAL",
      image: "/images/software_engineering_runtime.jpg",
      nodeCount: "12 Edge Nodes",
      animClass: "animate-slide-1",
      offsetClass: "lg:translate-x-0",
    },
    {
      id: 2,
      type: "ai",
      name: "INTELLIGENCE LAYER",
      title: "Applied AI & Neural Orchestration",
      desc: "Vector embeddings, domain LLMs, deterministic guardrails, and RAG pipelines.",
      badge: "ACTIVE INFERENCE",
      icon: <Sparkles className="w-4 h-4 text-[#4688B2] group-hover:animate-ai-pulse" />,
      telemetry: "PIPELINE: EMBEDDINGS • SOC2 GOVERNED",
      spec: "PYTORCH • PGVECTOR • FASTAPI",
      status: "ACTIVE",
      image: "/images/ai_intelligent_systems.jpg",
      nodeCount: "4 AI Clusters",
      animClass: "animate-slide-2",
      offsetClass: "lg:translate-x-2.5",
    },
    {
      id: 3,
      type: "distributed",
      name: "APPLICATION CORE",
      title: "Distributed Microservices & APIs",
      desc: "Stateless container orchestration, gRPC, and resilient message queues.",
      badge: "HIGH CONCURRENCY",
      icon: <Cpu className="w-4 h-4 text-[#4688B2] group-hover:animate-node-flow" />,
      telemetry: "THROUGHPUT: 14.2K REQ/SEC",
      spec: "NODE.JS • EXPRESS • MONGOOSE",
      status: "OPERATIONAL",
      image: "/images/hero_architecture_main.jpg",
      nodeCount: "28 Service Pods",
      animClass: "animate-slide-3",
      offsetClass: "lg:translate-x-1",
    },
    {
      id: 4,
      type: "cloud",
      name: "CLOUD TOPOLOGY",
      title: "Multi-Cloud IaC & ACID Storage",
      desc: "Declarative Terraform topologies and MongoDB/PostgreSQL ACID storage.",
      badge: "99.99% SLA",
      icon: <Cloud className="w-4 h-4 text-[#4688B2] group-hover:animate-cloud-flow" />,
      telemetry: "PERSISTENCE: ENCRYPTED • ZERO DOWNTIME",
      spec: "TERRAFORM • KUBERNETES • DOCKER",
      status: "SECURE",
      image: "/images/cloud_distributed_systems.jpg",
      nodeCount: "Multi-Region Mesh",
      animClass: "animate-slide-4",
      offsetClass: "lg:translate-x-3.5",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Background Multi-Layer Ambient Lighting */}
      <div className="ambient-glow-icy w-72 h-72 -top-10 -right-10 opacity-70" />
      <div className="ambient-glow-blue w-80 h-80 -top-6 -left-10 opacity-50" />
      <div className="ambient-glow-white w-64 h-64 -bottom-10 -left-10 opacity-60" />

      {/* Main Glass Process Container */}
      <div className="relative rounded-3xl bg-white/92 backdrop-blur-2xl border border-white/80 p-5 sm:p-7 shadow-floating-panel overflow-hidden transition-all duration-300 select-none group hover:shadow-cinematic-hero hover:border-[#4688B2]/40">
        {/* Top Radiant Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

        {/* Card Header with Live Telemetry Beacon & View Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#D0E3F0] text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4688B2] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4688B2]" />
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-[#10213B] tracking-wider uppercase leading-none">
                ENTERPRISE ARCHITECTURE
              </span>
              <span className="text-[9px] text-[#4688B2] uppercase tracking-widest font-semibold mt-0.5">
                LIVE TOPOLOGY MESH // P99 &bull; 38MS
              </span>
            </div>
          </div>

          {/* Mode Switcher Pill */}
          <div className="flex items-center gap-1 bg-[#F0F7FB] p-1 rounded-xl border border-[#D0E3F0]">
            <button
              type="button"
              onClick={() => setViewMode("topology")}
              className={cn(
                "px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer",
                viewMode === "topology"
                  ? "bg-white text-[#10213B] shadow-2xs"
                  : "text-[#5C7690] hover:text-[#10213B]"
              )}
            >
              TOPOLOGY
            </button>
            <button
              type="button"
              onClick={() => setViewMode("infrastructure")}
              className={cn(
                "px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer",
                viewMode === "infrastructure"
                  ? "bg-white text-[#10213B] shadow-2xs"
                  : "text-[#5C7690] hover:text-[#10213B]"
              )}
            >
              INFRASTRUCTURE
            </button>
            <button
              type="button"
              onClick={() => setViewMode("telemetry")}
              className={cn(
                "px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer",
                viewMode === "telemetry"
                  ? "bg-white text-[#10213B] shadow-2xs"
                  : "text-[#5C7690] hover:text-[#10213B]"
              )}
            >
              TELEMETRY
            </button>
          </div>
        </div>

        {/* View Mode: TOPOLOGY (Cascading Process Cards with Staggered Offsets & Micro-float) */}
        {viewMode === "topology" && (
          <div className="py-4 sm:py-5 flex flex-col gap-2.5 relative">
            {layers.map((layer) => {
              const isSelected = activeLayer === layer.id;
              return (
                <div
                  key={layer.id}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onClick={() => setActiveLayer(layer.id)}
                  className={cn(
                    "p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 ease-out cursor-pointer group/layer relative overflow-hidden",
                    layer.offsetClass,
                    layer.animClass,
                    isSelected
                      ? "bg-[#F0F7FB] border-[#4688B2]/50 shadow-xs translate-x-1 sm:translate-x-1.5 -translate-y-0.5"
                      : "bg-[#FAFCFE] border-[#D0E3F0]/80 hover:bg-[#F0F7FB] hover:border-[#D0E3F0] hover:translate-x-0.5"
                  )}
                >
                  {/* Subtle active left highlight bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4688B2]" />
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "p-2 sm:p-2.5 rounded-xl bg-white border border-[#D0E3F0] text-[#4688B2] shrink-0 mt-0.5 shadow-2xs transition-all duration-300 ease-out",
                          isSelected
                            ? "scale-105 border-[#4688B2]/40 bg-white shadow-glow-blue"
                            : "group-hover/layer:scale-105"
                        )}
                      >
                        {layer.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#4688B2]">
                            LAYER 0{layer.id} &bull; {layer.name}
                          </span>
                          <span className="hidden sm:inline-block text-[9px] font-mono text-[#5C7690]">
                            // {layer.nodeCount}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#10213B] mt-0.5">
                          {layer.title}
                        </h4>
                        <p className="text-[11px] text-[#243B53] mt-0.5 leading-relaxed font-normal">
                          {layer.desc}
                        </p>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase shrink-0 transition-colors duration-200",
                        isSelected
                          ? "bg-[#D8ECF7] text-[#10213B] border border-[#4688B2]/30"
                          : "bg-[#E8F5FA] text-[#182A43]"
                      )}
                    >
                      {layer.badge}
                    </span>
                  </div>

                  {/* Dynamic Technical Spec Readout */}
                  {isSelected && (
                    <div className="mt-3 pt-2.5 border-t border-[#D0E3F0] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#243B53] animate-fade-in duration-300">
                      <span className="text-[#4688B2] font-semibold flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-[#4688B2]" />
                        {layer.spec}
                      </span>
                      <span className="text-[#182A43] flex items-center gap-1.5 font-semibold">
                        <CheckCircle2 className="w-3 h-3 text-[#4688B2]" /> {layer.status}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode: INFRASTRUCTURE (Visual Media View) */}
        {viewMode === "infrastructure" && (
          <div className="py-4 sm:py-5 flex flex-col gap-3 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden border border-[#D0E3F0] shadow-card group/infra aspect-16/9 bg-[#10213B]">
              <img
                src={layers.find((l) => l.id === activeLayer)?.image || "/images/hero_architecture_main.jpg"}
                alt="Mylotic Enterprise Computing Architecture"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/infra:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10213B]/90 via-[#10213B]/30 to-transparent pointer-events-none" />

              {/* Top Status Overlay Pill */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-md bg-[#10213B]/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#8CC8E8] font-semibold uppercase">
                  ENVIRONMENT: {layers.find((l) => l.id === activeLayer)?.name}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#4688B2] text-white font-bold uppercase">
                  VERIFIED
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                <div className="text-xs font-bold text-white mb-0.5">
                  {layers.find((l) => l.id === activeLayer)?.title}
                </div>
                <div className="text-[11px] text-[#D8ECF7] font-mono line-clamp-1">
                  {layers.find((l) => l.id === activeLayer)?.telemetry}
                </div>
              </div>
            </div>

            {/* Quick Layer Switcher Badges */}
            <div className="grid grid-cols-4 gap-1.5 pt-1">
              {layers.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setActiveLayer(l.id)}
                  className={cn(
                    "p-2 rounded-xl text-left border text-[10px] font-mono transition-all cursor-pointer",
                    activeLayer === l.id
                      ? "bg-[#4688B2] text-white border-[#4688B2] shadow-xs"
                      : "bg-[#F0F7FB] text-[#243B53] border-[#D0E3F0] hover:bg-white"
                  )}
                >
                  <div className="font-bold truncate">0{l.id} // {l.type.toUpperCase()}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* View Mode: TELEMETRY STREAM */}
        {viewMode === "telemetry" && (
          <div className="py-4 sm:py-5 flex flex-col gap-3 animate-fade-in">
            <div className="p-4 rounded-2xl bg-[#10213B] text-[#FFFFFF] font-mono text-xs space-y-2.5 shadow-card border border-white/10">
              <div className="flex items-center justify-between text-[#8CC8E8] text-[11px] pb-2 border-b border-white/10">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#8CC8E8]" /> LIVE RUNTIME TELEMETRY
                </span>
                <span className="text-[#79B9DA] font-bold flex items-center gap-1">
                  <Radio className="w-3 h-3 text-[#79B9DA] animate-pulse" /> STREAM ACTIVE
                </span>
              </div>
              <div className="space-y-2 text-[11px] text-[#E8F5FA]">
                <div className="flex justify-between items-center">
                  <span className="text-[#A2BACB] flex items-center gap-1">
                    <Server className="w-3.5 h-3.5 text-[#A2BACB]" /> EDGE PAINT LATENCY:
                  </span>
                  <span className="text-[#8CC8E8] font-bold">38ms [p99]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A2BACB] flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-[#A2BACB]" /> CONCURRENT REQ/SEC:
                  </span>
                  <span className="text-white font-bold">14,240 req/s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A2BACB] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#A2BACB]" /> NEURAL INFERENCE:
                  </span>
                  <span className="text-[#8CC8E8]">Active RAG (Vectorized)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A2BACB] flex items-center gap-1">
                    <Network className="w-3.5 h-3.5 text-[#A2BACB]" /> PERSISTENCE HEALTH:
                  </span>
                  <span className="text-[#79B9DA] font-bold">MongoDB Cluster Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A2BACB] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A2BACB]" /> MULTI-CLOUD FAILOVER:
                  </span>
                  <span className="text-[#8CC8E8]">Target SLA 99.99%</span>
                </div>
              </div>
            </div>

            {/* Visual Telemetry Progress Bars */}
            <div className="grid grid-cols-2 gap-2.5 font-mono text-[10px]">
              <div className="p-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0]">
                <div className="text-[#5C7690] mb-1.5 flex justify-between">
                  <span>CPU UTILIZATION</span>
                  <span className="text-[#10213B] font-bold">38%</span>
                </div>
                <div className="w-full bg-[#D0E3F0] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#4688B2] h-full rounded-full w-[38%]" />
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#F0F7FB] border border-[#D0E3F0]">
                <div className="text-[#5C7690] mb-1.5 flex justify-between">
                  <span>MEMORY POOL</span>
                  <span className="text-[#10213B] font-bold">44%</span>
                </div>
                <div className="w-full bg-[#D0E3F0] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#79B9DA] h-full rounded-full w-[44%]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Metadata & SLA Strip */}
        <div className="pt-3.5 border-t border-[#D0E3F0] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#243B53]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4688B2]" />
            <span>SECURITY: ENCRYPTED RUNTIMES</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#4688B2]" />
            <span className="font-semibold text-[#10213B]">99.99% SLA TARGET</span>
          </div>
        </div>
      </div>
    </div>
  );
}
