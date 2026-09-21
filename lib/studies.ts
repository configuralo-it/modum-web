/**
 * Modum Studio Studies — internal, real artifacts shown while client work is deferred.
 * Rule: every caption states only what the material/artifact actually is.
 */

export type MaterialRecord = {
  id: string;
  /** Path relative to the site root (kept relative for GitHub Pages basePath). */
  src: string;
  /** Factual caption — what the photograph shows. */
  name: string;
  detail: string;
  alt: string;
};

export const materials: MaterialRecord[] = [
  {
    id: 'oak',
    src: 'studies/material-oak.jpg',
    name: 'Oak',
    detail: 'Plank surface',
    alt: 'Light oak wood plank surface, close up',
  },
  {
    id: 'textile',
    src: 'studies/material-textile.jpg',
    name: 'Textile',
    detail: 'Grey weave',
    alt: 'Grey woven upholstery textile, close up',
  },
  {
    id: 'steel',
    src: 'studies/material-steel.jpg',
    name: 'Steel',
    detail: 'Brushed finish',
    alt: 'Brushed steel surface with directional finish',
  },
];
