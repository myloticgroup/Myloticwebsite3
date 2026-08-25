import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { blogPostsData } from "@/data/blog";

export function BlogPage() {
  const featuredPost = blogPostsData[0];
  const otherPosts = blogPostsData.slice(1);

  return (
    <>
      {/* 01 Editorial Blog Header */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -left-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb items={[{ label: "Blog" }]} className="mb-8 text-[#5C7690]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-xs font-mono uppercase tracking-widest text-[#10213B] font-semibold mb-6 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-[#4688B2]" />
              <span>BLOG &amp; PERSPECTIVES // ENGINEERING NOTES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08]">
              Ideas, engineering notes and perspectives on{" "}
              <span className="gradient-text-olive font-black">building better digital systems.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal max-w-3xl">
              Technical analysis, architectural paradigms, and practical engineering blueprints authored by our practitioners on applied AI, cloud topologies, and software engineering.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Featured Article Spotlight */}
      {featuredPost && (
        <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#FFFFFF] text-[#10213B] py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

          <Container size="default" className="relative z-10">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#F0F7FB] border border-[#D0E3F0] shadow-card hover:border-[#4688B2]/60 hover:shadow-card-hover transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2]" />
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="lg:w-8/12 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-[#E0F0FA] text-[#182A43] font-mono text-xs font-bold uppercase tracking-wider border border-[#D0E3F0]">
                      FEATURED ARTICLE
                    </span>
                    <span className="font-mono text-xs text-[#4688B2] font-bold uppercase">
                      {featuredPost.category}
                    </span>
                  </div>

                  <Link to={`/blog/${featuredPost.slug}`}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10213B] group-hover:text-[#182A43] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-sm sm:text-base text-[#243B53] leading-relaxed font-normal">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#5C7690] pt-2">
                    <span>{featuredPost.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#4688B2]" />
                      {featuredPost.readTime}
                    </span>
                    <span>&bull;</span>
                    <span>By {featuredPost.author.name}</span>
                  </div>
                </div>

                <div className="lg:w-4/12 flex lg:justify-end items-center">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#9DD1EC] to-[#79B9DA] hover:from-[#A9DCF4] hover:to-[#85C4E5] text-[#10213B] font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2.5 shadow-cta-blue hover:shadow-cta-blue-hover cursor-pointer border border-white/60"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-[#10213B] group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 03 All Blog Articles Grid */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D0E3F0]/70 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#4688B2] font-bold block mb-1">
                PUBLICATIONS DIRECTORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B]">
                Recent Articles &amp; Engineering Notes
              </h2>
            </div>
            <span className="text-xs font-mono text-[#5C7690] px-3.5 py-1 rounded-full bg-white border border-white/80 shadow-2xs">
              SHOWING {blogPostsData.length} ARTICLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <div
                key={post.slug}
                className="p-8 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#D0E3F0]/70 mb-4">
                    <span className="font-mono text-xs font-bold text-[#4688B2] uppercase">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#5C7690] bg-[#F0F7FB] px-2.5 py-0.5 rounded-full border border-[#D0E3F0]">
                      <Clock className="w-3 h-3 text-[#4688B2]" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-[#10213B] group-hover:text-[#182A43] transition-colors mb-2 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-[#243B53] leading-relaxed line-clamp-3 font-normal mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#D0E3F0]/70">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[#182A43] bg-[#F0F7FB] px-2.5 py-1 rounded-full border border-[#D0E3F0] flex items-center gap-1 shadow-2xs"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#4688B2]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D0E3F0]/70 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#5C7690]">
                    {post.date}
                  </span>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] group-hover:text-[#4688B2] transition-colors cursor-pointer"
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4688B2] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default BlogPage;
