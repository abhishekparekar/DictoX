import React, { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function TestimonialsSection({ onOpenConsultation }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rohit Patil',
      role: 'Real Estate Developer, Pune',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: '"We had worked with three agencies before DictoX. Suresh and his team were the only ones who tracked site visits rather than just Facebook form clicks. We closed 12 units in 60 days."',
      highlight: '3x Verified Enquiries',
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Founder, Aesthetic & Skin Clinic',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      quote: '"Their WhatsApp integration completely revolutionized our patient bookings. No more leads going cold. Highly professional, responsive, and data-driven team."',
      highlight: 'Real Measurable Bookings',
    },
    {
      name: 'Amit Deshmukh',
      role: 'Director, Competitive Coaching Institute',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote: '"Our admissions batch filled up 3 weeks before deadline. The cost per acquired student was cut by almost 45% compared to our previous newspaper ads."',
      highlight: 'Admissions Scaled 45%',
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = Math.min(clientWidth * 0.86, 340) + 14;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = Math.min(scrollRef.current.clientWidth * 0.86, 340) + 14;
    const target = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: target, behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = Math.min(scrollRef.current.clientWidth * 0.86, 340) + 14;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-4 sm:py-7 md:py-9 relative w-full overflow-hidden">
      {/* Subtle top aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/30 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header — Left-Aligned Signature Style with Mobile Scroll Icons */}
        <AnimatedSection direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-3.5 sm:mb-6 text-left">
          <div>
            <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0011a8] block mb-1">
              CLIENT REVIEWS & FEEDBACK
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
              Businesses That Grow With{' '}
              <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                DictoX.
              </span>
            </h2>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto">
            {/* 5.0 Star Badge */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 shrink-0">
              <span>★★★★★</span>
              <span className="text-slate-700 font-semibold ml-0.5">5.0 Verified Reviews</span>
            </div>

            {/* Mobile Scroll Icons Side by Side */}
            <div className="flex md:hidden items-center gap-1.5 shrink-0">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-2xs hover:border-[#0011a8] text-slate-700 hover:text-[#0011a8] flex items-center justify-center transition-all active:scale-90 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-2xs hover:border-[#0011a8] text-slate-700 hover:text-[#0011a8] flex items-center justify-center transition-all active:scale-90 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* 1. Mobile Horizontal Side-by-Side Slider (md:hidden) */}
        <div className="block md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-3.5 pb-2 -mx-3 px-3"
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="w-[86vw] max-w-[340px] shrink-0 snap-center bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,17,168,0.05)] flex flex-col justify-between"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <div className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2 ${
                    idx % 2 === 0 ? 'bg-blue-50 text-[#0011a8]' : 'bg-emerald-50 text-[#00a63e]'
                  }`}>
                    {item.highlight}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
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

          {/* Mobile Dot Navigation */}
          <div className="flex items-center justify-center gap-1.5 pt-2.5">
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
        </div>

        {/* 2. Desktop & Tablet 3-Card Grid (hidden md:grid) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {testimonials.map((item, idx) => (
            <AnimatedSection
              key={idx}
              direction="up"
              delay={idx * 0.08}
              className={`h-full flex ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div
                className="w-full bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(0,17,168,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <div className={`inline-block text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 ${
                    idx % 2 === 0 ? 'bg-blue-50 text-[#0011a8]' : 'bg-emerald-50 text-[#00a63e]'
                  }`}>
                    {item.highlight}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-xs border border-slate-200 shrink-0"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
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
