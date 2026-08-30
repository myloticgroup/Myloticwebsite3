import { BlogPost } from "@/data/blog";
import { Solution, CaseStudy } from "@/types";

export function normalizeBlogPost(apiPost: any, index = 0): BlogPost {
  const formattedDate = apiPost?.createdAt
    ? new Date(apiPost.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : apiPost?.date || "August 2026";

  let authorName = "Engineering Practice Lead";
  let authorRole = "AI & Systems Architecture";

  if (typeof apiPost?.author === "string" && apiPost.author.trim()) {
    authorName = apiPost.author.trim();
  } else if (typeof apiPost?.author === "object" && apiPost.author?.name) {
    authorName = apiPost.author.name;
    if (apiPost.author.role) authorRole = apiPost.author.role;
  }

  // Parse structured or raw paragraph content
  let parsedContent: { heading: string; paragraphs: string[] }[] = [];
  if (Array.isArray(apiPost?.content) && apiPost.content.length > 0) {
    parsedContent = apiPost.content.map((item: any) => ({
      heading: item.heading || item.title || "Overview",
      paragraphs: Array.isArray(item.paragraphs)
        ? item.paragraphs
        : [typeof item.paragraphs === "string" ? item.paragraphs : String(item.text || item.content || "")],
    }));
  } else if (typeof apiPost?.content === "string" && apiPost.content.trim()) {
    parsedContent = [
      {
        heading: "Article Content",
        paragraphs: apiPost.content.split("\n\n").filter(Boolean),
      },
    ];
  } else {
    parsedContent = [
      {
        heading: "Overview",
        paragraphs: [
          apiPost?.excerpt ||
            apiPost?.summary ||
            "Exploring deterministic model pipelines, private vector indexing, and production systems.",
        ],
      },
    ];
  }

  return {
    id: apiPost?._id || apiPost?.id || `blog-${index + 1}`,
    slug: apiPost?.slug || "",
    code: String(index + 1).padStart(2, "0"),
    title: apiPost?.title || "Untitled Article",
    category: (apiPost?.category || "AI & MACHINE LEARNING").toUpperCase(),
    date: formattedDate,
    readTime: apiPost?.readTime || apiPost?.readingTime || "5 min read",
    excerpt: apiPost?.excerpt || apiPost?.summary || apiPost?.description || "",
    author: {
      name: authorName,
      role: authorRole,
    },
    tags: Array.isArray(apiPost?.tags) && apiPost.tags.length > 0 ? apiPost.tags : ["Applied AI", "Enterprise Architecture"],
    content: parsedContent,
  };
}

export function normalizeTeamMember(apiMember: any) {
  return {
    name: apiMember?.name || "Executive Director",
    role: apiMember?.role || "Director & Executive Leadership",
    focus: apiMember?.bio || apiMember?.focus || "Executive leadership overseeing strategic technology initiatives & governance.",
    photoUrl: apiMember?.photoUrl || apiMember?.coverImageUrl || "",
    isDirector: Boolean(apiMember?.isDirector ?? true),
  };
}

export function normalizeSolution(apiSol: any): Solution {
  return {
    id: apiSol?._id || apiSol?.id || apiSol?.slug || "solution",
    slug: apiSol?.slug || "",
    title: apiSol?.title || "Enterprise Solution",
    tagline: apiSol?.tagline || apiSol?.shortDescription || "",
    shortDescription: apiSol?.shortDescription || apiSol?.tagline || "",
    overview: apiSol?.overview || apiSol?.shortDescription || apiSol?.tagline || "",
    capabilities: Array.isArray(apiSol?.capabilities)
      ? apiSol.capabilities.map((c: any) => ({
          title: typeof c === "string" ? c : c.title || "Capability",
          description: typeof c === "string" ? c : c.description || "",
        }))
      : [],
    technologies: Array.isArray(apiSol?.technologies) ? apiSol.technologies : [],
    deliverables: Array.isArray(apiSol?.deliverables) ? apiSol.deliverables : [],
    isFeatured: Boolean(apiSol?.isFeatured ?? true),
  };
}

export function normalizeCaseStudy(apiStudy: any): CaseStudy {
  return {
    id: apiStudy?._id || apiStudy?.id || apiStudy?.slug || "case-study",
    slug: apiStudy?.slug || "",
    title: apiStudy?.title || "Confidential Deliverable",
    client: apiStudy?.clientName || apiStudy?.client || "Enterprise Client",
    industry: (apiStudy?.clientIndustry || apiStudy?.industry || "ENTERPRISE SYSTEMS").toUpperCase(),
    summary: apiStudy?.summary || apiStudy?.description || "",
    challenge: apiStudy?.challenge || apiStudy?.summary || "",
    solution: apiStudy?.solution || apiStudy?.summary || "",
    outcome: apiStudy?.results || apiStudy?.outcome || "",
    technologies: Array.isArray(apiStudy?.technologies) ? apiStudy.technologies : [],
    services: Array.isArray(apiStudy?.services) ? apiStudy.services : ["Enterprise Architecture"],
    isFeatured: Boolean(apiStudy?.isFeatured ?? true),
    isPublished: Boolean(apiStudy?.isPublished ?? true),
  };
}
