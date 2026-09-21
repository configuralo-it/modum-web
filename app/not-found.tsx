import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';

export default function NotFound() {
  return (
    <main className="not-found shell">
      <header className="not-found-header">
        <Link href="/" aria-label="Modum Studio home">
          <BrandLogo className="brand-logo brand-logo-header" />
        </Link>
        <span className="mono">404 / NOT FOUND</span>
      </header>

      <section className="not-found-body">
        <div className="section-kicker"><span>/</span><i/><span>WRONG ADDRESS</span></div>
        <h1>Nothing to inspect here.</h1>
        <p>The page you’re looking for isn’t part of the current Modum Studio site.</p>
        <Link className="pill pill-dark" href="/">Back to Modum <span>↗</span></Link>
      </section>

      <div className="not-found-mark" aria-hidden="true">
        <BrandLogo decorative />
      </div>
    </main>
  );
}
