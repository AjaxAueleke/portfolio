# Muhammad Ahmed — Portfolio

A modern, fast, single-page personal portfolio for **Muhammad Ahmed**, a Backend &amp; DevOps
Software Engineer. Hand-built from scratch (no template, no framework, no build step) — just
semantic HTML, CSS and a little vanilla JavaScript, so it loads instantly and is trivial to host.

## Features

- Responsive layout with a sticky nav, animated scroll-reveal, and a dark/light theme toggle
  (persisted to `localStorage`, respects OS preference on first visit).
- Sections: hero, about, experience timeline, selected projects, skills, education &amp; certifications, contact.
- Accessible (skip link, focus-visible outlines, semantic landmarks, `prefers-reduced-motion`) and
  SEO-friendly (meta description, Open Graph, inline SVG favicon).

## Tech

Vanilla **HTML · CSS · JavaScript**. Fonts: Inter + JetBrains Mono (Google Fonts). No dependencies.

## Structure

```
index.html    # markup + content
style.css     # theme tokens + all styling
script.js     # theme toggle, scroll-reveal, sticky-nav state
```

## Run locally

```bash
# any static server works, e.g.:
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy (Surge)

```bash
npx surge . low-cows.surge.sh
```

## Live

[low-cows.surge.sh](https://low-cows.surge.sh)
