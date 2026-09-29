import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection({ onOpenConsultation }) {
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

  return (
    <section id="testimonials" className="py-6 sm:py-9 md:py-12 relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="text-center mb-5 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0011a8] block mb-1">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Businesses That Grow With{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              DictoX.
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-700 font-medium">
            Real feedback from business owners and founders scaling with DictoX.
          </p>
        </div>

        {/* 3 Review Cards in Compact White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(0,17,168,0.08)] hover:-translate-y-0.5 transition-all duration-300 group ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
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
          ))}
        </div>

      </div>
    </section>
  );
}
