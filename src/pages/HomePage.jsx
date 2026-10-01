import React from 'react';
import HeroSection from '../sections/HeroSection';
import TrustBar from '../sections/TrustBar';
import MarqueeRibbon from '../components/MarqueeRibbon';
import ProblemSection from '../sections/ProblemSection';
import ServicesSection from '../sections/ServicesSection';
import WhyDictoxSection from '../sections/WhyDictoxSection';
import ProcessSection from '../sections/ProcessSection';
import ResultsSection from '../sections/ResultsSection';
import IndustriesSection from '../sections/IndustriesSection';
import LogoWall from '../sections/LogoWall';
import TestimonialsSection from '../sections/TestimonialsSection';
import AboutFounderSection from '../sections/AboutFounderSection';
import CourseSection from '../sections/CourseSection';
import FAQSection from '../sections/FAQSection';
import FinalCTA from '../sections/FinalCTA';
import ContactSection from '../sections/ContactSection';

export default function HomePage({ onOpenConsultation }) {
  return (
    <>
      <HeroSection onOpenConsultation={onOpenConsultation} />
      <TrustBar />
      <div className="hidden sm:block">
        <MarqueeRibbon />
      </div>
      <ProblemSection onOpenConsultation={onOpenConsultation} />
      <ServicesSection onOpenConsultation={onOpenConsultation} />
      <WhyDictoxSection onOpenConsultation={onOpenConsultation} />
      <ProcessSection onOpenConsultation={onOpenConsultation} />
      <ResultsSection onOpenConsultation={onOpenConsultation} />
      <IndustriesSection onOpenConsultation={onOpenConsultation} />
      <LogoWall />
      <TestimonialsSection onOpenConsultation={onOpenConsultation} />
      <AboutFounderSection onOpenConsultation={onOpenConsultation} />
      <CourseSection onOpenConsultation={onOpenConsultation} />
      <FAQSection onOpenConsultation={onOpenConsultation} />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
      <ContactSection onOpenConsultation={onOpenConsultation} />
    </>
  );
}
