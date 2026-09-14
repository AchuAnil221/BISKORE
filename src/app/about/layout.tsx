import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Biskore Dynamics LLP — founded by Biju & Sujith in Kasargod, Kerala. A multi-sector group built on direct sourcing, quality, and long-term partnership.',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
