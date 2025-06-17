'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { theme } from '@/theme';
import Footer from './Footer';
import Navbar from '@/components/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box component="main" flexGrow={1}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
