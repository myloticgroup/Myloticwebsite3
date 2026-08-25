import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, Code2, Cloud, Users2, GraduationCap, Workflow, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { solutionsData } from "@/data/solutions";
import { solutionMediaMap } from "@/data/media";

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
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col gap-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
        <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0] text-xs font-mono text-[#5C7690]">
          <span className="text-[#4688B2] font-bold uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#4688B2]" />
            Enterprise AI Pipeline Topology
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] font-semibold">Inference Latency Target &lt; 85ms</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Stage 01</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Context &amp; Ingestion</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Vector chunking &amp; embedding pipeline</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Stage 02</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Hybrid Retrieval</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Dense + sparse re-ranking</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Stage 03</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Guardrail Routing</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Safety, hallucination &amp; PII filter</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Stage 04</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Model Inference</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Fine-tuned LLM execution</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "software-engineering") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col gap-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
        <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0] text-xs font-mono text-[#5C7690]">
          <span className="text-[#4688B2] font-bold uppercase flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#4688B2]" />
            Distributed Software Engineering Framework
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] font-semibold">Concurrency: 100k+ Events/Sec</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Layer 01</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">API Gateway</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">gRPC, GraphQL &amp; REST routing</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Layer 02</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Service Mesh</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">mTLS &amp; distributed tracing</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Layer 03</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Event Streaming</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Kafka message broker</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Layer 04</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Data Fabric</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Multi-region read replicas</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "digital-transformation" || slug === "cloud") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col gap-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
        <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0] text-xs font-mono text-[#5C7690]">
          <span className="text-[#4688B2] font-bold uppercase flex items-center gap-1.5">
            <Cloud className="w-3.5 h-3.5 text-[#4688B2]" />
            Cloud Architecture &amp; Migration Blueprint
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] font-semibold">Availability Target: 99.99%</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Pillar 01</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">IaC Automation</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Terraform &amp; OpenTofu state</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Pillar 02</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Kubernetes Mesh</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Auto-scaling node pools</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Pillar 03</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">CI/CD GitOps</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">ArgoCD continuous deployment</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Pillar 04</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Observability</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">OpenTelemetry logs &amp; metrics</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "staffing") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col gap-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
        <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0] text-xs font-mono text-[#5C7690]">
          <span className="text-[#4688B2] font-bold uppercase flex items-center gap-1.5">
            <Users2 className="w-3.5 h-3.5 text-[#4688B2]" />
            Specialized Engineering Pod Deployment
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] font-semibold">Integration Speed: &lt; 14 Days</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Phase 01</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Skill Matrix Mapping</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Domain stack calibration</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Phase 02</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Technical Vetting</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Architecture interview &amp; live code</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Phase 03</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Pod Formation</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Embedded team onboarding</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Phase 04</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Continuous Review</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Sprint velocity tracking</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "managed-services") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col gap-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
        <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0] text-xs font-mono text-[#5C7690]">
          <span className="text-[#4688B2] font-bold uppercase flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4688B2]" />
            Managed IT &amp; SRE Governance Model
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] font-semibold">SLA: 99.9% / 15-Min MTTR</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Track 01</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">24/7 Monitoring</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Real-time alert telemetry</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Track 02</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Security Patching</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Automated vulnerability scans</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Track 03</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Backup &amp; DR</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">Automated snapshot replication</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
            <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Track 04</span>
            <span className="text-sm font-bold text-[#10213B] mt-1 block">Cost Optimization</span>
            <span className="text-xs text-[#243B53] mt-1 block font-normal">FinOps cloud spend reviews</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col gap-6 relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
      <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0] text-xs font-mono text-[#5C7690]">
        <span className="text-[#4688B2] font-bold uppercase flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5 text-[#4688B2]" />
          EdTech Curriculum &amp; Capability Architecture
        </span>
        <span className="px-3 py-1 rounded-full bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] font-semibold">Curriculum Modules: 100% Industry-Aligned</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
          <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Module 01</span>
          <span className="text-sm font-bold text-[#10213B] mt-1 block">Systems &amp; Architecture</span>
          <span className="text-xs text-[#243B53] mt-1 block font-normal">Production backend design</span>
        </div>
        <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
          <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Module 02</span>
          <span className="text-sm font-bold text-[#10213B] mt-1 block">Applied AI Systems</span>
          <span className="text-xs text-[#243B53] mt-1 block font-normal">RAG &amp; LLM fine-tuning</span>
        </div>
        <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
          <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Module 03</span>
          <span className="text-sm font-bold text-[#10213B] mt-1 block">Cloud &amp; DevOps</span>
          <span className="text-xs text-[#243B53] mt-1 block font-normal">Hands-on Kubernetes &amp; CI/CD</span>
        </div>
        <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] hover:border-[#4688B2]/40 transition-colors">
          <span className="text-[11px] font-mono text-[#4688B2] font-bold uppercase block">Module 04</span>
          <span className="text-sm font-bold text-[#10213B] mt-1 block">Architectural Review</span>
          <span className="text-xs text-[#243B53] mt-1 block font-normal">Mentor-guided code audits</span>
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
      <Section spacing="spacious" className="py-24 text-center bg-[#EAF6FC] min-h-[60vh] flex items-center">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#10213B]">Solution Not Found</h1>
          <p className="mt-4 text-[#243B53]">The requested practice area does not exist.</p>
          <Link to="/solutions" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#4688B2] hover:underline">
            &larr; Back to all solutions
          </Link>
        </Container>
      </Section>
    );
  }

  const isEdTech = solution.slug === "edtech-training";
  const media = solutionMediaMap[solution.slug];

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
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -right-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: solution.title.split("&")[0].trim() },
            ]}
            className="mb-8 text-[#5C7690]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold w-fit shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2] animate-ping" />
                <span>ENTERPRISE PRACTICE AREA</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
                {solution.title}
              </h1>
              <p className="text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal">
                {solution.tagline}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                {isEdTech ? (
                  <>
                    <Link to="/contact/education-consultation">
                      <button
                        type="button"
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2.5 transition-all cursor-pointer shadow-cta-blue hover:shadow-cta-blue-hover group border border-white/60"
                      >
                        <span>BOOK A FREE CONSULTATION</span>
                        <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    </Link>
                    <Link to="/solutions">
                      <button
                        type="button"
                        className="px-8 py-3.5 rounded-xl border border-white/80 bg-white hover:bg-[#F0F7FB] text-[#10213B] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-2xs hover:shadow-xs"
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
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2.5 transition-all cursor-pointer shadow-cta-blue hover:shadow-cta-blue-hover group border border-white/60"
                      >
                        <span>Consult on this Solution</span>
                        <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    </Link>
                    <Link to="/solutions">
                      <button
                        type="button"
                        className="px-8 py-3.5 rounded-xl border border-white/80 bg-white hover:bg-[#F0F7FB] text-[#10213B] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                      >
                        <span>All Solutions</span>
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Quick Metadata Card */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/80 p-6 sm:p-7 shadow-card flex flex-col gap-4 relative overflow-hidden group hover:border-[#4688B2]/40 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

              <span className="font-mono text-xs uppercase tracking-wider text-[#4688B2] font-bold pb-2 border-b border-[#D0E3F0] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#4688B2]" /> PRACTICE PROFILE
              </span>

              {media && (
                <div className="relative rounded-2xl overflow-hidden border border-[#D0E3F0] aspect-16/9 bg-[#10213B] shadow-xs">
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10213D]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none text-[9px] font-mono text-white/90">
                    <span className="truncate">{media.caption}</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#4688B2] text-white font-bold shrink-0">{media.tag}</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-1 text-xs font-mono">
                <span className="text-[#5C7690] uppercase">Focus Areas:</span>
                <span className="text-[#10213B] font-bold">{solution.capabilities.length} Core Capabilities</span>
              </div>
              <div className="flex flex-col gap-1 text-xs font-mono">
                <span className="text-[#5C7690] uppercase">Primary Stack:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {solution.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="bg-[#F0F7FB] text-[#182A43] px-3 py-1 rounded-full text-[11px] border border-[#D0E3F0] shadow-2xs font-mono">
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
      <Section spacing="compact" className="border-b border-[#D0E3F0] bg-[#DCEFF8] py-12">
        <Container size="default">
          <DomainArchitectureVisual slug={solution.slug} />
        </Container>
      </Section>

      {/* Prominent EdTech Free Consultation Dedicated Banner */}
      {isEdTech && (
        <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#EAF6FC] text-[#10213B] py-20 sm:py-28 relative overflow-hidden">
          <Container size="default">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />

              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FB] text-xs font-mono uppercase tracking-widest text-[#4688B2] font-semibold mb-3 border border-[#D0E3F0]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#4688B2]" />
                  <span>FREE CONSULTATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-2">
                  Schedule an EdTech &amp; Training Strategy Session
                </h3>
                <p className="text-sm text-[#243B53] leading-relaxed font-normal">
                  Let&apos;s discuss your training, learning platform, or education technology requirements.
                </p>
              </div>

              <Link to="/contact/education-consultation" className="group shrink-0">
                <button
                  type="button"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] active:scale-[0.98] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2.5 shadow-cta-blue hover:shadow-cta-blue-hover cursor-pointer border border-white/60"
                >
                  <span>BOOK A FREE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1.5 transition-transform" />
                </button>
              </Link>
            </div>
          </Container>
        </Section>
      )}

      {/* 03 What We Solve & Strategic Overview */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#FFFFFF] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="max-w-4xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-3">
              01 / STRATEGIC OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10213B] leading-snug">
              What We Solve &amp; Deliver
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#243B53] leading-relaxed font-normal">
              {solution.overview}
            </p>
          </div>

          {/* Core Capabilities Deep-Dive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.capabilities.map((cap, cIdx) => (
              <div
                key={cap.title}
                className="p-8 rounded-3xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-card flex flex-col justify-between hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0] mb-6">
                    <span className="font-mono text-xs text-[#4688B2] font-bold uppercase">
                      CAPABILITY 0{cIdx + 1}
                    </span>
                    <Workflow className="w-4 h-4 text-[#5C7690] group-hover:text-[#4688B2] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#10213B] mb-2 group-hover:text-[#182A43] transition-colors">{cap.title}</h3>
                  <p className="text-sm text-[#243B53] leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 04 Engineering Methodology & Delivery Process */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D0E3F0] gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-semibold block mb-2">
                02 / DELIVERY MODEL
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#10213B]">
                How We Architect &amp; Execute
              </h2>
            </div>
            <p className="text-sm text-[#243B53] max-w-md">
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
              <div key={phase.step} className="p-6 rounded-3xl bg-white border border-white/80 shadow-card hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <span className="font-mono text-xs text-[#4688B2] font-bold uppercase">PHASE {phase.step}</span>
                <h3 className="text-base font-bold text-[#10213B] mt-2 mb-1.5">{phase.title}</h3>
                <p className="text-xs text-[#243B53] leading-relaxed font-normal">{phase.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 05 Verified Technology Stack & Deliverables */}
      <Section spacing="spacious" className="bg-gradient-to-b from-[#10213B] via-[#0D1C33] to-[#081220] text-white border-b border-white/10 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-fine opacity-20 pointer-events-none" />
        <div className="ambient-glow-blue w-96 h-96 -top-10 -right-10 opacity-30" />

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Technologies (Span 6) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8CC8E8] font-semibold">
                03 / TECHNICAL SPECIFICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Verified Technology Stack
              </h2>
              <p className="text-sm sm:text-base text-[#A2BACB] leading-relaxed font-normal">
                Technologies utilized within this practice domain to deliver maintainable, enterprise-grade software.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-4">
                {solution.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#D8ECF7] flex items-center gap-2 hover:border-[#8CC8E8]/50 transition-colors shadow-2xs"
                  >
                    <Cpu className="w-3.5 h-3.5 text-[#8CC8E8]" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Deliverables (Span 6) */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/15 p-8 sm:p-10 flex flex-col gap-6 shadow-card">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8CC8E8] uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#8CC8E8]" />
                <span>Standardized Engagement Deliverables</span>
              </div>
              <ul className="space-y-4">
                {solution.deliverables.map((deliv) => (
                  <li key={deliv} className="flex items-start gap-3 text-sm text-[#D8ECF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#8CC8E8] shrink-0 mt-0.5" />
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
