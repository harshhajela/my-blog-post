# MyBlogSpace

A fast, responsive personal blog built with **Angular 16** and **Contentful (headless CMS)**. Designed as a portfolio‑quality project: clean UI, accessible typography, SEO‑ready, and deployable as a static site (S3 or GitHub Pages).

---

## ✨ Overview
MyBlogSpace is a single‑page application for publishing long‑form posts with a modern card layout and smooth navigation. Content is managed in **Contentful** and delivered via API to the Angular app. The goal is to showcase front‑end craft, sound content modeling, and low‑cost static hosting.

---

## 🧩 CMS: Contentful (What & Pricing Snapshot)
**What:** Contentful is a **headless CMS**—content is created and managed in a web UI and delivered over APIs (CDA/GraphQL) to any frontend (web, mobile, etc.). Decoupling keeps the SPA fast and lets content evolve without redeploys.

**Plans (as of Sep 2025):**
- **Free — $0/forever**: up to **10 users**, **2 roles**, **2 locales**, **100K API calls/month**, **50 GB/month** CDN bandwidth, and **1 Starter Space** (with **25 content types**, **2 environments**, **10K records**).
- **Lite — $300/month**: includes Free features plus up to **20 users**, **3 roles**, **3 locales**, **1M API calls/month**, **100 GB/month** CDN bandwidth, and editorial features (comments, tasks, scheduled publishing, live collaboration).
- **Premium — custom pricing**: higher quotas, advanced governance/security, SLA, and multiple/custom Spaces.

> Exact limits and pricing can change; see Contentful’s pricing page for the latest details.

---

## ✅ Features
- Responsive layout with polished article cards
- Themed UI (light/dark friendly styles)
- Blog list + individual post view
- Contact page with quick links
- SPA routing with fallback for static hosting
- Basic SEO meta tags & shareable Open Graph images (project‑ready)
- Performance‑minded: lazy assets, minimal blocking
- **Contentful integration**: posts, authors, tags fetched via API

---

## 🧰 Tech Stack
- **Angular 16**, TypeScript, RxJS
- SCSS (component‑scoped styles)
- Angular Router
- **Contentful** (headless CMS)
- (Optional) AWS S3 static website hosting or GitHub Pages

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 16 (`npm i -g @angular/cli@16`)
- A **Contentful** account (Free plan is sufficient for this project)

### Install & Run
```bash
npm ci
npm start           # ng serve → http://localhost:4200
```

### Contentful setup (high‑level)
1) Create a Space (Free plan’s Starter Space is fine).  
2) Model basic types (e.g., **Post**, **Author**, **Tag**).  
3) Generate **Content Delivery API (CDA)** token and note **Space ID**/**Environment**.  
4) Provide these values locally via `src/environments/environment.ts` (this repo ships an `environment.example.ts` template).

---

## 🔐 Environments & Secrets
Real secrets should never live in the frontend. This repo ignores Angular env files:

- `src/environments/environment.ts` (ignored)
- `src/environments/environment.prod.ts` (ignored)

Use the provided template:
```bash
cp src/environments/environment.example.ts src/environments/environment.ts
```
Update keys/URLs locally as needed.

---

## 🏗️ Build
```bash
npm run build       # ng build
# outputs to: dist/
```

---

## 🌐 Deploy (static hosting)

**Option A — AWS S3 (recommended for custom domain)**
1. Enable S3 static website hosting (index & error: `index.html`).
2. Upload `dist/<project>/browser` to the bucket.
3. Set cache headers (long‑cache everything except `index.html`).
4. (Optional) Put CloudFront + ACM in front for HTTPS & CDN.

**Option B — GitHub Pages**
1. Enable Pages for the repository.
2. Use a small GitHub Action to build and publish `dist/…/browser`.

> SPA note: ensure 404s rewrite to `index.html`.

---

## 📁 Project Structure (high‑level)
```
src/
  app/
    header/           # top navigation
    home/             # landing page + latest articles
    blogs/            # list view of posts
    blog-post/        # single post view
    contact/          # contact/info page
    services/         # shared app services
    to-html.pipe.ts   # safe HTML/markdown transform
  assets/
    images/           # covers, previews
  environments/
    environment.example.ts
```

---

## 🧪 Quality Targets
- Lighthouse ≥ 95 (Perf/SEO/Best Practices)
- Accessible colors, focus states, reduced‑motion support

---

## 🗺️ Roadmap (nice‑to‑have)
- Tag/category filters & client‑side search
- RSS feed & sitemap generation
- Contentful/Markdown pipeline (optional)
- Basic analytics (privacy‑friendly)

---

## 📝 License
MIT © Harsh Hajela