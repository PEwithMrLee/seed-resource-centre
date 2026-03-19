# SEED

SEED is a simple, elegant education resource centre built with Astro. It is designed for teachers first, with space to expand later for parents and students.

## What is included

- Static-first Astro project
- Pages for Home, Resources, Blog, About, and Coming Soon
- Reusable `ResourceCard` component
- Structured content stored in JSON
- Four example resources:
  - downloadable poster
  - teaching tip card
  - short blog post
  - YouTube video resource
- GitHub Pages workflow for deployment

## Project structure

```text
/
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── package.json
└── README.md
```

## Getting started

### 1. Install Node.js

Install Node.js 20 or newer. Astro works well on current LTS releases.

You can check your version with:

```bash
node -v
npm -v
```

### 2. Install dependencies

From the project root, run:

```bash
npm install
```

### 3. Start the local development server

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:4321`.

### 4. Build for production

```bash
npm run build
```

The finished static site will be created in the `dist/` folder.

### 5. Preview the production build

```bash
npm run preview
```

## Editing content

### Add or change resources

Edit:

`src/data/resources.json`

Each resource is an object with fields like:

- `title`
- `type`
- `audience`
- `description`
- `tagline`
- `category`
- `ctaLabel`
- `href`

### Add or change blog posts

Edit:

`src/data/blog-posts.json`

Each post includes:

- `title`
- `date`
- `summary`
- `content`

## Deploying with GitHub Pages

This project already includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

### 1. Create a GitHub repository

Create a new repository on GitHub and push this project to the `main` branch.

### 2. Update the Astro site URL

Open `astro.config.mjs` and replace:

```js
site: "https://example.com"
```

If you are deploying to a project site like `https://username.github.io/seed`, also add a `base` value:

```js
export default defineConfig({
  site: "https://username.github.io",
  base: "/seed"
});
```

If you are deploying to `https://username.github.io/` as the main site, you usually only need:

```js
export default defineConfig({
  site: "https://username.github.io"
});
```

### 3. Enable GitHub Pages

In your GitHub repository:

1. Go to `Settings`
2. Open `Pages`
3. Under `Build and deployment`, choose `GitHub Actions`

### 4. Push changes

Every push to `main` will trigger the workflow and deploy the site.

## Optional deployment via a GitHub-connected host

If you prefer a simpler UI-based deployment, you can also connect the GitHub repository to services like Netlify or Vercel.

Use:

- Build command: `npm run build`
- Output directory: `dist`

## Notes for beginners

- Start by editing the JSON files before changing the layout.
- Keep each new resource as one small object in `src/data/resources.json`.
- Reuse the `ResourceCard` component when you add new sections.
- If you later want a CMS, this structure is a good base for one.
