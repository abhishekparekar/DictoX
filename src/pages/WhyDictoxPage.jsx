import React from 'react';
import WhyDictoxSection from '../sections/WhyDictoxSection';

export default function WhyDictoxPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-12 sm:pt-14">
      <WhyDictoxSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
