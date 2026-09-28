import type { ServiceId } from '@/lib/services';

/**
 * Internal study (Modum Studio Study) shown while client work is deferred.
 * Frames are empty until the studio supplies its own imagery.
 * Rule: a caption states the image planned for the frame, never a fact
 * about an object that does not exist yet.
 */

/** `stage` is the opening frame, sized by the viewport; the others have a fixed ratio. */
export type FrameFormat = 'stage' | 'landscape' | 'portrait' | 'spread' | 'screen';

/** An image produced by the studio. Its presence replaces the empty frame. */
export type FrameImage = {
  /** Path relative to the site root (kept relative for the GitHub Pages base path). */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PageFrame = {
  /** Medium of the image, shown inside the frame while it is empty. */
  medium: string;
  /** What the image shows, or will show. */
  caption: string;
  image?: FrameImage;
};

export type StudyFrame = PageFrame & {
  service: ServiceId;
  format: FrameFormat;
};

export const frameStatus = 'Immagine in preparazione.';

export const studyFrames: Record<ServiceId, StudyFrame> = {
  rendering: {
    service: 'rendering',
    medium: 'Render',
    caption: 'L’oggetto su fondo neutro: forma, proporzioni e materiale.',
    format: 'landscape',
  },
  'photo-video': {
    service: 'photo-video',
    medium: 'Fotografia',
    caption: 'La superficie e la finitura, riprese da vicino in luce radente.',
    format: 'portrait',
  },
  catalogs: {
    service: 'catalogs',
    medium: 'Catalogo',
    caption: 'Una doppia pagina: l’oggetto, le varianti e i dati tecnici in ordine di lettura.',
    format: 'spread',
  },
  configurators: {
    service: 'configurators',
    medium: 'Configuratore',
    caption: 'Le finiture dell’oggetto, una alla volta, messe a confronto.',
    format: 'landscape',
  },
  web: {
    service: 'web',
    medium: 'Scheda prodotto',
    caption: 'Immagini, varianti e informazioni nella pagina in cui si sceglie.',
    format: 'screen',
  },
  automation: {
    service: 'automation',
    medium: 'Serie',
    caption: 'Lo stesso oggetto nelle sue varianti, con resa costante dall’una all’altra.',
    format: 'screen',
  },
};
