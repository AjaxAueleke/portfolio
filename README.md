# Muhammad Ahmed — Portfolio

A fast, single-page personal portfolio for **Muhammad Ahmed**, a Backend &amp; Systems Engineer.
Hand-built from scratch — no template, no framework, no build step — just semantic HTML, CSS and a
little vanilla JavaScript, so it loads instantly and is trivial to host.

## Design

An **engineering-datasheet** language: a consistent label-gutter layout (mono field-label | content),
hairline rules, a faint drafting-grid background, and a single signal-orange accent used with restraint.
The hero is a typeset identity record (`focus / stack / history / status`) with one orchestrated load
sequence. Light "drafting paper" theme by default, with a coherent dark variant.

## Features

- Coherent token-based design system (colour, type, spacing) driving both light and dark themes.
- Theme toggle persisted to `localStorage`, following the OS preference on first visit.
- Scroll-spy nav, accessible (skip link, focus-visible, semantic landmarks, `prefers-reduced-motion`,
  WCAG-AA contrast) and degrades gracefully without JavaScript.
- SEO-friendly: meta description, Open Graph, inline SVG favicon, `sitemap.xml`, `robots.txt`.

## Tech

Vanilla **HTML · CSS · JavaScript**. Type: **IBM Plex Mono + IBM Plex Sans** (Google Fonts). No dependencies.

## Structure

```
index.html    # markup + content
style.css     # design tokens + all styling
script.js     # theme toggle, hero load sequence, scroll-spy, sticky-nav state
sitemap.xml   # single canonical URL (it's a one-page site)
robots.txt    # allow all + sitemap reference
```

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

Hosted on **GitHub Pages** from the `master` branch root — every push to `master` republishes automatically.

## Live

[ajaxaueleke.github.io/portfolio](https://ajaxaueleke.github.io/portfolio/)
