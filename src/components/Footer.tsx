'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Footer() {
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: theme.palette.primary.main,
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(255,255,255,0.2) 20%, 
            rgba(255,255,255,0.4) 50%, 
            rgba(255,255,255,0.2) 80%, 
            transparent 100%
          )`,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 3, sm: 0 },
            py: { xs: 3, sm: 4 },
          }}
        >
          {/* Navigation Buttons */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              order: { xs: 2, sm: 1 },
            }}
          >
            <Button
              component={Link}
              href="/"
              startIcon={<HomeIcon />}
              sx={{
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
                textTransform: 'none',
                fontSize: { xs: '0.875rem', sm: '0.9rem' },
                fontWeight: 500,
                opacity: pathname === '/' ? 1 : 0.8,
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              href="/contact"
              startIcon={<ContactPageIcon />}
              sx={{
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
                textTransform: 'none',
                fontSize: { xs: '0.875rem', sm: '0.9rem' },
                fontWeight: 500,
                opacity: pathname === '/contact' ? 1 : 0.8,
              }}
            >
              Contact
            </Button>
          </Stack>

          {/* Copyright and Credits */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: { xs: 1, sm: 3 },
              order: { xs: 1, sm: 2 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                opacity: 0.8,
                textAlign: { xs: 'center', sm: 'left' },
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                letterSpacing: '0.02em',
              }}
            >
              © {new Date().getFullYear()} MWL Consulting, LLC
            </Typography>
            <Box
              component="span"
              sx={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.5)',
                display: { xs: 'none', sm: 'block' },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                opacity: 0.8,
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                letterSpacing: '0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              Developed by{' '}
              <Box
                component="span"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  opacity: 1,
                }}
              >
                FreshStack Studio
              </Box>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
