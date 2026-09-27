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
    <section id="why-dictox" className="py-8 sm:py-12 lg:py-16 bg-[#031310] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] bg-[#00f59b]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4 text-center lg:text-left">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-bold block">
              WHY DICTOX
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-bold font-display tracking-tight text-white leading-[1.15]">
              A Different Approach <br className="hidden sm:inline" />
              To Your Advertising.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg font-bold text-[#00f59b] leading-snug">
              Your Ad Budget Should <br className="hidden sm:inline" />
              Work For Your Business.
            </p>

            <div className="pt-1 sm:pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_6px_25px_rgba(0,245,155,0.45)] active:scale-[0.98] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-md"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Side-by-side comparison tables */}
          <div className="lg:col-span-8 flex flex-col xl:flex-row items-center gap-4 sm:gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 flex-1 w-full">
              {/* Typical Agency Column */}
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col">
                {/* Header */}
                <div className="bg-slate-100 border-b border-slate-200 py-2 sm:py-2.5 px-3 sm:px-4 text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 font-display">
                    Typical Agency Approach
                  </h3>
                </div>

                {/* List Items */}
                <ul className="p-3 sm:p-4 space-y-2 sm:space-y-2.5 bg-white flex-1">
                  {typicalAgency.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11.5px] sm:text-xs text-slate-700 leading-snug">
                      <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DICTOX Approach Column */}
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,245,155,0.22)] hover:shadow-[0_8px_40px_rgba(0,245,155,0.35)] border-2 border-[#00f59b] flex flex-col transition-all duration-300 hover:-translate-y-1">
                {/* Header: Glowing Emerald Band */}
                <div className="bg-[#00f59b] py-2 sm:py-2.5 px-3 sm:px-4 text-center">
                  <h3 className="text-xs sm:text-sm font-black text-slate-950 font-display tracking-wide uppercase">
                    DICTOX Approach
                  </h3>
                </div>

                {/* List Items */}
                <ul className="p-3 sm:p-4 space-y-2 sm:space-y-2.5 bg-[#f8fdfb] flex-1">
                  {dictoxAgency.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11.5px] sm:text-xs text-slate-900 font-semibold leading-snug">
                      <Check className="w-3.5 h-3.5 text-[#00b370] shrink-0 mt-0.5 stroke-[3]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Handwritten Note on Right */}
            <div className="hidden xl:block w-36 text-slate-200 font-handwriting text-base lg:text-lg leading-snug text-left pl-1">
              "More Customers.<br />More Revenue.<br />A Stronger Business."
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
