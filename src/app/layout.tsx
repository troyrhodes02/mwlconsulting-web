'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ThemeRegistry from '@/components/ThemeRegistry';
import { MainLayout } from '@/layout/MainLayout';
import LoadingIndicator from '@/components/LoadingIndicator';
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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleEnd = () => setIsLoading(false);

    // Listen for route changes
    handleStart();
    handleEnd();
  }, [pathname, searchParams]);

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeRegistry>
          <MainLayout>
            {isLoading && <LoadingIndicator />}
            {children}
          </MainLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
