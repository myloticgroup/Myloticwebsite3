import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Cloud, Users2, ShieldCheck, GraduationCap, CheckCircle2, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { solutionsData } from "@/data/solutions";

const capabilityIcons: Record<string, React.ReactNode> = {
  ai: <Sparkles className="w-5 h-5 text-[#66705A]" />,
  "software-engineering": <Code2 className="w-5 h-5 text-[#66705A]" />,
  "digital-transformation": <Cloud className="w-5 h-5 text-[#66705A]" />,
  staffing: <Users2 className="w-5 h-5 text-[#66705A]" />,
  "managed-services": <ShieldCheck className="w-5 h-5 text-[#66705A]" />,
  "edtech-training": <GraduationCap className="w-5 h-5 text-[#66705A]" />,
};

export function SolutionsPage() {
  return (
    <>
      {/* 01 Editorial Solutions Hero */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-20 sm:pb-28 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Solutions" }]} className="mb-8 text-[#73766D]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6">
              <span>Full-Lifecycle Technical Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              Enterprise Practice Areas &amp; <br />
              <span className="gradient-text-olive font-black">Engineering Solutions</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              Six dedicated engineering practices built to bridge architectural foresight with rigorous execution across AI, cloud, web systems, and technical staffing.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Practice Directory Grid */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsData.map((solution, sIdx) => {
              const rowNumber = String(sIdx + 1).padStart(2, "0");
              return (
                <div
                  key={solution.id}
                  className="p-8 sm:p-10 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-white border border-[#E8E6DE] text-[#66705A] group-hover:scale-105 transition-transform">
                          {capabilityIcons[solution.slug] || <Code2 className="w-5 h-5" />}
                        </div>
                        <span className="font-mono text-xs font-bold text-[#66705A]">
                          PRACTICE {rowNumber}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#4C5642] font-semibold uppercase bg-white px-2.5 py-0.5 rounded border border-[#E8E6DE]">
                        ACTIVE PRACTICE
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#171A17] mb-3 group-hover:text-[#4C5642] transition-colors">
                      {solution.title}
                    </h2>
                    <p className="text-sm text-[#555850] leading-relaxed font-normal mb-6">
                      {solution.overview}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#E8E6DE] mb-6">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#73766D] font-semibold block">
                        Core Delivered Capabilities:
                      </span>
                      {solution.capabilities.slice(0, 3).map((cap) => (
                        <div key={cap.title} className="flex items-start gap-2 text-xs text-[#555850]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#66705A] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#171A17]">{cap.title}:</strong>{" "}
                            {cap.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#E8E6DE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {solution.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-white text-[#242622] border border-[#E8E6DE] flex items-center gap-1"
                        >
                          <Cpu className="w-3 h-3 text-[#66705A]" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/solutions/${solution.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] transition-colors shrink-0 group/link"
                    >
                      <span>Explore Practice</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default SolutionsPage;
