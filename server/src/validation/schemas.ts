import { z } from "zod";

/**
 * Enterprise Contact Inquiry Validation Schema
 */
export const contactLeadSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please provide a valid work email address")
    .max(150, "Email address is too long"),
  phone: z
    .string()
    .max(30, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(120, "Company name cannot exceed 120 characters")
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(2, "Please select or specify a practice area / service")
    .max(100),
  message: z
    .string()
    .min(10, "Project description must be at least 10 characters")
    .max(5000, "Message cannot exceed 5000 characters"),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: "Consent to data processing is required",
  }),
});

export type ContactLeadInput = z.infer<typeof contactLeadSchema>;

/**
 * EdTech & Corporate Training Consultation Schema
 */
export const consultationLeadSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters")
      .max(100, "Full name cannot exceed 100 characters"),
    email: z
      .string()
      .email("Please provide a valid corporate email address")
      .max(150, "Email address is too long"),
    phone: z
      .string()
      .max(30, "Phone number is too long")
      .optional()
      .or(z.literal("")),
    organization: z
      .string()
      .max(120, "Organization name cannot exceed 120 characters")
      .optional()
      .or(z.literal("")),
    company: z
      .string()
      .max(120, "Company name cannot exceed 120 characters")
      .optional()
      .or(z.literal("")),
    role: z
      .string()
      .max(100, "Role/job title cannot exceed 100 characters")
      .optional()
      .or(z.literal("")),
    jobTitle: z
      .string()
      .max(100, "Role/job title cannot exceed 100 characters")
      .optional()
      .or(z.literal("")),
    educationRequirement: z
      .string()
      .min(2, "Please select what you are looking for")
      .optional(),
    requirement: z
      .string()
      .min(2, "Please select what you are looking for")
      .optional(),
    preferredDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
      .optional()
      .or(z.literal("")),
    preferredTime: z
      .string()
      .max(60, "Preferred time slot is too long")
      .optional()
      .or(z.literal("")),
    preferredContactMethod: z
      .string()
      .max(50)
      .optional()
      .or(z.literal("")),
    location: z
      .string()
      .max(100)
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .max(5000, "Message cannot exceed 5000 characters")
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => Boolean(data.educationRequirement || data.requirement), {
    message: "Please select what you are looking for",
    path: ["educationRequirement"],
  });

export type ConsultationLeadInput = z.infer<typeof consultationLeadSchema>;

/**
 * Candidate Career Application Schema
 */
export const jobApplicationSchema = z.object({
  jobId: z.string().min(1, "Job identifier is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please provide a valid candidate email address")
    .max(150, "Email address is too long"),
  phone: z
    .string()
    .min(5, "Please provide a valid contact number")
    .max(30, "Phone number is too long"),
  location: z
    .string()
    .min(2, "Current location is required")
    .max(100, "Location cannot exceed 100 characters"),
  linkedinUrl: z
    .string()
    .url("Please enter a valid LinkedIn URL")
    .optional()
    .or(z.literal("")),
  githubUrl: z
    .string()
    .url("Please enter a valid GitHub/Portfolio URL")
    .optional()
    .or(z.literal("")),
  portfolioUrl: z
    .string()
    .url("Please enter a valid Portfolio URL")
    .optional()
    .or(z.literal("")),
  coverNote: z
    .string()
    .max(4000, "Cover note cannot exceed 4000 characters")
    .optional()
    .or(z.literal("")),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: "Candidate consent is required to process application",
  }),
});

export type JobApplicationInput = z.infer<typeof jobApplicationSchema>;

/**
 * Talent Network Community Submission Schema
 */
export const talentLeadSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(150, "Email address is too long"),
  phone: z
    .string()
    .max(30, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  skills: z
    .string()
    .min(2, "Please provide primary skills or specializations")
    .max(500, "Skills list is too long"),
  linkedinUrl: z
    .string()
    .url("Please provide a valid profile URL")
    .optional()
    .or(z.literal("")),
  portfolioUrl: z
    .string()
    .url("Please provide a valid portfolio URL")
    .optional()
    .or(z.literal("")),
});

export type TalentLeadInput = z.infer<typeof talentLeadSchema>;

/**
 * Lead Status Update Schema (Admin)
 */
export const updateLeadStatusSchema = z.object({
  status: z.enum(["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "CLOSED"]),
  notes: z.string().max(3000).optional(),
});

/**
 * Application Status Update Schema (Admin)
 */
export const updateApplicationStatusSchema = z.object({
  status: z.enum([
    "APPLIED",
    "UNDER_REVIEW",
    "SHORTLISTED",
    "INTERVIEW",
    "SELECTED",
    "REJECTED",
  ]),
  internalNotes: z.string().max(3000).optional(),
});

/**
 * Talent Status Update Schema (Admin)
 */
export const updateTalentStatusSchema = z.object({
  status: z.enum(["NEW", "CONTACTED", "QUALIFIED", "ARCHIVED"]),
  internalNotes: z.string().max(3000).optional(),
});

/**
 * Pagination & Search Query Schema
 */
export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
  status: z.string().optional(),
  sortBy: z.string().default("submittedAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export function formatZodErrors(error: z.ZodError): Record<string, string[]> {
  const fieldErrors: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const field = issue.path.join(".") || "form";
    if (!fieldErrors[field]) {
      fieldErrors[field] = [];
    }
    fieldErrors[field].push(issue.message);
  }
  return fieldErrors;
}
