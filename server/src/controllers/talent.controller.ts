import { Request, Response, NextFunction } from "express";
import { TalentService } from "../services/talent.service.js";
import { talentLeadSchema, formatZodErrors } from "../validation/schemas.js";
import { sendSuccess, sendValidationError } from "../utils/api-response.js";

export class TalentController {
  static async submitTalentProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = talentLeadSchema.safeParse(req.body);
      if (!parsed.success) {
        return sendValidationError(res, formatZodErrors(parsed.error));
      }

      const ipAddress =
        (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
        req.socket.remoteAddress;
      const userAgent = req.headers["user-agent"];

      const lead = await TalentService.submitTalentProfile(parsed.data, {
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
        "Thank you. Your profile has been added to the Mylotic specialized talent network.",
        201
      );
    } catch (err) {
      next(err);
    }
  }
}
