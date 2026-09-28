# MOD-WEB-001 — Showroom asset and typography record

Status: candidate at internal review
Date: 2026-09-27

## Typography bridge

| Role | Face | Source | License |
|---|---|---|---|
| All text | Montserrat Variable (wght 100–900) | `@fontsource-variable/montserrat` 5.3.0 (npm, self-hosted) | SIL OFL 1.1 |

The proprietary Modum typeface (DEC-006) remains planned.

## Wordmark

The wordmark is embedded in `components/BrandLogo.tsx` as a 512×154 px raster. Its ink
measures `#2E393F`. The vector source is not in the repository; `public/brand/SOURCES.md`
names two files that are not present.

## Imagery

This iteration contains no images. Every image slot is an empty frame.

Provenance rule: only images produced by the studio are used. Each image is recorded in
the table below when it is added.

| File | Slot | Medium | Subject | Author | Date | Tool or camera |
|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — |

## Image programme

One study object, shown once per service. Minimum sizes are twice the largest displayed
size, so that no image is upscaled.

| Slot | Service | Medium | The image shows | Ratio | Minimum size |
|---|---|---|---|---|---|
| `opening` | — | Render | The object, overall view | 3:2 source, cropped between 1.4:1 and 1.7:1 | 3200 × 2133 px |
| `work-rendering` | Rendering 3D | Render | The object on a neutral ground | 3:2 | 2400 × 1600 px |
| `work-photo-video` | Foto e video | Photograph | Surface and finish, close, in raking light | 4:5 | 1400 × 1750 px |
| `work-catalogs` | Cataloghi e brochure | Catalogue spread | Object, variants and technical data | 1.414:1 | 2000 × 1414 px |
| `work-configurators` | Configuratori di prodotto | Configurator | The finishes of the object, compared | 3:2 | 2400 × 1600 px |
| `work-web` | Web ed e-commerce | Product page | Images, variants and information | 16:10 | 1600 × 1000 px |
| `work-automation` | Strategia AI e automazione | Image series | The object in its variants, consistent rendering | 16:10 | 1600 × 1000 px |
| `studio` | — | Portrait | The studio at work | 4:5 | 1400 × 1750 px |

Notes for production:

- The opening frame changes ratio with the viewport. The object stays inside the central
  area of a 3:2 image, with a margin of about 12% on each side.
- Grounds stay between Warm Paper and Charcoal, so that the product supplies the colour.
- Material is shown on the object, or as a sample with an edge and a shadow.
- A caption states the medium and facts that are true of the object shown.

## Removed from the repository

The five Unsplash files used by Art Direction V3 (`public/studies/`). Two of them were
3D renders by third parties; all five were recorded in `MOD-WEB-001_V3_ASSETS.md`.
