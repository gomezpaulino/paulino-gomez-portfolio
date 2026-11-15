# Paulino Gómez — Portfolio

Single-page portfolio for Paulino Gómez's websites business: the destination
of the "Website by Paulino Gómez" credit link on the sites he builds
(Los Chamos x La Calle, Grotto, An Dún Medical Practice).

- Language: Spanish first; English version planned for the NY market.
- No prices on the page: quotes happen on WhatsApp, per market and business size.
- No database. Static site, no backend, no tracking.

## Stack

React 18 + Vite + TypeScript + Tailwind CSS, same setup as the
Grotto / Los Chamos project. Design tokens (Fraunces, Great Vibes,
Plus Jakarta Sans; amber / verde / crema scales) are shared with it.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build into `dist/`
- `npm run typecheck` — TypeScript check
- `npm run lint` — ESLint

## Deploy

Cloudflare Pages, project `paulino-gomez` → https://paulino-gomez.pages.dev/

- Build command: `npm run build`
- Output directory: `dist`
