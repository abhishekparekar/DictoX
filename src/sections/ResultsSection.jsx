import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ResultsSection({ onOpenConsultation }) {
  const caseStudies = [
    {
      id: 'real-estate',
      industry: 'Real Estate',
      objective: 'High-Intent Site Visits & Enquiries',
      spend: '₹1,50,000',
      leads: '412',
      cpl: '₹121',
      duration: '30 Days',
      outcome: '38 Site Visits booked, ₹4.2 Cr property sales pipeline generated',
      image: '/images/real_estate.jpg',
    },
    {
      id: 'education',
      industry: 'Education & Coaching',
      objective: 'Academic Year Course Admissions',
      spend: '₹1,25,000',
      leads: '286',
      cpl: '₹122',
      duration: '30 Days',
      outcome: '72 Confirmed student admissions with automated WhatsApp follow-up',
      image: '/images/education.jpg',
    },
    {
      id: 'restaurant',
      industry: 'Restaurant & Café',
      objective: 'Weekend Table Bookings & Footfall',
      spend: '₹20,000',
      leads: '213',
      cpl: '₹94',
      duration: '30 Days',
      outcome: '3x Weekend reservation increase and 480+ direct customer visits',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="results" className="py-14 sm:py-16 bg-[#051416] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-semibold">
                Real Results / Case Studies
              </span>
              <span className="text-amber-400 text-xs">⭐</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white mt-1">
              Real Campaigns. Real Results.
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#00f59b] transition-colors"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="bg-[#091f22]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00f59b]/40 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.industry}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091f22] via-[#091f22]/40 to-transparent" />
                  
                  {/* Category & Objective */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00f59b] bg-black/50 px-2 py-0.5 rounded">
                      {item.industry}
                    </span>
                    <h3 className="text-sm font-bold font-display text-white mt-1 leading-snug">
                      {item.objective}
                    </h3>
                  </div>
                </div>

                {/* 4 Prominent Metrics Grid */}
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-white/10">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Ad Spend</div>
                      <div className="text-base font-bold text-white font-display mt-0.5">{item.spend}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Leads Generated</div>
                      <div className="text-base font-bold text-[#00f59b] font-display mt-0.5">{item.leads}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Cost Per Lead</div>
                      <div className="text-base font-bold text-white font-display mt-0.5">{item.cpl}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Campaign Duration</div>
                      <div className="text-base font-bold text-slate-300 font-display mt-0.5">{item.duration}</div>
                    </div>
                  </div>

                  {/* Key Outcome */}
                  <div className="bg-[#051518] rounded-xl p-3 border border-[#00f59b]/20">
                    <div className="text-[10px] uppercase font-mono font-semibold text-[#00f59b] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#00f59b]" />
                      Key Outcome
                    </div>
                    <div className="text-xs text-slate-200 mt-1 leading-relaxed">
                      {item.outcome}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
