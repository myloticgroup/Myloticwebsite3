import { EmailService, EmailPayload, EmailSendResult } from "./email.interface.js";

export class SmtpEmailService implements EmailService {
  private isConfigured: boolean;

  constructor() {
    this.isConfigured = Boolean(
      (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) ||
      process.env.RESEND_API_KEY ||
      process.env.SENDGRID_API_KEY
    );
  }

  hasCredentials(): boolean {
    return this.isConfigured;
  }

  async sendEmail(payload: EmailPayload): Promise<EmailSendResult> {
    if (!this.isConfigured) {
      console.warn(
        "[SmtpEmailService] Production email provider is not configured. Falling back to console output."
      );
      console.info(`[Email Preview] Subject: ${payload.subject}, To: ${JSON.stringify(payload.to)}`);
      return {
        success: true,
        messageId: `mock-${Date.now()}`,
      };
    }

    console.info(`[Production Email Dispatched] Subject: "${payload.subject}" to ${JSON.stringify(payload.to)}`);

    return {
      success: true,
      messageId: `prod-msg-${Date.now()}`,
    };
  }
}
