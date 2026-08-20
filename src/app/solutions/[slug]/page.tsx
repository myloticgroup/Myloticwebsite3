import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, Code2, Cloud, Users2, GraduationCap, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { solutionsData } from "@/data/solutions";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function resolveSolution(slug: string) {
  const normalized =
    slug === "cloud"
      ? "digital-transformation"
      : slug === "edtech"
      ? "edtech-training"
      : slug;

  return solutionsData.find((s) => s.slug === normalized);
}

export async function generateStaticParams() {
  const baseSlugs = solutionsData.map((s) => ({ slug: s.slug }));
  const aliases = [
    { slug: "cloud" },
    { slug: "edtech" },
  ];
  return [...baseSlugs, ...aliases];
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = resolveSolution(slug);

  if (!solution) {
    return {
      title: "Solution Not Found | Mylotic Group",
    };
  }

  return {
    title: `${solution.title} | Mylotic Group`,
    description: solution.shortDescription,
  };
}

/* Domain-Specific Visual Architecture Renderer */
function DomainArchitectureVisual({ slug }: { slug: string }) {
  if (slug === "ai") {
    return (
      <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] text-xs font-mono text-[#73766D]">
          <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#66705A]" /> AI MODEL PIPELINE TOPOLOGY
          </span>
          <span>LATENCY: SUB-50MS</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#73766D] block uppercase">01 / INGESTION</span>
            <span className="text-xs font-bold text-[#171A17] mt-1 block">Unstructured Data</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#73766D] block uppercase">02 / EMBEDDING</span>
            <span className="text-xs font-bold text-[#171A17] mt-1 block">Vector Index</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F1F0EA] border border-[#66705A]/40">
            <span className="font-mono text-[10px] text-[#4C5642] block uppercase font-bold">03 / INFERENCE</span>
            <span className="text-xs font-bold text-[#171A17] mt-1 block">Fine-Tuned Model</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#73766D] block uppercase">04 / OUTPUT</span>
            <span className="text-xs font-bold text-[#171A17] mt-1 block">Audited Action</span>
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
            <Code2 className="w-4 h-4 text-[#66705A]" /> FULL-STACK RUNTIME MATRIX
          </span>
          <span>CONCURRENCY: HIGH</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">CLIENT LAYER</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Next.js & TypeScript</span>
            <span className="text-xs text-[#555850] mt-1 block">Server-Rendered UI</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">SERVICE LAYER</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">GraphQL / REST APIs</span>
            <span className="text-xs text-[#555850] mt-1 block">Microservices Core</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">DATA LAYER</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">PostgreSQL & Redis</span>
            <span className="text-xs text-[#555850] mt-1 block">ACID Compliant</span>
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
            <Cloud className="w-4 h-4 text-[#66705A]" /> MULTI-CLOUD TOPOLOGY
          </span>
          <span>AVAILABILITY: 99.99%</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">INFRA AS CODE</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Terraform & Kubernetes</span>
            <span className="text-xs text-[#555850] mt-1 block">Declarative Stacks</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">DEPLOYMENT</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Automated CI/CD</span>
            <span className="text-xs text-[#555850] mt-1 block">Zero-Downtime Rollouts</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">TELEMETRY</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Datadog & Prometheus</span>
            <span className="text-xs text-[#555850] mt-1 block">Real-Time Alerts</span>
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
            <Users2 className="w-4 h-4 text-[#66705A]" /> TALENT POD INTEGRATION LIFECYCLE
          </span>
          <span>ONBOARDING: UNDER 10 DAYS</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#73766D] block uppercase">STAGE 01</span>
            <span className="text-xs font-bold text-[#171A17] mt-1 block">Deep Vetting</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#73766D] block uppercase">STAGE 02</span>
            <span className="text-xs font-bold text-[#171A17] mt-1 block">Stack Matching</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F1F0EA] border border-[#66705A]/40">
            <span className="font-mono text-[10px] text-[#4C5642] block uppercase font-bold">STAGE 03</span>
            <span className="text-xs font-bold text-[#171A17] mt-1 block">Sprint Embedding</span>
          </div>
          <div className="p-3 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#73766D] block uppercase">STAGE 04</span>
            <span className="text-xs font-bold text-[#171A17] mt-1 block">Delivery Audit</span>
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
            <ShieldCheck className="w-4 h-4 text-[#66705A]" /> 24/7 SLA RESPONSE MATRIX
          </span>
          <span>SLA: 99.9% UPTIME</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">P1 CRITICAL</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Immediate Response</span>
            <span className="text-xs text-[#555850] mt-1 block">Real-time incident triage</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">PROACTIVE PATCHING</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Weekly Maintenance</span>
            <span className="text-xs text-[#555850] mt-1 block">Security & package updates</span>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
            <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">REPORTING</span>
            <span className="text-sm font-bold text-[#171A17] mt-1 block">Monthly Audit Logs</span>
            <span className="text-xs text-[#555850] mt-1 block">Detailed post-mortems</span>
          </div>
        </div>
      </div>
    );
  }

  // EdTech & Training
  return (
    <div className="p-8 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col gap-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] text-xs font-mono text-[#73766D]">
        <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
          <GraduationCap className="w-4 h-4 text-[#66705A]" /> WORKFORCE UPSKILLING FRAMEWORK
        </span>
        <span>OUTPUT: PRODUCTION READY</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
          <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">MODULE 01</span>
          <span className="text-sm font-bold text-[#171A17] mt-1 block">Baseline Assessment</span>
          <span className="text-xs text-[#555850] mt-1 block">Diagnostic coding evaluations</span>
        </div>
        <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
          <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">MODULE 02</span>
          <span className="text-sm font-bold text-[#171A17] mt-1 block">Hands-on Labs</span>
          <span className="text-xs text-[#555850] mt-1 block">Applied enterprise projects</span>
        </div>
        <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#E8E6DE]">
          <span className="font-mono text-[10px] text-[#66705A] block uppercase font-bold">MODULE 03</span>
          <span className="text-sm font-bold text-[#171A17] mt-1 block">Architectural Review</span>
          <span className="text-xs text-[#555850] mt-1 block">Mentor-guided code audits</span>
        </div>
      </div>
    </div>
  );
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = resolveSolution(slug);

  if (!solution) {
    notFound();
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
                    <Link href="/contact/education-consultation">
                      <button
                        type="button"
                        className="px-6 py-3.5 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs group"
                      >
                        <span>BOOK A FREE CONSULTATION</span>
                        <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    <Link href="/solutions">
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
                    <Link href="/contact">
                      <button
                        type="button"
                        className="px-6 py-3.5 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                      >
                        <span>Consult on this Solution</span>
                        <ArrowRight className="w-4 h-4 text-[#A5AC92]" />
                      </button>
                    </Link>
                    <Link href="/solutions">
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

              <Link href="/contact/education-consultation" className="group shrink-0">
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
              What We Solve & Deliver
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
                How We Architect & Execute
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
