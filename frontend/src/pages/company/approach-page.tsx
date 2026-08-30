import { Compass, Layers, Code2, Cloud, RefreshCw, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { solutionsData } from "@/data/solutions";

export function ApproachPage() {
  const phases = [
    {
      step: "01",
      name: "DISCOVER",
      title: "Technical Discovery & Needs Assessment",
      icon: <Compass className="w-5 h-5 text-[#66705A]" />,
      description:
        "We analyze your existing architecture, identify system bottlenecks, evaluate data readiness, and establish clear delivery parameters.",
      deliverables: ["Current-State Technical Audit", "Requirements Specification", "Risk & Feasibility Analysis"],
    },
    {
      step: "02",
      name: "ARCHITECT",
      title: "System Architecture & Solution Blueprint",
      icon: <Layers className="w-5 h-5 text-[#4C5642]" />,
      description:
        "We draft modular, cloud-ready architecture diagrams, define API contracts, select target technology stacks, and map data security boundaries.",
      deliverables: ["Target System Blueprint", "API & Data Flow Specifications", "Security & Compliance Framework"],
    },
    {
      step: "03",
      name: "BUILD",
      title: "Iterative Engineering & Quality Sprints",
      icon: <Code2 className="w-5 h-5 text-[#66705A]" />,
      description:
        "Dedicated engineering pods execute focused development sprints with continuous code reviews, automated unit testing, and weekly progress demos.",
      deliverables: ["Production-Ready Codebase", "Automated Test Suites", "Weekly Sprint Demonstrations"],
    },
    {
      step: "04",
      name: "DEPLOY",
      title: "Infrastructure Automation & Cutover",
      icon: <Cloud className="w-5 h-5 text-[#4C5642]" />,
      description:
        "We automate CI/CD release pipelines, provision containerized infrastructure via IaC, and manage low-risk, zero-downtime cutovers.",
      deliverables: ["CI/CD Release Automation", "Infrastructure-as-Code Setup", "Production Verification & Cutover"],
    },
    {
      step: "05",
      name: "EVOLVE",
      title: "Telemetry, Governance & Continuous Scaling",
      icon: <RefreshCw className="w-5 h-5 text-[#66705A]" />,
      description:
        "Continuous performance monitoring, security patching, and proactive roadmap evolution to support high-growth business needs.",
      deliverables: ["24/7 Monitoring Dashboards", "Ongoing Performance Tuning", "Knowledge Transfer & Documentation"],
    },
  ];

  const relatedSolutions = solutionsData.slice(0, 3).map((sol) => ({
    title: sol.title,
    description: sol.shortDescription,
    href: `/solutions/${sol.slug}`,
    category: "ENGINEERING SOLUTION",
  }));

  return (
    <>
      {/* Bento Approach Header */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Company", href: "/company" },
              { label: "Our Approach" },
            ]}
            className="mb-6 text-[#5F6872]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Col: Hero Intro */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <Compass className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Engagement Methodology</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  How We Architect, <br />
                  <span className="gradient-text-olive font-black">Engineer &amp; Deliver</span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
                  Complex software and AI initiatives require disciplined execution. Our 5-stage lifecycle balances architectural foresight with agile sprint velocity.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E7EF] mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F6872]">
                <span className="font-semibold text-[#101418]">5 LIFECYCLE STAGES</span>
                <span>&bull;</span>
                <span>DISCOVER &rarr; ARCHITECT &rarr; BUILD &rarr; DEPLOY &rarr; EVOLVE</span>
              </div>
            </div>

            {/* Right Col: 5-Phase Engagement System Visualizer Bento Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4 text-xs font-mono">
                  <span className="font-semibold text-[#101418] tracking-wider uppercase">
                    5-STAGE DELIVERY LIFECYCLE
                  </span>
                  <span className="text-[#66705A] font-semibold text-[10px] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E1E7EF]">
                    DETERMINISTIC
                  </span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <span className="text-[#101418] font-bold">01 // DISCOVER</span>
                    <span className="text-[10px] text-[#66705A] font-semibold">TECHNICAL AUDIT</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <span className="text-[#101418] font-bold">02 // ARCHITECT</span>
                    <span className="text-[10px] text-[#66705A] font-semibold">SYSTEM BLUEPRINT</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <span className="text-[#101418] font-bold">03 // BUILD</span>
                    <span className="text-[10px] text-[#66705A] font-semibold">QUALITY SPRINTS</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <span className="text-[#101418] font-bold">04 // DEPLOY</span>
                    <span className="text-[10px] text-[#66705A] font-semibold">CI/CD CUTOVER</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <span className="text-[#101418] font-bold">05 // EVOLVE</span>
                    <span className="text-[10px] text-[#66705A] font-semibold">24/7 TELEMETRY</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5F6872]">
                <span>METHODOLOGY SLA</span>
                <span className="text-[#101418] font-semibold">ZERO REGRESSION</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5-Phase Engagement System Bento Cards */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="space-y-6">
            {phases.map((phase) => (
              <div
                key={phase.step}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-[#66705A]/50 transition-all duration-300"
              >
                {/* Left: Step & Title (Span 5) */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#66705A] font-bold uppercase">
                    <span className="px-3 py-1 rounded-full bg-[#F0F4F8] border border-[#E1E7EF]">STAGE {phase.step}</span>
                    <span>•</span>
                    <span>{phase.name}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#101418] leading-snug">
                    {phase.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#5F6872] leading-relaxed font-normal">
                    {phase.description}
                  </p>
                </div>

                {/* Right: Key Deliverables (Span 7) */}
                <div className="lg:col-span-7 bg-[#F0F4F8] rounded-2xl border border-[#E1E7EF] p-6 sm:p-8 flex flex-col gap-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#66705A] font-semibold">
                    Key Outputs &amp; Deliverables:
                  </span>
                  <ul className="space-y-3">
                    {phase.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-3 text-sm text-[#101418]">
                        <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contextual Solutions */}
      <RelatedContent
        title="Solutions Executed with this Approach"
        eyebrow="APPLIED PRACTICE"
        links={relatedSolutions}
      />
    </>
  );
}

export default ApproachPage;
