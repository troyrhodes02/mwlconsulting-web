import ThemeRegistry from '@/components/ThemeRegistry';
import { MainLayout } from '@/layout/MainLayout';
import localFont from 'next/font/local';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeRegistry>
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
