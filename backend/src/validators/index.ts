import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const contactLeadSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  company: z.string().max(160).optional(),
  service: z.string().max(80).optional(),
  message: z.string().min(5).max(2000),
  requestCeo: z.boolean().optional(),
  sessionId: z.string().max(80).optional(),
});

export const consultationLeadSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  organization: z.string().max(160).optional(),
  role: z.string().max(120).optional(),
  location: z.string().max(120).optional(),
  educationRequirement: z.string().min(2),
  preferredDate: z.string().max(40).optional(),
  preferredTime: z.string().max(40).optional(),
  message: z.string().max(2000).optional(),
  sessionId: z.string().max(80).optional(),
});

export const jobApplicationSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  coverLetter: z.string().max(4000).optional(),
  linkedIn: z.string().url().optional().or(z.literal("")),
  portfolio: z.string().url().optional().or(z.literal("")),
});

export const talentLeadSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  primarySkill: z.string().min(2).max(120),
  yearsExperience: z.coerce.number().min(0).max(60).optional(),
});

export const trackEventSchema = z.object({
  sessionId: z.string().min(6).max(80),
  page: z.string().min(1).max(300),
  title: z.string().max(200).optional(),
  referrer: z.string().max(500).optional(),
  device: z.enum(["desktop", "mobile", "tablet", "unknown"]).optional(),
});

export const updateLeadStatusSchema = z.object({
  status: z.string().min(2),
  notes: z.string().max(2000).optional(),
});

export const createUserSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["ADMIN", "LEAD_TEAM"]),
});
