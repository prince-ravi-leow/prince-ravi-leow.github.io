# My personal academic website

Built with [Astro](https://astro.build/).

## Requirements

- Node.js 22.23.4 or newer
- npm 9.6.5 or newer

On macOS, `brew install node` provides both.

## Run

```sh
npm install      # once, to install dependencies
npm run dev      # dev server with live reload at http://localhost:4321
```

To preview on a phone on the same network, run `npm run dev:phone` instead and
open the "Network" address it prints.

## Build

```sh
npm run check    # type-checks the project
npm run build    # type-checks, then writes the static site to dist/
npm run preview  # serves dist/ locally
```

## Deploy

Pushing to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). The workflow skips pushes that change only
`README.md`, `.gitignore`, or both. A failed type check stops the deploy.

## Layout

- `src/pages/index.mdx`: main homepage content, written in MDX
- `src/components/Masthead.astro`: photo, name and profile links
- `src/components/HeroVideo.astro`: looping demo clip and caption
- `src/components/ExternalLink.astro`: opens external links in a new tab and supports optional icons
- `src/layouts/Base.astro`: page shell, metadata, footer and light/dark switch
- `src/styles/global.css`: all styling, including light and dark colours
- `src/assets/`: avatar and demo clip
- `public/`: files served as-is, such as `cv.pdf`
