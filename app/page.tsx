import { ContactSection } from '@/components/home/ContactSection';
import { MethodSection } from '@/components/home/MethodSection';
import { Opening } from '@/components/home/Opening';
import { StudioSection } from '@/components/home/StudioSection';
import { StudySection } from '@/components/home/StudySection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#top">Vai al contenuto</a>
      <SiteHeader />
      <main>
        <Opening />
        <StudySection />
        <MethodSection />
        <StudioSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
