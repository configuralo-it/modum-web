const heroBootstrap = String.raw`
(() => {
  const shell = document.currentScript?.previousElementSibling;
  if (!(shell instanceof HTMLElement)) return;

  let loading = false;
  let mounted = false;

  const cleanupTriggers = () => {
    window.removeEventListener('pointermove', start);
    window.removeEventListener('touchstart', start);
    window.removeEventListener('scroll', start);
    window.removeEventListener('keydown', start);
  };

  async function start() {
    if (loading || mounted) return;
    loading = true;

    try {
      const url = new URL('hero-scene.js', document.baseURI).href;
      const mod = await import(url);
      mod.mountHero?.(shell);
      mounted = shell.dataset.webgl === 'true';
      if (mounted) cleanupTriggers();
      else loading = false;
    } catch {
      loading = false;
    }
  }

  window.addEventListener('pointermove', start, { passive: true, once: true });
  window.addEventListener('touchstart', start, { passive: true, once: true });
  window.addEventListener('scroll', start, { passive: true, once: true });
  window.addEventListener('keydown', start, { once: true });
})();
`;

export function HeroStage() {
  return (
    <>
      <div className="hero-visual-shell">
        <div className="hero-object-fallback" aria-hidden="true">
          <div className="hero-object-fallback__back" />
          <div className="hero-object-fallback__seat" />
          <div className="hero-object-fallback__frame hero-object-fallback__frame-left" />
          <div className="hero-object-fallback__frame hero-object-fallback__frame-right" />
          <div className="hero-object-fallback__crossbar" />
          <div className="hero-object-fallback__joint" />
        </div>
        <canvas className="hero-canvas" data-hero-canvas aria-hidden="true" />
      </div>
      <script dangerouslySetInnerHTML={{ __html: heroBootstrap }} />
    </>
  );
}
