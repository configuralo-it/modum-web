'use client';

import { ComponentType, useEffect, useState } from 'react';

type SceneModule = { HeroScene: ComponentType };

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');

    const webgl2 =
      typeof window.WebGL2RenderingContext !== 'undefined' &&
      canvas.getContext('webgl2');

    if (webgl2) return true;

    return Boolean(
      typeof window.WebGLRenderingContext !== 'undefined' &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')),
    );
  } catch {
    return false;
  }
}

export function HeroStage() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    let loading = false;

    const load = async () => {
      if (loading || cancelled || !supportsWebGL()) return;
      loading = true;

      try {
        const mod = (await import('./HeroScene')) as SceneModule;
        if (!cancelled) setScene(() => mod.HeroScene);
      } catch {
        loading = false;
      }
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
          <div className="hero-object-fallback__back" />
          <div className="hero-object-fallback__seat" />
          <div className="hero-object-fallback__frame hero-object-fallback__frame-left" />
          <div className="hero-object-fallback__frame hero-object-fallback__frame-right" />
          <div className="hero-object-fallback__crossbar" />
          <div className="hero-object-fallback__joint" />
        </div>
      )}
      {Scene ? <Scene /> : null}
    </div>
  );
}
