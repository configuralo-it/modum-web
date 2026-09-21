import { BrandLogo } from '@/components/BrandLogo';
import { ProductStudy } from '@/components/ProductStudy';
import { InteractionLayer } from '@/components/InteractionLayer';
import { siteConfig } from '@/lib/site';

const services = [
  ['01', '3D Rendering', 'Form, material, light and proportion before the product is physically in front of the customer.'],
  ['02', 'Catalogs & Brochures', 'Collections, variants and information turned into a clear editorial system.'],
  ['03', 'Photo & Video', 'Product, context and use shown with enough direction to make the real value legible.'],
  ['04', 'Product Configurators', 'Choices become visible. Variants, finishes and combinations become easier to understand.'],
  ['05', 'Web & E-commerce', 'Digital product experiences designed around what people need to see, understand and choose.'],
  ['06', 'AI Strategy & Automation', 'Technology used where it improves consistency, speed or the quality of the process.'],
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
    <main className="v2 v25">
      <InteractionLayer />

      <header className="v2-header v2-shell">
        <a href="#top" className="v2-logo-link" aria-label="Modum Studio home">
          <BrandLogo className="v2-logo" />
        </a>

        <nav className="v2-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">What we make</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </nav>

        <details className="v2-mobile-menu">
          <summary>Menu <i>/</i></summary>
          <div>
            <a href="#work">Work</a>
            <a href="#services">What we make</a>
            <a href="#studio">Studio</a>
            <a href="#contact">Contact</a>
          </div>
        </details>
        <script dangerouslySetInnerHTML={{ __html: mobileMenuScript }} />
      </header>

      <section id="top" className="v25-hero v2-hero">
        <div className="v25-grid-lines" aria-hidden="true" />
        <div className="v2-hero-wordmark v25-wordmark" aria-hidden="true">
          <BrandLogo decorative />
        </div>

        <div className="v2-shell v25-hero-shell">
          <div className="v25-hero-intro">
            <span className="v2-label">MODUM STUDIO / RIMINI — IT</span>
            <p>A creative and digital studio for real products.</p>
          </div>

          <div className="v2-product-plate v25-product-stage" aria-label="Modum Product Study 01">
            <ProductStudy variant="hero" className="v2-product-art v25-product-art" />
            <span className="v25-object-note v25-object-note-a">STUDY / 01</span>
            <span className="v25-object-note v25-object-note-b">FORM / MATERIAL / CONSTRUCTION</span>
          </div>

          <div className="v25-hero-statement">
            <h1>Make real product value visible.</h1>
            <a href="#work" className="v2-arrow-link">Selected work <span>↓</span></a>
          </div>

          <div className="v25-hero-axis" aria-hidden="true">
            <span>OBJECT</span><i>/</i><span>IMAGE</span><i>/</i><span>DIGITAL</span>
          </div>
        </div>
      </section>

      <section id="work" className="v25-work v2-shell">
        <div className="v25-section-intro" data-reveal>
          <span className="v2-label">01 / SELECTED WORK</span>
          <p>Three Modum Studio Studies. Different media, one question: how much of the real product can be understood before it is physically in front of you?</p>
        </div>

        <div className="v25-work-index">
          <article className="v25-work-row v25-work-row-product" data-reveal>
            <div className="v25-work-line">
              <span>01</span>
              <h2>Product / Material Study</h2>
              <p>3D · visual direction · product truth</p>
              <b aria-hidden="true">↘</b>
            </div>
            <div className="v25-work-preview v25-preview-product">
              <ProductStudy variant="detail" className="v25-work-product-art" />
              <div className="v25-preview-caption">
                <span>MODUM PRODUCT STUDY</span>
                <span>SHELL / FRAME / JOINT</span>
              </div>
            </div>
          </article>

          <article className="v25-work-row v25-work-row-editorial" data-reveal>
            <div className="v25-work-line">
              <span>02</span>
              <h2>Editorial System Study</h2>
              <p>Catalog · typography · hierarchy</p>
              <b aria-hidden="true">↘</b>
            </div>
            <div className="v25-work-preview v25-preview-editorial" aria-hidden="true">
              <div className="v25-editorial-sheet">
                <small>MODUM / STUDY 02</small>
                <strong>FORM</strong>
                <i>/</i>
                <span>PRODUCT<br />INFORMATION<br />AS SYSTEM</span>
              </div>
              <div className="v25-editorial-sheet v25-editorial-sheet-dark">
                <small>CATALOG / 01—96</small>
                <strong>MAT<br />TER</strong>
                <span>OBJECTS / DETAILS / VARIANTS</span>
              </div>
            </div>
          </article>

          <article className="v25-work-row v25-work-row-digital" data-reveal>
            <div className="v25-work-line">
              <span>03</span>
              <h2>Configurator Study</h2>
              <p>Variants · interaction · decision</p>
              <b aria-hidden="true">↘</b>
            </div>
            <div className="v25-work-preview v25-preview-digital" aria-hidden="true">
              <div className="v25-config-object">
                <div className="v25-config-ring" />
                <span>01</span><span>02</span><span>03</span>
              </div>
              <div className="v25-config-list">
                <small>MATERIAL</small>
                <strong>Oak</strong>
                <strong>Steel</strong>
                <strong>Fabric</strong>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="services" className="v2-capabilities v25-capabilities">
        <div className="v2-shell">
          <div className="v2-capabilities-intro" data-reveal>
            <span className="v2-label">02 / WHAT WE MAKE</span>
            <h2>Different disciplines.<br />One product reality.</h2>
            <p>We choose the medium after understanding what the product needs people to perceive.</p>
          </div>

          <div className="v2-service-list" data-reveal>
            {services.map(([n, title, description]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v25-process">
        <div className="v2-shell">
          <div className="v25-process-head" data-reveal>
            <span className="v2-label">03 / HOW WE SEE PRODUCT</span>
            <p>Process is useful when it reveals why an object is worth choosing.</p>
          </div>

          <div className="v25-process-board" data-reveal>
            <div className="v25-process-statement">
              <span>PRODUCT STUDY / 01</span>
              <h2>A chair is never just a chair.</h2>
              <p>Material, proportion, joints, finish, context, variants, photography, information — and finally the moment a customer makes a choice.</p>
            </div>

            <div className="v25-process-object">
              <ProductStudy variant="exploded" className="v25-process-art" />
            </div>

            <div className="v25-process-legend">
              <span>01 / UNDERSTAND</span>
              <span>02 / MAKE VISIBLE</span>
              <span>03 / BUILD CONFIDENCE</span>
              <span>04 / MAKE CHOICE EASIER</span>
            </div>
          </div>
        </div>
      </section>

      <section id="studio" className="v2-studio v2-shell v25-studio">
        <span className="v2-label">04 / STUDIO</span>
        <div className="v2-studio-grid" data-reveal>
          <h2>Serious about the work.<br />Curious about everything.</h2>
          <div>
            <p>Modum is a creative and digital studio built around product understanding, visual craft and technical capability.</p>
            <p>We do not start from the medium. We start from what the product is and what people need to understand.</p>
            <div className="v2-founders">
              <span>Giada Rossetti</span><i>/</i><span>Alberto G. Ferrario</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="v2-contact v25-contact">
        <div className="v2-contact-word" aria-hidden="true">/</div>
        <div className="v2-shell v2-contact-inner" data-reveal>
          <span className="v2-label">05 / START</span>
          <h2>Show us<br />the product.</h2>
          <div className="v2-contact-side">
            <p>We will start by understanding what people need to see, know or experience.</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email} <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="v2-footer v2-shell">
        <BrandLogo className="v2-footer-logo" decorative />
        <span>{siteConfig.domain}</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
