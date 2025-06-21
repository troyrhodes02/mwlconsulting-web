import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import { alphaPrimary } from '@/theme';

const OwnerNarrativeSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="xl">
        {/* Mission Statement */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 3,
            }}
          >
            Mission Statement
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              color: 'text.secondary',
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            To provide honest, fairness, professional service and quality solutions for small business growth.
          </Typography>
        </Box>

        {/* Background Section */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 4,
              textAlign: 'center',
            }}
          >
            Background of the Owner
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              backgroundColor: alphaPrimary(0.03),
              maxWidth: '1200px',
              mx: 'auto',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                color: 'text.primary',
                lineHeight: 1.8,
                '& strong': {
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                },
              }}
            >
              Michael Littlejohn was born and raised in Fort Worth TX. He Graduated from Paul Laurence Dunbar High School. He attended Trinity Valley Community College (formerly, Henderson County Junior College). He also, earned a Bachelor of Science degree from Texas A&M Commerce (formerly, East Texas State University) He became an educator in the Fort Worth Independent School District and was a member of "Outstanding Young Men of America" He has been married for over 30 years with a loving family. He brings over 35 years of experience in business consulting and strategy. He has a passion to help others where he counsels and advises other business owners. He has helped numerous small businesses structure their operations and develop successful growth strategies.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default OwnerNarrativeSection;
