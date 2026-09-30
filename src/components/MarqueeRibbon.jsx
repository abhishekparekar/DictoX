import React from 'react';

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
    <div className="relative w-full overflow-hidden bg-[#090d16] border-y border-slate-800/90 py-3 sm:py-3.5 select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(9,13,22,0.18)]">
      {/* Subtle brand ambient glow in ribbon center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,166,62,0.1)_0%,transparent_75%)] pointer-events-none" />

      {/* Continuous Marquee Track */}
      <div className="flex w-max animate-marquee items-center gap-6 sm:gap-9 font-bold tracking-widest text-[11px] sm:text-xs uppercase relative z-10">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-6 sm:gap-9 group cursor-default">
            <span className="text-slate-200 group-hover:text-[#18E6A0] transition-colors duration-200 tracking-wider">
              {item}
            </span>
            <span
              className={`inline-flex items-center justify-center w-1.5 h-1.5 rounded-full ${
                index % 2 === 0
                  ? 'bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]'
                  : 'bg-[#18E6A0] shadow-[0_0_8px_#18E6A0]'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
