import * as React from "react";
import { Sparkles, Layers, Cpu, Cloud, CheckCircle2, ShieldCheck, Database, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroArchitecture() {
  const [activeLayer, setActiveLayer] = React.useState<number>(2); // Default to Applied AI

  const layers = [
    {
      id: 1,
      type: "interface",
      name: "INTERFACE RUNTIME",
      title: "Edge Delivery & Next.js Clusters",
      desc: "Sub-50ms latency edge routing and typed client runtimes.",
      badge: "SUB-50MS",
      icon: <Layers className="w-4 h-4 text-[#66705A]" />,
      telemetry: "LATENCY: 38MS • 99.99% EDGE HIT",
      animationClass: "",
    },
    {
      id: 2,
      type: "ai",
      name: "INTELLIGENCE LAYER",
      title: "Applied AI & Neural Orchestration",
      desc: "Vector embeddings, domain LLMs, and deterministic guardrails.",
      badge: "ACTIVE INFERENCE",
      icon: <Sparkles className="w-4 h-4 text-[#66705A] group-hover:animate-ai-pulse" />,
      telemetry: "PIPELINE: EMBEDDINGS • SOC2 GOVERNED",
      animationClass: "group-hover:animate-ai-pulse",
    },
    {
      id: 3,
      type: "distributed",
      name: "APPLICATION CORE",
      title: "Distributed Microservices & APIs",
      desc: "Stateless container orchestration, gRPC, and resilient message queues.",
      badge: "HIGH CONCURRENCY",
      icon: <Cpu className="w-4 h-4 text-[#66705A] group-hover:animate-node-flow" />,
      telemetry: "THROUGHPUT: 14.2K REQ/SEC",
      animationClass: "group-hover:animate-node-flow",
    },
    {
      id: 4,
      type: "cloud",
      name: "CLOUD TOPOLOGY",
      title: "Multi-Cloud IaC & ACID Storage",
      desc: "Declarative Terraform topologies and PostgreSQL ACID storage.",
      badge: "99.99% SLA",
      icon: <Cloud className="w-4 h-4 text-[#66705A] group-hover:animate-cloud-flow" />,
      telemetry: "PERSISTENCE: ENCRYPTED • ZERO DOWNTIME",
      animationClass: "group-hover:animate-cloud-flow",
    },
  ];

  return (
    <div className="relative">
      {/* Editorial Card Showcase with Subtle 250-400ms Hover Depth */}
      <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#E8E6DE] p-6 sm:p-7 shadow-card overflow-hidden transition-card-interactive select-none group hover:shadow-card-hover hover:border-[#66705A]/30">
        {/* Subtle Warm Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#66705A] via-[#A5AC92] to-[#C5A880]" />

        {/* Card Header with Operating Status & Pulse Beacon */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#66705A] animate-beacon" />
            <span className="font-semibold text-[#171A17] tracking-wider uppercase">
              ENGINEERING ARCHITECTURE
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[#66705A] text-[11px] font-semibold">
            <span>ACTIVE TOPOLOGY</span>
          </div>
        </div>

        {/* Layer Rows with 250-400ms Smooth Micro-Interactions */}
        <div className="py-5 flex flex-col gap-2.5 relative">
          {layers.map((layer) => {
            const isSelected = activeLayer === layer.id;
            return (
              <div
                key={layer.id}
                onMouseEnter={() => setActiveLayer(layer.id)}
                onClick={() => setActiveLayer(layer.id)}
                className={cn(
                  "p-3.5 rounded-xl border transition-all duration-300 ease-out cursor-pointer group/layer",
                  isSelected
                    ? "bg-[#F7F5EF] border-[#66705A]/60 shadow-xs translate-x-1.5 -translate-y-0.5"
                    : "bg-[#FAFAF7] border-[#E8E6DE]/70 hover:bg-[#F7F5EF] hover:border-[#E8E6DE] hover:translate-x-0.5"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "p-2 rounded-lg bg-white border border-[#E8E6DE] text-[#66705A] shrink-0 mt-0.5 shadow-2xs transition-transform duration-300 ease-out",
                        isSelected ? "scale-105 border-[#66705A]/40 bg-[#F1F0EA]" : "group-hover/layer:scale-105"
                      )}
                    >
                      {layer.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#66705A]">
                          LAYER 0{layer.id} &bull; {layer.name}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#171A17] mt-0.5">
                        {layer.title}
                      </h4>
                      <p className="text-[11px] text-[#555850] mt-0.5 leading-relaxed">
                        {layer.desc}
                      </p>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase shrink-0 transition-colors duration-200",
                      isSelected
                        ? "bg-[#E8E6DE] text-[#171A17] border border-[#66705A]/30"
                        : "bg-[#E8E6DE] text-[#4C5642]"
                    )}
                  >
                    {layer.badge}
                  </span>
                </div>

                {/* Smooth Opacity + TranslateY Content Reveal */}
                {isSelected && (
                  <div className="mt-2.5 pt-2 border-t border-[#E8E6DE] flex items-center justify-between text-[10px] font-mono text-[#555850] animate-fade-in duration-300">
                    <span className="text-[#66705A] font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#66705A]" />
                      {layer.telemetry}
                    </span>
                    <span className="text-[#4C5642] flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-[#66705A]" /> VERIFIED
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Metadata Strip */}
        <div className="pt-3.5 border-t border-[#E8E6DE] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#555850]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#66705A]" />
            <span>SECURITY: ENCRYPTED RUNTIMES</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-[#66705A]" />
            <span className="font-semibold text-[#171A17]">99.99% SLA TARGET</span>
          </div>
        </div>
      </div>
    </div>
  );
}
