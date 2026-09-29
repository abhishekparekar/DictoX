import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

export default function WhyDictoxSection({ onOpenConsultation }) {
  const typicalAgency = [
    'Ads are the main focus',
    'Campaigns are simply managed',
    'Focus on clicks, reach & impressions',
    'Generic template strategy',
    'Ad performance can feel unclear',
    'Leads and follow-up are disconnected',
    'Campaigns run on autopilot with no optimization',
  ];

  const dictoxAgency = [
    'Your real business growth is the primary metric',
    'Campaigns are continuously improved & tested',
    'Focus on high-intent qualified buyers',
    'Custom strategy engineered around your unit economics',
    'Transparent real-time tracking of spend & revenue',
    'WhatsApp API & CRM integration for instant follow-up',
    'Winning ad creatives are scaled aggressively',
  ];

  return (
    <section id="why-dictox" className="py-6 sm:py-9 md:py-12 relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Compact Floating White Card Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          
          {/* Subtle center ambient blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center relative z-10">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-2.5 sm:space-y-3.5 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0011a8] block">
                Why DictoX?
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] font-black tracking-tight text-slate-950 leading-[1.15]">
                A Different Approach <br />
                <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                  To Your Advertising.
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                Your advertising budget shouldn't be an expense — it should be an investment that brings predictable, scalable revenue back into your business.
              </p>

              <div className="pt-1.5">
                <button
                  onClick={onOpenConsultation}
                  className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto lg:mx-0"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Comparison Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              
              {/* Typical Agency Column */}
              <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-200">
                    Typical Agency Approach
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {typicalAgency.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* DictoX Approach Column (Brand Royal Blue & Green Accent) */}
              <div className="bg-gradient-to-b from-blue-50/70 to-emerald-50/50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border-2 border-blue-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                    <h3 className="text-xs sm:text-sm font-black text-[#0011a8] uppercase tracking-wider">
                      DictoX Approach
                    </h3>
                    <span className="text-[10px] bg-[#00a63e] text-white font-bold px-2 py-0.5 rounded-full">
                      Proven
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {dictoxAgency.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-800 leading-snug">
                        <Check className="w-4 h-4 text-[#00a63e] shrink-0 mt-0.5 stroke-[3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
