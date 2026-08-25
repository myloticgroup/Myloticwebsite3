import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Cloud, Users2, ShieldCheck, GraduationCap, CheckCircle2, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { solutionsData } from "@/data/solutions";
import { solutionMediaMap } from "@/data/media";

const capabilityIcons: Record<string, React.ReactNode> = {
  ai: <Sparkles className="w-5 h-5 text-[#4688B2]" />,
  "software-engineering": <Code2 className="w-5 h-5 text-[#4688B2]" />,
  "digital-transformation": <Cloud className="w-5 h-5 text-[#4688B2]" />,
  staffing: <Users2 className="w-5 h-5 text-[#4688B2]" />,
  "managed-services": <ShieldCheck className="w-5 h-5 text-[#4688B2]" />,
  "edtech-training": <GraduationCap className="w-5 h-5 text-[#4688B2]" />,
};

export function SolutionsPage() {
  return (
    <>
      {/* 01 Editorial Solutions Hero */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-20 sm:pb-28 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />
        <div className="ambient-glow-blue w-96 h-96 top-1/3 -right-10 opacity-50" />

        <Container size="default" className="relative z-10">
          <Breadcrumb items={[{ label: "Solutions" }]} className="mb-8 text-[#5C7690]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-ping" />
              <span>FULL-LIFECYCLE TECHNICAL CAPABILITIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              Enterprise Practice Areas &amp; <br />
              <span className="gradient-text-olive font-black">Engineering Solutions</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              Six dedicated engineering practices built to bridge architectural foresight with rigorous execution across AI, cloud, web systems, and technical staffing.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Practice Directory Grid */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
        <div className="ambient-glow-icy w-96 h-96 -bottom-10 -right-10 opacity-40" />

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsData.map((solution, sIdx) => {
              const rowNumber = String(sIdx + 1).padStart(2, "0");
              const media = solutionMediaMap[solution.slug];

              return (
                <div
                  key={solution.id}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Top Radiant Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0]/70 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#4688B2] group-hover:scale-110 group-hover:border-[#4688B2]/40 transition-all duration-200 shadow-2xs">
                          {capabilityIcons[solution.slug] || <Code2 className="w-5 h-5" />}
                        </div>
                        <span className="font-mono text-xs font-bold text-[#4688B2] uppercase tracking-wider">
                          PRACTICE {rowNumber}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#182A43] font-semibold uppercase bg-[#F0F7FB] px-3 py-1 rounded-full border border-[#D0E3F0]">
                        ACTIVE PRACTICE
                      </span>
                    </div>

                    {/* Photographic Practice Banner */}
                    {media && (
                      <div className="relative rounded-2xl overflow-hidden mb-6 border border-[#D0E3F0] aspect-21/9 bg-[#10213B] group/media shadow-xs">
                        <img
                          src={media.src}
                          alt={media.alt}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/media:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#10213D]/85 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none text-[10px] font-mono text-white/90">
                          <span className="truncate">{media.caption}</span>
                          <span className="px-2 py-0.5 rounded bg-[#4688B2] text-white font-bold shrink-0">VERIFIED</span>
                        </div>
                      </div>
                    )}

                    <h2 className="text-2xl font-bold text-[#10213B] mb-3 group-hover:text-[#182A43] transition-colors">
                      {solution.title}
                    </h2>
                    <p className="text-sm text-[#243B53] leading-relaxed font-normal mb-6">
                      {solution.overview}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#D0E3F0]/70 mb-6">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#5C7690] font-semibold block">
                        Core Delivered Capabilities:
                      </span>
                      {solution.capabilities.slice(0, 3).map((cap) => (
                        <div key={cap.title} className="flex items-start gap-2.5 text-xs text-[#243B53]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4688B2] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#10213B]">{cap.title}:</strong>{" "}
                            {cap.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#D0E3F0]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {solution.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] flex items-center gap-1 shadow-2xs"
                        >
                          <Cpu className="w-3 h-3 text-[#4688B2]" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/solutions/${solution.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] hover:text-[#4688B2] transition-colors shrink-0 group/link cursor-pointer"
                    >
                      <span>Explore Practice</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform text-[#4688B2]" />
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
