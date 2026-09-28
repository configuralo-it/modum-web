---
name: review-capture
description: Use when capturing the Modum Studio homepage for internal review, refreshing the screenshots in review/, re-running the measured checks of the showroom direction document, checking the page at other viewport sizes, or preparing captures for a design critic.
---

# Review capture

## Overview

Review captures are evidence. They use fixed viewports and fixed file names, carry no trace
of the tooling, and come with measurements read from the page.

Thresholds live in the "Measured checks" table of `docs/MOD-WEB-001_SHOWROOM_DIRECTION.md`;
`scripts/checks.mjs` mirrors them.

## Before starting

- `npm run typecheck` and `npm run build` pass. `npm run lint` cannot run: the repository
  has no ESLint configuration and the command opens an interactive setup.
- The page is served by `npx next dev -p 3100`. Starting a server requires the user's
  consent; stop it when the run ends. The build and the dev server both write `.next`:
  never run them at the same time.
- Browser: chrome-devtools MCP, one instance for the whole run.

## Procedure

Scripts are in `.claude/skills/review-capture/scripts/`. Each `.js` file is one function
expression: pass its text as the `function` argument of `evaluate_script`.

For each viewport of the table:

1. `emulate` with the viewport value. `resize_page` leaves the pixel ratio of the host display.
2. `navigate_page` to `http://localhost:3100/` with `ignoreCache: true`.
3. Run `prepare.js`. Repeat it after every navigation or reload.
4. Run `measure.js` with `filePath` set to a JSON file in a temporary directory.
5. Take the screenshots listed below, saving them with `filePath`.

Then:

6. `node .claude/skills/review-capture/scripts/checks.mjs <desktop.json> <mobile.json>`.
   A failed check is reported, not worked around.
7. At the desktop viewport, run `sweep.js`: horizontal overflow, opening frame and title
   breaks at 23 viewport sizes.
8. Copy changed values into the "Measured checks" table of the direction document.

| Viewport | `emulate` value |
|---|---|
| Desktop | `1440x900x1` |
| Mobile | `390x844x2,mobile,touch` |

| File in `review/` | Viewport | Position | `take_screenshot` |
|---|---|---|---|
| `hero-desktop.jpeg` | Desktop | top | `format: jpeg`, `quality: 90` |
| `work-desktop.jpeg` | Desktop | `#work` | same |
| `approach-desktop.jpeg` | Desktop | `#approach` | same |
| `contact-desktop.jpeg` | Desktop | `#contact` | same |
| `latest-desktop.png` | Desktop | whole page | `fullPage: true` |
| `hero-mobile.jpeg` | Mobile | top | `format: jpeg`, `quality: 90` |
| `latest-mobile.png` | Mobile | whole page | `fullPage: true` |

To reach an anchor, run `() => { location.hash = 'work'; }`. It does not reload the page,
so the preparation stays in place. Return to the top before measuring.

`review/lighthouse.json` and `review/lighthouse-summary.json` come from the CI job, which
audits the deployed preview. A local run does not refresh them.

## Captures for a critic

A model reads a whole-page capture at reduced size. Cut it into screens first:

```bash
magick review/latest-desktop.png -crop x900 +repage /tmp/review/d-%02d.png
```

For the mobile capture the screen is 1688 px high (`-crop x1688`). Add captures of the open
menu and of a focused link: the static captures show neither.

## Common mistakes

| Mistake | Effect |
|---|---|
| Capturing without `prepare.js` | The scrollbar takes 15 px (layout 1425 px wide); the Next.js development indicator appears in the corner |
| Measuring with the page scrolled | The share of the first screen is wrong; `checks.mjs` reports it |
| `resize_page` instead of `emulate` | Captures at the pixel ratio of the host display |
| Building while the dev server runs | `.next` is corrupted; restart the server |
| Reading `latest-*.png` directly | Text is too small to judge |
| Saving captures of other websites in the repository | Third-party material in the tree; keep them in a temporary directory |
