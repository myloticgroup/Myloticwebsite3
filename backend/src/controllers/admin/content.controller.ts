import { Solution } from "../../models/solution.model.js";
import { CaseStudy } from "../../models/caseStudy.model.js";
import { Testimonial } from "../../models/testimonial.model.js";
import { BlogPost } from "../../models/blogPost.model.js";
import { Job } from "../../models/job.model.js";
import { TeamMember } from "../../models/teamMember.model.js";
import { makeAdminCrud } from "../../utils/crudFactory.js";

/**
 * Full CRUD for every content type Admin can manage/upload — this is what
 * lets Admin keep the site "fresh" (new case studies, blog posts, open roles,
 * testimonials, leadership bios) without a code deploy.
 */
export const solutionsAdmin = makeAdminCrud(Solution, "Solution");
export const caseStudiesAdmin = makeAdminCrud(CaseStudy, "Case study");
export const testimonialsAdmin = makeAdminCrud(Testimonial, "Testimonial");
export const blogAdmin = makeAdminCrud(BlogPost, "Blog post");
export const jobsAdmin = makeAdminCrud(Job, "Job listing");
export const teamAdmin = makeAdminCrud(TeamMember, "Team member");
