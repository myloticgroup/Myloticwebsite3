import { Cpu, Layers, Sparkles, Cloud, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function TechnologyPage() {
  const stackDomains = [
    {
      id: "ai-ml",
      title: "Applied AI & Neural Architecture",
      icon: <Sparkles className="w-5 h-5 text-[#66705A]" />,
      desc: "Deploying production-grade machine learning models, vector embeddings, and automated agent pipelines with enterprise data governance.",
      techs: ["Python", "PyTorch", "LangChain", "Vector Indexing", "OpenAI APIs", "Hugging Face"],
    },
    {
      id: "frontend",
      title: "Client Runtimes & User Interfaces",
      icon: <Layers className="w-5 h-5 text-[#66705A]" />,
      desc: "Server-side rendering, typed GraphQL/REST client endpoints, and micro-frontend architectures engineered for high concurrency and sub-50ms paint times.",
      techs: ["TypeScript", "Next.js", "React", "Tailwind CSS", "HTML5", "CSS3 / Vanilla"],
    },
    {
      id: "backend",
      title: "Backend Microservices & Distributed APIs",
      icon: <Cpu className="w-5 h-5 text-[#4C5642]" />,
      desc: "Scalable backend architectures built with strict static typing, asynchronous queues, and ACID-compliant relational and in-memory databases.",
      techs: ["Node.js", "GraphQL", "REST APIs", "PostgreSQL", "Redis", "Microservices"],
    },
    {
      id: "cloud-devops",
      title: "Cloud Infrastructure & CI/CD Pipelines",
      icon: <Cloud className="w-5 h-5 text-[#66705A]" />,
      desc: "Declarative multi-cloud environments built with infrastructure as code, automated continuous deployment, and containerized orchestration.",
      techs: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "CI/CD Pipelines"],
    },
    {
      id: "observability",
      title: "Security, Governance & Observability",
      icon: <ShieldCheck className="w-5 h-5 text-[#4C5642]" />,
      desc: "Comprehensive distributed tracing, vulnerability patching, automated regression test suites, and 24/7 SLA telemetry monitoring.",
      techs: ["Automated QA", "SOC Standards", "Observability", "Prometheus", "Sentry", "24/7 Monitoring"],
    },
  ];

  return (
    <>
      {/* Bento Technology Hero */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Technology" }]} className="mb-6 text-[#5F6872]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Col: Hero Intro */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <Cpu className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Verified Engineering Stack Matrix</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  Technical Stack &amp; <br />
                  <span className="gradient-text-olive font-black">Architectural Standards</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
                  A transparent breakdown of the programming languages, cloud platforms, database engines, and AI frameworks utilized by Mylotic Group to build enterprise software.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E7EF] mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F6872]">
                <span className="font-semibold text-[#101418]">5 DOMAIN LAYERS</span>
                <span>&bull;</span>
                <span>PRODUCTION TESTED</span>
              </div>
            </div>

            {/* Right Col: Technology Ecosystem Matrix Visualizer Bento Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4 text-xs font-mono">
                  <span className="font-semibold text-[#101418] tracking-wider uppercase">
                    ECOSYSTEM RUNTIME MATRIX
                  </span>
                  <span className="text-[#66705A] font-semibold text-[10px] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E1E7EF]">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Applied AI Layer</span>
                      <p className="text-xs font-bold text-[#101418]">Python / PyTorch / pgvector</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">LATENCY &lt;20MS</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Client &amp; Web Runtimes</span>
                      <p className="text-xs font-bold text-[#101418]">TypeScript / Next.js / React 19</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">SUB-50MS</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Cloud &amp; DevOps</span>
                      <p className="text-xs font-bold text-[#101418]">AWS / Kubernetes / Terraform</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">99.99% SLA</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5F6872]">
                <span>INFRASTRUCTURE QUALITY</span>
                <span className="text-[#101418] font-semibold">SOC2 COMPLIANT</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bento Technology Domains Matrix */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {stackDomains.map((domain, dIdx) => (
              <div
                key={domain.id}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-bento-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#F0F4F8] border border-[#E1E7EF] text-[#66705A] group-hover:scale-105 transition-transform">
                        {domain.icon}
                      </div>
                      <span className="font-mono text-xs font-bold text-[#66705A] uppercase">
                        DOMAIN 0{dIdx + 1}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#4C5642] font-semibold uppercase bg-[#F0F4F8] px-2.5 py-1 rounded-lg border border-[#E1E7EF]">
                      VERIFIED STACK
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#101418] mb-3 group-hover:text-[#4C5642] transition-colors">
                    {domain.title}
                  </h2>
                  <p className="text-sm text-[#5F6872] leading-relaxed font-normal mb-6">
                    {domain.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E1E7EF]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A8490] font-semibold block mb-3">
                    Core Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {domain.techs.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#F0F4F8] text-[#101418] border border-[#E1E7EF] flex items-center gap-1.5"
                      >
                        <Cpu className="w-3.5 h-3.5 text-[#66705A]" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Evaluation Principles Bento Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-3">
              ARCHITECTURAL EVALUATION PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101418] mb-6">
              How We Select and Standardize Technology
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[#5F6872]">
              <div className="p-6 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
                <span className="font-mono text-xs text-[#66705A] block mb-2 font-bold">01 // TYPE SAFETY</span>
                <p className="text-xs text-[#5F6872] leading-relaxed">
                  End-to-end static typing from database schema to client components prevents runtime regressions.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
                <span className="font-mono text-xs text-[#66705A] block mb-2 font-bold">02 // DECOUPLED RUNTIMES</span>
                <p className="text-xs text-[#5F6872] leading-relaxed">
                  Microservices and modular interfaces allow isolated feature releases and independent scaling.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF]">
                <span className="font-mono text-xs text-[#66705A] block mb-2 font-bold">03 // CONTINUOUS CI/CD</span>
                <p className="text-xs text-[#5F6872] leading-relaxed">
                  Automated test coverage and declarative IaC ensure zero-downtime rollbacks and predictable releases.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default TechnologyPage;
