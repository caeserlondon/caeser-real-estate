import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PropertiesSection } from '@/components/sections/PropertiesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AwardsSection } from '@/components/sections/AwardsSection';
import { ConsultationSection } from '@/components/sections/ConsultationSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PropertiesSection />
      <AwardsSection />
      <ConsultationSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
