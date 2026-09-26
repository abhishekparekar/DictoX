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
    { title: 'E-commerce', icon: ShoppingCart },
    { title: 'Professional Services', icon: Briefcase },
  ];

  return (
    <section id="industries" className="py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00d084]">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
            Industries We Work With
          </h2>
        </div>

        {/* 10 Industries Grid: Modern Gradient Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10 gap-3.5 sm:gap-4">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                onClick={onOpenConsultation}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 hover:border-[#00d084] hover:shadow-lg transition-all duration-300 group text-center cursor-pointer hover:-translate-y-1 relative"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 group-hover:text-[#00d084] group-hover:border-[#00d084]/40 transition-colors shadow-2xs mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-950 leading-tight">
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
