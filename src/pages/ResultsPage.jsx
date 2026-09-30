import React from 'react';
import ResultsSection from '../sections/ResultsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FinalCTA from '../sections/FinalCTA';

export default function ResultsPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-14 sm:pt-16">
      <ResultsSection onOpenConsultation={onOpenConsultation} />
      <TestimonialsSection onOpenConsultation={onOpenConsultation} />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
