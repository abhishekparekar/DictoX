import React, { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function TestimonialsSection({ onOpenConsultation }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rohit Patil',
      role: 'Managing Director, Landmark Properties, Pune',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: 'We had worked with three agencies before DictoX. Suresh and his team were the only ones who focused on actual site visits rather than just Facebook form clicks. We closed 12 units in 60 days.',
      highlight: '12 Units Closed in 60 Days',
      industry: 'Real Estate',
    },
    {
      name: 'Dr. Anjali Deshmukh',
      role: 'Founder & Chief Orthodontist, Aura Dental Clinics',
      avatar: 'https://images.unsplash.com/photo-1594824813589-b883017a6526?auto=format&fit=crop&w=200&q=80',
      quote: 'DictoX helped us crack Google Search and targeted ads for high-ticket dental implants. Their strategy stopped casual inquiries and brought genuine patients ready for consultations. In-clinic consultations jumped by 180%.',
      highlight: '+180% Patient Consultations',
      industry: 'Healthcare & Clinics',
    },
    {
      name: 'Vikram Joshi',
      role: 'Director of Admissions, NextGen Tech Academy',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote: 'The webinar funnel they built for our professional tech programs was phenomenal. We enrolled 185 professionals and both cohorts were completely filled 2 weeks before the launch date.',
      highlight: '100% Cohort Batch Filled',
      industry: 'Education & EdTech',
    },
    {
      name: 'Prashant Mehta',
      role: 'Co-Founder, FitPulse Centers',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      quote: 'DictoX gave us a transparent setup showing which ad brought paying gym members. Our cost per verified trial membership dropped from ₹850 to ₹290, and monthly signups doubled.',
      highlight: 'Cost Per Member Cut 65%',
      industry: 'Gyms & Fitness',
    },
    {
      name: 'Kavita Rathi',
      role: 'Brand Head, Organic D2C Skincare',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      quote: 'Their creative ad hooks and catalog scaling took our monthly direct orders from 600 to over 3,200 orders at a stable 4.1x ROAS. Best performance marketing team we have partnered with.',
      highlight: '4.1x Blended E-Com ROAS',
      industry: 'E-commerce & D2C',
    },
    {
      name: 'Siddharth Nair',
      role: 'Operations Head, Urban Gourmet Bistro',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      quote: 'Our weekend table reservations and private banquet event bookings surged within the first 30 days of running their geo-targeted local campaigns. Highly recommended.',
      highlight: '3.4x Table Bookings Growth',
      industry: 'Restaurants & Cafés',
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = Math.min(clientWidth * 0.88, 360) + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = Math.min(scrollRef.current.clientWidth * 0.88, 360) + 16;
    const target = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: target, behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = Math.min(scrollRef.current.clientWidth * 0.88, 360) + 16;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-10 sm:py-14 md:py-18 relative w-full overflow-hidden bg-white border-t border-slate-200/80">
      {/* Subtle top ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[220px] bg-gradient-to-b from-blue-100/35 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Subheading */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>TESTIMONIALS</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700">CLIENT REVIEWS & FEEDBACK</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Businesses That Grow With{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              DictoX.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Real experiences from businesses that have worked with our team.
          </p>

          {/* 5-Star Social Proof Rating Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/80 border border-amber-200/80 text-xs font-bold text-slate-800 shadow-2xs">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-700 font-semibold">5.0 Verified Client Rating</span>
          </div>
        </AnimatedSection>

        {/* 1. Mobile Carousel Slider (md:hidden) */}
        <div className="block md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-3.5 pb-2 -mx-4 px-4"
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="w-[86vw] max-w-[340px] shrink-0 snap-center bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,17,168,0.05)] flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      {item.industry}
                    </span>
                  </div>

                  <div className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00a63e] border border-emerald-100 mb-2.5">
                    {item.highlight}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3.5 mt-3.5 border-t border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-9 h-9 rounded-full object-cover shadow-xs border border-slate-200 shrink-0"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dot Navigation & Buttons */}
          <div className="flex items-center justify-between pt-3 px-1">
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? 'w-5 bg-[#0011a8]' : 'w-1.5 bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-2xs hover:border-[#0011a8] text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-7 h-7 rounded-full bg-white border border-slate-200 shadow-2xs hover:border-[#0011a8] text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Desktop & Tablet 6-Card Grid (hidden md:grid) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item, idx) => (
            <AnimatedSection
              key={idx}
              direction="up"
              delay={idx * 0.05}
              className="h-full flex"
            >
              <div
                className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(0,17,168,0.08)] hover:-translate-y-1 transition-all duration-300 group text-left relative overflow-hidden"
              >
                <div>
                  {/* Rating & Industry */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                      {item.industry}
                    </span>
                  </div>

                  {/* Result Badge */}
                  <div className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00a63e] border border-emerald-100 mb-3">
                    {item.highlight}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover shadow-xs border border-slate-200 shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                      {item.name}
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium truncate mt-0.5">
                      {item.role}
                    </p>
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
