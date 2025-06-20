'use client';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesCard';

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

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
    </>
  );
}
