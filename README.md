# 🎬 TMDB Explorer (The Movie Database)

A **React + TypeScript** web app to explore **movies, TV shows, and people** using **The Movie Database (TMDB) API**. It features trending and free‑to‑watch discovery, rich detail pages, and dedicated cast & crew and person views — all powered by **React Query** caching for fast, smooth UX.

---

## ✨ Features

- **Trending & Free‑to‑Watch discovery** with quick toggles (time window & media type)
- **Global search** across movies, TV shows, and people (multi‑type results)
- **Detailed Movie/TV pages** with overview, metadata, and credit summaries
- **Cast & Crew pages** with full role breakdowns
- **Person profile pages** with biography and external IDs
- **Optimized data fetching** using React Query caching and suspense‑friendly loading states

---

## 🧰 Tech Stack

- **React + TypeScript**
- **Vite** — fast dev server & optimized builds
- **React Router** — client‑side routing
- **@tanstack/react-query** — API state management & caching
- **Axios** — HTTP client
- **Tailwind CSS** — utility‑first styling

---

## ✅ Requirements

- **Node.js 18+** (recommended)
- **TMDB API key**

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

The API key is consumed by:

- `src/api/axiosConfig.ts`
- `src/api/config.ts`

> ⚠️ Never commit your API key to a public repository.

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

---

## 🧭 Routing Overview

Defined in `src/routes/index.tsx`:

- `/` — Home (Hero)
- `/details/:type/:id` — Movie / TV details
- `/cast-crew/:type/:id` — Cast & crew list
- `/person/:id` — Person details

---

## 🗂️ Project Structure

```txt
src/
  api/               # Axios client & TMDB helpers
  components/        # Reusable UI components
  hooks/             # React Query hooks
  pages/             # Page-level views (Home, Details, CastCrew, Person)
  routes/            # Route configuration
  types/             # Shared TypeScript types
  utils/             # Helpers (image URLs, formatters, etc.)
```

---

## 📡 Data Fetching

All TMDB requests are routed through a centralized helper:

- `fetchFromTMDB()`

This function reads the **base URL** and **API key** from environment variables. React Query hooks (in `src/hooks`) wrap these calls to provide:

- Request caching
- Automatic refetching
- Loading & error state handling

---

## 🧪 Notes on API Usage

This project depends on TMDB data. When deploying publicly:

- Ensure your API key has sufficient permissions
- Follow TMDB branding & attribution guidelines

---

## 📦 Deployment

Vite outputs static assets that can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

Build the app:

```bash
npm run build
```

Then deploy the generated `dist/` folder.

---

## 📣 Credits

Data provided by **The Movie Database (TMDB)**.

> This product uses the TMDB API but is not endorsed or certified by TMDB.
