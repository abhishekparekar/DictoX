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
    '500+ SUCCESSFUL CLIENTS',
    'RETENTION & CRO',
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#031e17] via-[#052b21] to-[#031e17] border-y border-[#00f59b]/25 py-3 sm:py-3.5 select-none shadow-[0_4px_25px_rgba(0,245,155,0.08)]">
      {/* Top and Bottom Micro Accent Lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f59b]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f59b]/50 to-transparent" />

      {/* Ambient Glow in center */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-12 bg-[#00f59b]/15 blur-2xl" />

      {/* Continuous Marquee Track */}
      <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 text-white font-extrabold tracking-widest text-[11px] sm:text-xs uppercase">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-6 sm:gap-8 group">
            <span className="text-slate-200 group-hover:text-[#00f59b] transition-colors duration-200">
              {item}
            </span>
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#00f59b] shadow-[0_0_8px_#00f59b]" />
          </div>
        ))}
      </div>
    </div>
  );
}
