Project Overview
The SEED Lab (theseedlab.org) is a practical resource centre and app ecosystem for primary PE and wellbeing teachers, with a focus on IB educators. It combines downloadable resources, blog content, and a suite of interactive web apps used daily in the classroom.
Owner context

Primary PE / PSPE teacher at an IB PYP school
Has ADHD — keep all responses bullet-pointed with clear headers, no walls of text
Responses should be practical, teacher-facing, and jargon-free


Tech Stack

Main site: Astro 5 (static site framework)
Apps: Plain HTML/CSS/JS (self-contained single-file apps in /public/)
Class Compass + Known & Noticed: React + Vite (separate repos)
Hosting: Cloudflare Pages (auto-deploys from GitHub on push to main)
Repo: PEwithMrLee/seed-resource-centre via SSH
SSH key: ~/.ssh/id_ed25519_github
Local source of truth: /Users/leemayes/Desktop/Claude/The SEED Lab/Codex copy/really-updated/


Source of Truth — Critical

really-updated/ is the one and only source of truth for the Astro site and all deployed apps
deploy/ folder is retired — it was used by earlier sessions but is no longer the approach. Ignore it.
App files (HTML) go into really-updated/public/ before deploying
React apps (Class Compass, Known & Noticed) have their own repos/folders and build separately


Deploy Pipeline

Edit files in really-updated/
Commit and push to main branch
Cloudflare Pages auto-deploys in ~60 seconds
Only the "Set Up & Apps" session handles GitHub pushes — app sessions build and hand off, they do not push independently
No manual Cloudflare dashboard uploads needed


Previously two sessions were pushing to main independently — this caused conflict risk. All deploys now go through one session.


Branch Rule

There is now one branch: main — the dev branch was deleted
Push directly to main; Cloudflare deploys automatically


App Inventory & Status
PE Challenges — public/pe-challenges.html

Status: LIVE at theseedlab.org/pe-challenges.html
Student-facing, no login, 4 challenge categories with progressive difficulty
Throw & Catch activity added (replaced Standing Long Jump)
Still needed: Film videos for Throw & Catch (all 3 levels blank), Soccer Learn It video missing, Firebase score sync not connected

PE Circle / Opening & Closing Circle — public/circle-app.html

Status: BUILT LOCALLY, NOT YET DEPLOYED
Teacher-facing, password: 733333, syncs to Google Sheets
Apps Script URL: Version 2 — AKfycbwvKOs... (correct one)
Blocker: File not yet pushed to GitHub — only in local deploy folder
Still needed: Push to GitHub, test closing circle with real students, populate real student roster, Google Sheets dashboard not built yet

Team Quest — public/team-quest.html

Status: BUILT LOCALLY, NOT YET DEPLOYED
Team-based IB/ATL progression game, G1–G5, 3,084 lines, Google Sheets sync
Default teacher password: seed2025 — change before distributing to staff
Apps Script URL not pre-filled — teacher must add in Unit Setup
Blocker: Not pushed to GitHub yet
Still needed: Deploy, test on iPad Safari, teacher adds their own Apps Script URL

Class Compass — behaviour-seed-lab/ (React + Vite)

Status: BUILT, DEPLOY PENDING
Behaviour support tool: 18 strategies, 47 scripts, 30-module course, Reflection Log
Blockers before deploying:

_redirects file (containing /* /index.html 200) must be created in public/ folder
ForceLog component was added outside its build session — verify src/components/ForceLog/ForceLog.jsx exists and doesn't break the build


Target URL: compass.theseedlab.org (subdomain, separate Cloudflare Pages project)
earnedBadges has no setter — badges not writing to localStorage (minor gap)

Force Focus Log (Life Priorities) — embedded in Class Compass

Status: BUILT LOCALLY, NOT YET DEPLOYED
Lives at behaviour-seed-lab/src/components/ForceLog/ — not a standalone app
Accessible via More menu in Class Compass bottom nav, route: force-log
Apps Script deployed and connected, running on localhost:5174
Decision needed: Keep embedded in Class Compass, or spin out as its own app?
Blocker: Class Compass not yet deployed — this comes with it

Mission Control Hub — public/hub.html

Status: LIVE
PIN: 7333, links to all 4 live apps, designed for iPad home screen bookmark
Still needed: Add Known & Noticed card and Force Log card when those apps deploy

Known & Noticed — connection-seed-lab/ (React + Vite)

Status: IN PROGRESS, Phase 1 complete
Teacher relationship-building app: name learning, spaced repetition, trust-building
Dev server: port 5175 — start with npm run dev -- --port 5175 from connection-seed-lab/
localStorage key: known-and-noticed-v1
Still needed: Add student flow (currently mock data only), CSV import, spaced repetition logic (nextReviewAt not calculated), deploy to theseedlab.org


Website — theseedlab.org (Astro)
Pages

src/pages/index.astro — homepage
src/pages/resources.astro — resources hub
src/pages/classroom.astro — apps showcase (Inside My Classroom)
src/pages/blog.astro — Field Notes
src/pages/about.astro — about page
src/pages/say-hello.astro — contact form
src/pages/blog/[slug].astro — individual blog posts
src/pages/resources/[slug].astro — individual resource pages
Missing: Listen & Watch page — nav link currently 404s

Data files

src/data/resources.json — all resource metadata (add here, not hardcoded)
src/data/navigation.json — controls nav links

Known issues on live site

Contact form broken — uses data-netlify attribute but site is on Cloudflare (needs rewrite)
www.theseedlab.org has no DNS record — only root domain works
PDFs excluded from git — download buttons currently 404 (no hosting solution yet)
lee-and-gatis.jpg is 2.7MB — flag for compression
new-logo-concept.png in public/ but referenced nowhere — safe to delete


Design System — Galaxy Greenhouse
Theme: Deep space backgrounds with organic green growth accents
Colours:

Backgrounds: --space-black: #070A12, --deep-navy: #0E1628
Green accents: --moss: #7FB069, --sage: #A8C69F
Text: --starlight: #F3E8D0, --muted: rgba(243,232,208,0.65)

Fonts (Google Fonts):

Headings: Fraunces (serif, italic options)
UI/Nav: Space Grotesk
Body: Atkinson Hyperlegible

Global styles: src/layouts/BaseLayout.astro

Navigation
Home · Resources · Inside My Classroom · Listen & Watch · Field Notes · Say Hello

Coding Conventions

Astro pages: src/pages/, components: src/components/, data: src/data/
Standalone apps: single HTML files in public/ — no build step, no framework
React apps (Class Compass, Known & Noticed): separate Vite projects, built and deployed independently
CSS lives in BaseLayout.astro as global styles using CSS custom properties
PDFs excluded from git — need separate hosting solution


Session Organisation
How sessions are structured
Each Claude session has a focused purpose. App sessions build. One deploy session pushes to GitHub.
SessionPurposePushes to GitHub?Set Up & AppsDeploy pipeline, GitHub pushes, site maintenanceYES — only this oneOpening & Closing Circle Appcircle-app.html developmentNoPE Challengespe-challenges.html developmentNoTeam Questteam-quest.html developmentNoClass CompassReact app developmentNoKnown & NoticedReact app developmentNoLife Priorities (Force Log)Embedded in Class CompassNoGalaxy DesignVisual/CSS work on Astro siteNoCode UpdatesAstro site structure, data, navNoCentral Dashboardhub.htmlNo
Starting every session — paste this audit prompt

Session audit — answer briefly before we start:

What is this session's main focus?
Which files are we likely to touch?
What was the last thing we worked on or decided in this thread?
What's unfinished or next?
Any warnings — broken things, dependencies, or gotchas?



Open Decisions (need a choice, not just a task)

Force Focus Log: Keep embedded in Class Compass, or spin out as its own standalone app?
PDFs: How to host them? Options: Cloudflare R2, Google Drive direct links, external file host
www. DNS: Add a CNAME for www.theseedlab.org pointing to the root
Contact form: Rewrite for Cloudflare (use a Cloudflare Worker or third-party form service like Formspree)
Listen & Watch page: Build it or remove the nav link


What NOT to repeat in any session

Deployment is via GitHub push, not manual Cloudflare upload
deploy/ folder is retired — source of truth is really-updated/
SSH is configured — no HTTPS auth needed
The site is on Cloudflare Pages, not Netlify — data-netlify attributes won't work
Only the "Set Up & Apps" session pushes to GitHub
dev branch no longer exists — push directly to main
The owner is a primary PE/PSPE teacher at an IB school — keep everything practical and jargon-free
User has ADHD — bullet points and clear headers always, no walls of text


That's the full updated file. Here's what changed from your original:

Added "Source of Truth" section — deploy/ retired, really-updated/ is canonical
Added "Branch Rule" — dev deleted, push directly to main
Added "Deploy Pipeline" — clarified which session pushes to GitHub
App Inventory expanded — every app now has status, blockers, and what's still needed
Added "Session Organisation" table — who does what, who deploys
Added "Open Decisions" section — things that need a choice, not just work
Merged the "What NOT to repeat" list with new gotchas from across all sessions