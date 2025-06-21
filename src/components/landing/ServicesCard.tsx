import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 4,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        transition: 'all 0.3s ease-in-out',
        border: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.shadows[8],
          '& .service-icon': {
            transform: 'scale(1.1)',
            color: theme.palette.primary.main,
          },
        },
      }}
    >
      {/* Icon */}
      <Box
        className="service-icon"
        sx={{
          width: 56,
          height: 56,
          borderRadius: 2,
          backgroundColor: theme.palette.primary.main,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          transition: 'all 0.3s ease-in-out',
          '& svg': {
            fontSize: 28,
            color: 'white',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        {icon}
      </Box>

      {/* Content */}
      <Typography
        variant="h5"
        sx={{
          fontSize: '1.5rem',
          fontWeight: 700,
          mb: 2,
          color: 'text.primary',
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: 'text.secondary',
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

const ServicesSection: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <BusinessIcon />,
      title: 'Business Structure',
      description:
        'Build a strong operational foundation with customized systems that support scalability and efficiency. We help you create processes that work.',
    },
    {
      icon: <TrackChangesIcon />,
      title: 'Strategic Planning',
      description:
        'Develop actionable business plans that align with your goals and drive intentional growth. Turn your vision into measurable results.',
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Growth & Scaling Support',
      description:
        'Identify growth opportunities and implement strategies that expand your reach and impact. Scale your business with confidence.',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.default',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, 
            transparent 0%, 
            ${theme.palette.divider} 15%, 
            ${theme.palette.divider} 85%, 
            transparent 100%
          )`,
        },
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
            Our Services
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
            Transform Your Business
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: 'text.secondary',
              lineHeight: 1.7,
            }}
          >
            We help you structure, organize, and execute strategic business
            solutions that expand your reach, amplify your impact, and turn
            vision into measurable growth.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 3 }}
          sx={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ServicesSection;
