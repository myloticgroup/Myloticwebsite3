import { Cpu, Layers, Sparkles, Cloud, ShieldCheck, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function TechnologyPage() {
  const stackDomains = [
    {
      id: "ai-ml",
      title: "Applied AI & Neural Architecture",
      icon: <Sparkles className="w-5 h-5 text-[#4688B2]" />,
      desc: "Deploying production-grade machine learning models, vector embeddings, and automated agent pipelines with enterprise data governance.",
      techs: ["Python", "PyTorch", "LangChain", "Vector Indexing", "OpenAI APIs", "Hugging Face"],
    },
    {
      id: "frontend",
      title: "Client Runtimes & User Interfaces",
      icon: <Layers className="w-5 h-5 text-[#4688B2]" />,
      desc: "Server-side rendering, typed GraphQL/REST client endpoints, and micro-frontend architectures engineered for high concurrency and sub-50ms paint times.",
      techs: ["TypeScript", "Next.js", "React", "Tailwind CSS", "HTML5", "CSS3 / Vanilla"],
    },
    {
      id: "backend",
      title: "Backend Microservices & Distributed APIs",
      icon: <Cpu className="w-5 h-5 text-[#4688B2]" />,
      desc: "Scalable backend architectures built with strict static typing, asynchronous queues, and ACID-compliant relational and in-memory databases.",
      techs: ["Node.js", "GraphQL", "REST APIs", "PostgreSQL", "Redis", "Microservices"],
    },
    {
      id: "cloud-devops",
      title: "Cloud Infrastructure & CI/CD Pipelines",
      icon: <Cloud className="w-5 h-5 text-[#4688B2]" />,
      desc: "Declarative multi-cloud environments built with infrastructure as code, automated continuous deployment, and containerized orchestration.",
      techs: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "CI/CD Pipelines"],
    },
    {
      id: "observability",
      title: "Security, Governance & Observability",
      icon: <ShieldCheck className="w-5 h-5 text-[#4688B2]" />,
      desc: "Comprehensive distributed tracing, vulnerability patching, automated regression test suites, and 24/7 SLA telemetry monitoring.",
      techs: ["Automated QA", "SOC Standards", "Observability", "Prometheus", "Sentry", "24/7 Monitoring"],
    },
  ];

  return (
    <>
      {/* 01 Editorial Technology Hero */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb items={[{ label: "Technology" }]} className="mb-8 text-[#5C7690]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-[#4688B2]" />
              <span>VERIFIED ENGINEERING STACK MATRIX</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              Technical Stack &amp; <br />
              <span className="gradient-text-olive font-black">Architectural Standards</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              A transparent breakdown of the programming languages, cloud platforms, database engines, and AI frameworks utilized by Mylotic Group to build enterprise software.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Technology Domains Matrix */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
        <div className="ambient-glow-icy w-96 h-96 -bottom-10 -right-10 opacity-40" />

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {stackDomains.map((domain, dIdx) => (
              <div
                key={domain.id}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0]/70 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] text-[#4688B2] group-hover:scale-110 group-hover:border-[#4688B2]/40 transition-all duration-200 shadow-2xs">
                        {domain.icon}
                      </div>
                      <span className="font-mono text-xs font-bold text-[#4688B2] uppercase tracking-wider">
                        DOMAIN 0{dIdx + 1}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#182A43] font-semibold uppercase bg-[#F0F7FB] px-3 py-1 rounded-full border border-[#D0E3F0]">
                      VERIFIED STACK
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#10213B] mb-3 group-hover:text-[#182A43] transition-colors">
                    {domain.title}
                  </h2>
                  <p className="text-sm text-[#243B53] leading-relaxed font-normal mb-6">
                    {domain.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D0E3F0]/70">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#5C7690] font-bold block mb-3">
                    Core Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {domain.techs.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] flex items-center gap-1.5 shadow-2xs hover:border-[#4688B2]/40 transition-colors"
                      >
                        <Cpu className="w-3 h-3 text-[#4688B2]" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Evaluation Principles */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white text-[#10213B] border border-white/80 shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-bold block mb-3">
              ARCHITECTURAL EVALUATION PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B] mb-6">
              How We Select and Standardize Technology
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[#243B53]">
              <div className="p-6 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-2xs">
                <span className="font-mono text-xs text-[#4688B2] block mb-2 font-bold">01 // TYPE SAFETY</span>
                <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed">
                  End-to-end static typing from database schema to client components prevents runtime regressions.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-2xs">
                <span className="font-mono text-xs text-[#4688B2] block mb-2 font-bold">02 // DECOUPLED RUNTIMES</span>
                <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed">
                  Microservices and modular interfaces allow isolated feature releases and independent scaling.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-2xs">
                <span className="font-mono text-xs text-[#4688B2] block mb-2 font-bold">03 // CONTINUOUS CI/CD</span>
                <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed">
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
