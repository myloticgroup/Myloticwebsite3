import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, User, Tag, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/data/blog";

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <Section spacing="spacious" className="py-24 text-center">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#171A17]">Article Not Found</h1>
          <p className="mt-4 text-[#555850]">The requested publication does not exist.</p>
          <Link to="/blog" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#66705A]">
            &larr; Back to all articles
          </Link>
        </Container>
      </Section>
    );
  }

  const relatedPosts = getRelatedBlogPosts(slug || "", 3);

  return (
    <>
      {/* 01 Editorial Article Header */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] pt-12 sm:pt-16 pb-16 sm:pb-24">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
            className="mb-8 text-[#73766D]"
          />

          <div className="max-w-4xl">
            {/* Category & Read Time Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-md bg-[#E8E6DE] text-[#4C5642] font-mono text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-[#73766D]">
                <Clock className="w-3.5 h-3.5 text-[#66705A]" />
                <span>{post.readTime.toUpperCase()}</span>
              </span>
              <span className="text-[#B8B3A4]">&bull;</span>
              <span className="text-xs font-mono text-[#73766D]">{post.date}</span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171A17] leading-[1.12] mb-6">
              {post.title}
            </h1>

            {/* Excerpt / Lead Paragraph */}
            <p className="text-lg sm:text-xl text-[#555850] leading-relaxed font-normal mb-8">
              {post.excerpt}
            </p>

            {/* Author Attribution Strip */}
            <div className="pt-6 border-t border-[#E8E6DE] flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E8E6DE] border border-[#D4D0C5] flex items-center justify-center text-[#4C5642]">
                <User className="w-5 h-5 text-[#66705A]" />
              </div>
              <div>
                <span className="text-sm font-bold text-[#171A17] block">
                  {post.author.name}
                </span>
                <span className="text-xs text-[#73766D] font-mono">
                  {post.author.role} &bull; Mylotic Group
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Full Article Content Body */}
      <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#FFFFFF] text-[#171A17] py-16 sm:py-24">
        <Container size="narrow">
          <article className="prose prose-slate max-w-none space-y-12">
            {post.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#171A17] tracking-tight pb-3 border-b border-[#E8E6DE]/70">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-[#555850] leading-relaxed font-normal"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </article>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-[#E8E6DE] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#73766D] font-semibold mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#66705A]" /> Topic Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono bg-[#F7F5EF] text-[#242622] border border-[#E8E6DE]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Navigation Back to Blog */}
          <div className="mt-12 pt-6 border-t border-[#E8E6DE] flex items-center justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 text-[#66705A] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#66705A] hover:underline"
            >
              <span>Consult on this topic &rarr;</span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 03 Related Blog Articles */}
      {relatedPosts.length > 0 && (
        <Section spacing="spacious" className="border-b border-[#E8E6DE] bg-[#F7F5EF] text-[#171A17] py-16 sm:py-24">
          <Container size="default">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E8E6DE] gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-[#66705A] font-semibold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>CONTINUE READING</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171A17]">
                  Related Articles &amp; Engineering Notes
                </h3>
              </div>
              <Link
                to="/blog"
                className="text-xs font-mono uppercase tracking-wider font-semibold text-[#171A17] hover:text-[#66705A] transition-colors"
              >
                View all blog posts &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  className="p-6 rounded-2xl bg-white border border-[#E8E6DE] shadow-card flex flex-col justify-between hover:border-[#66705A]/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#66705A] font-semibold block mb-2">
                      {rPost.category}
                    </span>
                    <Link to={`/blog/${rPost.slug}`}>
                      <h4 className="text-base sm:text-lg font-bold text-[#171A17] group-hover:text-[#4C5642] transition-colors mb-2 leading-snug">
                        {rPost.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-[#555850] leading-relaxed line-clamp-2">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E8E6DE] flex items-center justify-between text-xs font-semibold text-[#171A17] group-hover:text-[#66705A] transition-colors">
                    <span className="text-[11px] font-mono text-[#73766D]">{rPost.readTime}</span>
                    <span className="flex items-center gap-1 font-mono uppercase text-xs">
                      Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#66705A]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}

export default BlogDetailPage;
