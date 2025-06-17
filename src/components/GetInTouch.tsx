'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  useTheme,
  Paper,
  useMediaQuery,
} from '@mui/material';
import { alphaPrimary } from '@/theme';
import ContactForm from './ContactForm';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BarChartIcon from '@mui/icons-material/BarChart';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const ContactInfo = ({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) => (
  <Stack
    direction="row"
    spacing={2}
    alignItems="center"
    sx={{
      width: '100%',
      p: 2,
      borderRadius: 2,
      transition: 'all 0.3s ease',
      '&:hover': {
        bgcolor: 'rgba(255, 255, 255, 0.1)',
        transform: 'translateY(-2px)',
      },
    }}
  >
    <Box
      component={href ? 'a' : 'div'}
      href={href}
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        width: 44,
        height: 44,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 14px rgba(0, 57, 203, 0.2)',
        cursor: href ? 'pointer' : 'default',
        textDecoration: 'none',
        transition: 'transform 0.2s ease',
        '&:hover': href
          ? {
              transform: 'scale(1.1)',
            }
          : {},
      }}
    >
      {icon}
    </Box>
    <Box sx={{ minWidth: 0, flex: 1 }}>
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{
          mb: 0.5,
          fontSize: '0.875rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        component={href ? 'a' : 'p'}
        href={href}
        sx={{
          color: 'text.primary',
          fontWeight: 500,
          textDecoration: 'none',
          wordBreak: 'break-word',
          display: 'block',
          '&:hover': href
            ? {
                color: 'primary.main',
                transition: 'color 0.2s ease',
              }
            : {},
        }}
      >
        {content}
      </Typography>
    </Box>
  </Stack>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Paper
    elevation={0}
    sx={{
      p: 2.5,
      height: '100%',
      bgcolor: alphaPrimary(0.03),
      borderRadius: 2,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 24px rgba(0, 57, 203, 0.08)',
      },
    }}
  >
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        width: 40,
        height: 40,
        borderRadius: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 2,
      }}
    >
      {icon}
    </Box>
    <Typography variant="h6" fontWeight={600} mb={1}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

export default function GetInTouch() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '5fr 7fr' },
            gap: { xs: 6, md: 8 },
            minHeight: { lg: '800px' },
            width: '100%',
            alignItems: 'start',
            justifyItems: { xs: 'center', lg: 'stretch' },
          }}
        >
          {/* Left Column - Contact Info */}
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: 'auto' },
              maxWidth: { xs: '500px', lg: 'none' },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: { xs: 1, md: 2 },
                background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mb: { xs: 4, md: 6 } }}
            >
              Let&apos;s discuss how we can help transform your business
            </Typography>

            <Stack spacing={2} sx={{ mb: 6 }}>
              <ContactInfo
                icon={<PhoneIcon />}
                title="Phone"
                content="682-250-0536"
                href="tel:682-250-0536"
              />
              <ContactInfo
                icon={<EmailIcon />}
                title="Email"
                content="contact.mwlconsulting@gmail.com"
                href="mailto:contact.mwlconsulting@gmail.com"
              />
              <ContactInfo
                icon={<LocationOnIcon />}
                title="Location"
                content="Fort Worth, TX"
              />
            </Stack>

            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                flex: 1,
              }}
            >
              <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                Why Choose MWL Consulting?
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr', lg: 'repeat(2, 1fr)' },
                  gap: 2,
                  height: 'calc(100% - 48px)', // Subtract the height of the title
                  alignContent: 'start',
                }}
              >
                <FeatureCard
                  icon={<HandshakeIcon />}
                  title="Expert Guidance"
                  description="Strategic business consulting with proven methodologies"
                />
                <FeatureCard
                  icon={<BarChartIcon />}
                  title="Proven Results"
                  description="Track record of successful business transformations"
                />
                <FeatureCard
                  icon={<BuildIcon />}
                  title="Custom Solutions"
                  description="Tailored approaches for your unique challenges"
                />
                <FeatureCard
                  icon={<SupportAgentIcon />}
                  title="Dedicated Support"
                  description="Continuous guidance throughout implementation"
                />
              </Box>
            </Box>
          </Box>

          {/* Right Column - Contact Form */}
          <Box
            sx={{
              height: '100%',
              width: { xs: '100%', lg: 'auto' },
              maxWidth: { xs: '500px', lg: 'none' },
            }}
          >
            <Paper
              elevation={isTablet ? 0 : 2}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                height: '100%',
                width: '100%',
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  p: { xs: 0, md: 3 },
                  pt: { xs: 0, md: 4 },
                  height: '100%',
                }}
              >
                <ContactForm />
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
