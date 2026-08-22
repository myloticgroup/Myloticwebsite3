import { EmailService, EmailPayload, EmailSendResult } from "./email.interface.js";
import { config } from "../../config/env.js";

export class ConsoleEmailService implements EmailService {
  async sendEmail(payload: EmailPayload): Promise<EmailSendResult> {
    const messageId = `dev-msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

    console.info("--------------------------------------------------");
    console.info("[Notification Service] DISPATCHED EMAIL NOTIFICATION");
    console.info(`Message ID: ${messageId}`);
    console.info(`From: ${payload.from || config.emailFrom}`);
    console.info(`To: ${Array.isArray(payload.to) ? payload.to.join(", ") : payload.to}`);
    console.info(`Subject: ${payload.subject}`);
    if (payload.replyTo) console.info(`Reply-To: ${payload.replyTo}`);
    console.info("--------------------------------------------------");

    return {
      success: true,
      messageId,
    };
  }
}
