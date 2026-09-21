# AGENTS.md — MOD-WEB-001

## Mission
Implement the Modum Studio website v1 as a high-fidelity prototype ready for internal review.

## Governance
Strategic, brand and art-direction decisions live in Modum OS / Google Drive.
Control Room decisions override repository notes and previous prototype baselines.

Canonical docs:
- MOD-WEB-001 — Art Direction & Reference Plan v0.1
- MOD-WEB-001 — Homepage Experience Spec v0.1
- Modum Studio — Visual Identity Direction v0.1
- Modum Studio — Brand Foundations v0.1
- MOD-WEB-001 — Website Launch Pack v0.1

## Current Control Room state — 21/09/2026

FACT
The existing live homepage is a valid TECHNICAL BASELINE only.

FACT
Layout, design and style of the previous homepage were rejected by Control Room.

DECISION
Creative status is:
ART DIRECTION / HOMEPAGE SYSTEM DESIGN.

DECISION
Do not cosmetically refine the old hero.
The visual structure may be redesigned radically while preserving useful infrastructure.

DECISION
Current direction synthesis:
MODUM FIRST × PRODUCT FIRST
with PROCESS FIRST as a secondary narrative layer.

Formula:
IDENTITY SETS THE FRAME.
PRODUCT PROVES THE VALUE.
PROCESS EXPLAINS THE DEPTH.

## Approved brand inputs
- Services:
  - 3D Rendering
  - Catalogs & Brochures
  - Photo & Video
  - Product Configurators
  - Web & E-commerce
  - AI Strategy & Automation
- Target: product companies, initially strong relevance to furniture, design and manufacturing.
- Brand Soul: reduce the distance between the real product and what a customer can perceive before having it in front of them.
- Brand architecture: Product Truth + Commercial Clarity.
- Existing Modum identity assets are the evolution source.
- Verified palette:
  - Warm Paper #FFF7F4
  - Charcoal #3C3F45
- Signal orange may be used as a restrained accent.
- Existing wordmark, crop and slash are structural identity tools.
- Montserrat + Poppins are transitional only.
- DEC-006 remains in force: Modum will develop a proprietary typeface.

## Current art-direction rules

### Identity
- The wordmark may become architecture, not merely a header logo.
- Oversized crop is allowed when it creates structure.
- Slash may divide, align, annotate or create tension.
- Avoid decorative brand fragments that do not affect composition.

### Product
- Product must be protagonist or evidence.
- Favor material, proportion, construction, detail and context.
- A study object may be used only when clearly presented as a Modum Studio Study.
- No invented client work.

### Layout
- Editorial structure.
- Large scale shifts.
- Strong negative space where useful.
- Density only when information benefits from it.
- Avoid cardification.
- Avoid standard agency section rhythm.
- Selected Work should feel composed, not templated.

### Process
Use technical/process language selectively:
- detail
- material
- construction
- variants
- configuration
- exploded views
- annotations

Process is a secondary layer, not the entire visual identity.

### Motion
STATIC FIRST.
No motion is required in the current homepage-system gate.

Only after static composition is approved:
- add motion with a specific job;
- keep reduced-motion fallback;
- no spectacle used to rescue weak composition.

### Explicitly killed as primary language
- blob/organic-surface-led hero;
- dominant 3D object simply because the hero needs a 3D object;
- circular technical orbit decoration;
- constant atmospheric motion;
- generic service cards;
- excessive above-the-fold annotations;
- stacking high-cost visual systems.

## Working homepage architecture
01 — Opening / Identity + Product
02 — Selected Work
03 — What We Make
04 — How We See Product
05 — Studio
06 — Contact

## Static-first gate
Before motion:
- desktop hierarchy approved;
- mobile hierarchy approved;
- typography behavior approved;
- image/product behavior approved;
- selected-work behavior approved;
- wordmark/slash rules approved.

## Technical baseline to preserve
- Next.js App Router
- TypeScript
- static export / GitHub Pages pipeline
- metadata / structured data
- accessible navigation and focus states
- case-study data architecture
- production-quality responsive behavior
- no CMS, DB or auth for v1

3D / R3F may remain in the repository as experimental infrastructure, but it is not required in the current homepage composition.

## Non-negotiables
- No invented clients, metrics, awards, results or testimonials.
- Missing real content must be clearly treated as a Modum Study or explicit internal placeholder.
- No fake portfolio claims.
- Accessibility and keyboard/focus states.
- No scroll hijacking.
- No heavy autoplay media above the fold.
- Mobile is composed independently, not a desktop miniature.

## Review tests
1. Is it clear before it is interesting?
2. Does the product become more understandable rather than merely decorated?
3. Could this belong to any contemporary creative studio?
4. Does it get better when you look closer?
5. Is there one controlled, intentional disruption?
6. Can the system host 3D, editorial, photo/video, configurators, web and AI work?
7. Does it work with real content rather than only idealized mock content?
8. Does it work completely still?

## Gate
Stop at INTERNAL REVIEW.
Do not treat the design as APPROVED or DELIVERY without Control Room / cofounder review.
