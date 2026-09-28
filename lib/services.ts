export type ServiceId =
  | 'rendering'
  | 'catalogs'
  | 'photo-video'
  | 'configurators'
  | 'web'
  | 'automation';

export type ServiceRecord = {
  id: ServiceId;
  name: string;
  /** What the client receives, in one sentence. */
  description: string;
};

export const services: ServiceRecord[] = [
  {
    id: 'rendering',
    name: 'Rendering 3D',
    description:
      'Forma, materiale, luce e proporzioni, resi visibili prima che il prodotto sia fisicamente davanti al cliente.',
  },
  {
    id: 'catalogs',
    name: 'Cataloghi e brochure',
    description:
      'Collezioni, varianti e informazioni ordinate in pagine che si leggono con chiarezza.',
  },
  {
    id: 'photo-video',
    name: 'Foto e video',
    description:
      'Il prodotto, il contesto e l’uso, ripresi con una regia che ne rende leggibile il valore.',
  },
  {
    id: 'configurators',
    name: 'Configuratori di prodotto',
    description:
      'Varianti, finiture e combinazioni mostrate una per una, perché chi sceglie veda ciò che sta scegliendo.',
  },
  {
    id: 'web',
    name: 'Web ed e-commerce',
    description:
      'Siti e negozi online costruiti intorno a ciò che le persone devono vedere, capire e scegliere.',
  },
  {
    id: 'automation',
    name: 'Strategia AI e automazione',
    description:
      'La tecnologia applicata dove migliora la coerenza, i tempi o la qualità del processo.',
  },
];

export function getService(id: ServiceId): ServiceRecord {
  const service = services.find((record) => record.id === id);
  if (!service) throw new Error(`Unknown service: ${id}`);
  return service;
}
