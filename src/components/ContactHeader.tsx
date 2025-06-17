'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';

export default function ContactHeader() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        color: 'white',
        py: { xs: 4, md: 6 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 1,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            opacity: 0.9,
            fontSize: { xs: '1rem', md: '1.125rem' },
          }}
        >
          Let’s tackle your next challenge together
        </Typography>
      </Container>
    </Box>
  );
}
