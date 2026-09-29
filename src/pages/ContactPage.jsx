import React from 'react';
import FinalCTA from '../sections/FinalCTA';
import ContactSection from '../sections/ContactSection';
import FAQSection from '../sections/FAQSection';

export default function ContactPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen pt-20">
      <ContactSection onOpenConsultation={onOpenConsultation} />
      <FAQSection onOpenConsultation={onOpenConsultation} />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
