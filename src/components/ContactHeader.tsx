'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';

export default function ContactHeader() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            opacity: 0.9,
            fontSize: { xs: '1.25rem', md: '1.5rem' },
          }}
        >
          Let’s tackle your next challenge together
        </Typography>
      </Container>
    </Box>
  );
}
