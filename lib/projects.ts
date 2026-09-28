import type { ServiceId } from '@/lib/services';

export type ProjectRecord = {
  slug: string;
  title: string;
  client: string;
  year?: string;
  services: ServiceId[];
  intro: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  hero?: string;
  gallery?: string[];
  published: boolean;
};

/**
 * Only verified, publishable client work belongs here.
 * Do not convert studio studies or internal concepts into client projects.
 */
export const projects: ProjectRecord[] = [];

export const publishedProjects = projects.filter((project) => project.published);

export function getPublishedProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}
