'use client';

import { Box, Container } from '@mui/material';
import ContactHeader from '@/components/ContactHeader';
import GetInTouch from '@/components/GetInTouch';

export default function Contact() {
  return (
    <Box sx={{ bgcolor: '#f9fafb' }}>
      <ContactHeader />
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          px: { xs: 3, md: 4, lg: 0 },
        }}
      >
        <GetInTouch />
      </Container>
    </Box>
  );
}
