'use client';

import { Box, Container } from '@mui/material';
import ContactHeader from '@/components/ContactHeader';
import GetInTouch from '@/components/GetInTouch';

export default function Contact() {
  return (
    <Box
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
