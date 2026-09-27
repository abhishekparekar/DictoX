import React from 'react';
import AboutFounderSection from '../sections/AboutFounderSection';
import WhyDictoxSection from '../sections/WhyDictoxSection';
import TrustBar from '../sections/TrustBar';
import FinalCTA from '../sections/FinalCTA';

export default function AboutPage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#030f11] via-[#05181b] to-[#041214] text-white pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f59b]/12 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center">
          <span className="inline-block text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#00f59b] font-bold mb-2">
            Our Story & Founder
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Meet Suresh More & The DictoX Marketing Team
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 font-normal">
            Helping businesses across India turn online advertising into a predictable, scalable engine of customer acquisition.
          </p>
        </div>
      </section>

      <TrustBar />
      <AboutFounderSection onOpenConsultation={onOpenConsultation} />
      <WhyDictoxSection onOpenConsultation={onOpenConsultation} />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
