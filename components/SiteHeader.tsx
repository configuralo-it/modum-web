import { BrandLogo } from '@/components/BrandLogo';
import { navigation } from '@/lib/content';

const mobileMenuScript = String.raw`
(() => {
  const script = document.currentScript;
  const menu = script?.previousElementSibling;
  if (!(menu instanceof HTMLDetailsElement)) return;

  const close = () => menu.removeAttribute('open');

  menu.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  document.addEventListener('pointerdown', (event) => {
    if (menu.open && event.target instanceof Node && !menu.contains(event.target)) close();
  }, { passive: true });
})();
`;

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <a href="#top" className="site-logo" aria-label="Modum Studio, inizio pagina">
        <BrandLogo />
      </a>

      <nav className="site-nav voice" aria-label="Navigazione principale">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <details className="site-menu voice">
        <summary>Menu</summary>
        <div>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>
      </details>
      <script dangerouslySetInnerHTML={{ __html: mobileMenuScript }} />
    </header>
  );
}
