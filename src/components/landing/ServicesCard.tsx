import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      borderRadius: 4,
      backgroundColor: '#f0f2f5',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
    }}
  >
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: 2,
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3,
        color: '#fff',
        opacity: 0.9,
      }}
    >
      {icon}
    </Box>
    <Typography
      variant="h6"
      sx={{
        fontSize: '1.25rem',
        fontWeight: 600,
        mb: 2,
        color: '#1a1a1a',
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: 'rgba(0, 0, 0, 0.7)',
        lineHeight: 1.6,
      }}
    >
      {description}
    </Typography>
  </Paper>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <BusinessIcon sx={{ fontSize: 24 }} />,
      title: 'Business Structure & Systems Design',
      description: 'Build a strong operational foundation with customized systems that support scalability and efficiency.',
    },
    {
      icon: <TrackChangesIcon sx={{ fontSize: 24 }} />,
      title: 'Strategic Planning & Execution',
      description: 'Develop actionable business plans that align with your goals and drive intentional growth.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 24 }} />,
      title: 'Growth & Scaling Support',
      description: 'Identify growth opportunities and implement strategies that expand your reach and impact.',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f8f9fa',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: 'rgba(0, 0, 0, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            We help you structure, organize, and execute strategic business solutions that expand your reach, amplify your impact, and turn vision into measurable growth.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 3 }}
          sx={{
            mt: { xs: 4, md: 6 },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ServicesSection;
