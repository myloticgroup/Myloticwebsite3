# Full-Stack Project Context Knowledge Base (`PROJECT_CONTEXT.md`)
**Project**: Mylotic Group Enterprise Marketing Website & API Platform  
**Architecture**: Decoupled Monorepo (`frontend/` + `backend/`)  
**Document Status**: Permanent Technical Reference  

---

## 1. Technology Stack

### Frontend Application (`frontend/`)
* **Framework & Core**: React 19.2.8, React DOM 19.2.8
* **Build Tool & Dev Server**: Vite 6.1.0 (`@vitejs/plugin-react`)
* **Routing**: React Router DOM v7.2.0
* **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`, `@tailwindcss/postcss`), `clsx`, `tailwind-merge`
* **Icons**: Lucide React (`lucide-react` v1.33.0)
* **Language & Config**: TypeScript 5 (ES2022 module resolution, strict mode)

### Backend API Server (`backend/`)
* **Runtime & Framework**: Node.js (ES Modules `"type": "module"`), Express v4.21.2
* **Execution & Compilation**: `tsx` v4.19.2 (Dev watch execution), `tsc` v5 (Production build)
* **Database & ORM**: MongoDB with Mongoose v8.10.0
* **Input Validation**: Zod v3.24.2
* **Authentication & Security**: JSON Web Tokens (`jsonwebtoken` v9.0.2), `bcryptjs` v2.4.3, `cookie-parser` v1.4.7
* **File Processing**: Multer v1.4.5-lts.1 (Disk storage in `backend/uploads/`)
* **Email & Notifications**: Nodemailer v6.9.16
* **Rate Limiting & Protection**: `express-rate-limit` v7.4.1, `cors` v2.8.5

---

## 2. Frontend Architecture

### Structure & Organization
* **Entry Point**: `frontend/index.html` → `frontend/src/main.tsx` → `frontend/src/App.tsx`.
* **Routing System**: `react-router-dom` `Routes` configured in `App.tsx`:
  * Public Marketing: `/`, `/company`, `/company/approach`, `/company/leadership`, `/solutions`, `/solutions/:slug`, `/industries`, `/industries/:slug`, `/careers`, `/careers/:slug`, `/blog`, `/blog/:slug`, `/work`, `/technology`, `/contact`, `/contact/education-consultation`.
  * Redirects & Legal: `/insights` → `/blog`, `/privacy`, `/terms`, `/security`.
  * Catch-All 404: `*` → `NotFoundPage`.
* **Layouts**: `<Header />`, `<Footer />`, `<SkipLink />`, `<ScrollToTop />` wrap main route views.
* **Component Hierarchies**:
  * `src/components/home/`: Home bento sections (`hero-section`, `capabilities-section`, `engineering-section`, `work-section`, `careers-section`, `cta-section`, `tech-marquee`).
  * `src/components/layout/`: Global header, desktop & mobile navigation drawers, brand logo, footer.
  * `src/components/ui/`: Base design system primitives (`button`, `card`, `badge`, `input`, `textarea`, `container`, `divider`, `breadcrumb`).
* **API & Service Layer**:
  * `src/lib/api-config.ts`: Exports `API_BASE_URL` (`import.meta.env.VITE_API_URL || ""`) and `apiUrl(path)`. Vite proxy targets `http://localhost:5000` locally.
  * `src/services/consultation-lead.service.ts`: Handles EdTech consultation form submissions (`POST /api/consultations`).
* **Page-by-Page Mapping**:
  * `ContactPage` (`pages/contact/contact-page.tsx`) → `ContactForm` → `POST /api/contact`
  * `EducationConsultationPage` (`pages/contact/education-consultation-page.tsx`) → `submitEdTechConsultationLead` → `POST /api/consultations`
  * `JobDetailPage` (`pages/careers/job-detail-page.tsx`) → `JobApplicationForm` → `POST /api/careers/jobs/:jobId/apply`
  * `CareersPage` (`pages/careers/careers-page.tsx`) → `CareersClient` → `POST /api/careers/talent` (Talent Network form)

---

## 3. Backend Architecture

### Server Entry & Pipeline
* **Entry File**: `backend/src/server.ts`
* **Initialization Flow**:
  1. Validates environment variables via Zod in `src/config/env.ts`.
  2. Enables `cors({ origin: env.CLIENT_URL, credentials: true })`.
  3. Mounts `cookieParser()`, `express.json({ limit: "1mb" })`, `express.urlencoded({ extended: true })`.
  4. Mounts static file server: `app.use("/uploads", express.static(uploadDir))`.
  5. Registers Health check (`GET /api/health`).
  6. Mounts root router (`app.use("/api", apiRoutes)` in `src/routes/index.ts`).
  7. Registers `notFoundHandler` and global `errorHandler` middleware.
  8. Connects MongoDB via `connectDB()` (`src/config/db.ts`) and starts `app.listen(env.PORT)`.

### Route & Controller Mapping

```
/api/auth
  ├── POST /login      ──► authLimiter ──► validateBody(loginSchema) ──► login controller
  ├── POST /refresh    ──► refresh controller
  ├── POST /logout     ──► logout controller
  └── GET  /me         ──► requireAuth ──► me controller

/api (Public)
  ├── GET  /solutions, /work, /blog, /careers/jobs, /company/team ──► Content Readers
  ├── POST /contact     ──► publicFormLimiter ──► validateBody(contactLeadSchema) ──► submitContact
  ├── POST /consultations ──► publicFormLimiter ──► validateBody(consultationLeadSchema) ──► submitConsultation
  ├── POST /careers/jobs/:jobId/apply ──► publicFormLimiter ──► upload.single("resume") ──► applyToJob
  ├── POST /careers/talent ──► publicFormLimiter ──► upload.single("resume") ──► joinTalentPool
  └── POST /track       ──► trackingLimiter ──► validateBody(trackEventSchema) ──► track

/api/lead-team (LEAD_TEAM & ADMIN)
  ├── GET   /leads                     ──► requireAuth ──► authorize(["ADMIN", "LEAD_TEAM"]) ──► listLeads
  ├── PATCH /leads/:type/:id/status    ──► requireAuth ──► authorize(["ADMIN", "LEAD_TEAM"]) ──► updateLeadStatus
  └── GET   /analytics/overview, /live ──► requireAuth ──► authorize(["ADMIN", "LEAD_TEAM"]) ──► analytics controllers

/api/admin (ADMIN Only)
  ├── CRUD  /content/*                 ──► requireAuth ──► authorize(["ADMIN"]) ──► makeAdminCrud handlers
  ├── POST  /upload                    ──► requireAuth ──► authorize(["ADMIN"]) ──► upload.single("file")
  └── GET/POST /users                  ──► requireAuth ──► authorize(["ADMIN"]) ──► users.controller
```

---

## 4. Database Architecture & Data Models

The system runs on **13 MongoDB collections** defined via Mongoose in `backend/src/models/`:

```
User (Staff Accounts)
  ├── role: "ADMIN" | "LEAD_TEAM"
  └── isActive: boolean

Lead Documents (Inbound Operations)
  ├── ContactLead        (source: "Contact Us", priority: "NORMAL" | "CEO_DIRECT")
  ├── ConsultationLead   (source: "EdTech Consultation", status: Lead lifecycle)
  ├── JobApplication     (jobId ──► Ref: Job, resumeUrl: string, status: Application lifecycle)
  └── TalentLead         (primarySkill: string, yearsExperience: number, resumeUrl: string)

CMS Content Documents (Marketing Data)
  ├── Solution           (slug: unique, capabilities, technologies, deliverables)
  ├── CaseStudy          (slug: unique, clientName, challenge, solution, gallery)
  ├── BlogPost           (slug: unique, author, tags, content, publishedAt)
  ├── Job                (slug: unique, department, location, responsibilities, isOpen)
  ├── TeamMember         (name, title, isCeo, displayOrder, isPublished)
  └── Testimonial        (clientName, clientCompany, rating, relatedCaseStudySlug)

Visitor Tracking System (Analytics)
  ├── VisitorSession     (sessionId: unique index, ipHash, landingPage, device, isConvertedToLead)
  └── PageView           (sessionId: index, page, title, durationSeconds, occurredAt)
```

---

## 5. Authentication Architecture

* **Access Token**: JWT signed with `JWT_ACCESS_SECRET`. Expires in 15m (default). Passed in request header `Authorization: Bearer <token>`.
* **Refresh Token**: JWT signed with `JWT_REFRESH_SECRET`. Expires in 7d (default). Stored in HttpOnly, SameSite, Lax cookie (`refreshToken`).
* **Authentication Flow**:
  1. Staff logs in at `POST /api/auth/login`. Returns Access Token + User Profile and sets `refreshToken` cookie.
  2. Client stores Access Token in memory and attaches it to `Authorization` header for protected calls.
  3. When Access Token expires (HTTP 401), client calls `POST /api/auth/refresh` to obtain a fresh Access Token using the `refreshToken` cookie.
  4. Logging out via `POST /api/auth/logout` clears the `refreshToken` cookie.

---

## 6. Authorization & Role-Based Access Control (RBAC)

* **Middleware Layers**:
  * `requireAuth` ([`auth.middleware.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/middlewares/auth.middleware.ts)): Decodes and verifies Bearer JWT. Attaches payload to `req.user`.
  * `authorize(allowedRoles)` ([`rbac.middleware.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/middlewares/rbac.middleware.ts)): Ensures `req.user.role` matches specified roles.
* **Role Permissions**:
  * **Public**: Read published marketing content, submit lead forms, send tracking beacons.
  * **`LEAD_TEAM`**: View unified lead inbox, update lead statuses/notes, inspect visitor analytics and step-by-step visitor journeys.
  * **`ADMIN`**: All Lead Team privileges + manage staff users (`/api/admin/users`), edit/delete site content (`/api/admin/content/*`), upload media files (`/api/admin/upload`).

---

## 7. Frontend ↔ Backend Contract Mappings

### Active Integrations
1. **Contact Form Submission**:
   * Frontend: `ContactForm` ([`contact-form.tsx`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/pages/contact/contact-form.tsx))
   * HTTP Call: `POST /api/contact`
   * Backend: Handled by `submitContact` → `createContactLead` service → `ContactLead` model.
2. **EdTech Consultation Submission**:
   * Frontend: `submitEdTechConsultationLead()` ([`consultation-lead.service.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/services/consultation-lead.service.ts))
   * HTTP Call: `POST /api/consultations`
   * Backend: Handled by `submitConsultation` → `ConsultationLead` model.

### Endpoint & Payload Mismatches Identified

> [!WARNING]
> The following integration discrepancies currently exist and must be resolved when frontend components are updated:

| Feature | Frontend Invocation | Expected Backend Route / Schema | Discrepancy Effect |
|---|---|---|---|
| **Job Application** | `POST /api/careers/apply` ([`application-form.tsx:58`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/pages/careers/application-form.tsx#L58)) | `POST /api/careers/jobs/:jobId/apply` ([`public.routes.ts:41`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/routes/public.routes.ts#L41)) | HTTP 404 Route Not Found |
| **Talent Pool** | `POST /api/talent` ([`careers-client.tsx:47`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/pages/careers/careers-client.tsx#L47)) | `POST /api/careers/talent` ([`public.routes.ts:49`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/routes/public.routes.ts#L49)) | HTTP 404 Route Not Found |
| **Talent Payload** | Payload key `skills` ([`careers-client.tsx:55`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/pages/careers/careers-client.tsx#L55)) | Zod required key `primarySkill` ([`validators/index.ts:46`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/validators/index.ts#L46)) | Zod Validation Error 422 |
| **Visitor Tracking** | No client beacon listener | `POST /api/track` ([`public.routes.ts:58`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/routes/public.routes.ts#L58)) | Traffic analytics unpopulated |

---

## 8. Feature Map

### 1. Inbound Enterprise Contact & CEO Escalation
* **Frontend**: `ContactPage` → `ContactForm` ([`contact-form.tsx`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/pages/contact/contact-form.tsx))
* **Backend**: `POST /api/contact` → `submitContact` → `lead.service.ts` (`createContactLead`)
* **Logic**: If `requestCeo: true` OR `company` + enterprise service (`managed-services`, `cloud`, `ai`), sets `priority = "CEO_DIRECT"`.
* **Database**: `ContactLead` collection + updates `VisitorSession.isConvertedToLead`.
* **Notification**: Triggers Nodemailer to Lead Team (+ CEO if escalated).

### 2. Job Application & Candidate Intake
* **Frontend**: `JobDetailPage` → `JobApplicationForm` ([`application-form.tsx`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/pages/careers/application-form.tsx))
* **Backend**: `POST /api/careers/jobs/:jobId/apply` → `Multer` storage → `applyToJob`
* **Database**: `JobApplication` collection with file URL in `backend/uploads/`.

### 3. Traffic Analytics & Journey Tracking
* **Backend**: `POST /api/track` → `trackPageView` → `VisitorSession` & `PageView` models.
* **Lead Team Access**: `GET /api/lead-team/analytics/overview`, `/live`, `/session/:sessionId`.

---

## 9. Dependency & Reusability Map

### Shared Backend Core Utilities
* **[`crudFactory.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/utils/crudFactory.ts)**: Generates Admin CRUD handlers (`makeAdminCrud`) and public published readers (`makePublicReader`). Powers solutions, case studies, blog, jobs, team, and testimonials.
* **[`apiResponse.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/utils/apiResponse.ts)**: Formats standard responses (`sendSuccess`, `sendError`, `buildPaginationMeta`).
* **[`validate.middleware.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/middlewares/validate.middleware.ts)**: Validates requests against Zod schemas before hitting controllers.

### Shared Frontend Core Utilities
* **[`api-config.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/lib/api-config.ts)**: Resolves API origin URL via `apiUrl(path)`.
* **[`utils.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/lib/utils.ts)**: Classname generator `cn()` (`clsx` + `tailwind-merge`).

### High-Risk System Files
* **`backend/src/config/env.ts`**: Crashes server on startup if required environment variables (`MONGO_URI`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`) are missing or invalid.
* **`backend/src/middlewares/auth.middleware.ts`**: Protects all Lead Team and Admin API routes.
* **`frontend/src/App.tsx`**: Central route registry for the entire client application.

---

## 10. Important Files Registry

* **Backend Entry & Routing**: [`server.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/server.ts), [`routes/index.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/routes/index.ts), [`routes/public.routes.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/routes/public.routes.ts), [`routes/admin.routes.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/routes/admin.routes.ts)
* **Backend Security & Business Logic**: [`auth.middleware.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/middlewares/auth.middleware.ts), [`lead.service.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/services/lead.service.ts), [`analytics.service.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/backend/src/services/analytics.service.ts)
* **Frontend Entry & Routing**: [`App.tsx`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/App.tsx), [`main.tsx`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/main.tsx), [`api-config.ts`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/lib/api-config.ts)
* **Frontend Active Forms**: [`contact-form.tsx`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/pages/contact/contact-form.tsx), [`application-form.tsx`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/pages/careers/application-form.tsx), [`careers-client.tsx`](file:///c:/Users/prajyot/Downloads/mylotic-website/mylotic-website/frontend/src/pages/careers/careers-client.tsx)

---

## 11. Known Issues & Mismatches

1. **Job Application Endpoint 404**: Client calls `/api/careers/apply`, but server routes to `/api/careers/jobs/:jobId/apply`.
2. **Talent Network Endpoint 404**: Client calls `/api/talent`, but server routes to `/api/careers/talent`.
3. **Talent Network Validation Error 422**: Client sends `skills`, server validation requires `primarySkill`.
4. **Missing Client Analytics Tracking**: `/api/track` endpoint exists, but no client-side tracking listener is implemented in `App.tsx`.
5. **Static Content Disconnect**: Content pages currently read from static TS files in `frontend/src/data/` rather than fetching dynamic backend content.

---

## 12. Technical Debt

* Inline `fetch` statements inside form components rather than centralized API services in `frontend/src/services/`.
* Duplicated and slightly inconsistent TypeScript interfaces between `frontend/src/types/` and `backend/src/models/`.
* Lack of global notification/toast context on the frontend for error feedback.

---

## 13. Development Rules

1. **Preserve Decoupled Monorepo Isolation**: Keep `frontend/` and `backend/` strictly separate. Never import files across project boundaries.
2. **Reuse Existing Utilities**: Use `makeAdminCrud` for Admin content controllers, `validateBody(schema)` for route validation, and `apiUrl(path)` for client HTTP requests.
3. **Always Validate Input**: All backend endpoints receiving JSON bodies must have a corresponding Zod schema in `backend/src/validators/index.ts`.
4. **Maintain Role Safeguards**: Apply `requireAuth` and `authorize([...])` on all non-public routes.

---

## 14. Change Impact Protocol

Before implementing any feature request or modification:

1. **Understand Requirement**: Define the scope of the change.
2. **Perform Change Impact Analysis**:
   * Frontend: Identify affected components, pages, and services.
   * Backend: Identify affected routes, controllers, services, and Zod validators.
   * Database: Check Mongoose schema changes or new fields.
   * API Contracts: Check for breaking contract modifications.
   * Security & RBAC: Verify impact on authentication and user roles.
3. **Check Existing Code**: Identify reusable components and services before writing new files.
4. **Present Implementation Plan**: Present a step-by-step summary and risk assessment to the user.
5. **Obtain Approval**: Wait for explicit user confirmation before executing changes.
