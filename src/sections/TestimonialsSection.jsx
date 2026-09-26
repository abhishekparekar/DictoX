import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

export default function TestimonialsSection({ onOpenConsultation }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      name: 'Rohit Patil',
      role: 'Real Estate',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: '“Got 3x more enquiries in just 1 month. Highly recommended!”',
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Salon Owner',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      quote: '“Professional team, clear communication and real results.”',
    },
    {
      name: 'Amit Deshmukh',
      role: 'Coaching Institute',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote: '“Our admissions increased significantly. Great support and service!”',
    },
  ];

  return (
    <section id="testimonials" className="py-10 sm:py-14 md:py-16 bg-[#f8faf9] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              WHAT OUR CLIENTS SAY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              Businesses That Grow With Us.
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00b370] transition-colors cursor-pointer group self-start sm:self-auto pb-1"
          >
            <span>View All Testimonials</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Cards in 1 Row matching Screenshot 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          
          {/* Card 1: Video Testimonial Card */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-md group flex flex-col justify-end p-4 min-h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
              alt="Client Video Testimonial"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative z-10">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f59b] text-slate-950 text-xs font-bold shadow-md hover:bg-[#15f8a3] transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>Play Client Video</span>
              </button>
            </div>
          </div>

          {/* Cards 2, 3, 4: Client Reviews */}
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
            >
              {/* Quote */}
              <p className="text-xs sm:text-[13px] text-slate-800 font-medium leading-relaxed mb-6">
                {item.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
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
    </section>
  );
}

