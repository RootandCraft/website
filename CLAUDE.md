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

Everything lives in `index.html` (~1,056 lines):
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

- **Booking**: Eventbrite (https://www.eventbrite.ca/o/root-craft-120889367168)
- **Contact**: hello@rootandcraft.ca / 778.990.9822
