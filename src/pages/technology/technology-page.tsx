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
      {/* 01 Editorial Technology Hero */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-20 sm:pb-28 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Technology" }]} className="mb-8 text-[#73766D]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6">
              <span>Verified Engineering Stack Matrix</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              Technical Stack &amp; <br />
              <span className="gradient-text-olive font-black">Architectural Standards</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              A transparent breakdown of the programming languages, cloud platforms, database engines, and AI frameworks utilized by Mylotic Group to build enterprise software.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Technology Domains Matrix */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {stackDomains.map((domain, dIdx) => (
              <div
                key={domain.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-white border border-[#E8E6DE] text-[#66705A] group-hover:scale-105 transition-transform">
                        {domain.icon}
                      </div>
                      <span className="font-mono text-xs font-bold text-[#66705A] uppercase">
                        DOMAIN 0{dIdx + 1}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#4C5642] font-semibold uppercase bg-white px-2.5 py-0.5 rounded border border-[#E8E6DE]">
                      VERIFIED STACK
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#171A17] mb-3 group-hover:text-[#4C5642] transition-colors">
                    {domain.title}
                  </h2>
                  <p className="text-sm text-[#555850] leading-relaxed font-normal mb-6">
                    {domain.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E8E6DE]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#73766D] font-semibold block mb-3">
                    Core Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {domain.techs.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-white text-[#242622] border border-[#E8E6DE] flex items-center gap-1.5"
                      >
                        <Cpu className="w-3 h-3 text-[#66705A]" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Evaluation Principles */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#F1F0EA] text-[#171A17] border border-[#E8E6DE] shadow-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-4">
              ARCHITECTURAL EVALUATION PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171A17] mb-6">
              How We Select and Standardize Technology
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[#555850]">
              <div className="p-5 rounded-xl bg-white border border-[#E8E6DE]">
                <span className="font-mono text-xs text-[#66705A] block mb-1 font-bold">01 // TYPE SAFETY</span>
                <p className="text-xs text-[#555850] leading-relaxed">
                  End-to-end static typing from database schema to client components prevents runtime regressions.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#E8E6DE]">
                <span className="font-mono text-xs text-[#66705A] block mb-1 font-bold">02 // DECOUPLED RUNTIMES</span>
                <p className="text-xs text-[#555850] leading-relaxed">
                  Microservices and modular interfaces allow isolated feature releases and independent scaling.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#E8E6DE]">
                <span className="font-mono text-xs text-[#66705A] block mb-1 font-bold">03 // CONTINUOUS CI/CD</span>
                <p className="text-xs text-[#555850] leading-relaxed">
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
