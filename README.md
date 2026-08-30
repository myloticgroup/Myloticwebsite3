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
