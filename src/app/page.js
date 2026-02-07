import HeroSection from '@/components/landing/HeroSection';
import Marquee from '@/components/landing/Marquee';
import TechStack from '@/components/landing/TechStack';
import ServicesSection from '@/components/landing/ServicesSection';
import WhyUsSection from '@/components/landing/WhyUsSection';
import Process from '@/components/landing/Process';
import Portfolio from '@/components/landing/Portfolio';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA';
import ContactPage from '@/components/landing/ContactPage';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <HeroSection />
      <Marquee />
      <TechStack />
      <ServicesSection />
      <WhyUsSection />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <ContactPage />
    </div>
  );
}