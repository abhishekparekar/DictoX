import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  UtensilsCrossed, 
  Dumbbell, 
  Scissors, 
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
    { title: 'Salons & Local Services', icon: Scissors },
    { title: 'Automobile', icon: Car },
    { title: 'Franchise & Dealerships', icon: Store },
    { title: 'Ecommerce', icon: ShoppingCart },
    { title: 'Professional Services', icon: Briefcase },
  ];

  return (
    <section id="industries" className="py-12 sm:py-14 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d084]">
            Industries We Work With
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 mt-1">
            Helping Businesses Across Every Industry.
          </h2>
        </div>

        {/* 10 Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                onClick={onOpenConsultation}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00d084] hover:shadow-md transition-all duration-200 group text-center"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-[#00d084] group-hover:border-[#00d084]/40 transition-colors shadow-2xs mb-2">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 group-hover:text-slate-950 leading-tight">
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
