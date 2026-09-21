'use client';

import { ComponentType, useEffect, useState } from 'react';

type SceneModule = { HeroScene: ComponentType };

export function HeroStage() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    let loading = false;

    const load = async () => {
      if (loading || cancelled) return;
      loading = true;

      const mod = (await import('./HeroScene')) as SceneModule;
      if (!cancelled) setScene(() => mod.HeroScene);
    };

    const onIntent = () => {
      void load();
    };

    window.addEventListener('pointermove', onIntent, { passive: true, once: true });
    window.addEventListener('touchstart', onIntent, { passive: true, once: true });
    window.addEventListener('scroll', onIntent, { passive: true, once: true });
    window.addEventListener('keydown', onIntent, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('pointermove', onIntent);
      window.removeEventListener('touchstart', onIntent);
      window.removeEventListener('scroll', onIntent);
      window.removeEventListener('keydown', onIntent);
    };
  }, []);

  return (
    <div className="hero-visual-shell">
      {!Scene && (
        <div className="hero-object-fallback" aria-hidden="true">
          <div className="hero-object-fallback__body" />
          <div className="hero-object-fallback__signal" />
        </div>
      )}
      {Scene ? <Scene /> : null}
    </div>
  );
}
