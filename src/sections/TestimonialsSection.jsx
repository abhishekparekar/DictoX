import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection({ onOpenConsultation }) {
  const testimonials = [
    {
      name: 'Rohit Patil',
      role: 'Real Estate',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: '“Got 3x more enquiries in just 1 month. Highly recommended!”',
      highlight: '3x More Enquiries',
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Salon Owner',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      quote: '“Professional team, clear communication and real results.”',
      highlight: 'Real Measurable Results',
    },
    {
      name: 'Amit Deshmukh',
      role: 'Coaching Institute',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote: '“Our admissions increased significantly. Great support and service!”',
      highlight: 'Admissions Scaled',
    },
  ];

  return (
    <section id="testimonials" className="py-8 sm:py-12 md:py-16 bg-[#f8faf9] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-7">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              WHAT OUR CLIENTS SAY
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              Businesses That Grow With Us.
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00b370] transition-colors cursor-pointer group pb-0.5"
            >
              <span>View All Testimonials</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Scrollable Reviews with visible scrollbar / Desktop 3-Column Grid */}
        <div
          className="flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-3 gap-3.5 sm:gap-5 pb-3 md:pb-0 testimonial-scroll snap-x snap-mandatory"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[82vw] max-w-[310px] md:w-auto shrink-0 snap-start bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div>
                {/* 5 Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[10px] font-bold text-slate-400 ml-1">5.0</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-[13px] text-slate-800 font-medium leading-relaxed mb-4">
                  {item.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 truncate flex items-center gap-1">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3 h-3 text-[#00b370] shrink-0" />
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium truncate">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium mt-2">
          <span>← Scroll to see more reviews →</span>
        </div>

      </div>
    </section>
  );
}

