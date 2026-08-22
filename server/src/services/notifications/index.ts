import { EmailService } from "./email.interface.js";
import { ConsoleEmailService } from "./console-email.service.js";
import { SmtpEmailService } from "./smtp-email.service.js";

function createEmailService(): EmailService {
  const smtp = new SmtpEmailService();
  if (smtp.hasCredentials()) {
    return smtp;
  }
  return new ConsoleEmailService();
}

export const emailService: EmailService = createEmailService();

export * from "./email.interface.js";
export * from "./console-email.service.js";
export * from "./smtp-email.service.js";
