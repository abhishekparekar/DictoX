import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function ResultsSection({ onOpenConsultation }) {
  const caseStudies = [
    {
      id: 'real-estate',
      industry: 'Real Estate Developer',
      objective: 'High-Value Site Visits & Inquiries',
      spend: '₹50,000',
      leads: '412',
      cpl: '₹121',
      duration: '30 Days',
      image: '/images/real_estate.jpg',
    },
    {
      id: 'education',
      industry: 'Education & Coaching Institute',
      objective: 'Student Admissions & Seminar Bookings',
      spend: '₹35,000',
      leads: '286',
      cpl: '₹122',
      duration: '30 Days',
      image: '/images/education.jpg',
    },
    {
      id: 'restaurant',
      industry: 'Restaurant & F&B Franchise',
      objective: 'Footfall, Table Bookings & Catering',
      spend: '₹20,000',
      leads: '213',
      cpl: '₹94',
      duration: '30 Days',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="results" className="py-6 sm:py-9 md:py-12 relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <AnimatedSection direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0011a8] block mb-1">
              Proof of Performance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
              Real Campaigns.{' '}
              <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                Real Results.
              </span>
            </h2>
          </div>

          <Link
            to="/results"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0011a8] hover:text-blue-800 transition-colors cursor-pointer group self-start sm:self-auto"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>

        {/* 3 Case Study Cards in Compact White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {caseStudies.map((item, idx) => (
            <AnimatedSection
              key={item.id}
              direction="up"
              delay={idx * 0.08}
              className={`h-full flex ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,17,168,0.04)] border border-slate-200/80 flex flex-col hover:shadow-[0_12px_36px_rgba(0,17,168,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                
                {/* Image */}
                <div className="h-36 sm:h-40 overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.industry}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-slate-800 shadow-2xs border border-slate-100">
                    {item.duration}
                  </div>
                </div>

                {/* Details */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-[#0011a8] transition-colors">
                      {item.industry}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 mb-2.5">
                      {item.objective}
                    </p>

                    {/* 3 Metrics */}
                    <div className="grid grid-cols-3 gap-1 py-2 bg-slate-50/90 rounded-xl border border-slate-150 text-center">
                      <div>
                        <div className="text-[9px] text-slate-400 font-semibold uppercase">
                          Spend
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                          {item.spend}
                        </div>
                      </div>
                      <div className="border-x border-slate-200 px-0.5">
                        <div className="text-[9px] text-slate-400 font-semibold uppercase">
                          Leads
                        </div>
                        <div className="text-xs sm:text-sm font-black text-[#0011a8] mt-0.5">
                          {item.leads}
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-400 font-semibold uppercase">
                          Cost/Lead
                        </div>
                        <div className="text-xs sm:text-sm font-black text-[#00a63e] mt-0.5">
                          {item.cpl}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View Case Study Button */}
                  <div className="pt-3 mt-3 border-t border-slate-100">
                    <button
                      onClick={onOpenConsultation}
                      className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-white bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span>Get Similar Results</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
