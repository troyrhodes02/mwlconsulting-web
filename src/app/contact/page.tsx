'use client';

import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import ContactHeader from '@/components/contact/ContactHeader';
import GetInTouch from '@/components/contact/GetInTouch';
import LoadingIndicator from '@/components/LoadingIndicator';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isEmailJSInitialized, setIsEmailJSInitialized] = useState(false);

  useEffect(() => {
    try {
      // Initialize EmailJS
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
      setIsEmailJSInitialized(true);
    } catch (error) {
      console.error('EmailJS initialization error:', error);
      // Still set as initialized to not block the page on error
      setIsEmailJSInitialized(true);
    }
  }, []);

  if (!isEmailJSInitialized) {
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
