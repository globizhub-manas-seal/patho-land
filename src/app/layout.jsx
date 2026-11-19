import './globals.css';
import ScrollRevealProvider from '../components/ScrollRevealProvider';
import { brandConfig } from '../data/brand';

export const metadata = {
  metadataBase: new URL('https://patholab.cloud'),
  title: 'patholab.cloud | 100% Cloud-Based Modern LIMS Software',
  description: 'Next-Gen LIMS Ecosystem for pathology and diagnostic laboratories in India. Zero server maintenance, automated IoT machine integration, and instant WhatsApp reports.',
  keywords: [
    'Pathology software', 
    'LIMS software India', 
    'diagnostic lab management', 
    'cloud pathology software', 
    'IoT analyzer interfacing', 
    'WhatsApp lab reports',
    'NABL compliant LIMS'
  ],
  authors: [{ name: 'Patholab Cloud Technologies' }],
  creator: 'Patholab Cloud Technologies',
  publisher: 'Patholab Cloud',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://patholab.cloud',
    siteName: 'patholab.cloud',
    title: 'patholab.cloud | 100% Cloud-Based Modern LIMS Software',
    description: 'Transform your diagnostic lab with zero server costs, automated machine integration, and instant WhatsApp reports.',
    images: [
      {
        url: brandConfig.logoUrl || '/images/iot-mockup-frame.png',
        width: 1200,
        height: 630,
        alt: 'patholab.cloud LIMS Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'patholab.cloud | Modern Cloud LIMS for Pathology Labs',
    description: 'Zero server maintenance, automated IoT machine integration, and instant WhatsApp reports.',
    images: [brandConfig.logoUrl || '/images/iot-mockup-frame.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: brandConfig.logoUrl,
    shortcut: brandConfig.logoUrl,
    apple: brandConfig.logoUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans text-slate-800 bg-slate-50 antialiased selection:bg-emerald-200 selection:text-emerald-900">
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  );
}
