import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/rbac.middleware.js";
import { upload } from "../services/upload.service.js";
import { uploadFile } from "../controllers/admin/upload.controller.js";
import { createUser, listUsers, setUserActive } from "../controllers/admin/users.controller.js";
import { createUserSchema } from "../validators/index.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { makeAdminCrud } from "../utils/crudFactory.js";
import {
  solutionsAdmin,
  caseStudiesAdmin,
  testimonialsAdmin,
  blogAdmin,
  jobsAdmin,
  teamAdmin,
} from "../controllers/admin/content.controller.js";

const router = Router();

// Everything below is Admin-only (Lead Team cannot upload/manage content or users).
router.use(requireAuth, authorize(["ADMIN"]));

function registerCrud(path: string, crud: ReturnType<typeof makeAdminCrud>) {
  router.get(path, crud.list);
  router.get(`${path}/:id`, crud.getOne);
  router.post(path, crud.create);
  router.put(`${path}/:id`, crud.update);
  router.delete(`${path}/:id`, crud.remove);
}

registerCrud("/content/solutions", solutionsAdmin);
registerCrud("/content/case-studies", caseStudiesAdmin);
registerCrud("/content/testimonials", testimonialsAdmin);
registerCrud("/content/blog", blogAdmin);
registerCrud("/content/jobs", jobsAdmin);
registerCrud("/content/team", teamAdmin);

router.post("/upload", upload.single("file"), uploadFile);

router.get("/users", listUsers);
router.post("/users", validateBody(createUserSchema), createUser);
router.patch("/users/:id/active", setUserActive);

export default router;
