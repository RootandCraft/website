# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **Root & Craft**, a creative workshop business in North Vancouver. Single `index.html` file with embedded CSS and minimal vanilla JavaScript — no build tools, no dependencies.

## Development

Open `index.html` directly in a browser. No build step required.

For local serving (optional, avoids some browser security restrictions on local files):
```bash
python3 -m http.server 8000
# or
npx serve .
```

## Architecture

Multi-page static site (Nov 2026 restructure). Pages: `index.html`, `workshops/`, `activations/`, `gifting/`, `about/`, `contact/` (each an `index.html`). Shared CSS in `styles.css`, shared JS (scroll reveal + mobile menu) in `main.js`. Nav and footer are repeated in each page — update all six when changing them. Photo gaps are marked with `PHOTO NEEDED` comments. Enquiry CTAs point to the Google Form.

Original single-page layout notes (historical):
- **Lines 1–30**: `<head>` — Google Fonts imports (Cardo, Cormorant Garamond, Moontime), meta tags
- **Lines 31–830**: `<style>` — All CSS, including CSS custom properties and media queries
- **Lines 831–1041**: `<body>` — Page sections in order: nav, hero, intro strip, about, workshops, experience, reviews, gallery, CTA banner, footer
- **Lines 1042–1053**: `<script>` — Intersection Observer for scroll reveal animations (`.reveal` → `.visible`)

Images are in `images/`.

## Design System

CSS custom properties defined at `:root`:
- `--charcoal: #322e2e` — dark backgrounds/text
- `--sage: #818984` — green accent
- `--cream: #f6f2f0` — light background
- `--clay: #cba488` — warm accent
- `--clay-light: #e8d5c4` — lighter warm accent

Mobile breakpoint: **768px** (single-column layout, nav links hidden).

## External Integrations

- **Enquiries**: Google Form (public workshops/Eventbrite retired Nov 2026)
- **Contact**: hello@rootandcraft.ca / 778.990.9822
