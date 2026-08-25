import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { blogPostsData } from "@/data/blog";

export function BlogSection() {
  const featuredPosts = blogPostsData.slice(0, 4);

  return (
    <Section
      spacing="spacious"
      className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] relative overflow-hidden py-20 sm:py-28"
    >
      {/* Background Dots Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
      <div className="ambient-glow-icy w-96 h-96 top-1/3 -left-20 opacity-40" />
      <div className="ambient-glow-blue w-80 h-80 bottom-10 right-10 opacity-30" />

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D0E3F0] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white border border-[#D0E3F0] text-xs font-mono tracking-widest uppercase text-[#4688B2] font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4688B2]" />
              <span>08 // BLOG &amp; INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213B] leading-tight">
              Ideas, Insights &amp; Engineering Notes
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-sm sm:text-base text-[#243B53] max-w-md font-normal leading-relaxed">
              Perspectives on applied artificial intelligence, distributed systems architecture, cloud infrastructure, and technical leadership.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] hover:text-[#4688B2] transition-colors group mt-2 cursor-pointer"
            >
              <span>View All Blog Articles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#4688B2]" />
            </Link>
          </div>
        </div>

        {/* Publication-Grade Horizontal Editorial Rows */}
        <div className="flex flex-col border-t border-[#D0E3F0]">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="py-8 sm:py-10 border-b border-[#D0E3F0] flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-white/80 transition-all duration-300 px-4 sm:px-6 rounded-2xl group relative overflow-hidden"
            >
              {/* Left Subtle Active Indicator Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Left: Index Code & Category */}
              <div className="flex items-center gap-4 lg:w-3/12 shrink-0">
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#D0E3F0] text-[#182A43] font-mono text-xs font-bold tracking-wider shadow-2xs group-hover:border-[#4688B2]/40 transition-colors">
                  [ {post.code} ]
                </span>
                <span className="font-mono text-xs text-[#4688B2] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Center: Title & Short Excerpt */}
              <div className="lg:w-6/12 flex flex-col gap-1.5">
                <Link to={`/blog/${post.slug}`} className="group-hover:text-[#182A43] transition-colors">
                  <h3 className="text-lg sm:text-xl font-bold text-[#10213B] leading-snug">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-xs text-[#243B53] leading-relaxed font-normal line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-[#5C7690] bg-white border border-[#D0E3F0] px-3 py-0.5 rounded-full shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Read Time & Action Link */}
              <div className="lg:w-3/12 flex lg:flex-col lg:items-end justify-between items-center gap-3 shrink-0">
                <span className="flex items-center gap-1.5 text-xs font-mono text-[#5C7690]">
                  <Clock className="w-3.5 h-3.5 text-[#4688B2]" />
                  <span>{post.readTime.toUpperCase()}</span>
                </span>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] group-hover:text-[#4688B2] transition-colors cursor-pointer"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#4688B2]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
