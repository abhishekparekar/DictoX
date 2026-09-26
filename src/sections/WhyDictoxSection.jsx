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
    <section className="py-14 sm:py-16 bg-[#041214] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-[#00f59b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading and Call to Action */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-semibold">
              Why DictoX
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white leading-tight">
              A Different Approach<br />To Your Advertising
            </h2>

            <p className="text-sm sm:text-base font-semibold text-[#00f59b]">
              Your Ad Budget Should Work For Your Business.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>Get A Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Side-by-Side Comparison Cards */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Typical Agency Card */}
              <div className="bg-[#081a1c]/90 border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/10">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">
                      ✕
                    </div>
                    <h3 className="text-sm font-bold text-slate-300 font-display">
                      Typical Agency Approach
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {typicalAgency.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* DICTOX Approach Card */}
              <div className="bg-[#092225] border-2 border-[#00f59b]/50 rounded-2xl p-5 sm:p-6 shadow-xl shadow-[#00f59b]/5 flex flex-col justify-between relative">
                {/* Highlight Tag */}
                <div className="absolute -top-3 right-5 bg-gradient-to-r from-[#00f59b] to-[#00d084] text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Recommended
                </div>

                <div>
                  <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/10">
                    <div className="w-5 h-5 rounded-full bg-[#00f59b]/20 text-[#00f59b] flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <h3 className="text-sm font-bold text-white font-display">
                      DICTOX Approach
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {dictoxAgency.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Handwritten script note on side */}
            <div className="hidden xl:block absolute -right-24 top-1/2 -translate-y-1/2 w-28 text-left">
              <span className="font-handwriting text-base text-[#00f59b] font-bold block leading-snug rotate-6">
                "More Customers.<br />More Revenue.<br />A Stronger Business."
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
