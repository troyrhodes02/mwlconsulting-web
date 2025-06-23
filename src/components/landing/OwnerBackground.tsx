import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';

const OwnerBackground: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.paper',
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
            Our Leadership
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
            Background of the Owner
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            maxWidth: '1200px',
            mx: 'auto',
            position: 'relative',
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
            Michael Littlejohn was born and raised in Fort Worth TX. He
            Graduated from Paul Laurence Dunbar High School. He attended Trinity
            Valley Community College (formerly, Henderson County Junior
            College). He also, earned a Bachelor of Science degree from Texas
            A&M Commerce (formerly, East Texas State University) He became an
            educator in the Fort Worth Independent School District and was a
            member of &ldquo;Outstanding Young Men of America&rdquo; He has been
            married for over 30 years with a loving family. He brings over 35
            years of experience in business consulting and strategy. He has a
            passion to help others where he counsels and advises other business
            owners. He has helped numerous small businesses structure their
            operations and develop successful growth strategies.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default OwnerBackground;
