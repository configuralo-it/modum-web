import type { ProjectRecord } from '@/lib/projects';
import { BrandLogo } from '@/components/BrandLogo';

export function CaseStudy({ project }: { project: ProjectRecord }) {
  return (
    <main className="case-study">
      <header className="case-study-header shell">
        <a className="brand-link" href="/" aria-label="Modum Studio home">
          <BrandLogo className="brand-logo brand-logo-header" />
        </a>
        <a className="text-link" href="/#work">Back to work <span>↗</span></a>
      </header>

      <section className="case-study-hero shell">
        <div className="section-kicker"><span>/</span><i/><span>CASE STUDY</span></div>
        <h1>{project.title}</h1>
        <div className="case-study-meta">
          <span>{project.client}</span>
          {project.year ? <span>{project.year}</span> : null}
          <span>{project.services.join(' / ')}</span>
        </div>
        <p>{project.intro}</p>
      </section>

      {project.hero ? (
        <figure className="case-study-media shell">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.hero} alt="" />
        </figure>
      ) : null}

      <section className="case-study-story shell">
        {project.challenge ? <article><span className="mono">01 / Challenge</span><p>{project.challenge}</p></article> : null}
        {project.approach ? <article><span className="mono">02 / Approach</span><p>{project.approach}</p></article> : null}
        {project.outcome ? <article><span className="mono">03 / Outcome</span><p>{project.outcome}</p></article> : null}
      </section>

      {project.gallery?.length ? (
        <section className="case-study-gallery shell">
          {project.gallery.map((src, index) => (
            <figure key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" />
              <figcaption className="mono">/{String(index + 1).padStart(2, '0')}</figcaption>
            </figure>
          ))}
        </section>
      ) : null}

      <footer className="case-study-footer shell">
        <BrandLogo className="brand-logo brand-logo-footer" decorative />
        <a href="mailto:parliamo@modumstudio.it">Start a conversation <span>↗</span></a>
      </footer>
    </main>
  );
}
