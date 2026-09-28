import { BrandLogo } from '@/components/BrandLogo';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer shell grid">
      <BrandLogo className="site-footer-logo" decorative />
      <p className="site-footer-signature" lang="en">{siteConfig.signature}</p>
      <p className="caption">
        {siteConfig.name}
        <span className="slash" aria-hidden="true">/</span>
        <span className="visually-hidden">, </span>
        {siteConfig.place}
        <span className="slash" aria-hidden="true">/</span>
        <span className="visually-hidden">, </span>
        © 2026
      </p>
    </footer>
  );
}
