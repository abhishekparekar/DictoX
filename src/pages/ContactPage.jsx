import React from 'react';
import ContactSection from '../sections/ContactSection';
import FAQSection from '../sections/FAQSection';
import TrustBar from '../sections/TrustBar';

export default function ContactPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#030f11] via-[#05181b] to-[#041214] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f59b]/12 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center">
          <span className="inline-block text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#00f59b] font-bold mb-3">
            Contact / Location
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Let’s Build Your Customer Acquisition Strategy
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 font-normal">
            Visit our office at Navale Icon, Narhe, Pune or schedule a direct consultation call with Suresh More and our performance marketing specialists.
          </p>
        </div>
      </section>

      <TrustBar />
      <ContactSection onOpenConsultation={onOpenConsultation} />
      <FAQSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
