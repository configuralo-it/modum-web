import { BrandLogo } from '@/components/BrandLogo';
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
    <main className="v2">
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

      <section id="top" className="v2-hero">
        <div className="v2-hero-wordmark" aria-hidden="true">
          <BrandLogo decorative />
        </div>

        <div className="v2-shell v2-hero-grid">
          <div className="v2-hero-intro">
            <span className="v2-label">MODUM STUDIO / RIMINI — IT</span>
            <p>A creative and digital studio for real products.</p>
          </div>

          <div className="v2-hero-statement">
            <h1>Make real product value visible.</h1>
            <a href="#work" className="v2-arrow-link">Explore our work <span>→</span></a>
          </div>

          <div className="v2-product-plate" aria-label="Modum Product Study 01">
            <div className="v2-product-object" aria-hidden="true">
              <span className="v2-product-shell" />
              <span className="v2-product-leg v2-product-leg-a" />
              <span className="v2-product-leg v2-product-leg-b" />
              <span className="v2-product-joint v2-product-joint-a" />
              <span className="v2-product-joint v2-product-joint-b" />
            </div>
            <div className="v2-product-caption">
              <span>MODUM PRODUCT STUDY / 01</span>
              <span>FORM / MATERIAL / CONSTRUCTION</span>
            </div>
          </div>

          <div className="v2-hero-index">
            <span>OBJECTS</span>
            <span>IMAGES</span>
            <span>DIGITAL</span>
          </div>
        </div>
      </section>

      <section id="work" className="v2-work v2-shell">
        <div className="v2-section-head">
          <span className="v2-label">01 / SELECTED WORK</span>
          <p>Three Modum Studio Studies exploring how product value can become image, information and interaction.</p>
        </div>

        <div className="v2-work-grid">
          <article className="v2-work-main">
            <div className="v2-study-image v2-study-product" aria-hidden="true">
              <span className="v2-study-product-shell" />
              <span className="v2-study-product-frame" />
              <span className="v2-study-product-accent" />
            </div>
            <div className="v2-work-meta">
              <div><span>01</span><h2>Product / Material Study</h2></div>
              <p>3D · visual direction · product truth</p>
            </div>
          </article>

          <article className="v2-work-side v2-work-editorial">
            <div className="v2-study-image" aria-hidden="true">
              <strong>FORM</strong><i>/</i><b>02</b>
              <span />
            </div>
            <div className="v2-work-meta">
              <div><span>02</span><h2>Editorial System Study</h2></div>
              <p>Catalog · typography · hierarchy</p>
            </div>
          </article>

          <article className="v2-work-side v2-work-digital">
            <div className="v2-study-image" aria-hidden="true">
              <div className="v2-config-ring" />
              <ol><li>Oak</li><li>Steel</li><li>Fabric</li></ol>
            </div>
            <div className="v2-work-meta">
              <div><span>03</span><h2>Configurator Study</h2></div>
              <p>Variants · interaction · decision</p>
            </div>
          </article>
        </div>
      </section>

      <section id="services" className="v2-capabilities">
        <div className="v2-shell">
          <div className="v2-capabilities-intro">
            <span className="v2-label">02 / WHAT WE MAKE</span>
            <h2>Different disciplines.<br />One product reality.</h2>
            <p>We choose the medium after understanding what the product needs people to perceive.</p>
          </div>

          <div className="v2-service-list">
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

      <section className="v2-process">
        <div className="v2-shell">
          <div className="v2-section-head">
            <span className="v2-label">03 / HOW WE SEE PRODUCT</span>
            <p>Process is evidence when it helps explain what makes the product worth choosing.</p>
          </div>

          <div className="v2-process-grid">
            <div className="v2-process-copy">
              <h2>A chair is never just a chair.</h2>
              <p>It is material, proportion, joints, finish, context, variants, photography, information and the way a customer eventually makes a choice.</p>
            </div>

            <div className="v2-exploded" aria-label="Product construction study">
              <span className="v2-ex-shell">Shell</span>
              <span className="v2-ex-frame">Frame</span>
              <span className="v2-ex-joint">Joint</span>
              <span className="v2-ex-detail">Detail</span>
              <div className="v2-exploded-shell" />
              <div className="v2-exploded-frame" />
              <div className="v2-exploded-bar" />
              <div className="v2-exploded-dot v2-dot-a" />
              <div className="v2-exploded-dot v2-dot-b" />
            </div>
          </div>

          <div className="v2-process-line">
            <span>UNDERSTAND</span><i>/</i><span>MAKE VISIBLE</span><i>/</i><span>BUILD CONFIDENCE</span><i>/</i><span>MAKE CHOICE EASIER</span>
          </div>
        </div>
      </section>

      <section id="studio" className="v2-studio v2-shell">
        <span className="v2-label">04 / STUDIO</span>
        <div className="v2-studio-grid">
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

      <section id="contact" className="v2-contact">
        <div className="v2-contact-word" aria-hidden="true">/</div>
        <div className="v2-shell v2-contact-inner">
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
