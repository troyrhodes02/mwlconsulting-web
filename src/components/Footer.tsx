'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        background: 'linear-gradient(90deg, #2563eb 0%, #2563eb 100%)',
        color: '#fff',
        width: '100%',
        minHeight: 70,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4 }}>
        <Box sx={{ fontSize: 21 }}>
          © 2025 MWL Consulting, LLC
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 16 }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 1.2,
            }}
          >
            <Box sx={{ width: 14, height: 14, borderRadius: '50%', background: '#fff' }} />
          </Box>
          Created By: Reborn Apps
        </Box>
      </Container>
    </Box>
  );
}
