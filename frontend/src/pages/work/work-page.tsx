import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, FileText, ArrowUpRight, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { caseStudiesData } from "@/data/case-studies";
import { solutionsData } from "@/data/solutions";
import { CaseStudy } from "@/types";
import { getCaseStudiesApi } from "@/services/work.service";
import { normalizeCaseStudy } from "@/lib/normalizers";

export function WorkPage() {
  const [caseStudies, setCaseStudies] = React.useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchCaseStudies = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getCaseStudiesApi();
      if (res.success && Array.isArray(res.data) && res.data.length > 0) {
        setCaseStudies(res.data.map(normalizeCaseStudy));
      } else {
        setCaseStudies(caseStudiesData);
      }
    } catch (err) {
      console.warn("[WorkPage] API error, falling back to reference data:", err);
      setCaseStudies(caseStudiesData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchCaseStudies();
  }, [fetchCaseStudies]);

  const hasCaseStudies = caseStudies && caseStudies.length > 0;

  const relatedSolutions = solutionsData.slice(0, 3).map((sol) => ({
    title: sol.title,
    description: sol.shortDescription,
    href: `/solutions/${sol.slug}`,
    category: "RELEVANT CAPABILITY",
  }));

  return (
    <>
      {/* Bento Work Hero */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Selected Work" }]} className="mb-6 text-[#5F6872]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <FileText className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Client Deliverables &amp; Technical Impact</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  Selected Work &amp; <br />
                  <span className="gradient-text-olive font-black">Architectural Deliveries</span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
                  We partner with forward-thinking enterprises to deliver mission-critical software, deploy production AI models, and optimize cloud architectures under demanding operational environments.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E7EF] mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F6872]">
                <span className="font-semibold text-[#101418]">VERIFIED TECHNICAL NARRATIVES</span>
                <span>&bull;</span>
                <span>NDA GOVERNED</span>
              </div>
            </div>

            {/* Right Col: Case Study Architecture Visualizer Bento Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4 text-xs font-mono">
                  <span className="font-semibold text-[#101418] tracking-wider uppercase">
                    CASE STUDY TOPOLOGY &amp; BLUEPRINTS
                  </span>
                  <span className="text-[#66705A] font-semibold text-[10px] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E1E7EF]">
                    SANITIZED DATA
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Enterprise RAG Pipeline</span>
                      <p className="text-xs font-bold text-[#101418]">pgvector + Hybrid BM25 Search</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">PROD ACTIVE</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">High-Scale Event Engine</span>
                      <p className="text-xs font-bold text-[#101418]">Kafka + Next.js Edge Cluster</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">14.2K REQ/S</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#7A8490]">Cloud Microservices</span>
                      <p className="text-xs font-bold text-[#101418]">Multi-Region Kubernetes Pods</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#66705A]">99.99% SLA</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5F6872]">
                <span>ARCHITECTURAL REVIEW</span>
                <span className="text-[#101418] font-semibold">CLIENT APPROVED</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Studies Gallery or Verified Confidentiality Protocol */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          {isLoading ? (
            <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2 bg-white rounded-3xl border border-[#E1E7EF]">
              <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
              <span>Fetching verified case studies &amp; technical narratives...</span>
            </div>
          ) : hasCaseStudies ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study) => (
                <div
                  key={study.id || study.slug}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-bento-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <span className="text-xs font-mono uppercase text-[#66705A] font-semibold tracking-wider">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl font-bold text-[#101418] mt-2 mb-3">
                      {study.title}
                    </h2>
                    <p className="text-sm text-[#5F6872] leading-relaxed font-normal mb-6">
                      {study.summary}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#E1E7EF] flex items-center justify-between">
                    <Link
                      to={`/work/${study.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#101418] hover:text-[#66705A] transition-colors"
                    >
                      <span>Read Technical Narrative</span>
                      <ArrowUpRight className="w-4 h-4 text-[#66705A]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-white border border-[#E1E7EF] p-8 sm:p-12 lg:p-16 shadow-bento">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-wider text-[#4C5642] font-semibold">
                  <Lock className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Enterprise Privacy &amp; Non-Disclosure Governance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#101418] tracking-tight leading-snug">
                  Case Studies in Release Preparation
                </h2>
                <p className="mt-4 text-base text-[#5F6872] leading-relaxed font-normal">
                  To adhere strictly to enterprise non-disclosure agreements and IP governance, our in-depth case studies, architectural blueprints, and performance metrics are published following formal client verification and data sanitization.
                </p>

                <div className="mt-8 pt-6 border-t border-[#E1E7EF] grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#7A8490] font-mono">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#66705A] shrink-0" />
                    <span>AI Model Integration Studies • In Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#66705A] shrink-0" />
                    <span>Distributed Microservices Migrations • In Review</span>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#101418] hover:text-[#66705A] transition-colors group"
                  >
                    <span>Request Confidential Capability Walkthrough</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#66705A]" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* Contextual Navigation */}
      <RelatedContent
        title="Explore Our Core Engineering Solutions"
        eyebrow="CAPABILITIES & PRACTICES"
        links={relatedSolutions}
      />
    </>
  );
}

export default WorkPage;
