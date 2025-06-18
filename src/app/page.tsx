'use client';
import HeroSection from '@/components/landing/HeroSection';
import MissionOwnerNarrative from '@/components/landing/MissionAndOwner';
import ServiceCards from '@/components/landing/ServiceCards';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <MissionOwnerNarrative />
    </>
  );
}
