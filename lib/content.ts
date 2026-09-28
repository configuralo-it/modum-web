/**
 * Homepage copy, Italian.
 * Anchor ids stay in English: the CI review job captures #work, #approach and #contact.
 */

import type { PageFrame } from '@/lib/study';

/** Non-breaking space: keeps a pair of words on the same line. */
const nbsp = '\u00a0';

export const navigation = [
  { label: 'Servizi', href: '#work' },
  { label: 'Metodo', href: '#approach' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contatti', href: '#contact' },
];

export const opening = {
  /** Phrases: a line breaks between two phrases before it breaks inside one. */
  title: ['Mostriamo', `il${nbsp}prodotto com’è,`, `prima di${nbsp}averlo davanti.`],
  body: `Modum Studio lavora con le aziende di prodotto, a partire da arredo, design e manifattura. Rendering, fotografia, cataloghi, configuratori e siti hanno lo stesso scopo: far percepire, capire e scegliere un prodotto a chi non può ancora vederlo dal${nbsp}vero.`,
  action: 'Mostrateci il prodotto',
  frame: {
    medium: 'Render',
    caption: 'Oggetto di studio, vista d’insieme.',
  } as PageFrame,
};

export const study = {
  title: `Un solo oggetto, mostrato in sei${nbsp}modi.`,
  intro:
    'I lavori per i clienti non sono ancora pubblicati. Al loro posto presentiamo un progetto di studio interno (Modum Studio Study), condotto su un oggetto d’arredo con ciascuno dei nostri sei servizi. Le immagini sono in preparazione; ogni riquadro indica quella che lo occuperà.',
};

export const method = {
  title: 'Come lavoriamo',
  steps: [
    {
      title: 'Partiamo dal prodotto',
      body: 'Prima del mezzo viene l’oggetto: materiale, proporzioni, giunzioni, finitura, varianti. Lo studiamo finché è chiaro che cosa deve arrivare a chi guarda.',
    },
    {
      title: 'Scegliamo il mezzo',
      body: 'Render, fotografia, pagina stampata, configuratore o sito: la scelta dipende da ciò che le persone devono vedere, sapere o provare.',
    },
    {
      title: 'Verifichiamo da vicino',
      body: 'Un’immagine è pronta quando corrisponde al prodotto e regge uno sguardo ravvicinato.',
    },
  ],
};

export const studio = {
  title: 'Lo studio',
  body: 'Modum è uno studio creativo e digitale con sede a Rimini. Unisce la conoscenza del prodotto, il mestiere dell’immagine e la competenza tecnica.',
  founders: ['Giada Rossetti', `Alberto G.${nbsp}Ferrario`],
  frame: {
    medium: 'Ritratto',
    caption: 'Lo studio al lavoro.',
  } as PageFrame,
};

export const contact = {
  title: 'Mostrateci il prodotto.',
  note: `Cominciamo col capire che cosa le persone devono vedere, sapere o${nbsp}provare.`,
};
