import React, { useState } from 'react';
import { Play, ArrowRight, Star, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection({ onOpenConsultation }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      name: 'Rohit Patil',
      role: 'Director, Patil Constructions',
      location: 'Pune, Maharashtra',
      industry: 'Real Estate',
      resultBadge: '180+ Site Visits',
      resultHighlight: '₹18.5 Cr Sales Generated',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: 'DictoX restructured our Meta ads from scratch. Within 45 days, we got over 180 verified site visits for our residential project in Baner. Cost per qualified lead dropped by 42%.',
    },
    {
      name: 'Dr. Priya Patil',
      role: 'Founder & Chief Doctor',
      location: 'Kothrud, Pune',
      industry: 'Healthcare & Dental',
      resultBadge: '3.2x Patient Growth',
      resultHighlight: '140+ Implants Inquiries',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      quote: 'The WhatsApp API automation integration changed our patient response speed. We receive inquiries and instantly follow up within seconds. Highly reliable team.',
    },
    {
      name: 'Amit Deshmukh',
      role: 'Managing Director',
      location: 'Maharashtra',
      industry: 'Education & Coaching',
      resultBadge: '450+ Admissions',
      resultHighlight: '₹4.8L Ad Spend → 450+ Students',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote: 'Suresh More understood our admission cycle perfectly. Google Search Ads + Meta Lead campaigns filled our batch completely 3 weeks ahead of deadline.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00b370]">
              Verified Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
              What Our Clients Say
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 hover:text-[#00b370] transition-colors cursor-pointer group self-start sm:self-auto"
          >
            <span>View All Client Results</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#00b370]" />
          </button>
        </div>

        {/* Testimonials Layout: Balanced Grid (No Stretched Empty Rectangles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left: Video Story Card */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl group aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] flex flex-col justify-between p-6">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
              alt="Client Video Testimonial"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                Video Case Study
              </span>
              <span className="text-xs font-mono text-slate-300 bg-black/60 px-2.5 py-0.5 rounded-full">
                1:45 Min
              </span>
            </div>

            {/* Play Button Overlay */}
            <div className="relative z-10 self-center my-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00f59b] to-[#00d084] text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(0,245,155,0.6)] group-hover:scale-110 transition-transform cursor-pointer"
                aria-label="Play client video testimonial"
              >
                <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10">
              <div className="text-sm sm:text-base font-bold text-white">
                "DictoX transformed our marketing ROI in 60 days."
              </div>
              <div className="text-xs text-[#00f59b] font-medium mt-1">
                Real Estate Client — Pune, Maharashtra
              </div>
            </div>
          </div>

          {/* Right: 3 Client Review Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white via-slate-50/70 to-slate-100/40 border-2 border-slate-200/90 hover:border-[#00b370] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group"
              >
                <div>
                  {/* Top: Stars & Result Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3.5 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold text-[#00b370] bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-md shrink-0">
                      {item.resultBadge}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed mb-5">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium truncate">
                      {item.role}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
