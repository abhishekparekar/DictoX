import React from 'react';
import { ArrowRight, Check, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function AboutFounderSection({ onOpenConsultation }) {
  return (
    <section id="about" className="py-4 sm:py-7 md:py-9 relative w-full overflow-hidden">
      {/* Subtle top aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/30 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Compact Floating White Card */}
        <AnimatedSection direction="up" className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Founder Photo & Bio Card */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative">
                <div className="w-36 h-44 sm:w-44 sm:h-52 md:w-52 md:h-56 rounded-2xl overflow-hidden shadow-sm border-2 border-white ring-4 ring-blue-50 bg-slate-100">
                  <img
                    src="/images/founder.jpg"
                    alt="Suresh More - Founder of DictoX Marketing"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 -right-1.5 bg-white px-2.5 py-0.5 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00a63e] shrink-0" />
                  <span>5+ Years Record</span>
                </div>
              </div>

              <div className="mt-3.5 sm:mt-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">Suresh More</h3>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.16em] text-[#0011a8] mt-0.5 block">
                  Founder & Performance Marketing Strategist
                </span>
              </div>
            </div>

            {/* Right Column: About Agency Story & Bullet Points */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              <div>
                <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0011a8] block mb-1">
                  OUR MISSION & ETHOS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 leading-tight">
                  We Help Businesses Turn Advertising <br />
                  <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                    Into Predictable Revenue.
                  </span>
                </h2>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1">
                <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 border border-slate-150">
                  <div className="text-sm font-bold text-[#0011a8]">01. Strategy</div>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">Deep analysis of customer pain points & market positioning.</p>
                </div>
                <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 border border-slate-150">
                  <div className="text-sm font-bold text-[#00a63e]">02. Execution</div>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">Rapid creative testing, pixel setup & landing page optimization.</p>
                </div>
                <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 border border-slate-150">
                  <div className="text-sm font-bold text-[#0011a8]">03. Scale</div>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">Aggressive budget scaling on top-performing campaigns.</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Work With Suresh & Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/about"
                  className="text-xs font-bold text-[#0011a8] hover:text-blue-700 py-1.5 px-3 text-center"
                >
                  Read Our Full Story →
                </Link>
              </div>

            </div>

          </div>

        </AnimatedSection>

      </div>
    </section>
  );
}
