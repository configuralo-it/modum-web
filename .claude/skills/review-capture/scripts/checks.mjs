// Evaluates the measured checks of docs/MOD-WEB-001_SHOWROOM_DIRECTION.md on one or
// more results of measure.js. Prints one table per file and exits with status 1 when
// a check fails.
//
//   node .claude/skills/review-capture/scripts/checks.mjs measure-1440.json measure-390.json
//
// The thresholds below mirror the "Measured checks" table of the direction document.
// When that table changes, change them here in the same edit.

import { readFileSync } from 'node:fs';

const NARROW_LAYOUT_MAX_WIDTH = 920;
const LARGEST_TEXT = { wide: 48, narrow: 32 };
const HEAVIEST_WEIGHT_BELOW = 700;
const OPENING_FRAME_MIN_SHARE = 45;
const NUMERALS_ALLOWED_IN = /step-number/;
const RULES_ALLOWED_ON = /^(ul\.services|li\.service)\b/;

function checksOf(measure) {
  const { showroom } = measure;
  if (!showroom) throw new Error(`${measure.url}: the page has no .frame element`);

  const narrow = Number.parseInt(measure.viewport, 10) <= NARROW_LAYOUT_MAX_WIDTH;
  const largest = narrow ? LARGEST_TEXT.narrow : LARGEST_TEXT.wide;
  const strayNumerals = showroom.numerals.filter((item) => !NUMERALS_ALLOWED_IN.test(item.el));
  const strayRules = showroom.ruled.filter((el) => !RULES_ALLOWED_ON.test(el));
  const accounted = showroom.figuresWithStatus + showroom.figuresWithImage;

  return [
    ['Largest text', `${measure.largest.size} px`, `${largest} px or less`, measure.largest.size <= largest],
    ['Type families', measure.families.map((f) => f.value).join(', '), '1, no monospace', measure.families.length === 1 && measure.monospace === 0],
    ['Heaviest text weight', measure.heaviest.weight, `below ${HEAVIEST_WEIGHT_BELOW}`, measure.heaviest.weight < HEAVIEST_WEIGHT_BELOW],
    ['Opening frame, share of first screen', `${showroom.openingFrameShare}%`, `${OPENING_FRAME_MIN_SHARE}% or more`, showroom.openingFrameShare >= OPENING_FRAME_MIN_SHARE],
    ['Elements in signal orange, static page', showroom.signalElements.length, '0', showroom.signalElements.length === 0],
    ['Figures with an image or a status caption', `${accounted} of ${showroom.figures}`, 'all', accounted === showroom.figures],
    ['Numerals used as markers', strayNumerals.map((item) => item.el).join(', ') || 'method steps only', 'method steps only', strayNumerals.length === 0],
    ['Ruled elements', strayRules.join(', ') || 'services list only', 'services list only', strayRules.length === 0],
    ['Horizontal overflow', `${measure.overflow.horizontal} px`, 'none', measure.overflow.horizontal <= 0 && measure.overflow.outside.length === 0],
  ];
}

function report(path) {
  const measure = JSON.parse(readFileSync(path, 'utf8'));
  const rows = checksOf(measure);
  console.log(`\n${path} — viewport ${measure.viewport}, scroll ${measure.scrollY}`);
  for (const [name, value, threshold, pass] of rows) {
    console.log(`  ${pass ? 'pass' : 'FAIL'}  ${name}: ${value}  (threshold: ${threshold})`);
  }
  if (measure.scrollY !== 0) console.log('  note  measured with the page scrolled; the first-screen share is not valid');
  return rows.every(([, , , pass]) => pass) && measure.scrollY === 0;
}

const paths = process.argv.slice(2);
if (paths.length === 0) {
  console.error('usage: node checks.mjs <measure.json> [<measure.json> ...]');
  process.exit(2);
}

const results = paths.map(report);
process.exit(results.every(Boolean) ? 0 : 1);
