import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MWL Consulting',
  description: 'Strategic Business Consulting for Small Businesses',
  metadataBase: new URL('https://mwlconsulting.com'), // Update this with your actual domain
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0039CB',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    title: 'MWL Consulting',
    description: 'Strategic Business Consulting for Small Businesses',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MWL Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MWL Consulting',
    description: 'Strategic Business Consulting for Small Businesses',
    images: ['/og-image.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MWL Consulting',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#0039CB',
};
