# AGENTS.md — MOD-WEB-001

## Mission
Implement the Modum Studio website v1 as a high-fidelity interactive prototype ready for internal review.

## Source of truth
Strategic and brand decisions live in Modum OS / Google Drive.
Repository decisions must not override Control Room decisions.

Canonical docs:
- MOD-WEB-001 — Sito Modum Studio — Brief agente developer
- MOD-WEB-001 — Website Launch Pack v0.1
- Modum Studio — Brand Foundations v0.1
- Modum Studio — Visual Identity Direction v0.1
- MOD-WEB-001 — Homepage Experience Spec v0.1

## Approved decisions
- Services: 3D Rendering; Cataloghi & Brochure; Foto & Video; Product Configurators; Web & E-commerce; AI Strategy & Automation.
- Target: product companies in furniture, design and manufacturing.
- Brand Soul: reduce the distance between the real product and what a customer can perceive before having it in front of them.
- Brand architecture: Product Truth + Commercial Clarity.
- Visual/motion baseline: controlled futurism, less entropy, editorial structure, large organic curves, a few slowly morphing blob-like shapes, animated interactive 3D hero object, controlled variation and unpredictability.

## Character
Modum is curious, exacting, inventive and commercially lucid.

Internal principles:
- Understand before amplify.
- Do not make it different. Make it better.
- Does it get better when you look closer?
- Curiosity asks. Conviction decides. Taste edits. Commerce tests. Craft proves.

## Working visual system
Prototype values:
- Instrument Sans Variable
- IBM Plex Mono for technical metadata / annotations only
- #141412
- #F1F0EA
- #D7D6D0
- #8E8D87
- Signal Orange #FF4D00

These are not final production approval until tested with real portfolio assets.

## Homepage behavior

### Hero
- Full viewport or near-full viewport.
- Strong HTML headline and concise copy.
- Dominant interactive 3D object.
- Object should feel like a plausible designed artifact, not a random blob.
- 1–2 large organic background shapes with slow restrained morphing.
- Less entropy: avoid simultaneous decorative motion.
- Pointer response limited and controlled.
- Progressive enhancement and static fallback required.

### Motion
- Slow atmospheric: 8–20s.
- Medium section/navigation: 350–700ms.
- Fast UI feedback: 120–220ms.
- prefers-reduced-motion required.
- If nothing changes in meaning, nothing needs to move.

### Layout
- Stable editorial grid with occasional intentional breaks.
- Max 2–3 major curved/organic transitions on the homepage.
- Avoid cardification.
- Alternate light/dark only when it improves narrative rhythm.

### Signature interactions
Prioritize:
1. Inspect
2. Annotate
3. Compare when real content supports it
4. Controlled morph
5. One meaningful grid break per major section at most

## Scope v1
- Hero
- Selected Work
- What We Do / Services
- Approach / Product Truth
- Product Detail Moment
- Studio
- Contact
- Footer

## Technical baseline
- Next.js App Router
- TypeScript
- Tailwind CSS
- React Three Fiber / Three.js allowed for hero only
- Framer Motion or Motion One for UI/section motion
- GSAP only if a specific sequence materially justifies it
- SVG/CSS before shaders for simple morphing
- static-first outside 3D/motion surfaces
- no CMS, DB or auth

## Non-negotiables
- No invented clients, metrics, awards, results or testimonials.
- Do not copy logos/client names from exploratory mockups.
- Missing real content = explicit TODO / placeholder.
- Accessibility and keyboard/focus states.
- HTML content independent from WebGL.
- Production-quality responsive behavior.
- No scroll hijacking.
- No heavy autoplay video above the fold.
- No decorative tech effects competing with the product.
- Keep motion optional and degradable.

## Performance
- UI usable before 3D finishes loading.
- Optimized GLB, compressed textures, simple lighting.
- No duplicate animation libraries.
- Simplify 3D/motion on mobile if needed.
- Avoid layout shift and blocking asset loads.

## Workflow
1. Inspect repository.
2. Summarize architecture and constraints.
3. Propose a very short implementation plan.
4. Build the homepage prototype.
5. Use explicit placeholders for unavailable portfolio/logo assets.
6. Run lint, typecheck, tests if present, and production build.
7. Fix issues introduced by the implementation.
8. Report files changed, checks run, results, blockers and TODOs.

## Gate
Stop at INTERNAL REVIEW.
Do not treat the design as final or deploy as APPROVED without both cofounders' review.

## Review principle
If the website is interesting only because it moves, the direction is wrong.
It should work when static; motion should make it feel more alive, not make it understandable.
