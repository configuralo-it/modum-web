import Link from 'next/link';
import type { ProjectRecord } from '@/lib/projects';
import { BrandLogo } from '@/components/BrandLogo';
import { SiteFooter } from '@/components/SiteFooter';
import { getService } from '@/lib/services';

type Chapter = { title: string; body?: string };

export function CaseStudy({ project }: { project: ProjectRecord }) {
  const chapters: Chapter[] = [
    { title: 'Richiesta', body: project.challenge },
    { title: 'Metodo', body: project.approach },
    { title: 'Risultato', body: project.outcome },
  ];
  const services = project.services.map((id) => getService(id).name);

  return (
    <>
      <header className="site-header shell">
        <Link className="site-logo" href="/" aria-label="Modum Studio, pagina iniziale">
          <BrandLogo />
        </Link>
      </header>

      <main>
        <section className="section shell">
          <header className="section-head grid">
            <h1 className="heading">{project.title}</h1>
            <p>{project.intro}</p>
          </header>
          <p className="caption">
            {[project.client, project.year, ...services].filter(Boolean).join(' / ')}
          </p>
        </section>

        {project.hero ? (
          <figure className="shell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.hero} alt="" />
          </figure>
        ) : null}

        <section className="section shell">
          <div className="steps grid">
            {chapters.map((chapter) =>
              chapter.body ? (
                <article key={chapter.title} className="step">
                  <h2>{chapter.title}</h2>
                  <p>{chapter.body}</p>
                </article>
              ) : null,
            )}
          </div>
        </section>

        {project.gallery?.length ? (
          <section className="section shell">
            {project.gallery.map((src) => (
              <figure key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" />
              </figure>
            ))}
          </section>
        ) : null}

        <p className="shell">
          <Link className="action" href="/#work">Torna al progetto</Link>
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
