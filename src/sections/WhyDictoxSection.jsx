import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

export default function WhyDictoxSection({ onOpenConsultation }) {
  const typicalAgency = [
    'Ads are the main focus',
    'Campaigns are simply managed',
    'Focus on clicks, reach & impressions',
    'Generic strategy',
    'Ad performance can feel unclear',
    'Leads and follow-up are separate',
    'Campaigns run as they are',
  ];

  const dictoxAgency = [
    'Your business growth is the focus',
    'Campaigns are continuously improved',
    'Focus on potential leads & customers',
    'Strategy built around your business',
    'Clear tracking of spend, leads & results',
    'WhatsApp integration for faster follow-up',
    'What works is optimized & scaled',
  ];

  return (
    <section className="py-10 sm:py-14 md:py-18 bg-[#051714] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-[#00f59b]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-4 space-y-5 text-center lg:text-left">
            <span className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-bold">
              WHY DICTOX
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              A Different Approach<br />To Your Advertising.
            </h2>

            <p className="text-base sm:text-lg font-bold text-[#00f59b] leading-snug">
              Your Ad Budget Should Work For Your Business.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_6px_25px_rgba(0,245,155,0.4)] transition-all duration-300 cursor-pointer shadow-md"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Comparison Table matching Screenshot 2 */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-center gap-5 sm:gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 flex-1 w-full">
              {/* Typical Agency Column */}
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                {/* Header */}
                <div className="bg-slate-100 border-b border-slate-200 py-2.5 sm:py-3.5 px-4 text-center">
                  <h3 className="text-xs sm:text-base font-bold text-slate-800 font-display">
                    Typical Agency Approach
                  </h3>
                </div>

                {/* List Items */}
                <ul className="p-3.5 sm:p-5 space-y-2 sm:space-y-2.5 bg-white">
                  {typicalAgency.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-snug">
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DICTOX Approach Column */}
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-[#00f59b]">
                {/* Header: Emerald Green Band */}
                <div className="bg-[#00f59b] py-2.5 sm:py-3.5 px-4 text-center">
                  <h3 className="text-xs sm:text-base font-black text-slate-950 font-display tracking-wide uppercase">
                    DICTOX Approach
                  </h3>
                </div>

                {/* List Items */}
                <ul className="p-3.5 sm:p-5 space-y-2 sm:space-y-2.5 bg-[#f8fdfb]">
                  {dictoxAgency.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-900 font-semibold leading-snug">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00b370] shrink-0 mt-0.5 stroke-[3]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Handwritten Note on Right */}
            <div className="hidden xl:block w-36 text-slate-300 font-serif italic text-sm leading-snug">
              "More Customers.<br />More Revenue.<br />A Stronger Business."
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

