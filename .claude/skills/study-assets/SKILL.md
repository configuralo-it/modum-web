---
name: study-assets
description: Use when adding, replacing or removing an image in a frame of the Modum Studio homepage (opening, internal study, studio portrait), when the studio supplies new imagery, when checking how a frame crops an image, or when recording where an image comes from.
---

# Study assets

## Overview

Frames stay empty until the studio supplies its own imagery. An image enters the page with
its provenance recorded, and its caption states facts that are true of the object shown.

The image programme (slots, ratios, minimum sizes) and the imagery record are in
`docs/MOD-WEB-001_SHOWROOM_ASSETS.md`.

## Provenance

Only images produced by the studio are used: no stock, no renders by third parties, no
generated images. When author, date, or tool or camera is unknown, the image is not added:
ask for the missing data.

## Adding an image

1. Find the slot in the image programme: ratio and minimum size.
2. Read the size of the file: `sips -g pixelWidth -g pixelHeight <file>`. The ratio matches
   the slot; the size is at least the minimum, so that the image is never upscaled.
3. Convert: `cwebp -q 82 <file> -o public/studies/<slot>.webp`.
4. Set `image` on the frame. Study frames are in `lib/study.ts` (`studyFrames`); the
   opening and the portrait are `opening.frame` and `studio.frame` in `lib/content.ts`.

   ```ts
   image: { src: 'studies/work-rendering.webp', alt: 'Sedia in frassino, vista di tre quarti', width: 2400, height: 1600 },
   ```

   `src` has no leading slash: the preview is served under a base path. `alt` is in
   Italian and describes what is visible. `width` and `height` are those of the file.
5. Rewrite the caption of the frame: it now states what the image shows. The status line
   and the word inside the frame disappear when `image` is set.
6. Add a row to the imagery table of the assets document: file, slot, medium, subject,
   author, date, tool or camera.
7. Verify at both viewports. **REQUIRED SUB-SKILL:** review-capture.

## The opening frame

Its ratio follows the viewport, and it crops the image with `object-fit: cover`. The range
of ratios, and the area of the source that stays visible at every size, are in the
production notes of the assets document. Check an opening image at 1440 × 900 and at
390 × 844 before accepting it: the object is whole in both.

## Testing a frame without a studio image

`chart-3x2.svg` and `chart-4x5.svg` in this directory are test charts: grid, centre,
diagonals, corner marks and an inner box at 12% from each edge. They show what a frame
crops.

1. Record the state: `shasum -a 256 lib/content.ts lib/study.ts > /tmp/frames.sha256`.
2. Copy a chart to `public/frame-test/` and set `image` on the frame, with
   `src: 'frame-test/chart-3x2.svg'` and the size written in the file name of the chart
   (3200 × 2133 or 1400 × 1750).
3. Check the frame at both viewports. A chart with a ratio different from the frame's
   shows whether the frame keeps its own ratio.
4. Remove the `image` line and `public/frame-test/`.
5. `shasum -a 256 -c /tmp/frames.sha256` reports OK and `git status` does not list
   `public/frame-test`.

A chart is never committed as page content and is never recorded in the imagery table.

## Text in `lib/content.ts`

A non-breaking space is written `${nbsp}` inside a template literal. An editing tool may
decode the escape ` ` into the character itself, which no review can see. After
editing, this prints 0 for each file:

```bash
LC_ALL=C grep -c $'\xc2\xa0' lib/content.ts lib/study.ts lib/services.ts
```

## Common mistakes

| Mistake | Effect |
|---|---|
| `src` with a leading slash | The image is missing on the deployed preview |
| Image smaller than the minimum size | Upscaled on wide or high-density screens |
| Caption left as written for the empty frame | It describes a planned image, not the one shown |
| Image added without a row in the imagery table | Provenance cannot be verified later |
| Test chart left in `public/` | Published with the next deploy |
