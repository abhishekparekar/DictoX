import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingActions from './components/FloatingActions';

import HeroSection from './sections/HeroSection';
import TrustBar from './sections/TrustBar';
import ProblemSection from './sections/ProblemSection';
import ServicesSection from './sections/ServicesSection';
import WhyDictoxSection from './sections/WhyDictoxSection';
import ProcessSection from './sections/ProcessSection';
import ResultsSection from './sections/ResultsSection';
import IndustriesSection from './sections/IndustriesSection';
import LogoWall from './sections/LogoWall';
import TestimonialsSection from './sections/TestimonialsSection';
import AboutFounderSection from './sections/AboutFounderSection';
import CourseSection from './sections/CourseSection';
import FAQSection from './sections/FAQSection';
import FinalCTA from './sections/FinalCTA';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col selection:bg-brand-emerald selection:text-brand-dark">
      {/* 09. Navigation / Sticky Header */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-grow">
        {/* 10. Hero Section */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* 11. Trust / Certification Bar */}
        <TrustBar />

        {/* 12. Business Problem Section */}
        <ProblemSection onOpenConsultation={handleOpenConsultation} />

        {/* 13. Services Section */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 14. Why DictoX Section (Comparison) */}
        <WhyDictoxSection onOpenConsultation={handleOpenConsultation} />

        {/* 15. How We Work — Process */}
        <ProcessSection onOpenConsultation={handleOpenConsultation} />

        {/* 16. Results / Case Studies */}
        <ResultsSection onOpenConsultation={handleOpenConsultation} />

        {/* 17. Industries We Work With */}
        <IndustriesSection onOpenConsultation={handleOpenConsultation} />

        {/* 18. Client Logo Wall */}
        <LogoWall />

        {/* 19. Testimonials */}
        <TestimonialsSection onOpenConsultation={handleOpenConsultation} />

        {/* 20. About / Founder (Suresh More) */}
        <AboutFounderSection onOpenConsultation={handleOpenConsultation} />

        {/* 21. Meta Ads Course */}
        <CourseSection onOpenConsultation={handleOpenConsultation} />

        {/* 22. FAQ Accordion */}
        <FAQSection onOpenConsultation={handleOpenConsultation} />

        {/* 23. Final CTA Band */}
        <FinalCTA onOpenConsultation={handleOpenConsultation} />

        {/* 24. Contact & Location Section */}
        <ContactSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* 26. Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Global Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

      {/* Floating WhatsApp and Back to Top Actions */}
      <FloatingActions />
    </div>
  );
}
