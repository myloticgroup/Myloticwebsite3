
# Mylotic Group — Website

Two fully independent projects. Each has its own `package.json`, its own
`node_modules`, its own `.env`, and can be run, deployed, and scaled on
completely separate servers.

```
.
├── backend/    Express + MongoDB API server   -> see backend/README.md
└── frontend/   React + Vite marketing site    -> see frontend/README.md
```

## Quick start (both, on your machine, for local development)

Open two terminals:

```bash
# Terminal 1
cd backend
npm install
cp .env.example .env    # fill in MONGO_URI + JWT secrets
npm run seed:admin      # creates your first Admin login
npm run dev              # -> http://localhost:5000

# Terminal 2
cd frontend
npm install
cp .env.example .env    # leave VITE_API_URL blank for local dev
npm run dev              # -> http://localhost:5173
```

## Deploying to two different servers

1. Deploy `backend/` (e.g. Render, Railway, an EC2/VM, Docker) with its own `.env`.
   Set `CLIENT_URL` to your frontend's deployed URL.
2. Deploy `frontend/` (e.g. Vercel, Netlify, S3+CloudFront) with `VITE_API_URL`
   set to your backend's deployed URL, then `npm run build` — ship the `dist/` folder.

No files are shared between the two — each README covers its own setup,
folder structure, and role-based API routes in detail.
=======
# Mylotic Group — Enterprise Technology & AI Consulting Platform

Production-ready web application and backend platform for Mylotic Group, architected with React 19, TypeScript, React Router 7, Vite, Node.js, Express.js, MongoDB, and Mongoose.

---

## 1. Architecture Overview

### Frontend
- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router 7 (`BrowserRouter`, `<ScrollToTop />`, nested dynamic route matching)
- **Styling**: Vanilla CSS Design Tokens + Tailwind utility layers + Custom font definitions (Inter & JetBrains Mono)
- **Icons**: Lucide React
- **Design System**: Warm editorial theme, zero-layout drift, accessible semantic HTML5 elements

### Backend
- **Framework**: Node.js + Express.js + TypeScript
- **Database**: MongoDB with Mongoose ORM
- **Security**: Zod schema validation, input sanitization, sliding-window IP rate limiting, administrative API key/Bearer token authorization boundary
- **File Uploads**: Multer with MIME verification, magic-byte checking, binary executable rejection, randomized UUID filenames, local and S3-compatible cloud storage abstractions
- **Notifications**: Domain-level event dispatcher with SMTP, Resend, and SendGrid adapters

```
Mylotic-Website/
├── dist/                         # Optimized client production bundle (Vite)
├── public/                       # Static public assets (brand vectors, favicons)
├── server/
│   ├── dist/                     # Compiled Express backend JavaScript
│   ├── src/
│   │   ├── config/               # Database connection (Mongoose) & typed env
│   │   ├── controllers/          # Request handlers for leads, applications & admin
│   │   ├── middleware/           # Rate limiter, auth guard, upload handler, error handling
│   │   ├── models/               # Mongoose schemas (ContactLead, ConsultationLead, JobApplication, TalentLead)
│   │   ├── routes/               # Express routing hierarchy
│   │   ├── services/             # Core business logic, storage providers & email adapters
│   │   ├── app.ts                # Express application setup
│   │   └── server.ts             # Server entrypoint and graceful shutdown listeners
│   └── tsconfig.json             # Server TypeScript configuration
├── src/
│   ├── components/               # Reusable UI components (header, footer, navigation, cards, etc.)
│   ├── data/                     # Structured domain content (solutions, industries, jobs, blog)
│   ├── hooks/                    # React custom hooks
│   ├── lib/                      # Utility functions (cn helper)
│   ├── pages/                    # React Router page views
│   ├── types/                    # Frontend TypeScript interfaces
│   ├── App.tsx                   # Client route mapping & main layout
│   ├── main.tsx                  # React DOM mount entrypoint
│   └── globals.css               # Global stylesheet & design system
├── .env.example                  # Safe configuration template (no secrets)
├── package.json                  # Scripts and dependencies
└── vite.config.ts                # Vite build and development configuration
```

---

## 2. API Endpoints Reference

### Public Lead Endpoints

- `POST /api/contact` — Enterprise contact and practice consultation inquiries
- `POST /api/consultations` — Free EdTech & corporate training workshop bookings
- `POST /api/careers/apply` — Candidate job application submissions with multi-part resume file uploads
- `POST /api/talent` — Private talent community network submissions

### Protected Admin Endpoints

> **Authentication**: Requires `X-Admin-Api-Key: <ADMIN_API_KEY>` or `Authorization: Bearer <ADMIN_API_KEY>` header.

- `GET /api/admin/contact-leads` — List, search, filter, and paginate contact leads
- `GET /api/admin/contact-leads/:id` — Retrieve single contact lead
- `PATCH /api/admin/contact-leads/:id` — Update contact lead lifecycle status (`NEW`, `CONTACTED`, `QUALIFIED`, `CONVERTED`, `CLOSED`) and notes
- `GET /api/admin/consultation-leads` — List, search, filter, and paginate consultation bookings
- `GET /api/admin/consultation-leads/:id` — Retrieve single consultation booking
- `PATCH /api/admin/consultation-leads/:id` — Update consultation status and notes
- `GET /api/admin/applications` — List, search, and filter job applications
- `GET /api/admin/applications/:id` — Retrieve candidate application details and resume URL
- `PATCH /api/admin/applications/:id` — Update application lifecycle status (`APPLIED`, `UNDER_REVIEW`, `SHORTLISTED`, `INTERVIEW`, `SELECTED`, `REJECTED`) and recruiter notes
- `GET /api/admin/talent-leads` — List, search, and filter talent community profiles
- `GET /api/admin/talent-leads/:id` — Retrieve single talent lead
- `PATCH /api/admin/talent-leads/:id` — Update talent lead status

---

## 3. Local Development & Setup

### Prerequisites
- Node.js 20+
- npm 10+
- MongoDB instance (local or MongoDB Atlas connection string)

### Installation & Execution

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env

# 3. Start development servers (frontend Vite on http://localhost:5173 + backend Express on http://localhost:5000)
npm run dev

# 4. Or run client / server individually
npm run dev:client
npm run dev:server
```

---

## 4. Verification Commands

```bash
# Typecheck React frontend
npx tsc --noEmit

# Typecheck Express backend
npx tsc -p server/tsconfig.json

# Build production client and server bundles
npm run build

# Security audit
npm audit

