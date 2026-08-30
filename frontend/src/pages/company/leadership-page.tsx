import * as React from "react";
import { ShieldCheck, UserCheck, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RelatedContent } from "@/components/ui/related-content";
import { getTeamMembersApi } from "@/services/company.service";
import { normalizeTeamMember } from "@/lib/normalizers";
import { companyData } from "@/data/company";

interface LeaderItem {
  name: string;
  role: string;
  focus: string;
  photoUrl?: string;
  isDirector?: boolean;
}

export function LeadershipPage() {
  const [leaders, setLeaders] = React.useState<LeaderItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const defaultLeaders: LeaderItem[] = companyData.leadership.map((l) => ({
    name: l.name,
    role: `${l.role} & Executive Leadership`,
    focus: l.bio || "Executive leadership overseeing technical strategy & governance.",
    isDirector: l.isDirector,
  }));

  const fetchTeamMembers = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getTeamMembersApi();
      if (res.success && Array.isArray(res.data) && res.data.length > 0) {
        setLeaders(res.data.map(normalizeTeamMember));
      } else {
        setLeaders(defaultLeaders);
      }
    } catch (err) {
      console.warn("[LeadershipPage] API error, using static leadership reference:", err);
      setLeaders(defaultLeaders);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchTeamMembers();
  }, [fetchTeamMembers]);

  const relatedCompany = [
    {
      title: "About Mylotic Group",
      description: "Our mission, operating context, and core company values.",
      href: "/company",
      category: "COMPANY",
    },
    {
      title: "Our Delivery Approach",
      description: "How we structure and execute complex engineering engagements.",
      href: "/company/approach",
      category: "METHODOLOGY",
    },
    {
      title: "Careers & Culture",
      description: "Explore opportunities with our growing engineering organization.",
      href: "/careers",
      category: "TALENT",
    },
  ];

  return (
    <>
      {/* Bento Leadership Header */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Company", href: "/company" },
              { label: "Leadership" },
            ]}
            className="mb-6 text-[#5F6872]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Col: Hero Intro */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
                  <UserCheck className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>Corporate Governance</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101418] leading-[1.12]">
                  Leadership &amp; <br />
                  <span className="gradient-text-olive font-black">Corporate Governance</span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal">
                  Our leadership guides Mylotic Group with a steadfast commitment to engineering excellence, operational integrity, and sustainable client value creation.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E1E7EF] mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F6872]">
                <span className="font-semibold text-[#101418]">EXECUTIVE BOARD</span>
                <span>&bull;</span>
                <span>MYLOTIC GROUP PRIVATE LIMITED</span>
              </div>
            </div>

            {/* Right Col: Corporate Governance Matrix Visualizer Bento Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4 text-xs font-mono">
                  <span className="font-semibold text-[#101418] tracking-wider uppercase">
                    GOVERNANCE &amp; OVERSEER STRUCTURE
                  </span>
                  <span className="text-[#66705A] font-semibold text-[10px] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E1E7EF]">
                    DIRECTORS
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {leaders.slice(0, 2).map((leader, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#7A8490]">Executive Direction</span>
                        <p className="text-xs font-bold text-[#101418]">{leader.name} • {leader.role}</p>
                      </div>
                      <ShieldCheck className="w-4 h-4 text-[#66705A]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E7EF] mt-4 flex items-center justify-between text-[11px] font-mono text-[#5F6872]">
                <span>IP GOVERNANCE</span>
                <span className="text-[#101418] font-semibold">ISO &amp; SOC2 COMPLIANT</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership Profile Bento Grid */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          {isLoading ? (
            <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2 bg-white rounded-3xl border border-[#E1E7EF]">
              <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
              <span>Fetching corporate leadership directory...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {leaders.map((leader, idx) => (
                <div
                  key={leader.name}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-[#E1E7EF] mb-6">
                      <span className="font-mono text-xs text-[#66705A] font-bold uppercase">
                        EXECUTIVE 0{idx + 1}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-[#66705A]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#101418] mb-1">{leader.name}</h2>
                    <span className="text-sm font-mono text-[#66705A] font-semibold block mb-4">
                      {leader.role}
                    </span>
                    <p className="text-xs text-[#5F6872] leading-relaxed font-mono">
                      <span className="text-[#7A8490] uppercase">Focus:</span> {leader.focus}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E1E7EF] flex items-center justify-between text-xs font-mono text-[#7A8490]">
                    <span>Mylotic Group Private Limited</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Corporate Governance Principles Bento Grid */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
              GOVERNANCE PILLARS
            </span>
            <h2 className="text-3xl font-bold text-[#101418]">
              Our Governance Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento hover:border-[#66705A]/50 transition-all">
              <span className="font-mono text-xs text-[#66705A] font-bold">01 / INTEGRITY</span>
              <h3 className="text-base font-bold text-[#101418]">Engineering Transparency</h3>
              <p className="text-xs text-[#5F6872] leading-relaxed">
                Open communication, honest architectural trade-off evaluations, and clear delivery timelines.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento hover:border-[#66705A]/50 transition-all">
              <span className="font-mono text-xs text-[#66705A] font-bold">02 / SECURITY</span>
              <h3 className="text-base font-bold text-[#101418]">IP &amp; Data Governance</h3>
              <p className="text-xs text-[#5F6872] leading-relaxed">
                Strict enterprise non-disclosure, isolated environments, and data sovereignty compliance.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento hover:border-[#66705A]/50 transition-all">
              <span className="font-mono text-xs text-[#66705A] font-bold">03 / VALUE</span>
              <h3 className="text-base font-bold text-[#101418]">Long-Term Impact</h3>
              <p className="text-xs text-[#5F6872] leading-relaxed">
                Prioritizing architectures that minimize technical debt and maximize operational longevity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contextual Navigation */}
      <RelatedContent
        title="More About Mylotic Group"
        eyebrow="ORGANIZATIONAL PERSPECTIVE"
        links={relatedCompany}
      />
    </>
  );
}

export default LeadershipPage;
