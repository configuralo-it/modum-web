import { contact } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export function ContactSection() {
  const [user, domain] = siteConfig.email.split('@');

  return (
    <section id="contact" className="section contact shell" aria-labelledby="contact-title">
      <h2 id="contact-title" className="heading">{contact.title}</h2>
      <a className="contact-mail" href={`mailto:${siteConfig.email}`}>
        {user}@<wbr />{domain}
      </a>
      <p className="contact-note">{contact.note}</p>
    </section>
  );
}
