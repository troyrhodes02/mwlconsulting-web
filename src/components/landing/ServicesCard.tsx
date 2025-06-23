import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  useTheme,
  Modal,
  IconButton,
  Fade,
  Backdrop,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloseIcon from '@mui/icons-material/Close';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  onClick: () => void;
}

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
  } | null;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        p: 4,
        borderRadius: 4,
        height: '100%',
        minHeight: { xs: 'auto', md: '320px' },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        transition: 'all 0.3s ease-in-out',
        border: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
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
          fontSize: { xs: '1.25rem', md: '1.375rem' },
          fontWeight: 700,
          mb: 2,
          color: 'text.primary',
          lineHeight: 1.2,
          // Mobile: allow 2 lines, Desktop: single line with ellipsis
          whiteSpace: { xs: 'normal', md: 'nowrap' },
          overflow: 'hidden',
          textOverflow: { xs: 'initial', md: 'ellipsis' },
          minHeight: { xs: '2.4rem', md: '1.65rem' },
          display: { xs: '-webkit-box', md: 'block' },
          WebkitLineClamp: { xs: 2, md: 'unset' },
          WebkitBoxOrient: { xs: 'vertical', md: 'unset' },
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

const ServiceModal: React.FC<ServiceModalProps> = ({
  open,
  onClose,
  service,
}) => {
  const theme = useTheme();

  if (!service) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '500px' },
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
          }}
        >
          <Paper
            elevation={24}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              position: 'relative',
              backgroundColor: 'background.paper',
              outline: 'none',
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Icon */}
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: 3,
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                '& svg': {
                  fontSize: 36,
                  color: 'white',
                },
              }}
            >
              {service.icon}
            </Box>

            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
                lineHeight: 1.3,
                pr: 4, // Add padding to avoid close button
              }}
            >
              {service.title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: 'text.secondary',
                lineHeight: 1.7,
                fontSize: { xs: '1rem', sm: '1.1rem' },
              }}
            >
              {service.description}
            </Typography>
          </Paper>
        </Box>
      </Fade>
    </Modal>
  );
};

const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    icon: React.ReactNode;
    title: string;
    description: string;
  } | null>(null);

  const handleCardClick = (service: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const services = [
    {
      icon: <BusinessIcon />,
      title: 'Business Structure & Systems Design',
      description:
        'Build a strong operational foundation with customized systems that support scalability and efficiency. We help you create processes that work.',
    },
    {
      icon: <TrackChangesIcon />,
      title: 'Strategic Planning & Execution',
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
        backgroundColor: 'background.paper',
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
          spacing={{ xs: 4, md: 4 }}
          sx={{
            position: 'relative',
            zIndex: 1,
            alignItems: 'stretch',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              onClick={() => handleCardClick(service)}
            />
          ))}
        </Stack>

        <ServiceModal
          open={modalOpen}
          onClose={handleModalClose}
          service={selectedService}
        />
      </Container>
    </Box>
  );
};

export default ServicesSection;
