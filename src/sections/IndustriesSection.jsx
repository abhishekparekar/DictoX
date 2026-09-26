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
    <section id="industries" className="py-14 sm:py-18 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            INDUSTRIES WE WORK WITH
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900">
            Helping Businesses Across Every Industry.
          </h2>
        </div>

        {/* 10 Industries in a Clean Minimalist Strip matching Screenshot 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-4">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                onClick={onOpenConsultation}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-center cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-[#00f59b]/15 text-[#00b370] flex items-center justify-center transition-colors mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                
                <span className="text-xs font-semibold text-slate-800 leading-snug group-hover:text-slate-950">
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

