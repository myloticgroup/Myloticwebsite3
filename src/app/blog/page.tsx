import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { blogPostsData } from "@/data/blog";

export const metadata: Metadata = {
  title: "Mylotic Group | Blog",
  description:
    "Engineering insights, technology perspectives and practical ideas from Mylotic Group.",
};

export default function BlogPage() {
  const featuredPost = blogPostsData[0];
  const otherPosts = blogPostsData.slice(1);

  return (
    <>
      {/* 01 Editorial Blog Header */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-20">
        <Container size="default">
          <Breadcrumb items={[{ label: "Blog" }]} className="mb-8 text-[#73766D]" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-[#E8E6DE] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#66705A]" />
              <span>BLOG &amp; PERSPECTIVES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12]">
              Ideas, engineering notes and perspectives on{" "}
              <span className="gradient-text-olive font-black">building better digital systems.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#555850] leading-relaxed font-normal">
              Technical analysis, architectural paradigms, and practical engineering blueprints authored by our practitioners on applied AI, cloud topologies, and software engineering.
            </p>
          </div>
        </Container>
      </Section>

      {/* 02 Featured Article Spotlight */}
      {featuredPost && (
        <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-16 sm:py-20">
          <Container size="default">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card hover:border-[#66705A]/40 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="lg:w-8/12 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-[#E8E6DE] text-[#4C5642] font-mono text-xs font-bold uppercase tracking-wider">
                      FEATURED ARTICLE
                    </span>
                    <span className="font-mono text-xs text-[#66705A] font-semibold uppercase">
                      {featuredPost.category}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171A17] group-hover:text-[#4C5642] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-sm sm:text-base text-[#555850] leading-relaxed font-normal">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#73766D] pt-2">
                    <span>{featuredPost.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#66705A]" />
                      {featuredPost.readTime}
                    </span>
                    <span>&bull;</span>
                    <span>By {featuredPost.author.name}</span>
                  </div>
                </div>

                <div className="lg:w-4/12 flex lg:justify-end items-center">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="w-full sm:w-auto px-7 py-4 rounded-lg bg-[#171A17] hover:bg-[#242622] text-[#F7F5EF] font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-[#A5AC92] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 03 All Blog Articles Grid */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-20 sm:py-28">
        <Container size="default">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E8E6DE] gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-1">
                PUBLICATIONS DIRECTORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171A17]">
                Recent Articles &amp; Engineering Notes
              </h2>
            </div>
            <span className="text-xs font-mono text-[#73766D]">
              SHOWING {blogPostsData.length} ARTICLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <div
                key={post.slug}
                className="p-8 rounded-2xl bg-[#F7F5EF] border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E6DE] mb-4">
                    <span className="font-mono text-xs font-bold text-[#66705A] uppercase">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#73766D]">
                      <Clock className="w-3 h-3 text-[#66705A]" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-[#171A17] group-hover:text-[#4C5642] transition-colors mb-2 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#555850] leading-relaxed line-clamp-3 font-normal mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E8E6DE]/70">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[#242622] bg-white px-2 py-0.5 rounded border border-[#E8E6DE] flex items-center gap-1"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#66705A]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E6DE] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#73766D]">
                    {post.date}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors"
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#66705A] group-hover:translate-x-1 transition-transform" />
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
