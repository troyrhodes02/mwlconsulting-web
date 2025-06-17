'use client';

import { Box, CircularProgress } from '@mui/material';

export default function LoadingIndicator() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999,
        backdropFilter: 'blur(4px)',
      }}
    >
      <CircularProgress size={48} color="primary" />
    </Box>
  );
} 