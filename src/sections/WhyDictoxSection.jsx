import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

export default function WhyDictoxSection({ onOpenConsultation }) {
  const typicalAgency = [
    'Ads are the main focus',
    'Campaigns are launched and managed',
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
    'WhatsApp integration for faster lead follow-up',
    'What works is optimized & scaled',
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-[#030e10] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-[#00f59b]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading and Call to Action */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#00f59b] font-bold">
              Why DictoX
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              A Different Approach<br />To Your Advertising
            </h2>

            <p className="text-base sm:text-lg font-bold text-[#00f59b]">
              Your Ad Budget Should Work For Your Business.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#00f59b]/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get A Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Side-by-Side Comparison Cards (Modern Gradient Boxes) */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Typical Agency Card */}
              <div className="bg-gradient-to-b from-[#0a1c1f] to-[#051315] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-white/10">
                    <div className="w-7 h-7 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold border border-red-500/30">
                      ✕
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-200 font-display">
                      Typical Agency Approach
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {typicalAgency.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400 leading-snug">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* DICTOX Approach Card */}
              <div className="bg-gradient-to-b from-[#0d2c30] via-[#082023] to-[#051619] border-2 border-[#00f59b]/80 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#00f59b]/15 flex flex-col justify-between relative">
                {/* Highlight Tag */}
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-[#00f59b] to-[#00d084] text-slate-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Recommended
                </div>

                <div>
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-white/15">
                    <div className="w-7 h-7 rounded-xl bg-[#00f59b]/25 text-[#00f59b] flex items-center justify-center text-xs font-bold border border-[#00f59b]/40">
                      ✓
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      DICTOX Approach
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {dictoxAgency.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-100 font-semibold leading-snug">
                        <Check className="w-4 h-4 text-[#00f59b] stroke-[3] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Handwritten script note on side */}
            <div className="hidden xl:block absolute -right-28 top-1/2 -translate-y-1/2 w-32 text-left">
              <span className="font-handwriting text-lg text-[#00f59b] font-bold block leading-snug rotate-6 drop-shadow">
                "More Customers.<br />More Revenue.<br />A Stronger Business."
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
