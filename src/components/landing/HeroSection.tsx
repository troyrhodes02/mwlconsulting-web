import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        minHeight: '5vh',
        position: 'relative',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: '#fff',
        pt: { xs: 1.5, md: 2.5 },
        pb: { xs: 2.5, md: 3.5 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Content */}
          <Box sx={{ maxWidth: 'lg', width: '100%' }}>
            <Box
              sx={{
                display: 'inline-flex',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                px: 3,
                py: 1.5,
                borderRadius: 6,
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                Strategic Business Consulting
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: '3rem',
                  sm: '4rem',
                  md: '5rem',
                  lg: '6rem',
                },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: { xs: 5, md: 6 },
                '& .highlight': {
                  color: theme.palette.secondary.main,
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                },
              }}
            >
              Helping Small Businesses
              <br />
              <span className="highlight">Win Big</span>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '800px',
                mb: { xs: 8, md: 10 },
                lineHeight: 1.6,
              }}
            >
              We guide you in structuring, organizing, and executing effective
              business strategies to grow your reach and drive meaningful
              results.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={4}
              alignItems={{ xs: 'stretch', sm: 'center' }}
            >
              <Button
                variant="contained"
                component="a"
                href="/contact"
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  py: { xs: 2.5, md: 3 },
                  px: { xs: 5, md: 6 },
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  color: '#000',
                  '&:hover': {
                    bgcolor: theme.palette.secondary.dark,
                    transform: 'scale(1.02)',
                    transition: 'all 0.2s ease',
                  },
                }}
                endIcon={
                  <ArrowForwardIcon
                    sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }}
                  />
                }
              >
                Book your Strategy Call
              </Button>

              <Box
                component="a"
                href="tel:+16822500536"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: 44, md: 48 },
                    height: { xs: 44, md: 48 },
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.2s',
                  }}
                >
                  <PhoneIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: 0.5,
                    }}
                  >
                    Call us today
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.2rem', md: '1.3rem' },
                      fontWeight: 700,
                      color: '#fff',
                    }}
                  >
                    (682) 250-0536
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          {/* Right Content - Analytics Image */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: '100%', lg: '50%' },
              display: { xs: 'none', lg: 'block' },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { lg: '500px' },
                borderRadius: 4,
                overflow: 'hidden',
                transform: { lg: 'scale(1.1)' },
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: { lg: 'scale(1.12)' },
                },
              }}
            >
              <Image
                src="/analytics.png"
                alt="Growth Analytics Dashboard"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '16px',
                }}
                priority
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
