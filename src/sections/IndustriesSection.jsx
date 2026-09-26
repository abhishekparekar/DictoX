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
    { title: 'Salons & Local Services', icon: Sparkles },
    { title: 'Automobile', icon: Car },
    { title: 'Franchise & Dealerships', icon: Store },
    { title: 'E-commerce', icon: ShoppingCart },
    { title: 'Professional Services', icon: Briefcase },
  ];

  return (
    <section id="industries" className="py-6 sm:py-10 md:py-14 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            INDUSTRIES WE WORK WITH
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight text-slate-900">
            Helping Businesses Across Every Industry.
          </h2>
        </div>

        {/* Mobile View: Compact 2-column horizontal pill buttons (no wasted space) */}
        <div className="grid grid-cols-2 sm:hidden gap-2">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                onClick={onOpenConsultation}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50/80 border border-slate-200/80 text-left hover:border-[#00b370] transition-colors cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-800 leading-snug line-clamp-1">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tablet & Desktop View: Clean Minimalist 10-item Strip matching Screenshot 2 */}
        <div className="hidden sm:grid sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-3">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                onClick={onOpenConsultation}
                className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-center cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-[#00f59b]/15 text-[#00b370] flex items-center justify-center transition-colors mb-1.5">
                  <Icon className="w-4 h-4" />
                </div>
                
                <span className="text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight group-hover:text-slate-950">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

