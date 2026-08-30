import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { blogPostsData } from "@/data/blog";

export function BlogSection() {
  const featuredPosts = blogPostsData.slice(0, 4);

  return (
    <Section
      spacing="spacious"
      className="border-b border-white/20 bg-[#7CC7EA] text-[#171A17] relative overflow-hidden py-20 sm:py-28"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E6DE] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-[#66705A] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>08 / BLOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171A17] leading-tight">
              Ideas, Insights &amp; Engineering Notes
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-sm sm:text-base text-[#555850] max-w-md font-normal leading-relaxed">
              Perspectives on applied artificial intelligence, distributed systems architecture, cloud infrastructure, and technical leadership.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] transition-colors group mt-2"
            >
              <span>View All Blog Articles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#66705A]" />
            </Link>
          </div>
        </div>

        {/* Publication-Grade Horizontal Editorial Rows */}
        <div className="flex flex-col border-t border-[#E8E6DE]">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="py-8 sm:py-10 border-b border-[#E8E6DE] flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#F7F5EF] transition-colors duration-200 px-4 sm:px-6 rounded-xl group"
            >
              {/* Left: Index Code & Category */}
              <div className="flex items-center gap-4 lg:w-3/12 shrink-0">
                <span className="px-3 py-1.5 rounded-md bg-[#F1F0EA] border border-[#E8E6DE] text-[#4C5642] font-mono text-xs font-bold tracking-wider">
                  [ {post.code} ]
                </span>
                <span className="font-mono text-xs text-[#66705A] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Center: Title & Short Excerpt */}
              <div className="lg:w-6/12 flex flex-col gap-1.5">
                <Link to={`/blog/${post.slug}`} className="group-hover:text-[#4C5642] transition-colors">
                  <h3 className="text-lg sm:text-xl font-bold text-[#171A17] leading-snug">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-xs text-[#555850] leading-relaxed font-normal line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-[#73766D] bg-white border border-[#E8E6DE] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Read Time & Action Link */}
              <div className="lg:w-3/12 flex lg:flex-col lg:items-end justify-between items-center gap-3 shrink-0">
                <span className="flex items-center gap-1 text-xs font-mono text-[#73766D]">
                  <Clock className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>{post.readTime.toUpperCase()}</span>
                </span>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#66705A]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
