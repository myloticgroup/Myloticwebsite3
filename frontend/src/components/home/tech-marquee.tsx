import * as React from "react";
import { Code2, Database, Cloud, Cpu, Layers, Terminal, Server, Box, Workflow } from "lucide-react";

const technologies = [
  { name: "React 19", icon: Code2 },
  { name: "TypeScript", icon: Terminal },
  { name: "Next.js", icon: Layers },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Cpu },
  { name: "AWS", icon: Cloud },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Box },
  { name: "Kubernetes", icon: Workflow },
];

export function TechMarquee() {
  const repeated = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative overflow-hidden bg-[#7CC7EA] py-5 sm:py-6 border-t border-white/20 border-b border-white/20">
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 pointer-events-none" />

      <div className="relative mx-auto flex max-w-[1500px] items-center">
        <div className="pointer-events-none absolute left-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-r from-[#7CC7EA] to-transparent" />
        <div className="pointer-events-none absolute right-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-l from-[#7CC7EA] to-transparent" />

        <div className="tech-reference-track flex w-max shrink-0 items-center gap-8 sm:gap-12">
          {repeated.map(({ name, icon: Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex shrink-0 items-center gap-2.5 text-[#F2FBFF]"
            >
              <Icon className="h-5 w-5 opacity-90" />
              <span className="text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-reference-track {
          animation: myloticTechFlow 30s linear infinite;
          will-change: transform;
        }
        .tech-reference-track:hover {
          animation-play-state: paused;
        }
        @keyframes myloticTechFlow {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-reference-track {
            animation: none;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            white-space: normal;
          }
        }
      `}</style>
    </section>
  );
}

export default TechMarquee;
