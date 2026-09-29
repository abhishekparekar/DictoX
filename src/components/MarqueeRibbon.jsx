import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MarqueeRibbon() {
  const items = [
    'META ADS MASTERY',
    'GOOGLE PERFORMANCE MAX',
    'HIGH ROAS CAMPAIGNS',
    'CREATIVE VIDEO STRATEGY',
    'WHATSAPP AUTOMATION',
    'DATA-DRIVEN SCALING',
    'LEAD GENERATION FUNNELS',
    '250+ SUCCESSFUL CLIENTS',
    'RETENTION & CRO',
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-50/60 via-emerald-50/40 to-blue-50/60 border-y border-blue-150/60 py-2.5 sm:py-3 select-none">
      {/* Continuous Marquee Track */}
      <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 font-bold tracking-widest text-[11px] sm:text-xs uppercase">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-6 sm:gap-8 group">
            <span className="text-slate-800 group-hover:text-[#0011a8] transition-colors duration-200">
              {item}
            </span>
            <span className={`inline-flex items-center justify-center w-1.5 h-1.5 rounded-full ${index % 2 === 0 ? 'bg-[#0011a8]' : 'bg-[#00a63e]'}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
