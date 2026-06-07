# SEED Lab — Claude Project Instructions

## Project Overview
The SEED Lab (theseedlab.org) is a practical resource centre and app ecosystem for primary PE and wellbeing teachers, with a focus on IB educators. It combines downloadable resources, blog content, and a suite of interactive web apps used daily in the classroom.

## Tech Stack
- **Main site:** Astro 5 (static site framework)
- **Apps:** Plain HTML/CSS/JS (self-contained single-file apps in `/public/`)
- **Class Compass:** React + Vite (lives in `/public/class-compass/`)
- **Hosting:** Cloudflare Pages (auto-deploys from GitHub on push to `main`)
- **Repo:** `PEwithMrLee/seed-resource-centre` via SSH
- **Local path:** `/Users/leemayes/Desktop/Claude/The SEED Lab/Codex copy/really-updated`
- **Branch rule:** Always work on `dev`. Merge to `main` to go live.

## App Inventory
- **PE Challenges** (`/pe-challenges.html`) — Student-facing PE app with 4 challenge categories, progressive difficulty, video demos, and score logging. Runs on any device, no login.
- **Team Quest** (`/team-quest.html`) — Team-based progression app where groups of 3–5 level up through physical and ATL collaboration challenges. IB/ATL aligned G1–G5, syncs to Google Sheets.
- **Class Compass** (`/class-compass/`) — Behaviour support tool grounded in Ross Greene, Siegel, Shanker & Delahooke. Includes Behaviour Translator, 18 strategies, 47 scripts, 30-module course, and Reflection Log.
- **PE Circle / Opening & Closing Circle** (`/circle-app.html`) — Teacher-facing app for opening and closing PE lessons with intention. Tracks student readiness, wellbeing, and ATL skills in real time. Password protected, syncs to Google Sheets.
- **Mission Control Hub** (`/hub.html`) — PIN-protected (7333) dashboard linking to all 4 apps. Designed to be bookmarked on iPad home screen.
- **Known & Noticed** — Not yet built.
- **Life Priorities Energy Tracker** — Not yet built.

## Design System

**Theme:** "Galaxy Greenhouse" — deep space backgrounds with organic green growth accents.

**Colours:**
- Backgrounds: `--space-black: #070A12`, `--deep-navy: #0E1628`
- Green accents: `--moss: #7FB069`, `--sage: #A8C69F`
- Text: `--starlight: #F3E8D0`, `--muted: rgba(243,232,208,0.65)`

**Fonts (Google Fonts):**
- Headings: `Fraunces` (serif, italic options)
- UI/Nav: `Space Grotesk`
- Body: `Atkinson Hyperlegible`

**Navigation:** Home · Resources · Inside My Classroom · Listen & Watch · Field Notes · Say Hello

## Coding Conventions
- Astro pages live in `src/pages/`, components in `src/components/`, data in `src/data/` (JSON files)
- Standalone apps are single HTML files in `public/` — no build step, no framework dependency
- Class Compass is the exception — React + Vite, built separately, output copied to `public/class-compass/`
- Resource metadata lives in `src/data/resources.json` — add new resources here, not hardcoded in pages
- Navigation is controlled by `src/data/navigation.json`
- PDFs are excluded from git (too large) — need separate hosting solution
- CSS lives in `BaseLayout.astro` as global styles using CSS custom properties

## Deployment
- **Always commit to `dev` first**, then merge to `main` to go live
- Push to `main` triggers Cloudflare Pages auto-deploy (~60 seconds)
- SSH is configured for GitHub (`~/.ssh/id_ed25519_github`) — no HTTPS auth needed
- To go live: `git checkout main && git merge dev && git push && git checkout dev`

## What NOT to repeat
- Deployment is via **GitHub push to `main`**, not manual Cloudflare upload
- The site uses **Cloudflare Workers/Pages**, not Netlify — `data-netlify` form attributes won't work
- The owner is a **primary PE/PSPE teacher at an IB school** — content should be practical, teacher-facing, and free of edu-jargon
- User has **ADHD** — keep responses bullet-pointed with clear headers, avoid walls of text
- There is a `/deploy` folder on the Desktop that the other Claude session used — **ignore it**, the source of truth is always the `really-updated` folder
