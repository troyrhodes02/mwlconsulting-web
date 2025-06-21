'use client';

import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import ContactHeader from '@/components/contact/ContactHeader';
import GetInTouch from '@/components/contact/GetInTouch';
import LoadingIndicator from '@/components/LoadingIndicator';
import useImagePreloader from '@/hooks/useImagePreloader';

// Add any images that need to be preloaded for the contact page
const imagesToPreload: string[] = [];

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const imagesLoaded = useImagePreloader(imagesToPreload);

  useEffect(() => {
    if (imagesLoaded) {
      // Only start the content loading animation after images are loaded
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  if (isLoading || !imagesLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <Box
      id="contact-section"
      sx={{
        bgcolor: '#f9fafb',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      <ContactHeader />
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 0 },
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <GetInTouch />
      </Container>
    </Box>
  );
}
