import React from 'react';
import { Box, Container, Typography, Paper, useTheme, Stack } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Mission: React.FC = () => {
  const theme = useTheme();

  const values = [
    {
      icon: <HandshakeIcon />,
      value: 'Integrity',
    },
    {
      icon: <StarIcon />,
      value: 'Excellence',
    },
    {
      icon: <TrendingUpIcon />,
      value: 'Growth',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          <Typography
            component="span"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.875rem',
              display: 'block',
              mb: 2,
            }}
          >
            Our Purpose
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 800,
              color: 'text.primary',
              mb: 3,
              background: `linear-gradient(120deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Mission Statement
          </Typography>

          <Paper
            elevation={0}
            sx={{
              py: 4,
              px: { xs: 4, md: 6 },
              borderRadius: 4,
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              maxWidth: '1400px',
              mx: 'auto',
              position: 'relative',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows[4],
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                borderRadius: '4px 4px 0 0',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                color: 'text.secondary',
                lineHeight: 1.6,
                fontWeight: 500,
                mb: 3,
              }}
            >
              To provide exceptional business consulting services through honest, professional partnerships that empower small businesses to thrive. We are committed to delivering innovative solutions, fostering sustainable growth, and maintaining the highest standards of integrity in every interaction. Our mission is to be a trusted catalyst for business transformation, helping our clients achieve their full potential through strategic guidance and practical implementation.
            </Typography>

            <Stack 
              direction="row" 
              spacing={4} 
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              {values.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                      '& svg': {
                        fontSize: 28,
                        color: 'white',
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Mission; 