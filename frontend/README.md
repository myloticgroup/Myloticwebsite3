# Mylotic Frontend

React + Vite marketing site. Runs completely independently of the backend —
deploy it as a static build on its own host (Vercel, Netlify, S3/CloudFront, etc.).

## Folder structure

```
frontend/
├── src/
│   ├── pages/        # route-level pages (home, solutions, work, blog, careers, contact, company...)
│   ├── components/    # layout + reusable UI + home-page sections
│   ├── data/          # static content currently powering the pages (see note below)
│   ├── services/      # fetch calls to the backend API
│   ├── lib/
│   │   ├── utils.ts        # className helper
│   │   └── api-config.ts   # backend base URL (see below)
│   └── types/          # shared TypeScript types
├── public/             # static assets
└── index.html
```

## Run it

```bash
npm install
cp .env.example .env
npm run dev
```

Opens at `http://localhost:5173`.

## Connecting to the backend

`src/lib/api-config.ts` controls where API calls go:

- **Local dev (default)** — leave `VITE_API_URL` blank in `.env`. The Vite dev
  server proxy in `vite.config.ts` forwards `/api` and `/uploads` requests to
  `http://localhost:5000`, so no CORS setup is needed locally.
- **Separate servers / production** — set `VITE_API_URL="https://your-backend-host"`
  in `.env` before building. Make sure the backend's `CLIENT_URL` env var is set
  to this frontend's deployed origin so its CORS policy allows the requests.

## Note on data

Most pages (`Solutions`, `Work`, `Blog`, etc.) currently render from the static
files in `src/data/`. The backend now has live endpoints for all of this content
(`GET /api/solutions`, `/api/work`, `/api/blog`, ...) — swapping each page from
its static import to a `fetch(apiUrl("/api/..."))` call is the next step to make
the site fully data-driven from the Admin panel. The Contact form, EdTech
Consultation form, and Careers pages already call the backend directly.
