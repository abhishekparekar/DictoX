import React, { useState } from 'react';
import { Play, ArrowRight, Star } from 'lucide-react';

export default function TestimonialsSection({ onOpenConsultation }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      name: 'Rohit Patil',
      role: 'Real Estate Developer',
      company: 'Patil Constructions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: 'Got 3x more enquiries in just 1 month. Highly recommended!',
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Salon & Spa Owner',
      company: 'Glow Luxury Salon',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      quote: 'Professional team, clear communication and real results.',
    },
    {
      name: 'Amit Deshmukh',
      role: 'Coaching Institute Director',
      company: 'Apex Science Academy',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote: 'Our admissions increased significantly. Great support and service!',
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00d084]">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
              What Our Clients Say
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-800 hover:text-[#00d084] transition-colors cursor-pointer group"
          >
            <span>View All Testimonials</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Testimonials Layout: Sharp Rectangular Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Video Player Card */}
          <div className="lg:col-span-5 relative rounded-none overflow-hidden bg-slate-900 border-2 border-slate-200 min-h-[320px] sm:min-h-[380px] group shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
              alt="Client Video Testimonial"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Play Button Overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer"
            >
              <div className="w-16 h-16 rounded-none bg-[#00f59b] text-slate-950 flex items-center justify-center shadow-2xl hover:brightness-110">
                <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
              </div>
            </button>

            {/* Bottom Caption */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <span className="text-sm sm:text-base font-bold flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-none bg-[#00f59b] animate-ping" />
                Play Client Video
              </span>
              <span className="text-xs text-slate-300 font-mono bg-black/70 px-3 py-1 rounded-none border border-white/10">
                1:45 Min
              </span>
            </div>
          </div>

          {/* Right: 3 Client Quote Cards (Sharp Rectangles) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border-2 border-slate-200 rounded-none p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:border-slate-900 hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Top border accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#00d084] transition-colors" />

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1.5 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-none object-cover border border-slate-300 shadow-2xs"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
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
