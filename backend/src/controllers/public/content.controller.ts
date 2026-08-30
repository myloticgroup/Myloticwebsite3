import { Solution } from "../../models/solution.model.js";
import { CaseStudy } from "../../models/caseStudy.model.js";
import { Testimonial } from "../../models/testimonial.model.js";
import { BlogPost } from "../../models/blogPost.model.js";
import { Job } from "../../models/job.model.js";
import { TeamMember } from "../../models/teamMember.model.js";
import { makePublicReader } from "../../utils/crudFactory.js";

/**
 * Every visitor — logged in or not — can read this content. It powers the
 * Solutions, Work (case studies + testimonials), Blog, Careers, and Company
 * pages your frontend already renders from static data files; this swaps
 * those static files for live, admin-managed data.
 */
export const solutions = makePublicReader(Solution);
export const caseStudies = makePublicReader(CaseStudy);
export const blogPosts = makePublicReader(BlogPost);
export const team = makePublicReader(TeamMember);

// Jobs filter by `isPublished` for public website visibility.
export const jobs = makePublicReader(Job, "isPublished");

// Testimonials have no slug lookup — just a published list, often filtered by case study.
import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendSuccess } from "../../utils/apiResponse.js";

export const testimonialsList = asyncHandler(async (req: Request, res: Response) => {
  const filter: Record<string, unknown> = { isPublished: true };
  if (req.query.caseStudySlug) filter.relatedCaseStudySlug = req.query.caseStudySlug;
  const items = await Testimonial.find(filter).sort({ createdAt: -1 });
  return sendSuccess(res, items);
});
