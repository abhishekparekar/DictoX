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
    <section id="results" className="py-20 md:py-24 lg:py-28 bg-[#051416] text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-[#00f59b]/8 rounded-none blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#00f59b] font-bold">
                Real Results / Case Studies
              </span>
              <span className="text-amber-400 text-sm">⭐</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mt-2">
              Real Campaigns. Real Results.
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-300 hover:text-[#00f59b] transition-colors cursor-pointer group"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Case Study Cards: Sharp Rectangles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="bg-[#091f22]/95 border-2 border-white/15 rounded-none overflow-hidden hover:border-[#00f59b] hover:shadow-2xl hover:shadow-[#00f59b]/15 transition-all duration-300 group flex flex-col justify-between relative"
            >
              {/* Top border accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#00f59b] transition-colors z-20" />

              <div>
                {/* Image Frame */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900 rounded-none">
                  <img
                    src={item.image}
                    alt={item.industry}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091f22] via-[#091f22]/40 to-transparent" />
                  
                  {/* Category & Objective */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00f59b] bg-black/70 px-3 py-1 rounded-none border border-[#00f59b]/40">
                      {item.industry}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-2 leading-snug">
                      {item.objective}
                    </h3>
                  </div>
                </div>

                {/* 4 Prominent Metrics Grid */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10">
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-mono font-medium">Ad Spend</div>
                      <div className="text-lg sm:text-xl font-black text-white font-display mt-0.5">{item.spend}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-mono font-medium">Leads Generated</div>
                      <div className="text-lg sm:text-xl font-black text-[#00f59b] font-display mt-0.5">{item.leads}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-mono font-medium">Cost Per Lead</div>
                      <div className="text-lg sm:text-xl font-black text-white font-display mt-0.5">{item.cpl}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-mono font-medium">Campaign Duration</div>
                      <div className="text-lg sm:text-xl font-black text-slate-300 font-display mt-0.5">{item.duration}</div>
                    </div>
                  </div>

                  {/* Key Outcome */}
                  <div className="bg-[#051518] rounded-none p-4 border-l-4 border-l-[#00f59b] border-y border-r border-white/10">
                    <div className="text-xs uppercase font-mono font-bold text-[#00f59b] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00f59b]" />
                      Key Outcome
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 mt-1.5 leading-relaxed font-normal">
                      {item.outcome}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 rounded-none text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wider"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
