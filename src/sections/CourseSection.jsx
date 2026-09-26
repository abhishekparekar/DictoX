import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Play, 
  Settings, 
  Target, 
  UserPlus, 
  Palette, 
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseSection({ onOpenConsultation }) {
  const topics = [
    { title: 'Campaign Setup', icon: Settings },
    { title: 'Audience Targeting', icon: Target },
    { title: 'Lead Generation', icon: UserPlus },
    { title: 'Creative Strategy', icon: Palette },
    { title: 'Campaign Optimization', icon: TrendingUp },
  ];

  const highlights = [
    'Step-by-step training',
    'Live examples',
    'For beginners & business owners',
    'Learn from real campaigns',
  ];

  return (
    <section id="course" className="py-10 sm:py-14 md:py-16 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            META ADS COURSE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900">
            Meta Ads For Business Owners
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Learn How To Generate Customers Using Facebook & Instagram Ads
          </p>
        </div>

        {/* Master Course Showcase Card matching Screenshot 3 */}
        <div className="max-w-6xl mx-auto bg-[#fafcfb] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: 5 Topics in a Clean Column */}
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-2.5">
              {topics.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.title}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 leading-tight">
                      {t.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Center: Video/Phone Mockup with Play Button */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-800 shadow-xl flex flex-col justify-between p-4 group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80"
                  alt="Meta Ads Course Preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-300">
                  <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold">Meta Ads</span>
                  <span>Interactive Video</span>
                </div>

                <div className="relative z-10 self-center my-auto">
                  <div className="w-12 h-12 rounded-full bg-[#00f59b] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-slate-950 translate-x-0.5" />
                  </div>
                </div>

                <div className="relative z-10 text-center">
                  <div className="text-sm font-bold text-white leading-tight">
                    Meta Ads Practical Training
                  </div>
                  <div className="text-[11px] text-[#00f59b] font-medium">
                    For Business Owners
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Highlights Checklist & Explore CTA Button */}
            <div className="md:col-span-4 space-y-5">
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  to="/course"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

