import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ResultsSection({ onOpenConsultation }) {
  const caseStudies = [
    {
      id: 'real-estate',
      title: 'Real Estate',
      subtitle: 'Lead Generation',
      image: '/images/real_estate.jpg',
      spend: '₹1,50,000',
      leads: '412',
      cpl: '₹121',
      duration: '30 Days',
    },
    {
      id: 'education',
      title: 'Education & Coaching',
      subtitle: 'Admissions',
      image: '/images/education.jpg',
      spend: '₹1,25,000',
      leads: '286',
      cpl: '₹122',
      duration: '30 Days',
    },
    {
      id: 'restaurant',
      title: 'Restaurant & Café',
      subtitle: 'Dine-in Customers',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      spend: '₹20,000',
      leads: '213',
      cpl: '₹94',
      duration: '30 Days',
    },
  ];

  return (
    <section id="results" className="py-14 sm:py-16 bg-[#051416] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-semibold">
              Real Results
            </span>
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
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091f22] via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-base font-bold font-display text-white">
                      {item.title}
                    </h3>
                    <div className="text-xs text-[#00f59b] font-medium">
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                {/* 4 Metrics Grid */}
                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-2 gap-3 pb-4 border-b border-white/10">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Ad Spend</div>
                      <div className="text-sm font-bold text-white font-display mt-0.5">{item.spend}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Leads Generated</div>
                      <div className="text-sm font-bold text-[#00f59b] font-display mt-0.5">{item.leads}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Cost Per Lead</div>
                      <div className="text-sm font-bold text-white font-display mt-0.5">{item.cpl}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Duration</div>
                      <div className="text-sm font-bold text-slate-300 font-display mt-0.5">{item.duration}</div>
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
