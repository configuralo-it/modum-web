// Prepares the loaded page for capture. The whole file is one function expression:
// pass it verbatim to evaluate_script after every navigation or reload.
// It hides what belongs to the tooling (scrollbar, Next.js development indicator),
// waits for the fonts and for images, and returns the page to the top.
async () => {
  const style = document.createElement('style');
  style.id = 'review-capture';
  style.textContent =
    'html{scrollbar-width:none;scroll-behavior:auto!important}' +
    'nextjs-portal{display:none!important}';
  document.head.append(style);

  await document.fonts.ready;

  // lazy images load only near the viewport: walk the page once
  for (let y = 0; y <= document.documentElement.scrollHeight; y += window.innerHeight) {
    window.scrollTo(0, y);
    await new Promise((resolve) => setTimeout(resolve, 120));
  }
  await Promise.all(
    [...document.images].map((img) =>
      img.complete
        ? null
        : new Promise((resolve) => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
          }),
    ),
  );

  window.scrollTo(0, 0);
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  return {
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    dpr: window.devicePixelRatio,
    layoutWidth: document.documentElement.clientWidth,
    pageHeight: document.documentElement.scrollHeight,
    images: document.images.length,
    brokenImages: [...document.images].filter((img) => !img.naturalWidth).map((img) => img.currentSrc),
  };
}
