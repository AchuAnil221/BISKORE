import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollRestorationFix from '@/components/layout/ScrollRestorationFix';
import SmoothScroll from '@/components/layout/SmoothScroll';
import './globals.css';

const outfit = localFont({
  src: '../fonts/Outfit-Variable.woff2',
  variable: '--font-outfit',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'Biskore Dynamics LLP — An Integrated House of Trade, Brand & Logistics',
    template: '%s | Biskore Dynamics LLP',
  },
  description:
    'Biskore Dynamics LLP is a multi-sector business group operating across fresh produce, international trade, Koblaq lifestyle brand, Tastecore food & beverages, and pan-India logistics — headquartered in Kasargod, Kerala.',
  keywords: [
    'Biskore',
    'Biskore Dynamics',
    'fresh produce India',
    'import export India',
    'Koblaq',
    'Tastecore',
    'pan-India logistics',
    'Kasargod',
    'Kerala',
  ],
  openGraph: {
    title: 'Biskore Dynamics LLP',
    description: 'An Integrated House of Trade, Brand & Logistics',
    url: 'https://www.biskore.com',
    siteName: 'Biskore Dynamics LLP',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biskore Dynamics LLP',
    description: 'An Integrated House of Trade, Brand & Logistics',
  },
  metadataBase: new URL('https://www.biskore.com'),
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          if (typeof window !== 'undefined' && window.history) {
            Object.defineProperty(window.history, 'scrollRestoration', {
              get: () => 'auto',
              set: () => {}
            });
          }
        `}} />
      </head>
      <body className={`${outfit.className} flex flex-col min-h-screen`}>
        <ScrollRestorationFix />
        <SmoothScroll />
        <Header />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
