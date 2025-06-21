'use client';
import { useState, useEffect } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import LoadingIndicator from '@/components/LoadingIndicator';
import useImagePreloader from '@/hooks/useImagePreloader';

import {
  Typography,
  Button,
  Box,
  Container,
  Paper,
  Chip,
  Card,
  CardContent,
  Stack,
} from '@mui/material';

// Add the images that need to be preloaded
const imagesToPreload = ['/analytics.png'];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const imagesLoaded = useImagePreloader(imagesToPreload);

  useEffect(() => {
    if (imagesLoaded) {
      // Only start the content loading animation after images are loaded
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Reduced timeout since we're already waiting for images

      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  if (isLoading || !imagesLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <HeroSection />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Typography Test Section */}
        <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Theme & Typography Test Page
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Testing Inter font family and Material-UI theme integration
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h1" gutterBottom>
              Heading 1 - Inter Font
            </Typography>
            <Typography variant="h2" gutterBottom>
              Heading 2 - Inter Font
            </Typography>
            <Typography variant="h3" gutterBottom>
              Heading 3 - Inter Font
            </Typography>
            <Typography variant="h4" gutterBottom>
              Heading 4 - Inter Font
            </Typography>
            <Typography variant="h5" gutterBottom>
              Heading 5 - Inter Font
            </Typography>
            <Typography variant="h6" gutterBottom>
              Heading 6 - Inter Font
            </Typography>

            <Typography variant="body1" gutterBottom>
              Body 1: This is regular body text using the Inter font family. It
              should be crisp and readable with proper font weight.
            </Typography>

            <Typography variant="body2" gutterBottom>
              Body 2: This is smaller body text, also using Inter font family.
            </Typography>

            <Typography variant="caption" display="block" gutterBottom>
              Caption text - Inter font family
            </Typography>

            <Typography variant="overline" display="block" gutterBottom>
              Overline text - Inter font family
            </Typography>
          </Box>
        </Paper>

        {/* Color Palette Test Section */}
        <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom color="primary">
            Color Palette Test
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {/* Primary Colors */}
            <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
              <Typography variant="h6" gutterBottom>
                Primary Colors (#1e50da)
              </Typography>
              <Stack spacing={2}>
                <Button variant="contained" color="primary" size="large">
                  Primary Button
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Primary Outlined
                </Button>
                <Button variant="text" color="primary" size="large">
                  Primary Text
                </Button>
                <Chip label="Primary Chip" color="primary" />
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                  }}
                >
                  Primary Background Box
                </Box>
              </Stack>
            </Box>

            {/* Secondary Colors */}
            <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
              <Typography variant="h6" gutterBottom>
                Secondary Colors (#facc15)
              </Typography>
              <Stack spacing={2}>
                <Button variant="contained" color="secondary" size="large">
                  Secondary Button
                </Button>
                <Button variant="outlined" color="secondary" size="large">
                  Secondary Outlined
                </Button>
                <Button variant="text" color="secondary" size="large">
                  Secondary Text
                </Button>
                <Chip label="Secondary Chip" color="secondary" />
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                  }}
                >
                  Secondary Background Box
                </Box>
              </Stack>
            </Box>
          </Box>
        </Paper>

        {/* Font Weight Test */}
        <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom color="primary">
            Font Weight Test (Inter Variable Font)
          </Typography>

          <Stack spacing={2}>
            <Typography sx={{ fontWeight: 300 }}>
              Font Weight 300 - Light
            </Typography>
            <Typography sx={{ fontWeight: 400 }}>
              Font Weight 400 - Regular (Default)
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>
              Font Weight 500 - Medium
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>
              Font Weight 600 - Semi Bold
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>
              Font Weight 700 - Bold
            </Typography>
            <Typography sx={{ fontWeight: 800 }}>
              Font Weight 800 - Extra Bold
            </Typography>
          </Stack>
        </Paper>

        {/* Card Component Test */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  Test Card 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card tests the theme integration with Material-UI
                  components.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Primary Action
                </Button>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="secondary" gutterBottom>
                  Test Card 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card uses secondary colors to test the palette.
                </Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                  Secondary Action
                </Button>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Test Card 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card tests default styling and Inter font rendering.
                </Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>
                  Default Action
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
}
