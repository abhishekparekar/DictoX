import React from 'react';
import ResultsSection from '../sections/ResultsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FinalCTA from '../sections/FinalCTA';

export default function ResultsPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-12 sm:pt-14">
      <ResultsSection onOpenConsultation={onOpenConsultation} />
      <TestimonialsSection onOpenConsultation={onOpenConsultation} />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
