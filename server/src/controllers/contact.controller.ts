import { Request, Response, NextFunction } from "express";
import { ContactService } from "../services/contact.service.js";
import { contactLeadSchema, formatZodErrors } from "../validation/schemas.js";
import { sendSuccess, sendValidationError } from "../utils/api-response.js";

export class ContactController {
  static async submitContact(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = contactLeadSchema.safeParse(req.body);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }

      const ipAddress =
        (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
        req.socket.remoteAddress;
      const userAgent = req.headers["user-agent"];

      const lead = await ContactService.createContactLead(parsed.data, {
        ipAddress,
        userAgent,
      });

      return sendSuccess(
        res,
        {
          id: (lead as { id: string }).id,
          fullName: (lead as { fullName: string }).fullName,
          status: (lead as { status: string }).status,
          submittedAt: (lead as { submittedAt: Date }).submittedAt,
        },
        "Thank you. Your inquiry has been received by Mylotic technical leadership.",
        201
      );
    } catch (err) {
      next(err);
    }
  }
}
