import type { Metadata } from 'next';
import '@fontsource-variable/montserrat';
import '@fontsource/poppins/400.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modum Studio',
  description: 'Modum Studio reduces the distance between what a product is and what people can perceive, understand and choose before they have it in front of them.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
