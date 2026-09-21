# MOD-WEB-001 — V3 Gap Analysis

Status: Phase A deliverable (audit before edit)
Date: 2026-09-22
Basis: live preview at `https://configuralo-it.github.io/modum-web/` (desktop 1440×900, mobile 390×844) compared against the six V3 references, studied live.

## Method

Screenshots of the deployed v2.6.1 build were compared against first screens and structure of:
Teenage Engineering, Vitsœ, Porto Rocha, Bakken & Bæck, Actual Source, Formafantasma.

The comparison looked for root causes of the quality gap, not visual symptoms.

## What the references share

Observed live, the six sites differ radically in style but agree on principles:

1. **Committed content leads.** Every first screen is carried by a real asset: photography of real product in real context (Vitsœ), authored illustration (Teenage Engineering), a photographed book spread (Porto Rocha), work samples (Bakken & Bæck, Actual Source), or pure text treated as literature (Formafantasma). None leads with procedural or placeholder art.
2. **Typography has authored behavior.** Compressed industrial grotesques at poster scale (Teenage Engineering), a typewriter/catalog mono system (Actual Source), a book serif set like a preface (Formafantasma), a plain confident grotesque (Vitsœ). The face and its handling *are* the identity; scale alone is never the trick.
3. **Every data-like element is real data.** EP version numbers, project years, dimensions, a live clock with city and date, client names. Nothing annotates for atmosphere.
4. **One editorial object, not styled sections.** Composition changes per content, but grid, type system and color logic stay continuous. No label → headline → content section formula repeated down the page.
5. **The still page is the design.** Nothing depends on reveal or motion; screenshots at any scroll position hold up.

## Root causes of the v2.6.1 gap

### 1. The primary visual asset is procedural placeholder art
The ProductStudy SVG (gradient shell, cartoon proportions, orange joint dots) is asked to carry the hero, Selected Work row 01 and the process board. Gradient-geometry furniture cannot read as materially believable at any layout quality; it stamps "prototype" on every section it appears in. This is the single largest cause of the "competent agency mockup" reading.

### 2. Typography is generic and behaviorless
Montserrat and Poppins are neutral geometric/humanist sans used at default widths and weights. The system has exactly one gesture — enlarge — and no voice: no width behavior, no case logic, no distinction between editorial voice and technical voice. Hierarchy is produced by size only, so every section feels the same.

### 3. Annotations are decoration, not information
BACK / SHELL, SEAT, JOINT / 03 label a fictional object; OBJECT / IMAGE / DIGITAL and PRODUCT TRUTH / COMMERCIAL CLARITY float as slogans dressed as data. Fake data is instantly legible as fake and reads as mockup texture. In the references, the technical layer earns its place by being true.

### 4. The wordmark is an effect, not architecture
The oversized MODUM background fights the headline for the same space (on mobile the intro copy is illegible over the M). It behaves as a texture placed behind content, not as a structural element that creates the grid, the crop or the tension of the composition.

### 5. The page is a stack of sections
01–05 sections repeat the same internal formula with alternating light/dark backgrounds. Rhythm is UI-section rhythm, not editorial sequence; nothing carries from one section into the next except the palette.

## Implications for Phase B

- The chair SVG must be **demoted or killed as primary visual**. It may survive only as a small, honest process diagram.
- The primary visual layer must become **real, licensed material** (material/construction photography suits the brand and avoids fake-portfolio claims better than borrowed product shots).
- The typography bridge must be replaced by a system with **actual behavior** — a display voice and a technical/mono voice — while DEC-006 (proprietary typeface) remains the destination.
- The technical annotation layer must be **retired until it has true data to show** (real dimensions, real file/format names, real process stages of the studies).
- The wordmark and slash must **do structural work** (divide the grid, crop, align) or not appear oversized at all.
