import type { Metadata } from 'next';
import '@fontsource-variable/montserrat';
import '@fontsource/poppins/400.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modum Studio',
  description: 'Modum Studio — product truth, commercial clarity, creative and digital experiences for product companies.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
