import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  UtensilsCrossed, 
  Dumbbell, 
  Sparkles, 
  Car, 
  Store, 
  ShoppingCart, 
  Briefcase 
} from 'lucide-react';

export default function IndustriesSection({ onOpenConsultation }) {
  const industries = [
    { title: 'Real Estate', icon: Building2 },
    { title: 'Education & Coaching', icon: GraduationCap },
    { title: 'Healthcare', icon: HeartPulse },
    { title: 'Restaurants & Cafés', icon: UtensilsCrossed },
    { title: 'Gyms & Fitness', icon: Dumbbell },
    { title: 'Salons & Local', icon: Sparkles },
    { title: 'Automobile', icon: Car },
    { title: 'Franchise & Retail', icon: Store },
    { title: 'E-commerce', icon: ShoppingCart },
    { title: 'B2B Services', icon: Briefcase },
  ];

  return (
    <section id="industries" className="py-6 sm:py-9 md:py-12 relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        <div className="mb-5 sm:mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0011a8] block mb-1">
            Industries We Scale
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Specialized Playbooks For{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Every Sector.
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-700 max-w-xl mx-auto font-medium">
            Tailored creative frameworks, messaging funnels, and targeted audience clusters built for your niche.
          </p>
        </div>

        {/* Compact White Card Grid */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-3.5 sm:p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-2.5">
            {industries.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              return (
                <button
                  key={item.title}
                  onClick={onOpenConsultation}
                  className="flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/70 hover:border-blue-300 hover:shadow-xs transition-all text-center cursor-pointer group"
                >
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white shadow-2xs border border-slate-150 flex items-center justify-center transition-colors mb-1.5 ${
                    isEven ? 'text-[#0011a8] group-hover:bg-[#0011a8] group-hover:text-white' : 'text-[#00a63e] group-hover:bg-[#00a63e] group-hover:text-white'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <span className="text-[10.5px] sm:text-xs font-bold text-slate-800 leading-tight group-hover:text-[#0011a8]">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
