// Page metrics for review. The whole file is one function expression: pass it
// verbatim to evaluate_script. Reads the page at its current scroll position and
// viewport; changes nothing. Generic metrics work on any site; the `showroom`
// block is filled only when the page contains `.frame` elements.
() => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const SIGNAL = 'rgb(255, 77, 0)';
  const round = (n, d = 1) => Math.round(n * 10 ** d) / 10 ** d;

  const shown = (el) => {
    if (!el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) return false;
    const r = el.getBoundingClientRect();
    return r.width > 1 || r.height > 1;
  };

  const label = (el) => {
    const cls = typeof el.className === 'string' && el.className.trim()
      ? '.' + el.className.trim().split(/\s+/).join('.')
      : '';
    return el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + cls;
  };

  // ---- text runs: one entry per visible text node ----
  const runs = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node.nodeValue.replace(/\s+/g, ' ').trim();
    const el = node.parentElement;
    if (!text || !el || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(el.tagName)) continue;
    if (!shown(el)) continue;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    runs.push({
      el,
      text,
      family: cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
      size: round(parseFloat(cs.fontSize), 2),
      weight: parseInt(cs.fontWeight, 10),
      upper: cs.textTransform === 'uppercase',
      tracking: cs.letterSpacing,
      color: cs.color,
      firstScreen: r.top < vh && r.bottom > 0,
    });
  }

  const tally = (key) => {
    const map = new Map();
    for (const run of runs) {
      const k = run[key];
      const entry = map.get(k) || { value: k, runs: 0, chars: 0, sample: run.text.slice(0, 60) };
      entry.runs += 1;
      entry.chars += run.text.length;
      map.set(k, entry);
    }
    return [...map.values()].sort((a, b) => b.chars - a.chars);
  };

  const largest = runs.reduce((a, b) => (b.size > (a?.size ?? 0) ? b : a), null);
  const heaviest = runs.reduce((a, b) => (b.weight > (a?.weight ?? 0) ? b : a), null);
  const upperRuns = runs.filter((run) => run.upper);

  // ---- lines of an element, read from the layout ----
  const linesOf = (el) => {
    const lines = new Map();
    const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const range = document.createRange();
    for (let node = tw.nextNode(); node; node = tw.nextNode()) {
      if (!node.parentElement || !shown(node.parentElement)) continue;
      for (let i = 0; i < node.nodeValue.length; i += 1) {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const rect = range.getClientRects()[0];
        if (!rect || rect.width === 0) continue;
        const key = Math.round(rect.top + window.scrollY);
        lines.set(key, (lines.get(key) || '') + node.nodeValue[i]);
      }
    }
    return [...lines.entries()].sort((a, b) => a[0] - b[0]).map(([, text]) => text.trim());
  };

  const paragraphs = [...document.querySelectorAll('p, figcaption, li > span')]
    .filter((el) => shown(el) && el.textContent.trim().length > 60)
    .map((el) => {
      const lines = linesOf(el);
      return {
        el: label(el),
        lines: lines.length,
        longest: Math.max(...lines.map((line) => line.length)),
        last: lines[lines.length - 1],
      };
    });

  const headings = [...document.querySelectorAll('h1, h2')]
    .filter(shown)
    .map((el) => ({ el: label(el), size: parseFloat(getComputedStyle(el).fontSize), lines: linesOf(el) }));

  // ---- share of the first screen covered by one element (exact) ----
  const shareOf = (el) => {
    const r = el.getBoundingClientRect();
    const w = Math.max(0, Math.min(r.right, vw) - Math.max(r.left, 0));
    const h = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
    return round(((w * h) / (vw * vh)) * 100);
  };

  // ---- share of the first screen covered by a set of elements (8 px cells) ----
  const CELL = 8;
  const share = (elements) => {
    const cols = Math.ceil(vw / CELL);
    const rows = Math.ceil(vh / CELL);
    const grid = new Uint8Array(cols * rows);
    for (const el of elements) {
      const r = el.getBoundingClientRect();
      const x0 = Math.max(0, Math.floor(r.left / CELL));
      const x1 = Math.min(cols, Math.ceil(r.right / CELL));
      const y0 = Math.max(0, Math.floor(r.top / CELL));
      const y1 = Math.min(rows, Math.ceil(r.bottom / CELL));
      for (let y = y0; y < y1; y += 1) for (let x = x0; x < x1; x += 1) grid[y * cols + x] = 1;
    }
    return round((grid.reduce((a, b) => a + b, 0) / grid.length) * 100);
  };

  const media = [...document.querySelectorAll('img, video, canvas, svg, iframe')]
    .concat([...document.querySelectorAll('*')].filter((el) => /url\(/.test(getComputedStyle(el).backgroundImage)))
    .filter((el) => {
      if (!shown(el)) return false;
      const r = el.getBoundingClientRect();
      return r.width * r.height >= 120 * 120;
    });

  // ---- rules, signal colour, overflow ----
  const all = [...document.querySelectorAll('body *')].filter(shown);

  const ruled = [];
  const signal = [];
  const outside = [];
  for (const el of all) {
    const cs = getComputedStyle(el);
    const sides = ['Top', 'Right', 'Bottom', 'Left'].filter((side) => {
      const width = parseFloat(cs[`border${side}Width`]);
      const style = cs[`border${side}Style`];
      const color = cs[`border${side}Color`];
      return width > 0 && style !== 'none' && style !== 'hidden' && !/, 0\)$/.test(color) && color !== 'transparent';
    });
    if (sides.length || el.tagName === 'HR') ruled.push(label(el));

    const paints = [cs.color, cs.backgroundColor, cs.fill, cs.stroke, cs.boxShadow, cs.backgroundImage];
    if (sides.length) paints.push(cs.borderTopColor, cs.borderRightColor, cs.borderBottomColor, cs.borderLeftColor);
    if (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) paints.push(cs.outlineColor);
    if (cs.textDecorationLine !== 'none') paints.push(cs.textDecorationColor);
    if (paints.some((paint) => paint && paint.includes(SIGNAL))) signal.push(label(el));

    const r = el.getBoundingClientRect();
    if (r.right > vw + 0.5 || r.left < -0.5) outside.push({ el: label(el), left: round(r.left), right: round(r.right) });
  }

  const targets = [...document.querySelectorAll('a, button, summary, input, select, textarea')]
    .filter(shown)
    .map((el) => {
      const r = el.getBoundingClientRect();
      return { el: label(el), text: el.textContent.trim().slice(0, 40), width: round(r.width), height: round(r.height) };
    });

  // ---- showroom checks ----
  let showroom = null;
  const frames = [...document.querySelectorAll('.frame')];
  if (frames.length) {
    const stage = document.querySelector('.frame-stage');
    const figures = [...document.querySelectorAll('figure')].filter(shown);
    const numerals = runs.filter((run) => /^\d+[.)]?$/.test(run.text));
    showroom = {
      openingFrameShare: stage ? shareOf(stage) : null,
      frames: frames.map((el) => {
        const r = el.getBoundingClientRect();
        const img = el.querySelector('img');
        return {
          el: label(el),
          width: round(r.width),
          height: round(r.height),
          ratio: round(r.width / r.height, 3),
          filled: Boolean(img),
          image: img
            ? {
                rendered: `${round(img.getBoundingClientRect().width)}x${round(img.getBoundingClientRect().height)}`,
                natural: `${img.naturalWidth}x${img.naturalHeight}`,
                complete: img.complete,
                fit: getComputedStyle(img).objectFit,
                loading: img.loading,
                fetchPriority: img.fetchPriority,
                alt: img.alt,
              }
            : null,
        };
      }),
      figures: figures.length,
      figuresWithStatus: figures.filter((el) => el.querySelector('.caption-status')).length,
      figuresWithImage: figures.filter((el) => el.querySelector('.frame img')).length,
      numerals: numerals.map((run) => ({ text: run.text, el: label(run.el) })),
      ruled: [...new Set(ruled)],
      signalElements: signal,
    };
  }

  return {
    url: location.href,
    viewport: `${vw}x${vh}`,
    dpr: window.devicePixelRatio,
    scrollY: window.scrollY,
    page: { width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight },
    background: getComputedStyle(document.body).backgroundColor,
    text: getComputedStyle(document.body).color,
    runs: runs.length,
    families: tally('family'),
    sizes: tally('size').sort((a, b) => b.value - a.value),
    weights: tally('weight').sort((a, b) => b.value - a.value),
    colors: tally('color'),
    largest: largest && { size: largest.size, el: label(largest.el), text: largest.text.slice(0, 60) },
    heaviest: heaviest && { weight: heaviest.weight, el: label(heaviest.el), text: heaviest.text.slice(0, 60) },
    uppercase: { runs: upperRuns.length, samples: upperRuns.slice(0, 8).map((run) => `${run.text.slice(0, 30)} (${run.size}px, ${run.tracking})`) },
    monospace: runs.filter((run) => /mono|courier|consolas|menlo/i.test(run.family)).length,
    fontsLoaded: [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => `${f.family.replace(/["']/g, '')} ${f.weight}`))],
    firstScreen: {
      mediaShare: share(media),
      words: runs.filter((run) => run.firstScreen).reduce((n, run) => n + run.text.split(' ').length, 0),
    },
    headings,
    paragraphs,
    overflow: { horizontal: document.documentElement.scrollWidth - vw, outside: outside.slice(0, 12) },
    ruled: [...new Set(ruled)].slice(0, 40),
    targets,
    showroom,
  };
}
