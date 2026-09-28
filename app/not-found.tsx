import Link from 'next/link';
import { SiteFooter } from '@/components/SiteFooter';
import { BrandLogo } from '@/components/BrandLogo';

export default function NotFound() {
  return (
    <>
      <header className="site-header shell">
        <Link href="/" className="site-logo" aria-label="Modum Studio, pagina iniziale">
          <BrandLogo />
        </Link>
      </header>

      <main className="plain shell">
        <h1 className="title">Questa pagina non c’è.</h1>
        <p>L’indirizzo non corrisponde a nessuna pagina del sito Modum Studio.</p>
        <Link className="action" href="/">Torna alla pagina iniziale</Link>
      </main>

      <SiteFooter />
    </>
  );
}
