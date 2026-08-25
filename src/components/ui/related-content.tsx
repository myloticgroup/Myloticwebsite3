import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export interface RelatedLink {
  title: string;
  description?: string;
  href: string;
  category?: string;
}

export interface RelatedContentProps {
  title?: string;
  eyebrow?: string;
  links: RelatedLink[];
}

export function RelatedContent({
  title = "Related Capabilities & Perspectives",
  eyebrow = "CONTINUE EXPLORING",
  links,
}: RelatedContentProps) {
  if (!links || links.length === 0) return null;

  return (
    <Section spacing="spacious" className="border-t border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-16 sm:py-24">
      <Container size="default">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D0E3F0]/70 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-bold block mb-2">
              {eyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#10213B]">
              {title}
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] hover:text-[#4688B2] transition-colors cursor-pointer"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#4688B2]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group p-6 rounded-3xl bg-white border border-white/80 shadow-card hover:border-[#4688B2]/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {link.category && (
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#4688B2] font-bold block mb-2">
                    {link.category}
                  </span>
                )}
                <h4 className="text-lg font-bold text-[#10213B] group-hover:text-[#182A43] transition-colors mb-2">
                  {link.title}
                </h4>
                {link.description && (
                  <p className="text-xs text-[#243B53] leading-relaxed line-clamp-2">
                    {link.description}
                  </p>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-[#D0E3F0]/70 flex items-center justify-between text-xs font-semibold text-[#10213B] group-hover:text-[#4688B2] transition-colors">
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#4688B2]" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
