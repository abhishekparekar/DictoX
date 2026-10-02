import React, { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function TestimonialsSection({ onOpenConsultation }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mr. Shivhari Yadav',
      initials: 'SY',
      role: 'Bada Business PVT LTD · EdTech · Chh. Sambhajinagar Branch',
      quote: 'In the beginning, I was not sure whether online advertising would work for our business, so we decided to start with DictoX with a very small budget and test it first. As we started seeing the potential of the campaigns, we gradually increased our advertising budget. Today, we are spending around ₹20,000–₹30,000 per day across Meta and Google Ads. Suresh and the DictoX team have supported us throughout this journey and helped us scale step by step. It has been a great experience working with them.',
      highlight: '₹30L+ Advertising Spend Managed',
      industry: 'EdTech',
    },
    {
      name: 'Mr. Devchand Bidgar',
      initials: 'DB',
      role: 'Founder, Ahilya Agro · Ayurvedic Products · Nashik',
      quote: 'We started working with Suresh and DictoX with a daily advertising budget of just ₹100. Over time, with the right strategy, testing and optimization, we were able to scale our advertising to ₹10,000 per day. The DictoX team supported us throughout this journey and helped us understand how to scale our campaigns step by step. It has been a great experience working with Suresh and the team.',
      highlight: '₹20L+ Advertising Spend Managed',
      industry: 'Ayurvedic Products',
    },
    {
      name: 'Mr. Sujay Joshi',
      initials: 'SJ',
      role: 'Cofounder, Forstu Pvt Ltd · Scholarship Provider · Pune',
      quote: 'We have worked with Suresh and the DictoX team for different aspects of our digital marketing, including Meta Ads, WhatsApp API, automation and video creation. What I really appreciate is that the team is attentive and helpful with every requirement. They respond on time, understand what we need and make sure the work is handled properly. Overall, it has been a very good experience working with Suresh and the DictoX team.',
      highlight: '₹10L+ Advertising Spend Managed',
      industry: 'Scholarship Provider',
    },
    {
      name: 'Mr. Vijay Waghmare',
      initials: 'VW',
      role: 'Founder, Golden Event · Event Management · Chh. Sambhajinagar',
      quote: 'For an event business, timing and quick response are very important. The DictoX team has been helpful in managing our online advertising and responding whenever we have a requirement. They understand our requirements quickly and help us make the necessary changes in our campaigns. We have had a good experience working with Suresh and the team.',
      highlight: '₹5L+ Advertising Spend Managed',
      industry: 'Event Management',
    },
    {
      name: 'Mr. Chetan Oswal',
      initials: 'CO',
      role: 'Founder, Premium Plus Cream · Skin Care · Kolhapur',
      quote: 'We started working with DictoX for the online promotion of our skincare business. The team has been easy to work with and understands the requirements of our business. They manage our Meta and Google Ads and are available whenever we need support. We appreciate their involvement and the way they handle our advertising.',
      highlight: '₹4–5L+ Advertising Spend Managed',
      industry: 'Skin Care',
    },
    {
      name: 'Mr. Milind Bibve',
      initials: 'MB',
      role: 'Director, Royal Sales Corporation · Fertiliser Manufacturing',
      quote: 'We come from a manufacturing business, so digital advertising was a new area for us. DictoX helped us understand how Meta Ads, Google Ads, WhatsApp and automation could be used for our business. The team has been patient in explaining things and has supported us throughout the process. We are happy with the way they handle our digital advertising.',
      highlight: '₹7L+ Advertising Spend Managed',
      industry: 'Manufacturing',
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
            <span className="text-blue-300">•</span>
            <span className="text-[#00a63e]">CLIENT REVIEWS & FEEDBACK</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Businesses That Grow With{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              DictoX.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-black font-medium max-w-2xl mx-auto leading-relaxed">
            Real experiences from businesses that have worked with our team.
          </p>

          {/* 5-Star Social Proof Rating Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/80 border border-amber-200/80 text-xs font-bold text-black shadow-2xs">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-black font-semibold">5.0 Verified Client Rating</span>
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

                  <p className="text-xs text-slate-900 leading-relaxed italic font-medium">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info Highlighted */}
                <div className="flex items-center gap-3 pt-3.5 mt-3.5 border-t border-slate-150/90 -mx-4 -mb-4 p-3 bg-slate-50/70 rounded-b-2xl">
                  {/* Premium Brand Gradient Ring Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0011a8] via-blue-600 to-[#00a63e] p-[2px] shadow-xs shrink-0">
                    <div className="w-full h-full rounded-full bg-[#090d16] text-white flex items-center justify-center font-black text-xs tracking-wider select-none">
                      {item.initials}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-black text-slate-950 leading-tight truncate">
                        {item.name}
                      </h4>
                      <span className="inline-flex items-center text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/90 px-1.5 py-0.2 rounded-full shrink-0">
                        Verified
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[10.5px] text-black font-semibold truncate mt-0.5" title={item.role}>
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
                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wide">
                      {item.industry}
                    </span>
                  </div>

                  {/* Result Badge */}
                  <div className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00a63e] border border-emerald-100 mb-3">
                    {item.highlight}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-[13px] text-slate-900 leading-relaxed italic font-medium">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info Highlighted */}
                <div className="flex items-center gap-3.5 pt-4 mt-5 border-t border-slate-150/90 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 sm:p-4.5 bg-slate-50/70 rounded-b-2xl">
                  {/* Premium Brand Gradient Ring Avatar */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0011a8] via-blue-600 to-[#00a63e] p-[2px] shadow-sm shrink-0">
                    <div className="w-full h-full rounded-full bg-[#090d16] text-white flex items-center justify-center font-black text-sm tracking-wider select-none">
                      {item.initials}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm sm:text-base font-black text-slate-950 leading-tight truncate">
                        {item.name}
                      </h4>
                      <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/90 px-2 py-0.5 rounded-full shrink-0">
                        Verified Client
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-black font-semibold truncate mt-0.5" title={item.role}>
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
