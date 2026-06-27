# Muhammad Ahmed — Portfolio

A single-page personal portfolio / résumé website for **Muhammad Ahmed**, a Software
Engineer based in Karachi, Pakistan. It presents a professional summary, technical
skills, work experience, key projects, certifications, education, and languages.

## Tech stack

- **HTML5** — semantic markup (`header`, `main`, `section`, `footer`, `address`
  for the contact block, `time` for experience dates).
- **CSS3** — vanilla CSS using custom properties (CSS variables), Flexbox, and CSS
  Grid for a responsive layout. The stylesheet lives inline in a single `<style>`
  block in `index.html`.
- **Accessibility** — keyboard `:focus-visible` outlines, a `prefers-reduced-motion`
  fallback, and labelled contact links.
- **Inline SVG favicon** — embedded as a data URI, so the site ships with no external
  asset files.
- **No JavaScript, no build step, no dependencies** — it is a fully static page.

## Project structure

```
portfolio/
├── index.html   # The entire site: markup + inline styles
└── README.md    # This file
```

The page is organized as:

- **Header** — name, role, and contact links (email, phone, LinkedIn, location).
- **Main** — content sections: About, Technical Skills, Work Experience, Key
  Projects, Certifications, Education, Languages.
- **Footer** — copyright line.

## Run / preview locally

No tooling is required. Either open the file directly:

```bash
# macOS
open index.html
# Linux
xdg-open index.html
```

…or serve it over a local HTTP server (recommended, mirrors production):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

This is a static site — it can be hosted on any static host (GitHub Pages, Netlify,
Vercel, Cloudflare Pages, Surge, etc.) by serving `index.html`. No build or
deployment configuration is committed to this repository.

> **Live URL:** _not yet configured in this repo._ Add the production URL here once
> the site is deployed.

## License

© 2026 Muhammad Ahmed. All rights reserved.
