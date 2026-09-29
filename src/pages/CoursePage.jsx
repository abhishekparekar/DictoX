import React from 'react';
import CourseSection from '../sections/CourseSection';
import FAQSection from '../sections/FAQSection';
import FinalCTA from '../sections/FinalCTA';
import TrustBar from '../sections/TrustBar';

export default function CoursePage({ onOpenConsultation }) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-6 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 relative overflow-hidden text-center w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0011a8] mb-1">
            Practical Meta Ads Training
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 max-w-4xl mx-auto leading-tight">
            Meta Ads Masterclass For{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Business Owners
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mt-2 font-medium leading-relaxed">
            Learn step-by-step how to launch, optimize, and scale profitable Facebook & Instagram ad campaigns for your own business without relying on expensive middlemen.
          </p>
        </div>
      </section>

      <TrustBar />
      <CourseSection onOpenConsultation={onOpenConsultation} />
      <FAQSection onOpenConsultation={onOpenConsultation} />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
