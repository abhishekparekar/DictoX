import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResultsSection({ onOpenConsultation }) {
  const caseStudies = [
    {
      id: 'real-estate',
      industry: 'Real Estate',
      objective: 'Lead Generation',
      spend: '₹50,000',
      leads: '412',
      cpl: '₹121',
      duration: '30 Days',
      image: '/images/real_estate.jpg',
    },
    {
      id: 'education',
      industry: 'Education & Coaching',
      objective: 'Admissions',
      spend: '₹35,000',
      leads: '286',
      cpl: '₹122',
      duration: '30 Days',
      image: '/images/education.jpg',
    },
    {
      id: 'restaurant',
      industry: 'Restaurant & Café',
      objective: 'Dine-in Customers',
      spend: '₹20,000',
      leads: '213',
      cpl: '₹94',
      duration: '30 Days',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="results" className="py-8 sm:py-12 lg:py-16 bg-[#031310] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[550px] h-[350px] bg-[#00f59b]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-8">
          <div>
            <span className="text-[10.5px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00f59b] font-bold block mb-1">
              REAL RESULTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold font-display tracking-tight text-white leading-tight">
              Real Campaigns. Real Results.
            </h2>
          </div>

          <Link
            to="/results"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-[#00f59b] transition-colors cursor-pointer group self-start sm:self-auto pb-1"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Horizontal Case Study Cards matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 text-slate-900 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-row h-full">
                {/* Thumbnail Image on the Left */}
                <div className="w-[38%] sm:w-[40%] shrink-0 overflow-hidden bg-slate-900 relative">
                  <img
                    src={item.image}
                    alt={item.industry}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[160px]"
                  />
                </div>

                {/* Details on the Right */}
                <div className="p-3 sm:p-3.5 lg:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm lg:text-base font-bold font-display text-slate-900 leading-tight">
                      {item.industry}
                    </h3>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-medium mb-2">
                      {item.objective}
                    </div>

                    {/* 3 Metrics: Ad Spend, Leads, Cost Per Lead */}
                    <div className="grid grid-cols-3 gap-1 py-1.5 border-y border-slate-100 text-center">
                      <div>
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium uppercase leading-none">
                          Ad Spend
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-slate-900 font-display mt-0.5">
                          {item.spend}
                        </div>
                      </div>
                      <div className="border-x border-slate-100 px-0.5">
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium uppercase leading-none">
                          Leads
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-slate-900 font-display mt-0.5">
                          {item.leads}
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium uppercase leading-none">
                          Cost Per Lead
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-slate-900 font-display mt-0.5">
                          {item.cpl}
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1.5">
                      {item.duration} Duration
                    </div>
                  </div>

                  {/* View Case Study Pill Button */}
                  <div className="pt-2 sm:pt-2.5">
                    <button
                      onClick={onOpenConsultation}
                      className="w-full py-1.5 sm:py-2 px-3 rounded-full text-[11px] sm:text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
