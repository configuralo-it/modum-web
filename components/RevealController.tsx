const revealScript = String.raw`
(() => {
  const start = () => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!nodes.length) return;

    const params = new URLSearchParams(window.location.search);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (params.get('review') === '1') {
      for (const node of nodes) {
        node.style.transition = 'none';
        node.classList.add('is-visible');
      }
      return;
    }

    if (reduced || !('IntersectionObserver' in window)) {
      for (const node of nodes) node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14 },
    );

    for (const node of nodes) observer.observe(node);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
`;

export function RevealController() {
  return <script dangerouslySetInnerHTML={{ __html: revealScript }} />;
}
