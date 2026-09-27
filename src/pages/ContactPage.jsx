import React from 'react';
import FinalCTA from '../sections/FinalCTA';
import ContactSection from '../sections/ContactSection';
import FAQSection from '../sections/FAQSection';

export default function ContactPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Banner starts directly behind the fixed navbar with seamless dark background */}
      <div className="pt-16 sm:pt-20 bg-[#031310]">
        <FinalCTA onOpenConsultation={onOpenConsultation} />
      </div>
      <ContactSection onOpenConsultation={onOpenConsultation} />
      <FAQSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
