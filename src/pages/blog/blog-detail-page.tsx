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
      <Section spacing="spacious" className="py-24 text-center bg-[#EAF6FC] min-h-[60vh] flex items-center">
        <Container size="default">
          <h1 className="text-3xl font-bold text-[#10213B]">Article Not Found</h1>
          <p className="mt-4 text-[#243B53]">The requested publication does not exist.</p>
          <Link to="/blog" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#4688B2] hover:underline">
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
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-atmospheric-hero text-[#10213B] pt-14 sm:pt-20 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />
        <div className="ambient-glow-white w-[48rem] h-[48rem] -top-20 left-1/4 opacity-80" />
        <div className="ambient-glow-icy w-[36rem] h-[36rem] -top-10 -right-10 opacity-70" />

        <Container size="default" className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
            className="mb-8 text-[#5C7690]"
          />

          <div className="max-w-4xl">
            {/* Category & Read Time Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-[#10213B] font-mono text-xs font-bold uppercase tracking-wider shadow-2xs">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-[#5C7690] bg-[#F0F7FB] px-3 py-1 rounded-full border border-[#D0E3F0]">
                <Clock className="w-3.5 h-3.5 text-[#4688B2]" />
                <span>{post.readTime.toUpperCase()}</span>
              </span>
              <span className="text-[#5C7690]">&bull;</span>
              <span className="text-xs font-mono text-[#5C7690]">{post.date}</span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213B] leading-[1.08] mb-6">
              {post.title}
            </h1>

            {/* Excerpt / Lead Paragraph */}
            <p className="text-lg sm:text-xl text-[#243B53] leading-relaxed font-normal mb-8">
              {post.excerpt}
            </p>

            {/* Author Attribution Strip */}
            <div className="pt-6 border-t border-[#D0E3F0]/70 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-white/80 flex items-center justify-center text-[#10213B] shadow-2xs">
                <User className="w-5 h-5 text-[#4688B2]" />
              </div>
              <div>
                <span className="text-sm font-bold text-[#10213B] block">
                  {post.author.name}
                </span>
                <span className="text-xs text-[#5C7690] font-mono">
                  {post.author.role} &bull; Mylotic Group
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Full Article Content Body */}
      <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#FFFFFF] text-[#10213B] py-20 sm:py-28 relative overflow-hidden">
        <Container size="narrow" className="relative z-10">
          <article className="prose prose-slate max-w-none space-y-12">
            {post.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#10213B] tracking-tight pb-3 border-b border-[#D0E3F0]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-[#243B53] leading-relaxed font-normal"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </article>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-[#D0E3F0] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#5C7690] font-semibold mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#4688B2]" /> Topic Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#F0F7FB] text-[#182A43] border border-[#D0E3F0] shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Navigation Back to Blog */}
          <div className="mt-12 pt-6 border-t border-[#D0E3F0] flex items-center justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#10213B] hover:text-[#4688B2] transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#4688B2] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#4688B2] hover:underline cursor-pointer"
            >
              <span>Consult on this topic &rarr;</span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 03 Related Blog Articles */}
      {relatedPosts.length > 0 && (
        <Section spacing="spacious" className="border-b border-[#D0E3F0] bg-[#DCEFF8] text-[#10213B] py-20 sm:py-28 relative overflow-hidden">
          <Container size="default">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D0E3F0]/70 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-[#4688B2] font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>CONTINUE READING</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#10213B]">
                  Related Articles &amp; Engineering Notes
                </h3>
              </div>
              <Link
                to="/blog"
                className="text-xs font-mono uppercase tracking-wider font-semibold text-[#10213B] hover:text-[#4688B2] transition-colors cursor-pointer"
              >
                View all blog posts &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-white/80 shadow-card flex flex-col justify-between hover:border-[#4688B2]/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9DD1EC] via-[#79B9DA] to-[#4688B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#4688B2] font-bold block mb-2">
                      {rPost.category}
                    </span>
                    <Link to={`/blog/${rPost.slug}`}>
                      <h4 className="text-base sm:text-lg font-bold text-[#10213B] group-hover:text-[#182A43] transition-colors mb-2 leading-snug">
                        {rPost.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-[#243B53] leading-relaxed line-clamp-2">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#D0E3F0]/70 flex items-center justify-between text-xs font-semibold text-[#10213B] group-hover:text-[#4688B2] transition-colors">
                    <span className="text-[11px] font-mono text-[#5C7690]">{rPost.readTime}</span>
                    <span className="flex items-center gap-1 font-mono uppercase text-xs">
                      Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#4688B2]" />
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
