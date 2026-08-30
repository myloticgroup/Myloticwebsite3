# Mylotic Backend

Express + MongoDB API. Runs completely independently of the frontend — deploy it
on its own server/host, port, or process manager.

## Folder structure

```
backend/
├── src/
│   ├── config/         # env validation, MongoDB connection
│   ├── models/         # Mongoose schemas (User, ContactLead, Solution, ...)
│   ├── middlewares/     # auth (JWT), RBAC, rate limiting, validation, errors
│   ├── controllers/
│   │   ├── public/     # no-auth: content browsing, form submissions, tracking
│   │   ├── leadTeam/   # requires ADMIN or LEAD_TEAM login
│   │   └── admin/      # requires ADMIN login
│   ├── routes/          # maps URLs -> controllers, applies auth per group
│   ├── services/        # business logic (lead escalation, analytics, email, upload)
│   ├── validators/      # zod input-validation schemas
│   ├── scripts/         # seedAdmin.ts — creates the first Admin login
│   └── server.ts        # entry point
└── uploads/              # resumes & images written by multer (gitignored)
```

## Run it

```bash
npm install
cp .env.example .env
```

Edit `.env`:
- `MONGO_URI` — a local MongoDB or a free MongoDB Atlas cluster
- `JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET` — any long random strings
- `CLIENT_URL` — the frontend's origin (so CORS allows it), e.g. `http://localhost:5173` locally, or your deployed frontend URL in production
- SMTP fields are optional — leave blank and notifications just log to the console

Create your first Admin login (there's no public signup by design):
```bash
npm run seed:admin
```

Start the API:
```bash
npm run dev        # dev, auto-reload
# or
npm run build && npm start   # production
```

The API listens on `PORT` (default `5000`) at `http://localhost:5000/api/...`.
Health check: `GET /api/health`.

## The three roles

| Role | Auth | Routes |
|---|---|---|
| Public visitor | none | `GET /api/solutions`, `/api/work`, `/api/blog`, `/api/careers/jobs`, `/api/testimonials`, `/api/company/team`; `POST /api/contact`, `/api/consultations`, `/api/track` |
| Lead Team | JWT, role `LEAD_TEAM` or `ADMIN` | `GET /api/lead-team/leads`, `PATCH /api/lead-team/leads/:type/:id/status`, `GET /api/lead-team/analytics/overview`, `/live`, `/session/:sessionId` |
| Admin | JWT, role `ADMIN` | `POST/PUT/DELETE /api/admin/content/*` (solutions, case studies, blog, jobs, team, testimonials), `POST /api/admin/upload`, `POST /api/admin/users` |

Log in via `POST /api/auth/login`, then send the returned `accessToken` as
`Authorization: Bearer <token>` on Lead Team / Admin requests.
