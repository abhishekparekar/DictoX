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
    <section className="py-14 sm:py-16 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d084]">
              What Our Clients Say
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 mt-1">
              Businesses That Grow With Us.
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#00d084] transition-colors"
          >
            <span>View All Testimonials</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Testimonials Layout: Video on Left, 3 Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left: Video Player Card */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 min-h-[260px] group shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
              alt="Client Video Testimonial"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

            {/* Play Button Overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-[#00f59b] text-slate-950 flex items-center justify-center shadow-lg hover:brightness-110">
                <Play className="w-5 h-5 fill-slate-950 translate-x-0.5" />
              </div>
            </button>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-ping" />
                Play Client Video
              </span>
              <span className="text-[10px] text-slate-300 font-mono bg-black/40 px-2 py-0.5 rounded">
                1:45
              </span>
            </div>
          </div>

          {/* Right: 3 Client Quote Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:bg-white hover:border-[#00d084]/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-4">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/70">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
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
