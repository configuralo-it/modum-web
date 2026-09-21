# MOD-WEB-001 — V3 Design Rationale

Status: internal review candidate
Date: 2026-09-22

## Governing idea — everything on the page is true

The brand promise is reducing the distance between the real product and what people can
perceive. V3 applies that promise to the site itself: every visual element is a real,
verifiable artifact. Photography is real and its captions state only what the photograph
shows; the editorial sheets are real typographic exercises by the studio; the configurator
is a real, working interaction fragment; the page index lists the actual document. Nothing
annotates for atmosphere. Where content does not exist yet (client work), the page says so
in plain words instead of simulating it.

## System

- **Ground / ink / accent** — Warm Paper `#FFF7F4`, Charcoal `#3C3F45`, signal orange
  `#FF4D00` reserved for micro-gestures: the full stop of the statement, the study slash,
  selection and focus states, the founders' divider.
- **Typography** — two voices. Archivo Variable at width 125 is the display voice (statement,
  study titles, services, contact); IBM Plex Mono is the technical voice (captions, labels,
  index). Body text is Archivo at normal width. Hierarchy comes from width and
  weight behavior, not from scale alone. The proprietary Modum typeface (DEC-006) remains
  the destination; this is the bridge.
- **Identity as structure** — the slash crops the hero photograph (a clip-path at the
  slash angle) and prefixes each study title; the wordmark stays at controlled sizes.
  The orange square full stop after "VISIBLE" is the page's proprietary micro-mark.
- **Grid** — one document grid with hairline rules; statement indents and section columns
  share the same column unit. Full-bleed passages (material diptych, dark object panel)
  break the text grid deliberately; everything else sits on it.
- **Rhythm** — five numbered passages in one continuous document, indexed on the first
  screen. A single dark passage ("A chair is never just a chair", with the armchair
  photograph) is the page's one inversion.
- **Static first** — no motion anywhere. Every screen must hold as a still. The only
  state change is the configurator's material selection, implemented with radio inputs
  and CSS alone; it works without JavaScript and with the keyboard.

## Content honesty rules applied

- Client work is deferred and the page says so explicitly in the Selected Studies intro.
- Photographs are licensed (Unsplash license) and recorded with photographer and source in
  `MOD-WEB-001_V3_ASSETS.md`; captions name the subject factually and claim no authorship.
- No invented clients, metrics, awards, testimonials, or fake interface data.

## KEEP / KILL / OPEN

**KEEP**
- The truth-first content rule and factual mono captions.
- The staircase statement with the orange full stop.
- The slash-cropped hero object; the dark armchair passage.
- The working CSS-only configurator as Study 03.
- The services catalog index (no cards); the first-screen page index.

**KILL (from previous iterations)**
- The procedural chair SVG and every decorative annotation attached to it.
- Reveal-on-scroll machinery and hero parallax (InteractionLayer).
- Montserrat/Poppins as system faces.
- The oversized background wordmark as hero texture.

**OPEN**
- Real Modum photography and 3D renders to replace the sourced placeholders study by study.
- The proprietary typeface (DEC-006) and the type system's final cut.
- Whether the editorial study should become a photographed printed artifact.
- Motion, only after the static system passes Control Room review, and only with a job.
- Second-level pages (studies as case-study pages) on the existing data architecture.
