import React, { useState, useEffect } from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { fetchTenantResults } from '../firebase';

export default function ResultsSection({ onOpenConsultation }) {
  const defaultCaseStudies = [
    {
      id: 'real-estate',
      title: 'Pune Luxury Residential Launch',
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
      title: 'Tech Career Coaching Batch',
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
      title: 'Pan-Asian Gourmet Chain',
      industry: 'Restaurant & F&B Franchise',
      objective: 'Footfall, Table Bookings & Catering',
      spend: '₹20,000',
      leads: '213',
      cpl: '₹94',
      duration: '30 Days',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const [results, setResults] = useState(defaultCaseStudies);

  useEffect(() => {
    async function loadDynamicResults() {
      try {
        const dynamicItems = await fetchTenantResults();
        if (dynamicItems && dynamicItems.length > 0) {
          // Prepend newly added dynamic results from admin
          setResults([...dynamicItems, ...defaultCaseStudies]);
        }
      } catch (err) {
        console.warn('Failed to load dynamic results:', err);
      }
    }
    loadDynamicResults();
  }, []);

  return (
    <section id="results" className="py-4 sm:py-7 md:py-9 relative w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-3.5 sm:mb-6">
          <div>
            <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-[#0011a8] block mb-0.5">
              Proof of Performance
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
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

        {/* Dynamic Case Study Cards Grid — Mobile Top 2, Desktop Top 6 */}
        {/* Mobile View (md:hidden, 2 items) */}
        <div className="grid grid-cols-1 gap-3.5 md:hidden">
          {results.slice(0, 2).map((item, idx) => (
            <AnimatedSection
              key={`m-${item.id || idx}`}
              direction="up"
              delay={idx * 0.05}
              className="h-full flex"
            >
              <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,17,168,0.04)] border border-slate-200/90 flex flex-col group">
                
                {/* Image */}
                <div className="h-32 overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image || '/images/real_estate.jpg'}
                    alt={item.industry || item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/real_estate.jpg';
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-2xs border border-slate-100">
                    {item.duration || '30 Days'}
                  </div>
                </div>

                {/* Details */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    {item.title && (
                      <h4 className="text-xs font-bold text-slate-950 group-hover:text-[#0011a8] transition-colors line-clamp-1 mb-0.5">
                        {item.title}
                      </h4>
                    )}
                    <div className="text-[11px] text-blue-600 font-semibold mb-0.5">
                      {item.industry}
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium mb-2.5 line-clamp-1">
                      {item.objective}
                    </p>

                    {/* 3 Metrics */}
                    <div className="grid grid-cols-3 gap-1 py-2 bg-slate-50/90 rounded-xl border border-slate-150 text-center">
                      <div>
                        <div className="text-[8.5px] text-slate-400 font-semibold uppercase">
                          Spend
                        </div>
                        <div className="text-xs font-bold text-slate-900 mt-0.5 truncate px-1">
                          {item.spend}
                        </div>
                      </div>
                      <div className="border-x border-slate-200 px-0.5">
                        <div className="text-[8.5px] text-slate-400 font-semibold uppercase">
                          Leads
                        </div>
                        <div className="text-xs font-black text-[#0011a8] mt-0.5 truncate px-1">
                          {item.leads}
                        </div>
                      </div>
                      <div>
                        <div className="text-[8.5px] text-slate-400 font-semibold uppercase">
                          Cost/Lead
                        </div>
                        <div className="text-xs font-black text-[#00a63e] mt-0.5 truncate px-1">
                          {item.cpl}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-2.5 mt-2.5 border-t border-slate-100">
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

          {/* Mobile Direct Link to All Results */}
          <div className="pt-1">
            <Link
              to="/results"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#0011a8] bg-white hover:bg-blue-50/50 border border-slate-200 flex items-center justify-center gap-1.5 shadow-2xs transition-all"
            >
              <span>Explore All Case Studies ({results.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop View (hidden md:grid, up to 6 items) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {results.slice(0, 6).map((item, idx) => (
            <AnimatedSection
              key={item.id || idx}
              direction="up"
              delay={idx * 0.05}
              className="h-full flex"
            >
              <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,17,168,0.04)] border border-slate-200/90 flex flex-col hover:shadow-[0_12px_36px_rgba(0,17,168,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                
                {/* Image */}
                <div className="h-36 sm:h-44 overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image || '/images/real_estate.jpg'}
                    alt={item.industry || item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/real_estate.jpg';
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-slate-800 shadow-2xs border border-slate-100">
                    {item.duration || '30 Days'}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {item.title && (
                      <h4 className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-[#0011a8] transition-colors line-clamp-1 mb-0.5">
                        {item.title}
                      </h4>
                    )}
                    <div className="text-xs text-blue-600 font-semibold mb-1">
                      {item.industry}
                    </div>
                    <p className="text-xs text-slate-500 font-medium mb-3 line-clamp-2">
                      {item.objective}
                    </p>

                    {/* 3 Metrics */}
                    <div className="grid grid-cols-3 gap-1 py-2.5 bg-slate-50/90 rounded-xl border border-slate-150 text-center">
                      <div>
                        <div className="text-[9px] text-slate-400 font-semibold uppercase">
                          Spend
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 truncate px-1">
                          {item.spend}
                        </div>
                      </div>
                      <div className="border-x border-slate-200 px-0.5">
                        <div className="text-[9px] text-slate-400 font-semibold uppercase">
                          Leads
                        </div>
                        <div className="text-xs sm:text-sm font-black text-[#0011a8] mt-0.5 truncate px-1">
                          {item.leads}
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-400 font-semibold uppercase">
                          Cost/Lead
                        </div>
                        <div className="text-xs sm:text-sm font-black text-[#00a63e] mt-0.5 truncate px-1">
                          {item.cpl}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-3.5 mt-3 border-t border-slate-100">
                    <button
                      onClick={onOpenConsultation}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
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
