import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        minHeight: '5vh',
        position: 'relative',
        background: 'linear-gradient(135deg, #0039CB 0%, #002299 100%)',
        color: '#fff',
        pt: { xs: 2, md: 3 },
        pb: { xs: 3, md: 4 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 8, md: 10 }}
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
                mb: 4,
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
                  xs: '3.5rem',
                  sm: '4.5rem',
                  md: '5.5rem',
                  lg: '6.5rem',
                },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: { xs: 6, md: 8 },
                '& .highlight': {
                  color: '#FFCA28',
                  background: 'linear-gradient(135deg, #FFCA28 0%, #FFB300 100%)',
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
                fontSize: { xs: '1.35rem', md: '1.65rem' },
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '800px',
                mb: { xs: 10, md: 12 },
                lineHeight: 1.6,
              }}
            >
              We guide you in structuring, organizing, and executing effective business strategies to grow your reach and drive meaningful results.
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
                  bgcolor: '#FFCA28',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  py: 2,
                  px: 4,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  color: '#000',
                  '&:hover': {
                    bgcolor: '#FFB300',
                  },
                }}
                endIcon={<ArrowForwardIcon />}
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
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.2s',
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 20, color: '#90CAF9' }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      mb: 0.5,
                    }}
                  >
                    Call us today
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.125rem',
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

          {/* Right Content */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: '100%', lg: '50%' },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                bgcolor: '#fff',
                borderRadius: 4,
                p: 4,
                width: '100%',
                transform: { xs: 'scale(1)', lg: 'scale(1.1)' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1a237e',
                  }}
                >
                  Growth Analytics
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#4caf50',
                      animation: 'pulse 1.5s infinite',
                      '@keyframes pulse': {
                        '0%': {
                          transform: 'scale(0.95)',
                          opacity: 0.8,
                        },
                        '100%': {
                          transform: 'scale(1.05)',
                          opacity: 0.4,
                        },
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    Live Data
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 2,
                  mb: 3,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: '#e3f2fd',
                    p: 2,
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#1976d2',
                      mb: 1,
                    }}
                  >
                    +147%
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: 'rgba(0, 0, 0, 0.7)',
                    }}
                  >
                    Revenue Growth
                  </Typography>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: '#e8f5e9',
                    p: 2,
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#2e7d32',
                      mb: 1,
                    }}
                  >
                    98%
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: 'rgba(0, 0, 0, 0.7)',
                    }}
                  >
                    Client Satisfaction
                  </Typography>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: '#f3e5f5',
                    p: 2,
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#7b1fa2',
                      mb: 1,
                    }}
                  >
                    250+
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: 'rgba(0, 0, 0, 0.7)',
                    }}
                  >
                    Projects Delivered
                  </Typography>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: '#fff3e0',
                    p: 2,
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: '#f57c00',
                      mb: 1,
                    }}
                  >
                    3.2x
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: 'rgba(0, 0, 0, 0.7)',
                    }}
                  >
                    ROI Average
                  </Typography>
                </Paper>
              </Box>

              <Box
                sx={{
                  height: 120,
                  bgcolor: '#f5f5f5',
                  borderRadius: 2,
                  p: 2,
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 1.5,
                }}
              >
                {[40, 65, 45, 80, 55, 90, 70, 85, 95, 75, 88, 100].map((height, i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: 1,
                      height: `${height}%`,
                      bgcolor: '#1976d2',
                      borderRadius: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: '#1565c0',
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
