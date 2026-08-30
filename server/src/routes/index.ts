import { Router } from "express";
import { contactRouter } from "./contact.routes.js";
import { consultationRouter } from "./consultation.routes.js";
import { careersRouter } from "./careers.routes.js";
import { talentRouter } from "./talent.routes.js";
import { adminRouter } from "./admin.routes.js";

export const apiRouter = Router();

apiRouter.use("/contact", contactRouter);
apiRouter.use("/consultations", consultationRouter);
apiRouter.use("/careers", careersRouter);
apiRouter.use("/talent", talentRouter);
apiRouter.use("/admin", adminRouter);
