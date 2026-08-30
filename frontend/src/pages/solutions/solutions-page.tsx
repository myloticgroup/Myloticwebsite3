import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Cloud, Users2, ShieldCheck, GraduationCap, CheckCircle2, Cpu, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { solutionsData, Solution } from "@/data/solutions";
import { getSolutionsApi } from "@/services/solutions.service";
import { normalizeSolution } from "@/lib/normalizers";

const capabilityIcons: Record<string, React.ReactNode> = {
  ai: <Sparkles className="w-5 h-5 text-[#66705A]" />,
  "software-engineering": <Code2 className="w-5 h-5 text-[#66705A]" />,
  "digital-transformation": <Cloud className="w-5 h-5 text-[#66705A]" />,
  staffing: <Users2 className="w-5 h-5 text-[#66705A]" />,
  "managed-services": <ShieldCheck className="w-5 h-5 text-[#66705A]" />,
  "edtech-training": <GraduationCap className="w-5 h-5 text-[#66705A]" />,
};

export function SolutionsPage() {
  const [solutions, setSolutions] = React.useState<Solution[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchSolutions = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getSolutionsApi();
      if (res.success && Array.isArray(res.data) && res.data.length > 0) {
        setSolutions(res.data.map(normalizeSolution));
      } else {
        setSolutions(solutionsData);
      }
    } catch (err) {
      console.warn("[SolutionsPage] API error, falling back to static reference:", err);
      setSolutions(solutionsData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchSolutions();
  }, [fetchSolutions]);

  return (
    <>
      {/* 01 Bento Solutions Hero */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Solutions" }]} className="mb-6 text-[#5F6872]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Full-Lifecycle Technical Capabilities</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  Enterprise Practice Areas &amp; <br />
                  <span className="gradient-text-olive font-black">Engineering Solutions</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
                  Dedicated engineering practices built to bridge architectural foresight with rigorous execution across AI, cloud, web systems, and technical staffing.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E7EF] mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F6872]">
                <span className="flex items-center gap-1.5 font-semibold text-[#101418]">
                  <CheckCircle2 className="w-4 h-4 text-[#66705A]" /> {solutions.length} VERIFIED PRACTICES
                </span>
                <span>&bull;</span>
                <span>SOC2 CERTIFIED PATTERNS</span>
              </div>
            </div>

            {/* Right Col: Interactive Solution Architecture Visualizer Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4 text-xs font-mono">
                  <span className="font-semibold text-[#101418] tracking-wider uppercase">
                    SOLUTION ARCHITECTURE TOPOLOGY
                  </span>
                  <span className="text-[#66705A] font-semibold text-[10px] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E1E7EF]">
                    ENTERPRISE SLA
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#66705A]" />
                      <span className="text-xs font-bold text-[#101418]">AI &amp; RAG Pipelines</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#66705A] font-semibold">SUB-30MS</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-[#66705A]" />
                      <span className="text-xs font-bold text-[#101418]">Distributed Web Systems</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#66705A] font-semibold">99.99% SLA</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Cloud className="w-4 h-4 text-[#66705A]" />
                      <span className="text-xs font-bold text-[#101418]">Cloud Infrastructure</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#66705A] font-semibold">IaC AUTOMATED</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5F6872]">
                <span>CAPABILITY DEPLOYMENT</span>
                <span className="text-[#66705A] font-semibold">GLOBAL PODS AVAILABLE</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Practice Directory Bento Grid */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          {isLoading ? (
            <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2 bg-white rounded-3xl border border-[#E1E7EF]">
              <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
              <span>Fetching practice solutions directory...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map((solution, sIdx) => {
                const rowNumber = String(sIdx + 1).padStart(2, "0");
                return (
                  <div
                    key={solution.id || solution.slug}
                    className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-bento-hover hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] text-[#66705A] group-hover:scale-105 transition-transform">
                            {capabilityIcons[solution.slug] || <Code2 className="w-5 h-5" />}
                          </div>
                          <span className="font-mono text-xs font-bold text-[#66705A]">
                            PRACTICE {rowNumber}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#4C5642] font-semibold uppercase bg-[#F0F4F8] px-2.5 py-1 rounded-lg border border-[#E1E7EF]">
                          ACTIVE PRACTICE
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-[#101418] mb-3 group-hover:text-[#4C5642] transition-colors">
                        {solution.title}
                      </h2>
                      <p className="text-sm text-[#5F6872] leading-relaxed font-normal mb-6">
                        {solution.overview}
                      </p>

                      {solution.capabilities && solution.capabilities.length > 0 && (
                        <div className="space-y-2.5 pt-4 border-t border-[#E1E7EF] mb-6">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A8490] font-semibold block">
                            Core Delivered Capabilities:
                          </span>
                          {solution.capabilities.slice(0, 3).map((cap) => (
                            <div key={cap.title} className="flex items-start gap-2 text-xs text-[#5F6872]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#66705A] shrink-0 mt-0.5" />
                              <span>
                                <strong className="text-[#101418]">{cap.title}:</strong>{" "}
                                {cap.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-[#E1E7EF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {solution.technologies &&
                          solution.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F0F4F8] text-[#101418] border border-[#E1E7EF] flex items-center gap-1"
                            >
                              <Cpu className="w-3 h-3 text-[#66705A]" />
                              <span>{tech}</span>
                            </span>
                          ))}
                      </div>

                      <Link
                        to={`/solutions/${solution.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#101418] hover:text-[#66705A] transition-colors shrink-0 group/link"
                      >
                        <span>Explore Practice</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-[#66705A]" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}

export default SolutionsPage;
