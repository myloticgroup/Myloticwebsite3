import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Tag, Loader2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { blogPostsData, BlogPost } from "@/data/blog";
import { getBlogPostsApi } from "@/services/blog.service";
import { normalizeBlogPost } from "@/lib/normalizers";

export function BlogPage() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchBlogPosts = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getBlogPostsApi();
      if (res.success && Array.isArray(res.data) && res.data.length > 0) {
        setPosts(res.data.map((item, idx) => normalizeBlogPost(item, idx)));
      } else {
        // Fallback to reference static data if backend returns empty or unavailable
        setPosts(blogPostsData);
      }
    } catch (err: any) {
      console.warn("[BlogPage] API fetch warning, using reference data:", err);
      setPosts(blogPostsData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <>
      {/* 01 Bento Blog Header */}
      <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <Container size="default">
          <Breadcrumb items={[{ label: "Blog" }]} className="mb-6 text-[#5F6872]" />

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-xs font-mono uppercase tracking-widest text-[#4C5642] font-semibold mb-6 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#66705A]" />
              <span>BLOG &amp; PERSPECTIVES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101418] leading-[1.12]">
              Ideas, engineering notes and perspectives on{" "}
              <span className="gradient-text-olive font-black">building better digital systems.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#5F6872] leading-relaxed font-normal max-w-3xl">
              Technical analysis, architectural paradigms, and practical engineering blueprints authored by our practitioners on applied AI, cloud topologies, and software engineering.
            </p>
          </div>
        </Container>
      </Section>

      {/* Loading Skeleton Indicator */}
      {isLoading ? (
        <Section spacing="spacious" className="bg-[#7CC7EA] py-12">
          <Container size="default">
            <div className="p-12 text-center text-xs font-mono text-[#7A8490] flex items-center justify-center gap-2 bg-white rounded-3xl border border-[#E1E7EF]">
              <Loader2 className="w-5 h-5 text-[#66705A] animate-spin" />
              <span>Loading latest engineering publications...</span>
            </div>
          </Container>
        </Section>
      ) : (
        <>
          {/* 02 Featured Article Bento Spotlight */}
          {featuredPost && (
            <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-12 sm:pb-16">
              <Container size="default">
                <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento hover:border-[#66705A]/50 hover:shadow-bento-hover transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="lg:w-8/12 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3.5 py-1 rounded-full bg-[#F0F4F8] border border-[#E1E7EF] text-[#4C5642] font-mono text-xs font-bold uppercase tracking-wider">
                          FEATURED ARTICLE
                        </span>
                        <span className="font-mono text-xs text-[#66705A] font-semibold uppercase">
                          {featuredPost.category}
                        </span>
                      </div>

                      <Link to={`/blog/${featuredPost.slug}`}>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101418] group-hover:text-[#4C5642] transition-colors leading-tight">
                          {featuredPost.title}
                        </h2>
                      </Link>

                      <p className="text-sm sm:text-base text-[#5F6872] leading-relaxed font-normal">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7A8490] pt-2">
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
                        to={`/blog/${featuredPost.slug}`}
                        className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#101418] hover:bg-[#1B2026] text-[#EEF3F8] font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
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

          {/* 03 All Blog Articles Bento Grid */}
          <Section spacing="spacious" className="bg-[#7CC7EA] text-[#101418] pb-16 sm:pb-24">
            <Container size="default">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#66705A] font-semibold block mb-1">
                    PUBLICATIONS DIRECTORY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#101418]">
                    Recent Articles &amp; Engineering Notes
                  </h2>
                </div>
                <span className="text-xs font-mono text-[#7A8490]">
                  SHOWING {posts.length} ARTICLES
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="p-8 rounded-3xl bg-white border border-[#E1E7EF] shadow-bento flex flex-col justify-between hover:border-[#66705A]/50 hover:shadow-bento-hover hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#E1E7EF] mb-4">
                        <span className="font-mono text-xs font-bold text-[#66705A] uppercase">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-mono text-[#7A8490]">
                          <Clock className="w-3 h-3 text-[#66705A]" />
                          {post.readTime}
                        </span>
                      </div>

                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-[#101418] group-hover:text-[#4C5642] transition-colors mb-2 leading-snug">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-[#5F6872] leading-relaxed line-clamp-3 font-normal mb-6">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E1E7EF]">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-[#101418] bg-[#F0F4F8] px-2.5 py-1 rounded-lg border border-[#E1E7EF] flex items-center gap-1"
                          >
                            <Tag className="w-2.5 h-2.5 text-[#66705A]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#E1E7EF] flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#7A8490]">
                        {post.date}
                      </span>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#101418] group-hover:text-[#66705A] transition-colors"
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
      )}
    </>
  );
}

export default BlogPage;
