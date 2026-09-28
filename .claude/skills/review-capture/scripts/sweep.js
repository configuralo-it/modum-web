// Loads the page in same-origin iframes of many sizes and reports, for each size,
// horizontal overflow, the opening frame and the line breaks of the title.
// The whole file is one function expression: pass it verbatim to evaluate_script.
async () => {
  const sizes = [
    [320, 568], [360, 640], [360, 800], [375, 667], [390, 844], [412, 915], [430, 932],
    [600, 960], [768, 1024], [820, 1180], [834, 1194], [920, 1000],
    [921, 1000], [1024, 768], [1024, 1366], [1280, 720], [1366, 768], [1440, 900],
    [1536, 864], [1728, 1117], [1920, 1080], [2560, 1080], [2560, 1440],
  ];

  const host = document.createElement('div');
  host.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;overflow:hidden;visibility:hidden';
  document.body.append(host);

  const linesOf = (doc, el) => {
    const lines = new Map();
    const walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const range = doc.createRange();
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      for (let i = 0; i < node.nodeValue.length; i += 1) {
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const rect = range.getClientRects()[0];
        if (!rect || rect.width === 0) continue;
        const key = Math.round(rect.top);
        lines.set(key, (lines.get(key) || '') + node.nodeValue[i]);
      }
    }
    return [...lines.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([, text]) => text.replace(/ /g, ' ').trim());
  };

  const results = [];
  for (const [width, height] of sizes) {
    const frame = document.createElement('iframe');
    frame.style.cssText = `width:${width}px;height:${height}px;border:0`;
    frame.src = `${location.origin}${location.pathname}?sweep=${width}x${height}`;
    host.append(frame);
    await new Promise((resolve) => frame.addEventListener('load', resolve, { once: true }));

    const doc = frame.contentDocument;
    const win = frame.contentWindow;
    const style = doc.createElement('style');
    style.textContent = 'html{scrollbar-width:none;scroll-behavior:auto!important}';
    doc.head.append(style);
    await doc.fonts.ready;
    await new Promise((resolve) => win.requestAnimationFrame(() => win.requestAnimationFrame(resolve)));

    const stage = doc.querySelector('.frame-stage').getBoundingClientRect();
    const visibleWidth = Math.max(0, Math.min(stage.right, width) - Math.max(stage.left, 0));
    const visibleHeight = Math.max(0, Math.min(stage.bottom, height) - Math.max(stage.top, 0));
    const outside = [...doc.querySelectorAll('body *')].filter((el) => {
      if (!el.checkVisibility()) return false;
      const r = el.getBoundingClientRect();
      if (r.width <= 1 && r.height <= 1) return false;
      return r.right > width + 0.5 || r.left < -0.5;
    });

    results.push({
      viewport: `${width}x${height}`,
      overflow: doc.documentElement.scrollWidth - width,
      outside: outside.slice(0, 4).map((el) => `${el.tagName.toLowerCase()}.${el.className}`),
      stage: `${Math.round(stage.width)}x${Math.round(stage.height)}`,
      stageRatio: Math.round((stage.width / stage.height) * 1000) / 1000,
      stageShare: Math.round(((visibleWidth * visibleHeight) / (width * height)) * 1000) / 10,
      title: linesOf(doc, doc.querySelector('h1')).join(' / '),
    });
    frame.remove();
  }
  host.remove();
  return results;
}
