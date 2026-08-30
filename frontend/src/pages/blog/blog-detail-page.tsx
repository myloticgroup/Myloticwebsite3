import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, User, Tag, BookOpen, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getBlogPostBySlug, getRelatedBlogPosts, BlogPost } from "@/data/blog";
import { getBlogPostBySlugApi, getBlogPostsApi } from "@/services/blog.service";
import { normalizeBlogPost } from "@/lib/normalizers";

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = React.useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = React.useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPostAndRelated = React.useCallback(async () => {
    if (!slug) return;
    setIsLoading(true);
    try {
      // 1. Fetch main article by slug
      const res = await getBlogPostBySlugApi(slug);
      let loadedPost: BlogPost | null = null;

      if (res.success && res.data) {
        loadedPost = normalizeBlogPost(res.data);
      } else {
        loadedPost = getBlogPostBySlug(slug) || null;
      }

      setPost(loadedPost);

      // 2. Fetch related posts
      try {
        const listRes = await getBlogPostsApi();
        if (listRes.success && Array.isArray(listRes.data)) {
          const mapped = listRes.data
            .map((item, idx) => normalizeBlogPost(item, idx))
            .filter((p) => p.slug !== slug)
            .slice(0, 3);
          setRelatedPosts(mapped);
        } else {
          setRelatedPosts(getRelatedBlogPosts(slug, 3));
        }
      } catch {
        setRelatedPosts(getRelatedBlogPosts(slug, 3));
      }
    } catch (err) {
      console.warn("[BlogDetailPage] API error, falling back to static reference:", err);
      const fallback = getBlogPostBySlug(slug) || null;
      setPost(fallback);
      setRelatedPosts(getRelatedBlogPosts(slug, 3));
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  React.useEffect(() => {
    fetchPostAndRelated();
  }, [fetchPostAndRelated]);

  if (isLoading) {
    return (
      <Section spacing="spacious" className="py-24 text-center bg-[#7CC7EA]">
        <Container size="default">
          <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2 bg-white rounded-3xl border border-[#E1E7EF]">
            <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
            <span>Loading publication details...</span>
          </div>
        </Container>
      </Section>
    );
  }

  if (!post) {
    return (
      <Section spacing="spacious" className="py-24 text-center bg-[#7CC7EA]">
        <Container size="default">
          <div className="p-12 bg-white rounded-3xl border border-[#E1E7EF] max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-[#101418]">Article Not Found</h1>
            <p className="mt-4 text-[#5F6872] text-sm">The requested publication does not exist or has been unpublished.</p>
            <Link to="/blog" className="mt-6 inline-block text-xs font-mono font-semibold uppercase text-[#66705A] hover:underline">
              &larr; Back to all articles
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* 01 Bento Article Header */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
            className="mb-6 text-[#5F6872]"
          />

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
            {/* Category & Read Time Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-[#4C5642] font-mono text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-[#7A8490]">
                <Clock className="w-3.5 h-3.5 text-[#66705A]" />
                <span>{post.readTime.toUpperCase()}</span>
              </span>
              <span className="text-[#C1C9D2]">&bull;</span>
              <span className="text-xs font-mono text-[#7A8490]">{post.date}</span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101418] leading-[1.12] mb-6">
              {post.title}
            </h1>

            {/* Excerpt / Lead Paragraph */}
            <p className="text-lg sm:text-xl text-[#5F6872] leading-relaxed font-normal mb-8 max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author Attribution Strip */}
            <div className="pt-6 border-t border-[#E1E7EF] flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] flex items-center justify-center text-[#4C5642]">
                <User className="w-5 h-5 text-[#66705A]" />
              </div>
              <div>
                <span className="text-sm font-bold text-[#101418] block">
                  {post.author.name}
                </span>
                <span className="text-xs text-[#7A8490] font-mono">
                  {post.author.role} &bull; Mylotic Group
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 Full Article Content Body Bento Container */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
        <Container size="default">
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
            <article className="prose prose-slate max-w-none space-y-12">
              {post.content.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#101418] tracking-tight pb-3 border-b border-[#E1E7EF]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base sm:text-lg text-[#5F6872] leading-relaxed font-normal"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[#E1E7EF] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7A8490] font-semibold mr-2 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-[#66705A]" /> Topic Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#F0F4F8] text-[#101418] border border-[#E1E7EF]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Navigation Back to Blog */}
            <div className="mt-10 pt-6 border-t border-[#E1E7EF] flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-[#101418] hover:text-[#66705A] transition-colors group"
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
          </div>
        </Container>
      </Section>

      {/* 03 Related Blog Articles Bento Grid */}
      {relatedPosts.length > 0 && (
        <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
          <Container size="default">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-[#66705A] font-semibold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>CONTINUE READING</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101418]">
                  Related Articles &amp; Engineering Notes
                </h3>
              </div>
              <Link
                to="/blog"
                className="text-xs font-mono uppercase tracking-wider font-semibold text-[#101418] hover:text-[#66705A] transition-colors"
              >
                View all blog posts &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  className="p-6 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#66705A] font-semibold block mb-2">
                      {rPost.category}
                    </span>
                    <Link to={`/blog/${rPost.slug}`}>
                      <h4 className="text-base sm:text-lg font-bold text-[#101418] group-hover:text-[#4C5642] transition-colors mb-2 leading-snug">
                        {rPost.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-[#5F6872] leading-relaxed line-clamp-2">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E1E7EF] flex items-center justify-between text-xs font-semibold text-[#101418] group-hover:text-[#66705A] transition-colors">
                    <span className="text-[11px] font-mono text-[#7A8490]">{rPost.readTime}</span>
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
