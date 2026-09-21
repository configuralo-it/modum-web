# MOD-WEB-001 — V3 Asset & Typography Record

Status: Phase B deliverable
Date: 2026-09-22

## Typography bridge (transitional — DEC-006 proprietary typeface remains planned)

| Role | Face | Source | License |
|---|---|---|---|
| Display / body | Archivo Variable (wght 100–900, wdth 62–125) | `@fontsource-variable/archivo` (npm, self-hosted) | SIL OFL 1.1 |
| Technical / meta | IBM Plex Mono 400, 500 | `@fontsource/ibm-plex-mono` (npm, self-hosted) | SIL OFL 1.1 |

Rationale: Archivo's width axis gives the system real typographic behavior (expanded display
voice, normal text voice) instead of scale-only hierarchy. IBM Plex Mono carries the
technical/catalog layer. Montserrat and Poppins are removed.

## Photography — Modum material studies

All photographs are published on Unsplash under the Unsplash License
(free commercial use, no attribution required; attribution recorded here for provenance).

| File | Subject | Source page | Photographer |
|---|---|---|---|
| `public/studies/material-oak.webp` | Light oak plank surface | https://unsplash.com/photos/light-oak-wood-plank-texture-background-JH_R66BihvA | simon |
| `public/studies/material-textile.webp` | Grey woven textile, close up | https://unsplash.com/photos/a-close-up-of-a-gray-fabric-texture-SWy0WAO12P8 | engin akyurt |
| `public/studies/material-steel.webp` | Brushed steel, cross-directional finish | https://unsplash.com/photos/brushed-silver-metal-texture-with-horizontal-lines-u9enPDMCAVY | Logan Voss |
| `public/studies/object-chair.webp` | Chair, studio light | https://unsplash.com/photos/white-metal-chair-bxLhqZIp2LI | Ellen Qin |
| `public/studies/object-armchair.webp` | Armchair on dark ground | https://unsplash.com/photos/a-modern-orange-armchair-on-a-dark-background-WjCNfeMdtu0 | Bhautik Patel |

Usage rule: these images are presented as **material studies** (what the photo actually
shows), never as client work or products made by the studio. Captions state only facts
visible in the photograph.

## Removed as primary visual

The procedural chair SVG (`components/ProductStudy.tsx`) is deleted per the V3 handoff
Phase B decision: procedural geometry cannot carry premium art direction.
