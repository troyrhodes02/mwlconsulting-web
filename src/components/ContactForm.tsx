'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  InputAdornment,
} from '@mui/material';
import {
  SendRounded,
  Person,
  Email,
  Subject,
  Message,
} from '@mui/icons-material';
import { alphaPrimary } from '@/theme';

export default function ContactForm() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // TODO: Add toast notification here when toast system is available
    // toast({
    //   title: "Message Sent!",
    //   description: "We'll get back to you as soon as possible."
    // });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
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
          px: { xs: 3, md: 0 },
          pt: { xs: 4, md: 0 },
          pb: { xs: 6, md: 0 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: '1.5rem', md: '1.75rem' },
          }}
        >
          Send us a Message
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Fill out the form below and we&apos;ll get back to you shortly
        </Typography>

        <Stack
          component="form"
          onSubmit={handleSubmit}
          spacing={3}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
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
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
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

          <TextField
            id="message"
            name="message"
            placeholder="Tell us more about your needs&hellip;"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={8}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Message sx={{ color: 'text.secondary', mt: 1.5 }} />
                </InputAdornment>
              ),
            }}
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

          <Button
            type="submit"
            variant="contained"
            size="large"
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
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
