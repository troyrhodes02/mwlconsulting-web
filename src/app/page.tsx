'use client';

import React from 'react';
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
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function ContactPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #2563eb 0%, #1e50da 100%)', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            MWL Consulting, LLC
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" variant="contained" sx={{ bgcolor: 'rgba(255,255,255,0.15)', fontWeight: 600 }} disableElevation>
              Home
            </Button>
            <Button color="inherit" sx={{ fontWeight: 600 }}>
              Contact
            </Button>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(120deg, #2563eb 0%, #1e50da 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 0 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.1 }}>
                HELPING SMALL BUSINESS WIN <br />
                <Box component="span" sx={{ color: '#b3d0ff' }}>FAST!!</Box>
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, mb: 3, fontWeight: 400 }}>
                We guide you in structuring, organizing, and executing effective business strategies to grow your reach and drive meaningful results.
              </Typography>
              <Paper elevation={0} sx={{ bgcolor: 'rgba(30,80,218,0.5)', p: 3, borderRadius: 2, maxWidth: 420 }}>
                <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 500 }}>
                  CALL TODAY, NOT TOMORROW
                </Typography>
                <Typography variant="h4" sx={{ color: '#facc15', fontWeight: 700, mt: 1 }}>
                  682-250-0536
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
                  alt="Skyscrapers"
                  sx={{ width: '100%', maxWidth: 350, borderRadius: 3, boxShadow: 6 }}
                />
                <Chip
                  label="Fast & Reliable"
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    bgcolor: '#facc15',
                    color: '#222',
                    fontWeight: 700,
                    fontSize: 16,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2 }}>
            Our Services
          </Typography>
          <Typography align="center" sx={{ color: 'text.secondary', mb: 5 }}>
          We help you structure, organize, and execute strategic business solutions that expand your reach, amplify your impact, and turn vision into measurable growth.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ fontSize: 32 }}>⚙️</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Business Structure & Systems Design
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Build a strong operational foundation with customized systems that support scalability and efficiency.
                  </Typography>
                </CardContent>
              </Card>
            </Grid><Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ fontSize: 32 }}>🎯</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Strategic Planning & Execution
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Develop actionable business plans that align with your goals and drive intentional growth.
                  </Typography>
                </CardContent>
              </Card>
            </Grid><Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ fontSize: 32 }}>🚀</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                     Growth & Scaling Support 
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Identify growth opportunities and implement strategies that expand your reach and impact.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ fontSize: 32 }}>🛡️</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Stop Foreclosure
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    We help homeowners avoid foreclosure with fast, reliable solutions tailored to your situation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ fontSize: 32 }}>💳</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Take Over Payments
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Transfer your mortgage responsibilities to us with a seamless transition process.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ fontSize: 32 }}>💲</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Save Credit
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Protect your credit score with our professional debt management solutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ fontSize: 32 }}>⚡</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Instant Debt Relief
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Get immediate relief from overwhelming debt with our proven strategies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ fontSize: 32 }}>⏱️</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Fast Closing
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Complete your property sale quickly with our streamlined closing process.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ fontSize: 32 }}>💵</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Instant Cash
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                    Receive immediate cash for your property with no hidden fees or delays.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Statement & Owner Background */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2 }}>
            Our Mission Statement
          </Typography>
          <Typography align="center" sx={{ color: 'text.secondary', mb: 5 }}>
            To provide honest, fairness, professional service and quality housing for potential homeowners.
          </Typography>
          <Paper elevation={1} sx={{ p: { xs: 3, md: 5 }, mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Background of the Owner
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Michael Littlejohn was born and raised in Fort Worth TX. He Graduated from Paul Laurence Dunbar High School. He attended Trinity Valley Community College (formerly, Henderson County Junior College). He also, earned a Bachelor of Science degree from Texas A&M Commerce (formerly, East Texas State University) He became an educator in the Fort Worth Independent School District and was a member of "Outstanding Young Men of America" He has been married for over 30 years with a loving family. He brings over 35 years of experience in Real Estate. He has a passion to help others where he counsels and advises other investors. He owns and manages several properties. He has bought and sold many properties in his career and continues to do so today.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}