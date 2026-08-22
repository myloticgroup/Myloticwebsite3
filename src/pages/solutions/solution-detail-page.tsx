import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, Code2, Cloud, Users2, GraduationCap, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { solutionsData } from "@/data/solutions";

function resolveSolution(slug: string) {
  const normalized =
    slug === "cloud"
      ? "digital-transformation"
      : slug === "edtech"
      ? "edtech-training"
      : slug;

  return solutionsData.find((s) => s.slug === normalized);
}

/* Domain-Specific Visual Architecture Renderer */
function DomainArchitectureVisual({ slug }: { slug: string }) {
  if (slug === "ai") {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] text-xs font-mono text-[#73766D]">
          <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#66705A]" />
            Enterprise AI Pipeline Topology
          </span>
          <span>Inference Latency Target &lt; 85ms</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Stage 01</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Context &amp; Ingestion</span>
            <span className="text-xs text-[#555850] mt-1 block">Vector chunking &amp; embedding pipeline</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Stage 02</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Hybrid Retrieval</span>
            <span className="text-xs text-[#555850] mt-1 block">Dense + sparse re-ranking</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Stage 03</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Guardrail Routing</span>
            <span className="text-xs text-[#555850] mt-1 block">Safety, hallucination &amp; PII filter</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Stage 04</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Model Inference</span>
            <span className="text-xs text-[#555850] mt-1 block">Fine-tuned LLM execution</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "software-engineering") {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] text-xs font-mono text-[#73766D]">
          <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#66705A]" />
            Distributed Software Engineering Framework
          </span>
          <span>Concurrency: 100k+ Events/Sec</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Layer 01</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">API Gateway</span>
            <span className="text-xs text-[#555850] mt-1 block">gRPC, GraphQL &amp; REST routing</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Layer 02</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Service Mesh</span>
            <span className="text-xs text-[#555850] mt-1 block">mTLS &amp; distributed tracing</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Layer 03</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Event Streaming</span>
            <span className="text-xs text-[#555850] mt-1 block">Kafka message broker</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Layer 04</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Data Fabric</span>
            <span className="text-xs text-[#555850] mt-1 block">Multi-region read replicas</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "digital-transformation" || slug === "cloud") {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] text-xs font-mono text-[#73766D]">
          <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
            <Cloud className="w-3.5 h-3.5 text-[#66705A]" />
            Cloud Architecture &amp; Migration Blueprint
          </span>
          <span>Availability Target: 99.99%</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Pillar 01</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">IaC Automation</span>
            <span className="text-xs text-[#555850] mt-1 block">Terraform &amp; OpenTofu state</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Pillar 02</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Kubernetes Mesh</span>
            <span className="text-xs text-[#555850] mt-1 block">Auto-scaling node pools</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Pillar 03</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">CI/CD GitOps</span>
            <span className="text-xs text-[#555850] mt-1 block">ArgoCD continuous deployment</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Pillar 04</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Observability</span>
            <span className="text-xs text-[#555850] mt-1 block">OpenTelemetry logs &amp; metrics</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "staffing") {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] text-xs font-mono text-[#73766D]">
          <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
            <Users2 className="w-3.5 h-3.5 text-[#66705A]" />
            Specialized Engineering Pod Deployment
          </span>
          <span>Integration Speed: &lt; 14 Days</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Phase 01</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Skill Matrix Mapping</span>
            <span className="text-xs text-[#555850] mt-1 block">Domain stack calibration</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Phase 02</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Technical Vetting</span>
            <span className="text-xs text-[#555850] mt-1 block">Architecture interview &amp; live code</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Phase 03</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Pod Formation</span>
            <span className="text-xs text-[#555850] mt-1 block">Embedded team onboarding</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Phase 04</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Continuous Review</span>
            <span className="text-xs text-[#555850] mt-1 block">Sprint velocity tracking</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "managed-services") {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] text-xs font-mono text-[#73766D]">
          <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#66705A]" />
            Managed IT &amp; SRE Governance Model
          </span>
          <span>SLA: 99.9% / 15-Min MTTR</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Track 01</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">24/7 Monitoring</span>
            <span className="text-xs text-[#555850] mt-1 block">Real-time alert telemetry</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Track 02</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Security Patching</span>
            <span className="text-xs text-[#555850] mt-1 block">Automated vulnerability scans</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Track 03</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Backup &amp; DR</span>
            <span className="text-xs text-[#555850] mt-1 block">Automated snapshot replication</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Track 04</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Cost Optimization</span>
            <span className="text-xs text-[#555850] mt-1 block">FinOps cloud spend reviews</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col gap-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] text-xs font-mono text-[#73766D]">
        <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5 text-[#66705A]" />
          EdTech Curriculum &amp; Capability Architecture
        </span>
        <span>Curriculum Modules: 100% Industry-Aligned</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
          <span className="text-[11px] font-mono text-[#66705A] uppercase block">Module 01</span>
          <span className="text-sm font-bold text-[#171A17] mt-1 block">Systems &amp; Architecture</span>
          <span className="text-xs text-[#555850] mt-1 block">Production backend design</span>
        </div>
        <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
          <span className="text-[11px] font-mono text-[#66705A] uppercase block">Module 02</span>
          <span className="text-sm font-bold text-[#171A17] mt-1 block">Applied AI Systems</span>
          <span className="text-xs text-[#555850] mt-1 block">RAG &amp; LLM fine-tuning</span>
        </div>
        <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
          <span className="text-[11px] font-mono text-[#66705A] uppercase block">Module 03</span>
          <span className="text-sm font-bold text-[#171A17] mt-1 block">Cloud &amp; DevOps</span>
          <span className="text-xs text-[#555850] mt-1 block">Hands-on Kubernetes &amp; CI/CD</span>
        </div>
        <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
          <span className="text-[11px] font-mono text-[#66705A] uppercase block">Module 04</span>
          <span className="text-sm font-bold text-[#171A17] mt-1 block">Architectural Review</span>
          <span className="text-xs text-[#555850] mt-1 block">Mentor-guided code audits</span>
        </div>
      </div>
    </div>
  );
}

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = resolveSolution(slug || "");

  if (!solution) {
    return (
      <Section spacing="spacious" className="py-24 text-center">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#171A17]">Solution Not Found</h1>
          <p className="mt-4 text-[#555850]">The requested practice area does not exist.</p>
          <Link to="/solutions" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#66705A]">
            &larr; Back to all solutions
          </Link>
        </Container>
      </Section>
    );
  }

  const isEdTech = solution.slug === "edtech-training";

  const otherSolutions = solutionsData
    .filter((s) => s.id !== solution.id)
    .slice(0, 3)
    .map((s) => ({
      title: s.title,
      description: s.shortDescription,
      href: `/solutions/${s.slug}`,
      category: "SOLUTION DOMAIN",
    }));

  return (
    <>
      {/* 01 Editorial Solution Hero */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-24">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: solution.title.split("&")[0].trim() },
            ]}
            className="mb-8 text-[#73766D]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold w-fit">
                <span>Enterprise Practice Area</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
                {solution.title}
              </h1>
              <p className="text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
                {solution.tagline}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                {isEdTech ? (
                  <>
                    <Link to="/contact/education-consultation">
                      <button
                        type="button"
                        className="px-6 py-3.5 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs group"
                      >
                        <span>BOOK A FREE CONSULTATION</span>
                        <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    <Link to="/solutions">
                      <button
                        type="button"
                        className="px-6 py-3.5 rounded-lg border border-[#E8E6DE] bg-white hover:bg-[#F1F0EA] text-[#171A17] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
                      >
                        <span>All Solutions</span>
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/contact">
                      <button
                        type="button"
                        className="px-6 py-3.5 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                      >
                        <span>Consult on this Solution</span>
                        <ArrowRight className="w-4 h-4 text-[#A5AC92]" />
                      </button>
                    </Link>
                    <Link to="/solutions">
                      <button
                        type="button"
                        className="px-6 py-3.5 rounded-lg border border-[#E8E6DE] bg-white hover:bg-[#F1F0EA] text-[#171A17] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
                      >
                        <span>All Solutions</span>
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Quick Metadata Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#E8E6DE] p-6 shadow-card flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#66705A] font-semibold pb-2 border-b border-[#E8E6DE]">
                PRACTICE PROFILE
              </span>
              <div className="flex flex-col gap-1 text-xs font-mono">
                <span className="text-[#73766D] uppercase">Focus Areas:</span>
                <span className="text-[#171A17] font-semibold">{solution.capabilities.length} Core Capabilities</span>
              </div>
              <div className="flex flex-col gap-1 text-xs font-mono">
                <span className="text-[#73766D] uppercase">Primary Stack:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {solution.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="bg-[#F7F5EF] text-[#242622] px-2 py-0.5 rounded text-[11px] border border-[#E8E6DE]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Domain-Specific Visual Architecture Block */}
      <Section spacing="compact" className="border-b border-[#E8E6DE] bg-[#F1F0EA]">
        <Container size="default">
          <DomainArchitectureVisual slug={solution.slug} />
        </Container>
      </Section>

      {/* Prominent EdTech Free Consultation Dedicated Banner */}
      {isEdTech && (
        <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#EEECE4] text-[#171A17] py-16 sm:py-20">
          <Container size="default">
            <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-card-hover transition-all">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-3">
                  <GraduationCap className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>FREE CONSULTATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#171A17] mb-2">
                  Schedule an EdTech &amp; Training Strategy Session
                </h3>
                <p className="text-sm text-[#555850] leading-relaxed font-normal">
                  Let&apos;s discuss your training, learning platform, or education technology requirements.
                </p>
              </div>

              <Link to="/contact/education-consultation" className="group shrink-0">
                <button
                  type="button"
                  className="px-8 py-4 rounded-lg bg-[#171A17] hover:bg-[#242622] active:scale-[0.98] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>BOOK A FREE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </Container>
        </Section>
      )}

      {/* 03 What We Solve & Strategic Overview */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="max-w-4xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
              01 / STRATEGIC OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171A17] leading-snug">
              What We Solve &amp; Deliver
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#555850] leading-relaxed font-normal">
              {solution.overview}
            </p>
          </div>

          {/* Core Capabilities Deep-Dive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.capabilities.map((cap, cIdx) => (
              <div
                key={cap.title}
                className="p-8 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] mb-6">
                    <span className="font-mono text-xs text-[#66705A] font-bold uppercase">
                      CAPABILITY 0{cIdx + 1}
                    </span>
                    <Workflow className="w-4 h-4 text-[#73766D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#171A17] mb-2">{cap.title}</h3>
                  <p className="text-sm text-[#555850] leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 04 Engineering Methodology & Delivery Process */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F1F0EA] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E6DE] gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                02 / DELIVERY MODEL
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#171A17]">
                How We Architect &amp; Execute
              </h2>
            </div>
            <p className="text-sm text-[#555850] max-w-md">
              A structured lifecycle guaranteeing clarity, security governance, and rapid operational integration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "Assessing current technical debt, security posture, and business objectives.",
              },
              {
                step: "02",
                title: "Target Architecture",
                desc: "Drafting scalable system blueprints, data flows, and SLA requirements.",
              },
              {
                step: "03",
                title: "Iterative Engineering",
                desc: "Executing rapid test-driven sprints with weekly milestone demonstrations.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                desc: "Zero-downtime cutovers, observability setups, and technical handoffs.",
              },
            ].map((phase) => (
              <div key={phase.step} className="p-6 rounded-2xl bg-white border border-[#E8E6DE] shadow-card">
                <span className="font-mono text-xs text-[#66705A] font-bold uppercase">PHASE {phase.step}</span>
                <h3 className="text-base font-bold text-[#171A17] mt-2 mb-1.5">{phase.title}</h3>
                <p className="text-xs text-[#555850] leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 05 Verified Technology Stack & Deliverables */}
      <Section spacing="spacious" className="bg-[#171A17] text-[#F7F5EF] border-b border-[#333830] py-20 sm:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Technologies (Span 6) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A5AC92] font-semibold">
                03 / TECHNICAL SPECIFICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F5EF] leading-tight">
                Verified Technology Stack
              </h2>
              <p className="text-sm sm:text-base text-[#A5AC92] leading-relaxed font-normal">
                Technologies utilized within this practice domain to deliver maintainable, enterprise-grade software.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-4">
                {solution.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#242622] border border-[#333830] text-xs font-mono text-[#E8E6DE] flex items-center gap-2"
                  >
                    <Cpu className="w-3.5 h-3.5 text-[#A5AC92]" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Deliverables (Span 6) */}
            <div className="lg:col-span-6 bg-[#242622] rounded-2xl border border-[#333830] p-8 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A5AC92] uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#A5AC92]" />
                <span>Standardized Engagement Deliverables</span>
              </div>
              <ul className="space-y-4">
                {solution.deliverables.map((deliv) => (
                  <li key={deliv} className="flex items-start gap-3 text-sm text-[#E8E6DE]">
                    <CheckCircle2 className="w-4 h-4 text-[#A5AC92] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 06 Contextual Related Solutions */}
      <RelatedContent
        title="Explore Adjacent Capabilities"
        eyebrow="CROSS-FUNCTIONAL PRACTICE AREAS"
        links={otherSolutions}
      />
    </>
  );
}

export default SolutionDetailPage;
