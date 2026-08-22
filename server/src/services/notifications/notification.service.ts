import { emailService } from "./index.js";
import { IContactLead } from "../../models/contact-lead.model.js";
import { IConsultationLead } from "../../models/consultation-lead.model.js";
import { IJobApplication } from "../../models/job-application.model.js";
import { ITalentLead } from "../../models/talent-lead.model.js";
import { config } from "../../config/env.js";

export class NotificationService {
  static async notifyContactLeadReceived(lead: IContactLead): Promise<void> {
    const adminEmail = config.notificationEmail;

    await emailService.sendEmail({
      to: adminEmail,
      subject: `[Mylotic Lead] New Enterprise Inquiry: ${lead.fullName} (${lead.company || "Direct"})`,
      html: `
        <h2>New Enterprise Contact Inquiry</h2>
        <p><strong>Name:</strong> ${lead.fullName}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Company:</strong> ${lead.company || "N/A"}</p>
        <p><strong>Practice:</strong> ${lead.service}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background:#f4f4f4;padding:12px;border-left:4px solid #66705A;">
          ${lead.message}
        </blockquote>
      `,
    });

    await emailService.sendEmail({
      to: lead.email,
      subject: "Thank you for contacting Mylotic Group",
      html: `
        <p>Hello ${lead.fullName},</p>
        <p>Thank you for initiating dialogue with Mylotic Group. Our technical leadership team has received your project parameters and will respond within 1 business day.</p>
        <p>Warm regards,<br/>Mylotic Group Engineering &amp; Client Engagements</p>
      `,
    });
  }

  static async notifyConsultationLeadReceived(lead: IConsultationLead): Promise<void> {
    const adminEmail = config.notificationEmail;

    await emailService.sendEmail({
      to: adminEmail,
      subject: `[Mylotic EdTech] Consultation Request: ${lead.fullName} - ${lead.educationRequirement}`,
      html: `
        <h2>EdTech Consultation Booking</h2>
        <p><strong>Name:</strong> ${lead.fullName}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone || "N/A"}</p>
        <p><strong>Organization:</strong> ${lead.organization || "N/A"}</p>
        <p><strong>Role:</strong> ${lead.role || "N/A"}</p>
        <p><strong>Requirement:</strong> ${lead.educationRequirement}</p>
        <p><strong>Preferred Date:</strong> ${lead.preferredDate || "Flexible"}</p>
        <p><strong>Preferred Time:</strong> ${lead.preferredTime || "Flexible"}</p>
      `,
    });
  }

  static async notifyJobApplicationReceived(application: IJobApplication): Promise<void> {
    const recruitmentEmail = config.recruitmentEmail;

    await emailService.sendEmail({
      to: recruitmentEmail,
      subject: `[Mylotic Careers] New Application: ${application.fullName} for ${application.jobTitle}`,
      html: `
        <h2>Candidate Application Received</h2>
        <p><strong>Position:</strong> ${application.jobTitle} (${application.jobId})</p>
        <p><strong>Candidate:</strong> ${application.fullName}</p>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Phone:</strong> ${application.phone}</p>
        <p><strong>Location:</strong> ${application.location}</p>
        <p><strong>LinkedIn:</strong> ${application.linkedinUrl || "N/A"}</p>
        <p><strong>GitHub:</strong> ${application.githubUrl || "N/A"}</p>
        <p><strong>Resume:</strong> ${application.resumeUrl ? `<a href="${application.resumeUrl}">Download Resume</a>` : application.resumeFileName || "Uploaded"}</p>
      `,
    });
  }

  static async notifyTalentLeadReceived(talent: ITalentLead): Promise<void> {
    const recruitmentEmail = config.recruitmentEmail;

    await emailService.sendEmail({
      to: recruitmentEmail,
      subject: `[Mylotic Talent Network] New Profile: ${talent.fullName}`,
      html: `
        <h2>Talent Community Intake</h2>
        <p><strong>Name:</strong> ${talent.fullName}</p>
        <p><strong>Email:</strong> ${talent.email}</p>
        <p><strong>Skills:</strong> ${talent.skills}</p>
        <p><strong>LinkedIn:</strong> ${talent.linkedinUrl || "N/A"}</p>
      `,
    });
  }
}
