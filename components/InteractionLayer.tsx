'use client';

import { useEffect } from 'react';

export function InteractionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const params = new URLSearchParams(window.location.search);
    const reviewMode = params.get('review') === '1';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reviewMode || reducedMotion) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((node) => {
        node.classList.add('is-visible');
      });
      return;
    }

    root.classList.add('v2-motion-ready');

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    revealNodes.forEach((node) => observer.observe(node));

    const plate = document.querySelector<HTMLElement>('.v2-product-plate');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const resetInspection = () => {
      plate?.style.setProperty('--inspect-x', '0');
      plate?.style.setProperty('--inspect-y', '0');
    };

    const handlePointer = (event: PointerEvent) => {
      if (!plate) return;
      const rect = plate.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      plate.style.setProperty('--inspect-x', x.toFixed(3));
      plate.style.setProperty('--inspect-y', y.toFixed(3));
    };

    if (plate && finePointer) {
      plate.addEventListener('pointermove', handlePointer);
      plate.addEventListener('pointerleave', resetInspection);
    }

    const hero = document.querySelector<HTMLElement>('.v2-hero');
    let raf = 0;

    const updateScroll = () => {
      raf = 0;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const range = Math.max(hero.offsetHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / range));
      hero.style.setProperty('--hero-progress', progress.toFixed(3));
    };

    const handleScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      root.classList.remove('v2-motion-ready');
      observer.disconnect();
      if (plate && finePointer) {
        plate.removeEventListener('pointermove', handlePointer);
        plate.removeEventListener('pointerleave', resetInspection);
      }
      window.removeEventListener('scroll', handleScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
