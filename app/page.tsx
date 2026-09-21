import { HeroStage } from '@/components/HeroStage';
import { Reveal } from '@/components/Reveal';
import { DistortedLens } from '@/components/DistortedLens';
import { BrandLogo } from '@/components/BrandLogo';
import { siteConfig } from '@/lib/site';

const services = [
  ['01','3D Rendering','Photorealism, material, light and detail that make the product credible before a camera is involved.'],
  ['02','Catalogs & Brochures','Editorial systems that organise collections, variants and information without flattening the product.'],
  ['03','Photo & Video','Content that shows product, context, use and character without overloading the scene.'],
  ['04','Product Configurators','Interfaces for exploring variants and understanding exactly what changes when a choice changes.'],
  ['05','Web & E-commerce','Digital experiences built around the product and the decision, not around a template.'],
  ['06','AI Strategy & Automation','Technology when it has a job: consistency, speed, quality and more efficient processes.'],
];

const projects = [
  ['01','Material study','Product form / 3D · Modum study'],
  ['02','Editorial study','Catalog system · Modum study'],
  ['03','Configurator study','Digital sales tool · Modum study'],
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand brand-link" href="#top" aria-label="Modum Studio home"><BrandLogo className="brand-logo brand-logo-header" /></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#studio">Studio</a>
        </nav>
        <a className="pill pill-dark desktop-contact" href="#contact">Let's talk <span>/</span></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span>Menu</span><i>/</i></summary>
          <div className="mobile-menu-panel">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#studio">Studio</a>
            <a href="#contact">Let's talk</a>
          </div>
        </details>
      </header>

      <section id="top" className="hero shell">
        <div className="ambient-shape shape-a" aria-hidden="true" />
        <div className="hero-membrane" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true"><span>01</span></div>
        <div className="hero-copy">
          <div className="eyebrow"><span>00</span><i /> <span>PRODUCT / PERCEPTION</span></div>
          <h1>Make real product value visible.</h1>
          <p className="hero-lead">We reduce the distance between what a product is and what people can perceive before they have it in front of them.</p>
          <div className="hero-actions">
            <a className="pill pill-dark" href="#services">What we do <span>↗</span></a>
            <a className="text-link" href="#approach">Our approach <span>→</span></a>
          </div>
        </div>
        <div className="hero-stage">
          <HeroStage />
          <div className="annotation annotation-a"><span>Construction</span><b>shell / frame / joint</b></div>
          <div className="annotation annotation-b"><span>Product study</span><b>form / material / detail</b></div>
        </div>
        <div className="hero-meta mono">
          <span>SCROLL</span><i />
          <span>Product Truth / Commercial Clarity</span>
          <span>Modum Studio / Creative & Digital</span>
        </div>
      </section>

      <section id="work" className="work section shell">
        <Reveal>
          <div className="section-kicker"><span>/</span><i/><span>STUDIO STUDIES</span><b>PORTFOLIO / NEXT</b></div>
          <h2 className="sr-only">Modum Studio studies</h2>
          <div className="project-grid">
            {projects.map(([n,title,meta], idx) => (
              <article className={`project project-${idx+1}`} key={n}>
                <div className="project-visual" aria-hidden="true">
                  <span className="mono">/{n}</span>
                  <div className="project-object">
                    <i className="study-shape" />
                    <i className="study-detail" />
                  </div>
                </div>
                <div className="project-info"><div><h3>{title}</h3><p>{meta}</p></div><span className="project-marker mono" aria-hidden="true">STUDY</span></div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="services" className="services section shell">
        <Reveal className="services-layout">
          <div className="services-intro">
            <div className="section-kicker"><span>/</span><i/><span>WHAT WE DO</span></div>
            <h2>From product to product experience.</h2>
            <p>Different disciplines, one job: make the product clearer, more credible and easier to choose.</p>
          </div>
          <div className="service-list">
            {services.map(([n,title,desc]) => <div className="service-row" key={n}><span className="mono">{n}</span><h3>{title}</h3><p>{desc}</p></div>)}
          </div>
        </Reveal>
      </section>

      <section id="approach" className="approach section-dark">
        <div className="dark-curve" aria-hidden="true" />
        <div className="shell approach-grid">
          <Reveal>
            <div className="section-kicker on-dark"><span>/</span><i/><span>APPROACH</span></div>
            <h2>Understand deeply.<br/>Then amplify.</h2>
            <p>We start with what the product is, how it works and what people need to understand. Creativity and technology come after.</p>
          </Reveal>
          <Reveal className="approach-visual">
            <div className="detail-slab"><div className="detail-edge"/></div>
            <DistortedLens />
            <div className="approach-note mono">DETAILS / MATERIAL / LIGHT / FORM</div>
          </Reveal>
          <div className="logic mono">
            <span>PRODUCT TRUTH</span><i>→</i><span>UNDERSTANDING</span><i>→</i><span>CONFIDENCE</span><i>→</i><span>CHOICE</span>
          </div>
        </div>
      </section>

      <section className="detail section shell">
        <Reveal className="detail-grid">
          <div>
            <div className="section-kicker"><span>/</span><i/><span>LOOK CLOSER</span></div>
            <h2>Does it get better when you look closer?</h2>
            <p>Quality lives in the second reading: material, proportion, interaction, wording, transitions, details that continue to make sense up close.</p>
          </div>
          <div className="inspection-card">
            <div className="inspection-surface" />
            <span className="inspection-dot"/>
            <p className="mono">INSPECT / EDGE DETAIL / 02</p>
          </div>
        </Reveal>
      </section>

      <section id="studio" className="studio section shell">
        <BrandLogo className="studio-brand-fragment" decorative />
        <Reveal className="studio-grid">
          <div><div className="section-kicker"><span>/</span><i/><span>STUDIO</span></div><h2>Serious about the work.<br/>Curious about everything.</h2></div>
          <div className="studio-copy"><p>Modum is a creative and digital studio built around product understanding, visual craft and technical capability.</p><p>Two cofounders, distributed responsibilities, one shared standard: make it clear, intentional and worth choosing.</p><div className="studio-names"><span>Giada Rossetti</span><i>/</i><span>Alberto G. Ferrario</span></div></div>
        </Reveal>
      </section>

      <section id="contact" className="contact shell">
        <BrandLogo className="brand-fragment" decorative />
        <div className="contact-blob" aria-hidden="true" />
        <Reveal className="contact-inner">
          <div className="section-kicker"><span>/</span><i/><span>START</span></div>
          <h2>Show us the product.</h2>
          <p>We'll start by understanding what people need to see, know or experience.</p>
          <a className="pill pill-signal" href={`mailto:${siteConfig.email}`}>Start a conversation <span>↗</span></a>
          <small className="mono">{siteConfig.email.toUpperCase()}</small>
        </Reveal>
      </section>

      <footer className="shell footer"><BrandLogo className="brand-logo brand-logo-footer" decorative /><a className="mono footer-domain" href={siteConfig.url}>{siteConfig.domain.toUpperCase()}</a><span className="mono">© 2026</span></footer>
    </main>
  );
}
