import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, Code2, Cloud, Users2, GraduationCap, Workflow, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { solutionsData, Solution } from "@/data/solutions";
import { getSolutionBySlugApi } from "@/services/solutions.service";
import { normalizeSolution } from "@/lib/normalizers";

function resolveFallbackSolution(slug: string) {
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
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] text-xs font-mono text-[#5F6872]">
          <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#66705A]" />
            Enterprise AI Pipeline Topology
          </span>
          <span>Inference Latency Target &lt; 85ms</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Stage 01</span>
            <span className="text-sm font-bold text-[#101418] mt-1 block">Context &amp; Ingestion</span>
            <span className="text-xs text-[#5F6872] mt-1 block">Vector chunking &amp; embedding pipeline</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Stage 02</span>
            <span className="text-sm font-bold text-[#101418] mt-1 block">Hybrid Retrieval</span>
            <span className="text-xs text-[#5F6872] mt-1 block">Dense + sparse re-ranking</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Stage 03</span>
            <span className="text-sm font-bold text-[#101418] mt-1 block">Guardrail Routing</span>
            <span className="text-xs text-[#5F6872] mt-1 block">Safety, hallucination &amp; PII filter</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Stage 04</span>
            <span className="text-sm font-bold text-[#101418] mt-1 block">Model Inference</span>
            <span className="text-xs text-[#5F6872] mt-1 block">Fine-tuned LLM execution</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "software-engineering") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] text-xs font-mono text-[#5F6872]">
          <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#66705A]" />
            Distributed Software Engineering Framework
          </span>
          <span>Concurrency: 100k+ Events/Sec</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Layer 01</span>
            <span className="text-sm font-bold text-[#101418] mt-1 block">API Gateway</span>
            <span className="text-xs text-[#5F6872] mt-1 block">gRPC, GraphQL &amp; REST routing</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Layer 02</span>
            <span className="text-sm font-bold text-[#101418] mt-1 block">Service Mesh</span>
            <span className="text-xs text-[#5F6872] mt-1 block">mTLS &amp; distributed tracing</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Layer 03</span>
            <span className="text-sm font-bold text-[#101418] mt-1 block">Event Streaming</span>
            <span className="text-xs text-[#5F6872] mt-1 block">Kafka message broker</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
            <span className="text-[11px] font-mono text-[#66705A] uppercase block">Layer 04</span>
            <span className="text-sm font-bold text-[#101418] mt-1 block">Data Fabric</span>
            <span className="text-xs text-[#5F6872] mt-1 block">Multi-region read replicas</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col gap-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] text-xs font-mono text-[#5F6872]">
        <span className="text-[#66705A] font-semibold uppercase flex items-center gap-1.5">
          <Workflow className="w-3.5 h-3.5 text-[#66705A]" />
          Enterprise Delivery Framework
        </span>
        <span>Availability SLA Target: 99.99%</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
          <span className="text-[11px] font-mono text-[#66705A] uppercase block">Phase 01</span>
          <span className="text-sm font-bold text-[#101418] mt-1 block">Architecture Audit</span>
          <span className="text-xs text-[#5F6872] mt-1 block">Technical requirements calibration</span>
        </div>
        <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
          <span className="text-[11px] font-mono text-[#66705A] uppercase block">Phase 02</span>
          <span className="text-sm font-bold text-[#101418] mt-1 block">System Design</span>
          <span className="text-xs text-[#5F6872] mt-1 block">Scalable pattern engineering</span>
        </div>
        <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
          <span className="text-[11px] font-mono text-[#66705A] uppercase block">Phase 03</span>
          <span className="text-sm font-bold text-[#101418] mt-1 block">Production Rollout</span>
          <span className="text-xs text-[#5F6872] mt-1 block">Zero-downtime execution</span>
        </div>
        <div className="p-4 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
          <span className="text-[11px] font-mono text-[#66705A] uppercase block">Phase 04</span>
          <span className="text-sm font-bold text-[#101418] mt-1 block">Continuous SLA</span>
          <span className="text-xs text-[#5F6872] mt-1 block">Monitoring &amp; optimization</span>
        </div>
      </div>
    </div>
  );
}

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [solution, setSolution] = React.useState<Solution | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchSolution = React.useCallback(async () => {
    if (!slug) return;
    setIsLoading(true);
    try {
      const res = await getSolutionBySlugApi(slug);
      if (res.success && res.data) {
        setSolution(normalizeSolution(res.data));
      } else {
        setSolution(resolveFallbackSolution(slug) || null);
      }
    } catch (err) {
      console.warn("[SolutionDetailPage] API error, falling back to static reference:", err);
      setSolution(resolveFallbackSolution(slug) || null);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  React.useEffect(() => {
    fetchSolution();
  }, [fetchSolution]);

  if (isLoading) {
    return (
      <Section spacing="spacious" className="py-24 text-center bg-[#7CC7EA]">
        <Container size="default">
          <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2 bg-white rounded-3xl border border-[#E1E7EF]">
            <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
            <span>Fetching solution details...</span>
          </div>
        </Container>
      </Section>
    );
  }

  if (!solution) {
    return (
      <Section spacing="spacious" className="py-24 text-center bg-[#7CC7EA]">
        <Container size="default">
          <div className="p-12 bg-white rounded-3xl border border-[#E1E7EF] max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-[#101418]">Solution Not Found</h1>
            <p className="mt-4 text-[#5F6872] text-sm">The requested practice area does not exist or has been modified.</p>
            <Link to="/solutions" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#66705A] hover:underline">
              &larr; Back to all solutions
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const isEdTech = solution.slug === "edtech-training";

  const otherSolutions = solutionsData
    .filter((s) => s.id !== solution.id && s.slug !== solution.slug)
    .slice(0, 3)
    .map((s) => ({
      title: s.title,
      description: s.shortDescription,
      href: `/solutions/${s.slug}`,
      category: "SOLUTION DOMAIN",
    }));

  return (
    <>
      {/* 01 Bento Solution Hero */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: solution.title.split("&")[0].trim() },
            ]}
            className="mb-6 text-[#5F6872]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <span>Enterprise Practice Area</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  {solution.title}
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-[#5F6872] leading-relaxed font-normal">
                  {solution.tagline}
                </p>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-4">
                {isEdTech ? (
                  <>
                    <Link to="/contact/education-consultation">
                      <button
                        type="button"
                        className="px-6 py-3.5 rounded-xl bg-[#101418] hover:bg-[#1B2026] text-[#EEF3F8] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs group"
                      >
                        <span>BOOK A FREE CONSULTATION</span>
                        <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    <Link to="/solutions">
                      <button
                        type="button"
                        className="px-6 py-3.5 rounded-xl border border-[#E1E7EF] bg-[#F0F4F8] hover:bg-[#E1E7EF] text-[#101418] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
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
                        className="px-6 py-3.5 rounded-xl bg-[#101418] hover:bg-[#1B2026] text-[#EEF3F8] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                      >
                        <span>Consult on this Solution</span>
                        <ArrowRight className="w-4 h-4 text-[#A5AC92]" />
                      </button>
                    </Link>
                    <Link to="/solutions">
                      <button
                        type="button"
                        className="px-6 py-3.5 rounded-xl border border-[#E1E7EF] bg-[#F0F4F8] hover:bg-[#E1E7EF] text-[#101418] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
                      >
                        <span>All Solutions</span>
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Quick Metadata Bento Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E1E7EF] p-8 shadow-bento flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#66705A] font-semibold pb-3 border-b border-[#E1E7EF] block">
                  PRACTICE PROFILE
                </span>
                <div className="flex flex-col gap-1 text-xs font-mono mt-4">
                  <span className="text-[#7A8490] uppercase">Focus Areas:</span>
                  <span className="text-[#101418] font-semibold">{solution.capabilities?.length || 0} Core Capabilities</span>
                </div>
                <div className="flex flex-col gap-1 text-xs font-mono mt-4">
                  <span className="text-[#7A8490] uppercase">Primary Stack:</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {solution.technologies &&
                      solution.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="bg-[#F0F4F8] text-[#101418] px-2.5 py-1 rounded-lg text-[11px] border border-[#E1E7EF]">
                          {t}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] text-[11px] font-mono text-[#4C5642] font-semibold">
                SLA TARGET: 99.99% PRODUCTION
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Domain-Specific Visual Architecture Block */}
      <Section spacing="compact" className="bg-[#7CC7EA] pb-12">
        <Container size="default">
          <DomainArchitectureVisual slug={solution.slug} />
        </Container>
      </Section>

      {/* Prominent EdTech Free Consultation Dedicated Banner */}
      {isEdTech && (
        <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-12">
          <Container size="default">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-bento-hover transition-all">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-3">
                  <GraduationCap className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>FREE CONSULTATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#101418] mb-2">
                  Schedule an EdTech &amp; Training Strategy Session
                </h3>
                <p className="text-sm text-[#5F6872] leading-relaxed font-normal">
                  Let&apos;s discuss your training, learning platform, or education technology requirements.
                </p>
              </div>

              <Link to="/contact/education-consultation" className="group shrink-0">
                <button
                  type="button"
                  className="px-8 py-4 rounded-xl bg-[#101418] hover:bg-[#1B2026] active:scale-[0.98] text-[#EEF3F8] font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
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
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
              01 / STRATEGIC OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101418] leading-snug">
              What We Solve &amp; Deliver
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
              {solution.overview}
            </p>
          </div>

          {/* Core Capabilities Deep-Dive */}
          {solution.capabilities && solution.capabilities.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solution.capabilities.map((cap, cIdx) => (
                <div
                  key={cap.title}
                  className="p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-6">
                      <span className="font-mono text-xs text-[#66705A] font-bold uppercase">
                        CAPABILITY 0{cIdx + 1}
                      </span>
                      <Workflow className="w-4 h-4 text-[#7A8490]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#101418] mb-2">{cap.title}</h3>
                    <p className="text-sm text-[#5F6872] leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* 04 Engineering Methodology & Delivery Process */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#E1E7EF] gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
                02 / DELIVERY MODEL
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#101418]">
                How We Architect &amp; Execute
              </h2>
            </div>
            <p className="text-sm text-[#5F6872] max-w-md">
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
              <div key={phase.step} className="p-6 rounded-2xl bg-white border border-[#E1E7EF] shadow-bento">
                <span className="font-mono text-xs text-[#66705A] font-bold uppercase">PHASE {phase.step}</span>
                <h3 className="text-base font-bold text-[#101418] mt-2 mb-1.5">{phase.title}</h3>
                <p className="text-xs text-[#5F6872] leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 05 Verified Technology Stack & Deliverables */}
      {((solution.technologies && solution.technologies.length > 0) ||
        (solution.deliverables && solution.deliverables.length > 0)) && (
        <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
          <Container size="default">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#101418] text-[#F7F9FB] border border-[#232A32] shadow-bento grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left: Technologies (Span 6) */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#A5AC92] font-semibold">
                  03 / TECHNICAL SPECIFICATIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Verified Technology Stack
                </h2>
                <p className="text-sm sm:text-base text-[#9AA4AF] leading-relaxed font-normal">
                  Technologies utilized within this practice domain to deliver maintainable, enterprise-grade software.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-4">
                  {solution.technologies &&
                    solution.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="px-3.5 py-2 rounded-xl bg-[#1B2026] border border-[#2E3640] text-xs font-mono text-[#EEF3F8] flex items-center gap-2"
                      >
                        <Cpu className="w-3.5 h-3.5 text-[#66705A]" />
                        <span>{tech}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Right: Key Deliverables (Span 6) */}
              <div className="lg:col-span-6 bg-[#1B2026] rounded-2xl border border-[#2E3640] p-8 flex flex-col gap-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A5AC92] uppercase tracking-wider font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#66705A]" />
                  <span>Standardized Engagement Deliverables</span>
                </div>
                <ul className="space-y-4">
                  {solution.deliverables &&
                    solution.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-3 text-sm text-[#EEF3F8]">
                        <CheckCircle2 className="w-4 h-4 text-[#66705A] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      )}

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
