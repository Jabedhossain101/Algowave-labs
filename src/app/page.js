import CTA from "@/components/landing/CTA";
import HeroSection from "@/components/landing/HeroSection";
import Marquee from "@/components/landing/Marquee";
import Portfolio from "@/components/landing/Portfolio";
import Process from "@/components/landing/Process";
import ServicesSection from "@/components/landing/ServicesSection";
import TechStack from "@/components/landing/TechStack";
import Testimonials from "@/components/landing/Testimonials";
import WhyUsSection from "@/components/landing/WhyUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <TechStack />
      <ServicesSection />
      <Process />
      <Portfolio />
      <Testimonials />
      <WhyUsSection />
      <CTA/>
    </>
  );
}
