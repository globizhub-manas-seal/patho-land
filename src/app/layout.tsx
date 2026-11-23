import type { Metadata } from 'next';
import './globals.css';
import ScrollRevealProvider from '../components/ScrollRevealProvider';
import { brandConfig } from '../data/brand';

export const metadata: Metadata = {
  metadataBase: new URL('https://patholab.cloud'),
  title: 'Patholab Cloud | Modern Pay-As-You-Go Pathology & Diagnostic Software',
  description:
    "India's first 100% pay-as-you-go cloud LIMS for diagnostic pathology labs at ₹2.5 per patient registration. Zero server fees, 500+ machine interfacing, and unlimited branches.",
  keywords: [
    'Pathology Lab Software',
    'LIMS Cloud India',
    'Diagnostic Software',
    'Pay as you go LIMS',
    'Machine Interfacing',
    'NABL Report Software',
    'Patholab Cloud',
  ],
  authors: [{ name: 'Patholab Cloud Team' }],
  creator: 'Patholab Cloud',
  publisher: 'Patholab Cloud',
  alternates: {
    canonical: 'https://patholab.cloud',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: brandConfig.logoUrl, type: 'image/jpeg' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: brandConfig.logoUrl },
    ],
  },
  openGraph: {
    title: 'Patholab Cloud | Modern Pay-As-You-Go Pathology Software',
    description:
      'Zero server fees, instant onboarding, and automated machine interfacing. Just ₹2.5 / patient registration.',
    url: 'https://patholab.cloud',
    siteName: 'Patholab Cloud',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patholab Cloud | Modern Pay-As-You-Go Pathology Software',
    description:
      'Zero server fees, instant onboarding, and automated machine interfacing. Just ₹2.5 / patient registration.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href={brandConfig.logoUrl} type="image/jpeg" />
        <link rel="apple-touch-icon" href={brandConfig.logoUrl} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans text-bodyText bg-paper antialiased selection:bg-sage selection:text-ink">
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  );
}
