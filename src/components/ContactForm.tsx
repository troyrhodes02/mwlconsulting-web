'use client';

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  TextField,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  InputAdornment,
  Snackbar,
  Alert,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { SendRounded, Person, Email, Subject } from '@mui/icons-material';
import { alphaPrimary } from '@/theme';

interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

interface SnackState {
  open: boolean;
  msg: string;
  sev: 'success' | 'error';
}

export default function ContactForm() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const formRef = useRef<HTMLFormElement>(null);
  const [canSend, setCanSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState<SnackState>({
    open: false,
    msg: '',
    sev: 'success',
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
    
    // Update canSend based on all fields having values
    setCanSend(
      Object.values(newFormData).every(value => value.trim() !== '') &&
      newFormData.from_email.includes('@') // Basic email validation
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData as unknown as Record<string, unknown>
      );

      if (result.status === 200) {
        setSnack({
          open: true,
          msg: 'Your message was sent!',
          sev: 'success',
        });

        // Reset form
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: '',
        });
        setCanSend(false);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSnack({
        open: true,
        msg: 'Unable to send — please try again.',
        sev: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnack = () => {
    setSnack({ ...snack, open: false });
  };

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      bgcolor: isTablet ? alphaPrimary(0.02) : 'transparent',
      '&:hover': {
        bgcolor: isTablet ? alphaPrimary(0.04) : 'transparent',
      },
      '& fieldset': {
        borderColor: isTablet ? 'transparent' : 'inherit',
      },
      '&:hover fieldset': {
        borderColor: isTablet ? 'transparent' : 'primary.main',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary.main',
        borderWidth: 2,
      },
    },
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          px: { xs: 3, sm: 3, md: 0 },
          pt: { xs: 3, sm: 4, md: 0 },
          pb: { xs: 6, md: 0 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '100%',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: '1.5rem', md: '1.75rem' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Send us a Message
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Fill out the form below and we&apos;ll get back to you shortly
        </Typography>

        <Stack
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          spacing={3}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            id="from_name"
            name="from_name"
            placeholder="Your full name"
            value={formData.from_name}
            onChange={handleInputChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
            sx={inputStyles}
          />

          <TextField
            id="from_email"
            name="from_email"
            type="email"
            placeholder="Your email address"
            value={formData.from_email}
            onChange={handleInputChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
            sx={inputStyles}
          />

          <TextField
            id="subject"
            name="subject"
            placeholder="What is this regarding?"
            value={formData.subject}
            onChange={handleInputChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Subject sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
            sx={inputStyles}
          />

          <Box>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ mb: 1, fontWeight: 500 }}
            >
              Message
            </Typography>
            <TextField
              id="message"
              name="message"
              placeholder="Tell us more about your needs&hellip;"
              value={formData.message}
              onChange={handleInputChange}
              multiline
              rows={8}
              required
              fullWidth
              sx={{
                ...inputStyles,
                flex: 1,
                '& .MuiInputBase-root': {
                  height: '100%',
                  alignItems: 'flex-start',
                },
                '& .MuiInputBase-input': {
                  height: '100% !important',
                  overflow: 'auto !important',
                },
              }}
            />
          </Box>

          <LoadingButton
            type="submit"
            variant="contained"
            size="large"
            loading={loading}
            disabled={!canSend || loading}
            startIcon={<SendRounded />}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              boxShadow: isTablet ? 'none' : '0 8px 16px rgba(0, 57, 203, 0.2)',
              alignSelf: 'flex-start',
              '&:hover': {
                boxShadow: isTablet
                  ? 'none'
                  : '0 12px 20px rgba(0, 57, 203, 0.3)',
              },
            }}
          >
            Send Message
          </LoadingButton>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 2,
              fontStyle: 'italic',
              opacity: 0.8,
            }}
          >
            Thank you for considering MWL Consulting. We look forward to hearing
            from you!
          </Typography>
        </Stack>
      </Box>

      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={snack.sev}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
