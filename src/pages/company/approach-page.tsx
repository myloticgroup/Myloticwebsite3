import { Compass, Layers, Code2, Cloud, RefreshCw, CheckCircle2, Terminal } from "lucide-react";
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
      icon: <Compass className="w-5 h-5 text-[#4688B2]" />,
      description:
        "We analyze your existing architecture, identify system bottlenecks, evaluate data readiness, and establish clear delivery parameters.",
      deliverables: ["Current-State Technical Audit", "Requirements Specification", "Risk & Feasibility Analysis"],
    },
    {
      step: "02",
      name: "ARCHITECT",
      title: "System Architecture & Solution Blueprint",
      icon: <Layers className="w-5 h-5 text-[#4688B2]" />,
      description:
        "We draft modular, cloud-ready architecture diagrams, define API contracts, select target technology stacks, and map data security boundaries.",
      deliverables: ["Target System Blueprint", "API & Data Flow Specifications", "Security & Compliance Framework"],
    },
    {
      step: "03",
      name: "BUILD",
      title: "Iterative Engineering & Quality Sprints",
      icon: <Code2 className="w-5 h-5 text-[#4688B2]" />,
      description:
        "Dedicated engineering pods execute focused development sprints with continuous code reviews, automated unit testing, and weekly progress demos.",
      deliverables: ["Production-Ready Codebase", "Automated Test Suites", "Weekly Sprint Demonstrations"],
    },
    {
      step: "04",
      name: "DEPLOY",
      title: "Infrastructure Automation & Cutover",
      icon: <Cloud className="w-5 h-5 text-[#4688B2]" />,
      description:
        "We automate CI/CD release pipelines, provision containerized infrastructure via IaC, and manage low-risk, zero-downtime cutovers.",
      deliverables: ["CI/CD Release Automation", "Infrastructure-as-Code Setup", "Production Verification & Cutover"],
    },
    {
      step: "05",
      name: "EVOLVE",
      title: "Telemetry, Governance & Continuous Scaling",
      icon: <RefreshCw className="w-5 h-5 text-[#4688B2]" />,
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
      {/* Editorial Approach Header */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Company", href: "/company" },
              { label: "Our Approach" },
            ]}
            className="mb-8 text-[#5C7690]"
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-[#4688B2]" />
              <span>ENGAGEMENT METHODOLOGY // 5-STAGE LIFECYCLE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              How We Architect, <br />
              <span className="gradient-text-olive font-black">Engineer &amp; Deliver</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              Complex software and AI initiatives require disciplined execution. Our 5-stage lifecycle balances architectural foresight with agile sprint velocity.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5-Phase Engagement System */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#FFFFFF] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="divide-y divide-[#D0E3F0]/70 border-b border-[#D0E3F0]/70">
            {phases.map((phase) => (
              <div
                key={phase.step}
                className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-[#F0F7FB]/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-3xl transition-all duration-300 group"
              >
                {/* Left: Step & Title (Span 5) */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#4688B2] font-bold uppercase">
                    <span className="px-3 py-1 rounded-full bg-[#F0F7FB] border border-[#D0E3F0]">STAGE {phase.step}</span>
                    <span>•</span>
                    <span>{phase.name}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B] leading-snug group-hover:text-[#182A43] transition-colors">
                    {phase.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#243B53] leading-relaxed font-normal">
                    {phase.description}
                  </p>
                </div>

                {/* Right: Key Deliverables (Span 7) */}
                <div className="lg:col-span-7 bg-[#F0F7FB] rounded-3xl border border-[#D0E3F0] p-6 sm:p-8 shadow-card flex flex-col gap-4 relative overflow-hidden group/card hover:border-[#4688B2]/40 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#4688B2] font-bold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#4688B2]" /> Key Outputs &amp; Deliverables:
                  </span>
                  <ul className="space-y-3">
                    {phase.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-3 text-sm text-[#182A43] p-3 rounded-xl bg-white border border-white/80 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-[#4688B2] shrink-0 mt-0.5" />
                        <span className="font-medium">{deliv}</span>
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
