import nodemailer from "nodemailer";
import { env } from "../config/env.js";
import { logger } from "../utils/logger.js";

const transporter = env.SMTP_HOST
  ? nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT) || 587,
      auth: env.SMTP_USER ? { user: env.SMTP_USER, pass: env.SMTP_PASS } : undefined,
    })
  : null;

async function send(to: string, subject: string, html: string) {
  if (!transporter) {
    logger.warn(`[notification.service] SMTP not configured — skipped email to ${to}: ${subject}`);
    return;
  }
  try {
    await transporter.sendMail({ from: env.SMTP_USER, to, subject, html });
  } catch (err) {
    logger.error("[notification.service] Failed to send email", err);
  }
}

/** Every new lead always notifies the Lead Team inbox. */
export async function notifyLeadTeam(subject: string, html: string) {
  if (!env.LEAD_TEAM_EMAIL) return;
  await send(env.LEAD_TEAM_EMAIL, subject, html);
}

/**
 * Business rule: when a Contact Us submission is flagged CEO_DIRECT
 * (visitor explicitly asked for the CEO, or hit an auto-escalation rule),
 * the CEO is notified in addition to — not instead of — the Lead Team.
 */
export async function notifyCeo(subject: string, html: string) {
  if (!env.CEO_EMAIL) return;
  await send(env.CEO_EMAIL, subject, html);
}
