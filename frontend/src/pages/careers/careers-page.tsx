import * as React from "react";
import { ShieldCheck, Zap, Users, Trophy, Code2, HeartHandshake, Compass, Cpu, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CareersClient } from "./careers-client";
import { getJobsApi } from "@/services/careers.service";
import { JobOpening } from "@/types";

export function CareersPage() {
  const [jobs, setJobs] = React.useState<JobOpening[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchJobs = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getJobsApi();
      if (res.success && res.data) {
        setJobs(res.data);
      } else {
        setError(res.message || "Failed to load open positions.");
      }
    } catch (err: unknown) {
      console.error("[CareersPage] Error fetching jobs:", err);
      setError((err as Error).message || "Failed to fetch open positions. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const culturePrinciples = [
    {
      num: "01",
      title: "High Autonomy & Ownership",
      desc: "Engineers have direct authority over architecture decisions, technology choices, and implementation roadmaps.",
      icon: <Zap className="w-5 h-5 text-[#66705A]" />,
    },
    {
      num: "02",
      title: "Zero Bureaucracy",
      desc: "We eliminate administrative friction and unnecessary meetings so problem-solvers can focus purely on craft and execution.",
      icon: <ShieldCheck className="w-5 h-5 text-[#4C5642]" />,
    },
    {
      num: "03",
      title: "Real Enterprise Impact",
      desc: "Every system we architect supports mission-critical workflows across global finance, education, and media infrastructure.",
      icon: <Trophy className="w-5 h-5 text-[#66705A]" />,
    },
    {
      num: "04",
      title: "Continuous Craft Evolution",
      desc: "Dedicated time and budgets to master emerging AI models, distributed protocols, and modern cloud technologies.",
      icon: <Users className="w-5 h-5 text-[#4C5642]" />,
    },
    {
      num: "05",
      title: "Deterministic Quality",
      desc: "Static typing, automated regression test suites, and strict peer code audits embedded into every release cycle.",
      icon: <Code2 className="w-5 h-5 text-[#66705A]" />,
    },
  ];

  const lifePillars = [
    {
      title: "Distributed First, High Context",
      desc: "Asynchronous documentation, transparent roadmaps, and flexible work modes across India and remote hubs.",
      icon: <Compass className="w-4 h-4 text-[#66705A]" />,
    },
    {
      title: "Deep Technical Exploration",
      desc: "Quarterly hack weeks, open-source sponsorships, and internal research whitepaper drafting.",
      icon: <Cpu className="w-4 h-4 text-[#4C5642]" />,
    },
    {
      title: "Human-Centric Benefits",
      desc: "Comprehensive health coverage, continuous learning allowances, and premium hardware setups.",
      icon: <HeartHandshake className="w-4 h-4 text-[#66705A]" />,
    },
    {
      title: "Direct Client Architecture",
      desc: "Engineers interface directly with client engineering leads without filtering through non-technical layers.",
      icon: <Layers className="w-4 h-4 text-[#4C5642]" />,
    },
  ];

  return (
    <>
      {/* 01 Bento Careers Hero */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Careers" }]} className="mb-6 text-[#5F6872]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <span>CAREERS AT MYLOTIC GROUP</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#101418] leading-[1.08]">
                  BUILD WHAT&apos;S <br />
                  <span className="gradient-text-olive font-black">NEXT.</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
                  Work with engineers, systems architects, and machine learning practitioners building systems that matter for modern enterprises.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E7EF] mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F6872]">
                <span className="font-semibold text-[#101418]">ENGINEERING ROLES OPEN</span>
                <span>&bull;</span>
                <span>REMOTE &amp; GURUGRAM HUB</span>
              </div>
            </div>

            {/* Right Col: Engineering Workflow Visualizer Bento Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4 text-xs font-mono">
                  <span className="font-semibold text-[#101418] tracking-wider uppercase">
                    ENGINEERING POD ENVIRONMENT
                  </span>
                  <span className="text-[#66705A] font-semibold text-[10px] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E1E7EF]">
                    DIRECT CONTEXT
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Tech Stack Authority</span>
                      <p className="text-xs font-bold text-[#101418]">Modern TS, Python, Vector DBs</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">CUTTING EDGE</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Zero Bureaucracy</span>
                      <p className="text-xs font-bold text-[#101418]">Direct Client Architecture Contact</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">FLAT STRUCTURE</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Craft Evolution</span>
                      <p className="text-xs font-bold text-[#101418]">Dedicated R&amp;D &amp; Hardware Budgets</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">SUPPORTED</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5F6872]">
                <span>APPLY TODAY</span>
                <span className="text-[#101418] font-semibold">TALENT PODS ACTIVE</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Why Mylotic & 5 Engineering Culture Principles */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
              WHY MYLOTIC
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101418] mb-3">
              5 Principles of Our Engineering Culture
            </h2>
            <p className="text-sm sm:text-base text-[#5F6872] leading-relaxed font-normal">
              We structure our organization around high context, extreme ownership, and deep technical respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {culturePrinciples.map((principle) => (
              <div
                key={principle.num}
                className="p-6 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E1E7EF] mb-4">
                    <span className="font-mono text-xs font-bold text-[#66705A]">
                      PRINCIPLE {principle.num}
                    </span>
                    <div className="p-2 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] text-[#66705A]">
                      {principle.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#101418] mb-2 leading-snug">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-[#5F6872] leading-relaxed font-normal">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 03 Life at Mylotic Visual Horizontal Strip */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
              LIFE AT MYLOTIC
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101418]">
              Built for Sustainable High Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 transition-colors"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] text-[#66705A] w-fit mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#101418] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#5F6872] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 04 Interactive Jobs Portal & Talent Community */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
              ACTIVE REQUISITIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101418]">
              Open Positions
            </h2>
          </div>

          <CareersClient
            jobs={jobs}
            isLoading={isLoading}
            error={error}
            onRetry={fetchJobs}
          />
        </Container>
      </Section>
    </>
  );
}

export default CareersPage;

