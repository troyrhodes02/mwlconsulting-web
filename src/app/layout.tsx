import ThemeRegistry from '@/components/ThemeRegistry';
import { MainLayout } from '@/layout/MainLayout';
import localFont from 'next/font/local';
import { Metadata } from 'next';

const inter = localFont({
  src: [
    {
      path: '../../public/font/Inter-VariableFont_opsz,wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/font/Inter-Italic-VariableFont_opsz,wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mwlconsulting.com'),
  title: 'MWL Consulting',
  description:
    'Professional consulting services by MWL Consulting - Expertise in business strategy, technology, and innovation.',
  icons: {
    icon: '/logos/mwl-logo.png',
    apple: '/logos/mwl-logo.png',
  },
  openGraph: {
    type: 'website',
    title: 'MWL Consulting',
    description:
      'Professional consulting services by MWL Consulting - Expertise in business strategy, technology, and innovation.',
    siteName: 'MWL Consulting',
    images: [
      {
        url: '/logos/mwl-logo.png',
        width: 512,
        height: 512,
        alt: 'MWL Consulting Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MWL Consulting',
    description:
      'Professional consulting services by MWL Consulting - Expertise in business strategy, technology, and innovation.',
    images: [
      {
        url: '/logos/mwl-logo.png',
        width: 512,
        height: 512,
        alt: 'MWL Consulting Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeRegistry>
          <MainLayout>{children}</MainLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
