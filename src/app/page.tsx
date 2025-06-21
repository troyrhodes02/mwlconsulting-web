'use client';
import HeroSection from '@/components/landing/HeroSection';
import Mission from '@/components/landing/Mission';
import OwnerBackground from '@/components/landing/OwnerBackground';
import ServicesSection from '@/components/landing/ServicesCard';
import LoadingIndicator from '@/components/LoadingIndicator';
import useImagePreloader from '@/hooks/useImagePreloader';

// Add the images that need to be preloaded
const imagesToPreload = ['/analytics.png'];

export default function Home() {
  const imagesLoaded = useImagePreloader(imagesToPreload);

  if (!imagesLoaded) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Mission />
      <OwnerBackground />
    </>
  );
}
