# MOD-WEB-001 — ART DIRECTION V3 HANDOFF

Status: ACTIVE
Owner: OpenCode execution agent
Governance: Modum OS / 00 — Control Room
Branch: `feat/mod-web-001`

## 1. Mission

Rebuild the Modum Studio homepage to a genuinely high creative standard.

The current v2.6.1 is technically valid but **qualitatively rejected**. Do not polish it incrementally and do not defend previous decisions.

The goal is not to imitate the reference websites. The goal is to reach a comparable level of:
- art direction;
- asset quality;
- typographic judgment;
- composition;
- product integration;
- rhythm;
- interaction restraint;
- brand ownership.

## 2. What went wrong previously

The previous iterations were evaluated too generously because:
- CI passed;
- Lighthouse was excellent;
- responsive screenshots looked orderly.

That was the wrong success criterion.

Specific visual failures:
- procedural chair artwork reads as prototype/placeholder;
- oversized Modum wordmark is often an effect rather than a structural identity rule;
- technical labels are overused and sometimes decorative;
- typography is competent but generic;
- Selected Work still feels invented rather than authored;
- page rhythm relies on familiar contemporary-studio formulas;
- contrast between sections feels designed as UI sections, not one coherent editorial experience;
- motion/reveal work risks masking weak static composition.

## 3. Reference set

Study live pages and screenshots from:
- Teenage Engineering — https://teenage.engineering/
- Vitsœ — https://www.vitsoe.com/
- Porto Rocha — https://www.portorocha.com/
- Bakken & Bæck — https://bakkenbaeck.com/
- Actual Source — https://actualsource.work/
- Formafantasma — https://formafantasma.com/

Extract **principles**:
- product as content;
- identity as composition;
- strong image/asset quality;
- typography with actual behavior;
- information density controlled by purpose;
- composition that changes without losing identity;
- visual confidence without unnecessary UI;
- motion serving hierarchy, not novelty.

Do not clone a reference.

## 4. Brand facts to preserve

Verified palette:
- Warm Paper: `#FFF7F4`
- Charcoal: `#3C3F45`

Current public services:
- 3D Rendering
- Catalogs & Brochures
- Photo & Video
- Product Configurators
- Web & E-commerce
- AI Strategy & Automation

Positioning:
- Make real product value visible.
- Modum reduces the distance between what a product really is and what people can perceive before having it physically in front of them.

Contact:
- parliamo@modumstudio.it

Founders:
- Giada Rossetti
- Alberto G. Ferrario

No invented client names, metrics, awards, or outcomes.

## 5. Content state

Real client portfolio is deliberately deferred.

Use **Modum Studio Studies** as explicit placeholders.

However:
- placeholders must still be visually convincing;
- do not rely on low-fidelity CSS geometry as the primary premium visual;
- you may source or create temporary visual assets where licensing/provenance is clear;
- if using external assets, document source/license in the repo.

## 6. Technical baseline

Preserve unless there is a reason to change:
- Next.js App Router
- TypeScript
- static export
- GitHub Pages pipeline
- accessible navigation
- metadata/structured data
- case-study architecture
- reduced-motion support

Current scripts from `package.json`:
- `npm run dev` → `next dev`
- `npm run build` → `next build`
- `npm run start` → `next start`
- `npm run lint` → `next lint`
- `npm run typecheck` → `tsc --noEmit`
- `npm run predev` → `node scripts/prepare-static.mjs`
- `npm run prebuild` → `node scripts/prepare-static.mjs`

Do not trade away accessibility or basic performance for decoration.

## 7. Execution method

### Phase A — audit before edit
1. Run the site locally.
2. Capture desktop and mobile screenshots.
3. Open the selected references.
4. Produce a written gap analysis in:
   `docs/MOD-WEB-001_V3_GAP_ANALYSIS.md`
5. Identify the 3–5 biggest visual causes, not symptoms.

### Phase B — asset/type direction
Before rebuilding the page:
1. Decide what visual assets the homepage actually needs.
2. Decide whether existing ProductStudy SVG should be:
   - deleted;
   - demoted;
   - replaced;
   - used only as process illustration.
3. Research/select a stronger temporary typography bridge if warranted.
4. Record asset/license sources.
5. Build one static first-screen composition that can stand on its own.

### Phase C — homepage rebuild
Rebuild around the selected composition.

Do **not** inherit the old section structure automatically.

The homepage may change:
- section order;
- dark/light logic;
- navigation treatment;
- type scale;
- grid;
- work presentation;
- hero structure;
- annotations;
- Product Study role.

### Phase D — visual iteration loop
For every meaningful iteration:
1. run typecheck/build;
2. capture desktop + mobile;
3. compare against reference principles;
4. invoke the `modum-critic` subagent;
5. fix the highest-impact criticism;
6. repeat.

Minimum: 3 meaningful visual iterations after the first V3 composition.

## 8. Quality gates

A direction is NOT ready unless all are true:

### Asset quality
The primary visual could plausibly belong in a professional product campaign or serious design publication.

### Typography
Hierarchy and line-breaking feel authored, not framework-default.

### Composition
The screenshot has tension, balance, and identifiable Modum logic even with motion disabled.

### Distinctiveness
Remove the logo: the page should still not feel like a generic Awwwards/agency template.

### Product truth
The product is more understandable, desirable, or tangible because of the design.

### Range
The system can later host real 3D, catalog, photo/video, configurator, web and AI work.

### Mobile
Mobile is a composed design, not a collapsed desktop.

### Commercial clarity
A prospective furniture/manufacturing client can understand what Modum does.

## 9. Forbidden shortcuts

Do not:
- call a version ready based on Lighthouse;
- add random WebGL;
- add generic glassmorphism;
- add decorative technical labels with no information job;
- use stock imagery without checking license/provenance;
- invent clients;
- hide weak composition with reveal animation;
- merely enlarge typography;
- merely rearrange the v2.6.1 sections.

## 10. Review deliverables

Before stopping, produce:
- `docs/MOD-WEB-001_V3_GAP_ANALYSIS.md`
- `docs/MOD-WEB-001_V3_DESIGN_RATIONALE.md`
- source/license notes for any external assets
- current desktop screenshot
- current mobile screenshot
- a concise list: KEEP / KILL / OPEN

Do not merge to main.
Do not publish the design as approved.
Stop at INTERNAL REVIEW.
