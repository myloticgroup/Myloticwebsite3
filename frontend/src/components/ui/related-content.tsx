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
    <Section spacing="spacious" className="border-t border-white/20 bg-[#7CC7EA] text-[#101418] py-16 sm:py-24">
      <Container size="default">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/30 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-2">
              {eyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171A17]">
              {title}
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] transition-colors"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#66705A]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group p-6 rounded-2xl bg-white border border-[#E8E6DE] shadow-card hover:border-[#66705A]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {link.category && (
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#66705A] font-semibold block mb-2">
                    {link.category}
                  </span>
                )}
                <h4 className="text-lg font-bold text-[#171A17] group-hover:text-[#4C5642] transition-colors mb-2">
                  {link.title}
                </h4>
                {link.description && (
                  <p className="text-xs text-[#555850] leading-relaxed line-clamp-2">
                    {link.description}
                  </p>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8E6DE] flex items-center justify-between text-xs font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors">
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#66705A]" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
