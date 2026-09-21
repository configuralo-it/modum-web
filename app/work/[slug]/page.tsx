import { notFound } from 'next/navigation';
import { CaseStudy } from '@/components/CaseStudy';
import { getPublishedProject, publishedProjects } from '@/lib/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPublishedProject(slug);

  if (!project) notFound();

  return <CaseStudy project={project} />;
}
