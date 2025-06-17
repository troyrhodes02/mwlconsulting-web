import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { MainLayout } from '@/layout/MainLayout';

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
  title: 'MWL Consulting',
  description: 'MWL Consulting Web Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
