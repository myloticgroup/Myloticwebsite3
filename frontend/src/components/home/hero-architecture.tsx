import * as React from "react";
import { ArrowUpRight, Database, BrainCircuit, ShieldCheck, Cpu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  { id: 1, label: "STAGE 01", name: "INGESTION", icon: Database },
  { id: 2, label: "STAGE 02", name: "INTELLIGENCE", icon: BrainCircuit },
  { id: 3, label: "STAGE 03", name: "ORCHESTRATION", icon: Cpu },
];

export function HeroArchitecture() {
  const [activeStage, setActiveStage] = React.useState(2);
  const [isSimulating, setIsSimulating] = React.useState(false);

  const triggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let next = 1;
    setActiveStage(next);

    const timer = window.setInterval(() => {
      next += 1;
      if (next > 3) {
        window.clearInterval(timer);
        setActiveStage(2);
        setIsSimulating(false);
        return;
      }
      setActiveStage(next);
    }, 650);
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/55 bg-white/18 shadow-[0_24px_70px_rgba(18,83,119,.16)] backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-[#7FD0F2]/20 pointer-events-none" />

      <div className="relative p-3 sm:p-4">
        <div className="flex items-center justify-between px-2 py-2 text-[10px] sm:text-[11px] font-mono tracking-[0.12em] text-[#143D5A]">
          <span className="font-bold">ENTERPRISE RAG &amp; AI PIPELINE</span>
          <button
            type="button"
            onClick={triggerSimulation}
            disabled={isSimulating}
            aria-label="Simulate AI pipeline"
            className="h-8 w-8 rounded-full border border-white/70 bg-white/55 flex items-center justify-center text-[#10253F] shadow-sm transition-all hover:bg-white/80 hover:scale-105 disabled:opacity-60"
          >
            <ArrowUpRight className={cn("h-4 w-4", isSimulating && "animate-spin")} />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-[22px] border border-white/50 bg-[#7CC7EA]/30">
          <img
            src="/hero-brain-reference.jpg"
            alt="AI pipeline visualization"
            className="block w-full aspect-square object-cover"
          />

          {/* Stage controls */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[28%] top-[17%]">
              <StageButton stage={stages[0]} active={activeStage === 1} onClick={() => setActiveStage(1)} />
            </div>
            <div className="absolute right-[7%] top-[43%]">
              <StageButton stage={stages[1]} active={activeStage === 2} onClick={() => setActiveStage(2)} />
            </div>
            <div className="absolute left-[32%] bottom-[8%]">
              <StageButton stage={stages[2]} active={activeStage === 3} onClick={() => setActiveStage(3)} />
            </div>
          </div>

          <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between rounded-xl border border-white/55 bg-white/55 px-3 py-2 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-[#123B57]">
            <span className="font-semibold">{stages[activeStage - 1].name}</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1D6D93] animate-pulse" />
              FLOW ACTIVE
            </span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between px-2 text-[9px] font-mono text-[#25536D]">
          <span className="flex items-center gap-1">
            <Zap className="h-3 w-3" /> REAL-TIME FLOW
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" /> GOVERNED
          </span>
        </div>
      </div>
    </div>
  );
}

function StageButton({
  stage,
  active,
  onClick,
}: {
  stage: (typeof stages)[number];
  active: boolean;
  onClick: () => void;
}) {
  const Icon = stage.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "pointer-events-auto min-w-[82px] rounded-full border px-3 py-2 text-left shadow-sm backdrop-blur-md transition-all duration-300",
        active
          ? "border-white bg-white/85 text-[#10253F] scale-105"
          : "border-white/55 bg-white/50 text-[#214B66] hover:bg-white/75"
      )}
    >
      <span className="flex items-center gap-1.5 text-[8px] font-mono font-bold">
        <Icon className="h-3 w-3" />
        {stage.label}
      </span>
    </button>
  );
}

export default HeroArchitecture;
