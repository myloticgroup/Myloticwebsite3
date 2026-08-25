import { Sparkles, Cpu, Cloud, Database } from "lucide-react";

export function HeroSystemsVisual() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {/* SVG Circuit Rails & Connector Conduits */}
      <svg
        className="w-full h-full absolute inset-0 opacity-45"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroConduitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4688B2" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#4688B2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#79B9DA" stopOpacity="0.1" />
          </linearGradient>
          
          <linearGradient id="signalDotGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4688B2" stopOpacity="0" />
            <stop offset="50%" stopColor="#8CC8E8" stopOpacity="1" />
            <stop offset="100%" stopColor="#4688B2" stopOpacity="0" />
          </linearGradient>

          {/* Precision Crosshair Marker */}
          <pattern id="crosshairGrid" width="160" height="160" patternUnits="userSpaceOnUse">
            <path
              d="M 80 74 L 80 86 M 74 80 L 86 80"
              stroke="#4688B2"
              strokeWidth="0.75"
              strokeOpacity="0.25"
            />
          </pattern>
        </defs>

        {/* Coordinate Crosshairs Background */}
        <rect width="100%" height="100%" fill="url(#crosshairGrid)" />

        {/* Connected Architectural Circuit Lines */}
        {/* Top Left -> Center */}
        <path
          d="M 120 180 L 320 180 L 420 250"
          fill="none"
          stroke="url(#heroConduitGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        {/* Top Right -> Center */}
        <path
          d="M 1180 180 L 980 180 L 880 250"
          fill="none"
          stroke="url(#heroConduitGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        {/* Center -> Bottom Left */}
        <path
          d="M 420 340 L 320 420 L 160 420"
          fill="none"
          stroke="url(#heroConduitGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        {/* Center -> Bottom Right */}
        <path
          d="M 880 340 L 980 420 L 1140 420"
          fill="none"
          stroke="url(#heroConduitGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Floating System Architecture Badges (Framing the Headline on Desktop) */}
      
      {/* Node 1: AI Engine (Top Left Flank) */}
      <div className="hidden xl:flex items-center gap-2.5 absolute top-28 left-[6%] z-20 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-floating-panel animate-float text-xs font-mono">
        <div className="p-1.5 rounded-lg bg-[#E8F5FA] border border-[#D0E3F0] text-[#4688B2]">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono text-[#5C7690]">[ SYS // 01 ]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-pulse" />
          </div>
          <div className="font-bold text-[#10213B] text-[11px] leading-tight mt-0.5">
            AI // ACTIVE INFERENCE
          </div>
          <div className="text-[9px] text-[#4688B2] leading-tight">Latency &lt; 85ms</div>
        </div>
      </div>

      {/* Node 2: Distributed Runtime (Top Right Flank) */}
      <div className="hidden xl:flex items-center gap-2.5 absolute top-28 right-[6%] z-20 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-floating-panel animate-float-reverse text-xs font-mono">
        <div className="p-1.5 rounded-lg bg-[#E8F5FA] border border-[#D0E3F0] text-[#4688B2]">
          <Cpu className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono text-[#5C7690]">[ NODE 02 ]</span>
            <span className="text-[9px] font-bold text-[#10213B]">100% NOMINAL</span>
          </div>
          <div className="font-bold text-[#10213B] text-[11px] leading-tight mt-0.5">
            DISTRIBUTED RUNTIME
          </div>
          <div className="text-[9px] text-[#4688B2] leading-tight">14.2K Req/Sec</div>
        </div>
      </div>

      {/* Node 3: Cloud Topology (Bottom Left Flank) */}
      <div className="hidden 2xl:flex items-center gap-2.5 absolute top-[420px] left-[4%] z-20 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-floating-panel animate-float text-xs font-mono">
        <div className="p-1.5 rounded-lg bg-[#E8F5FA] border border-[#D0E3F0] text-[#4688B2]">
          <Cloud className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono text-[#5C7690]">[ CLOUD // SYNC ]</span>
          </div>
          <div className="font-bold text-[#10213B] text-[11px] leading-tight mt-0.5">
            MULTI-CLOUD IAC
          </div>
          <div className="text-[9px] text-[#4688B2] leading-tight">99.99% SLA Target</div>
        </div>
      </div>

      {/* Node 4: ACID Persistence & Type Safety (Bottom Right Flank) */}
      <div className="hidden 2xl:flex items-center gap-2.5 absolute top-[420px] right-[4%] z-20 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-floating-panel animate-float-reverse text-xs font-mono">
        <div className="p-1.5 rounded-lg bg-[#E8F5FA] border border-[#D0E3F0] text-[#4688B2]">
          <Database className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono text-[#5C7690]">[ STATUS // VERIFIED ]</span>
          </div>
          <div className="font-bold text-[#10213B] text-[11px] leading-tight mt-0.5">
            100% TYPE SAFE
          </div>
          <div className="text-[9px] text-[#182A43] leading-tight">ACID Replicated State</div>
        </div>
      </div>

      {/* Corner Technical Coordinate Markers */}
      <div className="absolute top-4 left-6 text-[9px] font-mono text-[#5C7690]/60 hidden md:block">
        + [ 00 // RUNTIME_COORD ]
      </div>
      <div className="absolute top-4 right-6 text-[9px] font-mono text-[#5C7690]/60 hidden md:block">
        [ SYS:PRODUCTION_01 ] +
      </div>
    </div>
  );
}

export default HeroSystemsVisual;
