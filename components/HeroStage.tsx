'use client';

import { ComponentType, useEffect, useState } from 'react';

type SceneModule = { HeroScene: ComponentType };

export function HeroStage() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    const load = async () => {
      const mod = (await import('./HeroScene')) as SceneModule;
      if (!cancelled) setScene(() => mod.HeroScene);
    };

    const schedule = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(load, { timeout: 1400 });
      } else {
        timer = setTimeout(load, 650);
      }
    };

    timer = setTimeout(schedule, 180);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
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
