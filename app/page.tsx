import { BrandLogo } from '@/components/BrandLogo';
import { materials } from '@/lib/studies';
import { siteConfig } from '@/lib/site';

const services = [
  ['01', '3D Rendering', 'Form, material, light and proportion before the product physically exists in front of the customer.'],
  ['02', 'Catalogs & Brochures', 'Collections, variants and information turned into a clear editorial system.'],
  ['03', 'Photo & Video', 'Product, context and use shown with enough direction to make the real value legible.'],
  ['04', 'Product Configurators', 'Choices become visible. Variants, finishes and combinations become easier to understand.'],
  ['05', 'Web & E-commerce', 'Digital product experiences designed around what people need to see, understand and choose.'],
  ['06', 'AI Strategy & Automation', 'Technology used where it improves consistency, speed or the quality of the process.'],
];

const pageIndex = [
  ['01', 'Selected studies', '#work'],
  ['02', 'What we make', '#services'],
  ['03', 'How we see product', '#approach'],
  ['04', 'Studio', '#studio'],
  ['05', 'Contact', '#contact'],
];

const mobileMenuScript = String.raw`
(() => {
  const script = document.currentScript;
  const menu = script?.previousElementSibling;
  if (!(menu instanceof HTMLDetailsElement)) return;

  const close = () => menu.removeAttribute('open');

  menu.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  document.addEventListener('pointerdown', (event) => {
    if (!menu.open || menu.contains(event.target)) close();
  }, { passive: true });
})();
`;

export default function HomePage() {
  return (
    <main className="v3">
      <header className="v3-header shell">
        <a href="#top" className="v3-logo-link" aria-label="Modum Studio home">
          <BrandLogo className="v3-logo" />
        </a>

        <nav className="v3-nav mono" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">What we make</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </nav>

        <span className="v3-header-place mono">Rimini — IT</span>

        <details className="v3-mobile-menu mono">
          <summary>Menu <i aria-hidden="true">/</i></summary>
          <div>
            <a href="#work">Work</a>
            <a href="#services">What we make</a>
            <a href="#studio">Studio</a>
            <a href="#contact">Contact</a>
          </div>
        </details>
        <script dangerouslySetInnerHTML={{ __html: mobileMenuScript }} />
      </header>

      <section id="top" className="v3-hero shell" aria-label="Introduction">
        <div className="v3-hero-grid">
          <h1 className="v3-statement">
            <span className="v3-statement-line">Make real</span>
            <span className="v3-statement-line v3-step-1">product</span>
            <span className="v3-statement-line v3-step-2">value</span>
            <span className="v3-statement-line">visible<i className="v3-dot" aria-hidden="true">.</i></span>
          </h1>

          <figure className="v3-hero-object">
            <img
              src="studies/object-chair.jpg"
              alt="Chair photographed in studio light"
              width={1400}
              height={933}
              decoding="async"
            />
            <figcaption className="mono">
              <span>Object</span>
              <span>Chair — studio light</span>
            </figcaption>
          </figure>
        </div>

        <div className="v3-hero-foot">
          <p className="v3-hero-copy">
            Modum Studio reduces the distance between what a product is and what people can
            perceive, understand and choose before they have it in front of them.
          </p>

          <nav className="v3-index mono" aria-label="Page index">
            {pageIndex.map(([n, label, href]) => (
              <a key={n} href={href}>
                <span>{n}</span>
                <em>{label}</em>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="v3-band shell" role="group" aria-label="Material studies, photographed">
        {materials.map((m) => (
          <figure key={m.id} className="v3-band-cell">
            <img src={m.src} alt={m.alt} width={1200} height={800} decoding="async" />
            <figcaption className="mono">
              <span>{m.name}</span>
              <span>{m.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <section id="work" className="v3-section shell">
        <header className="v3-section-head">
          <span className="mono">01 / Selected studies</span>
          <p>
            Client work is deliberately not shown yet. Three internal studies stand in its
            place — real artifacts made by the studio, shown as they are.
          </p>
        </header>

        <article className="v3-study v3-study-material">
          <div className="v3-study-line">
            <h2><i aria-hidden="true">/</i> Material</h2>
            <span className="mono">Study 01 — Photography</span>
          </div>
          <p className="v3-study-material-q">
            How much of a material survives the screen? Surface, grain and finish
            photographed close enough to be judged, not decorated.
          </p>
          <div className="v3-bleed">
            <figure>
              <img src={materials[1].src} alt={materials[1].alt} width={1400} height={1050} loading="lazy" decoding="async" />
              <figcaption className="mono">Textile — grey weave</figcaption>
            </figure>
            <figure>
              <img src={materials[2].src} alt={materials[2].alt} width={1100} height={1955} loading="lazy" decoding="async" />
              <figcaption className="mono">Steel — brushed finish</figcaption>
            </figure>
          </div>
        </article>

        <article className="v3-study v3-study-editorial">
          <div className="v3-study-line">
            <h2><i aria-hidden="true">/</i> Editorial</h2>
            <span className="mono">Study 02 — Typography</span>
          </div>
          <div className="v3-sheets" aria-label="Two editorial layout exercises">
            <div className="v3-sheet">
              <small className="mono">Modum / Editorial study</small>
              <strong>Form</strong>
              <span>Product information as a system: hierarchy first, decoration never.</span>
            </div>
            <div className="v3-sheet v3-sheet-dark">
              <small className="mono">Catalog exercise — spread</small>
              <strong>Matter</strong>
              <span>Objects, details, variants — ordered so a reader can decide.</span>
            </div>
          </div>
        </article>

        <article className="v3-study v3-study-configurator">
          <div className="v3-study-line">
            <h2><i aria-hidden="true">/</i> Configurator</h2>
            <span className="mono">Study 03 — Interaction</span>
          </div>

          <fieldset className="v3-cfg">
            <legend className="mono">A working fragment: three materials, one decision.</legend>

            {materials.map((m, i) => (
              <input
                key={m.id}
                type="radio"
                name="material"
                id={`cfg-${m.id}`}
                className={`v3-cfg-input v3-cfg-input-${m.id}`}
                defaultChecked={i === 2}
              />
            ))}

            <div className="v3-cfg-body">
              <div className="v3-cfg-options">
                {materials.map((m) => (
                  <label key={m.id} htmlFor={`cfg-${m.id}`} className="v3-cfg-option">
                    <img src={m.src} alt="" width={200} height={200} loading="lazy" decoding="async" />
                    <span className="mono">{m.name}</span>
                  </label>
                ))}
              </div>

              <div className="v3-cfg-stage">
                {materials.map((m) => (
                  <figure key={m.id} className={`v3-cfg-view v3-cfg-view-${m.id}`}>
                    <img src={m.src} alt={m.alt} width={1200} height={800} loading="lazy" decoding="async" />
                    <figcaption className="mono">{m.name} — {m.detail}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </fieldset>
        </article>
      </section>

      <section id="services" className="v3-section shell">
        <header className="v3-section-head">
          <span className="mono">02 / What we make</span>
          <p>We choose the medium after understanding what the product needs people to perceive.</p>
        </header>

        <div className="v3-services">
          {services.map(([n, title, description]) => (
            <article key={n} className="v3-service">
              <span className="mono">{n}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="v3-approach">
        <div className="shell">
          <header className="v3-section-head">
            <span className="mono">03 / How we see product</span>
          </header>

          <div className="v3-approach-grid">
            <div>
              <p className="v3-approach-statement">A chair is never just a chair.</p>
              <p className="v3-approach-copy">
                Material, proportion, joints, finish, context, variants, photography,
                information — and finally the moment a customer makes a choice.
              </p>
            </div>

            <figure className="v3-approach-object">
              <img
                src="studies/object-armchair.jpg"
                alt="Armchair with fabric cushions and leather shell on a dark ground"
                width={1400}
                height={787}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mono">Armchair — fabric / leather shell</figcaption>
            </figure>
          </div>

          <ol className="v3-stages mono">
            <li><span>01</span>Understand</li>
            <li><span>02</span>Make visible</li>
            <li><span>03</span>Build confidence</li>
            <li><span>04</span>Make choice easier</li>
          </ol>
        </div>
      </section>

      <section id="studio" className="v3-section shell">
        <header className="v3-section-head">
          <span className="mono">04 / Studio</span>
        </header>

        <div className="v3-studio">
          <h2>Serious about the work.<br />Curious about everything.</h2>
          <div className="v3-studio-side">
            <p>
              Modum is a creative and digital studio built around product understanding,
              visual craft and technical capability.
            </p>
            <p>
              We do not start from the medium. We start from what the product is and what
              people need to understand.
            </p>
            <p className="v3-founders">
              Giada Rossetti <i aria-hidden="true">/</i> Alberto G. Ferrario
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="v3-contact shell">
        <header className="v3-section-head">
          <span className="mono">05 / Contact</span>
        </header>

        <p className="v3-contact-lead">Show us the product.</p>
        <a className="v3-contact-mail" href={`mailto:${siteConfig.email}`}>
          parliamo@<wbr />modumstudio.it
        </a>
        <p className="v3-contact-note">
          We will start by understanding what people need to see, know or experience.
        </p>
      </section>

      <footer className="v3-footer shell">
        <BrandLogo className="v3-footer-logo" decorative />
        <span className="mono">{siteConfig.domain}</span>
        <span className="mono">© 2026</span>
      </footer>
    </main>
  );
}
