import React from 'react';
import AboutFounderSection from '../sections/AboutFounderSection';
import WhyDictoxSection from '../sections/WhyDictoxSection';
import FinalCTA from '../sections/FinalCTA';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-12 sm:pt-14">
      <AboutFounderSection onOpenConsultation={onOpenConsultation} />
      <WhyDictoxSection onOpenConsultation={onOpenConsultation} />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
