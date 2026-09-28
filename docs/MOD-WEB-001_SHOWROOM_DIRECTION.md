# MOD-WEB-001 — Showroom direction

Status: candidate at internal review
Date: 2026-09-27

`AGENTS.md` is unchanged and still describes Art Direction V3. This document records a
candidate that departs from it in the points listed under "Differences from AGENTS.md".
`AGENTS.md` is aligned only after the candidate is approved.

## Governing idea

The website presents products as a showroom does: a quiet, well-lit frame, the object in
front, information at reading size beside it.

Identity sets the frame. Product proves the value. Process explains the depth.

## Character

Modum Studio is perceptive, exact, resourceful and commercially lucid.

| Trait | Meaning in practice |
|---|---|
| Perceptive | A product is studied closely (material, proportion, construction, finish) before deciding how to show it. |
| Exact | What is shown corresponds to the product. Captions carry true data. |
| Resourceful | The medium follows the product. Rendering, photography, print, configurators, web and automation are means. |
| Commercially lucid | Every image or tool has a stated commercial purpose. |

Stance: in presentation the studio recedes and the product leads.

## System

### Colour

| Token | Value | Role |
|---|---|---|
| `--paper` | `#FFF7F4` | Ground (verified) |
| `--ink` | `#3C3F45` | Text (verified); 9.99:1 on paper |
| `--ink-soft` | `#6A6D73` | Secondary text; 4.91:1 on paper |
| `--frame` | `#E6D9D2` | Empty frames; ink on frame 7.65:1 |
| `--line` | `rgba(60, 63, 69, 0.22)` | Rules between rows of data |
| `--signal` | `#FF4D00` | Keyboard focus ring only; 3.15:1 on paper |

Colour on the page comes from the images. Panels of flat colour are not used as content.

### Typography

One family: Montserrat Variable, the face closest to the wordmark. It is a bridge until
the proprietary typeface exists (DEC-006). Monospaced type is not used.

| Role | Size | Weight | Notes |
|---|---|---|---|
| Title (h1) | 30–48 px | 400 | Sentence case; 48 px at 1440, 30–32 px at 390 |
| Heading (h2) | 26–36 px | 400 | Sentence case |
| Item heading (h3) | 19–22 px | 500 | Services, method steps |
| Text | 17 px / 1.55 | 400 | Measure below 80 characters |
| Caption | 14 px / 1.5 | 400, title 600 | Status line in secondary ink |
| Voice | 12 px | 500 | Capitals, tracking 0.3em |
| Step numeral | 32–48 px | 300 | Method steps only |

No text is heavier than the wordmark. The voice style repeats the second line of the
wordmark and is reserved for the navigation and for the single word inside an empty frame.

Line breaks are guarded with non-breaking spaces in `lib/content.ts`.

### Identity devices

- Wordmark: 140 px wide in the header at desktop widths, 113 px on mobile.
- Slash: separator wherever items are listed inline (founders, footer, case-study meta).
- Negative space separates sections. Rules appear only between the rows of the services list.
- Numbering appears only on the three method steps, which are a sequence.

### Grid

Twelve columns, gutter 16–28 px, margin 20–56 px, content width up to 1720 px.
The opening frame runs from column 5 to the right edge of the viewport; every other
element sits on the grid.

### Frames

Frames are empty until the studio supplies its own imagery. Each frame has the size and
ratio of the image that will occupy it. Inside the frame, one word names the medium; the
caption beneath states what the image will show, followed by "Immagine in preparazione."

| Format | Ratio | Used for |
|---|---|---|
| `stage` | Height 72% of the viewport | Opening |
| `landscape` | 3:2 | Rendering, configurator |
| `portrait` | 4:5 | Photography, studio portrait |
| `spread` | 1.414:1 | Catalogue double page |
| `screen` | 16:10 | Product page, image series |

### Motion

None. The only state changes are hover, focus and the mobile menu.

## Page sequence

| Anchor | Label | Content |
|---|---|---|
| `#top` | — | Promise, one paragraph, link to contact, opening frame |
| `#work` | Progetto | Internal study: one object, six frames, one per service |
| `#services` | Servizi | Six services; each name links to its frame in the study |
| `#approach` | Metodo | Three steps |
| `#studio` | Studio | Description, founders, portrait frame |
| `#contact` | Contatti | Invitation, e-mail address |

Anchor ids stay in English because the CI review job captures `#work`, `#approach` and
`#contact`.

## Content rules

- Language: Italian.
- Plain sentences in the vocabulary of the trade. No manifesto lines.
- A claim appears only where the page shows the evidence.
- A caption states the image planned for the frame, never a fact about an object that
  does not exist yet.
- Client work is not shown. The study is labelled as an internal study (Modum Studio Study).

Service names on the page and their approved English forms:

| Page | Approved input |
|---|---|
| Rendering 3D | 3D Rendering |
| Cataloghi e brochure | Catalogs & Brochures |
| Foto e video | Photo & Video |
| Configuratori di prodotto | Product Configurators |
| Web ed e-commerce | Web & E-commerce |
| Strategia AI e automazione | AI Strategy & Automation |

## Measured checks

Measured on the local build at 1440×900 and 390×844.

| Check | Threshold | 1440 | 390 |
|---|---|---|---|
| Largest text | 48 px / 32 px | 48 px | 32 px |
| Type families | 1 | 1 | 1 |
| Heaviest text weight | below 700 | 600 | 600 |
| Opening frame, share of first screen | 45% or more | 46.8% | 52.0% |
| Elements in signal orange, static page | 0 | 0 | 0 |
| Figures with a status caption | all | 8 of 8 | 8 of 8 |
| Numerals used as markers | method steps only | 1, 2, 3 | 1, 2, 3 |
| Ruled elements | services list only | services list | services list |
| Horizontal overflow | none | none | none |

## Differences from AGENTS.md

| AGENTS.md | This candidate |
|---|---|
| "Editorial structure", "Large scale shifts" | Image first; largest text 48 px |
| "Signal orange may be used as a restrained accent" | Focus ring only |
| "Montserrat + Poppins are transitional only" | Montserrat Variable as the single bridge family |
| V3 reference bar of six sites | Register taken from furniture manufacturers' own sites |
| Copy in English | Copy in Italian |

## Keep / Kill / Open

**Keep**
- The rule that a caption states only what is shown.
- Static first.
- The services list without cards.
- "Mostrateci il prodotto." and the e-mail address as the contact.

**Kill**
- Expanded capitals at poster scale and monospaced labels.
- Section numbers, the first-screen page index, the material band.
- Stock imagery and third-party renders.
- The configurator fragment that exchanged flat textures. The CSS-only mechanism remains
  in the history of the branch for the moment a study object has real variants.

**Open**
- Imagery: see the image programme in `MOD-WEB-001_SHOWROOM_ASSETS.md`.
- Choice of the study object.
- Which image demonstrates the automation service; the caption in place is a proposal.
- Vector source of the wordmark, needed for any cropped use.
- Wordmark ink (`#2E393F` in the embedded file) against the documented Charcoal (`#3C3F45`).
- Whether the studio portrait frame stays.
- Service names in Italian.
- English version of the page.
- The repository has no ESLint configuration; `npm run lint` starts an interactive setup
  and cannot run unattended.
