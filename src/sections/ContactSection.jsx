import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Office+No.+603+Navale+Icon+Narhe+Pune+Maharashtra+411041';

  const openGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-7 sm:py-9 lg:py-10 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Main 3-Part Grid matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          
          {/* Left Column: Heading & Contact Info (approx 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                CONTACT US
              </span>
              <h2 className="text-xl sm:text-2xl md:text-[1.65rem] font-bold font-display tracking-tight text-slate-900 leading-tight">
                Let's Talk About Your Business.
              </h2>
            </div>

            <div className="space-y-2.5 pt-1 text-xs sm:text-[13px]">
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-900">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="font-semibold text-slate-900">
                  <a href="tel:+917796407424" className="hover:text-[#00a868] transition-colors">
                    7796407424
                  </a>
                  <span className="mx-1 text-slate-400">/</span>
                  <a href="tel:+919834036821" className="hover:text-[#00a868] transition-colors">
                    9834036821
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-900">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href="mailto:dictoxmarketing@gmail.com"
                  className="font-medium text-slate-800 hover:text-[#00a868] transition-colors truncate"
                >
                  dictoxmarketing@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-900 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-slate-600 leading-relaxed font-normal text-xs sm:text-[12.5px]">
                  Office No. 603, 6th Floor, Navale Icon,<br />
                  Bengaluru - Mumbai Hwy, Near Navale Bridge,<br />
                  Wadgaon Budruk, Narhe, Pune, Maharashtra 411041
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2.5 pt-0.5">
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-900">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-600 font-medium text-xs">
                  Mon – Sat, 10:00 AM – 7:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Map Card (approx 5 cols) */}
          <div className="lg:col-span-5">
            <div 
              onClick={openGoogleMaps}
              className="h-44 sm:h-48 lg:h-44 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 relative cursor-pointer group shadow-sm bg-[#f2f4f7] transition-all hover:shadow-md"
              title="Click to open Google Maps directions"
            >
              {/* Map Illustration Vector */}
              <div className="absolute inset-0 bg-[#eef1f4]">
                <svg className="w-full h-full opacity-80" viewBox="0 0 400 220" fill="none">
                  {/* Background Land */}
                  <rect width="400" height="220" fill="#E8EDF2" />
                  
                  {/* Secondary Streets */}
                  <path d="M-20 80 Q 200 110 420 70" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
                  <path d="M-20 160 Q 180 140 420 180" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
                  <path d="M120 -20 L 160 240" stroke="#FFFFFF" strokeWidth="14" />
                  <path d="M280 -20 L 250 240" stroke="#FFFFFF" strokeWidth="10" />

                  {/* Highway Arterial (Bengaluru - Mumbai Hwy) */}
                  <path d="M-10 190 Q 200 90 420 30" stroke="#FDE68A" strokeWidth="10" strokeLinecap="round" />
                  <path d="M-10 190 Q 200 90 420 30" stroke="#F59E0B" strokeWidth="2" strokeDasharray="6 6" />

                  {/* Water Body / Landscape shape */}
                  <path d="M30 20 Q 90 10 100 45 Q 80 80 40 70 Z" fill="#D1E8FF" opacity="0.6" />
                </svg>
              </div>

              {/* Pin Callout Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-105 transition-transform duration-200">
                <div className="px-2.5 py-1 rounded-md bg-white shadow-lg border border-slate-200/80 text-[10px] sm:text-[11px] font-bold text-slate-900 whitespace-nowrap flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>DictoX Marketing</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#EA4335] text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
              </div>

              {/* Subtle Map Open Notice */}
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs text-[9px] font-semibold text-slate-600 shadow-2xs">
                Open in Maps ↗
              </div>
            </div>
          </div>

          {/* Right Column: Follow Us & Get Directions (approx 2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start justify-center gap-3 text-center lg:text-left pt-2 lg:pt-0">
            <div>
              <span className="text-xs sm:text-sm font-bold text-slate-900 block mb-2">
                Follow Us
              </span>
              
              {/* 4 Social Icons */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <a
                  href="https://www.instagram.com/dictoxmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xs hover:scale-110 transition-transform"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.facebook.com/dictoxmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shadow-xs hover:scale-110 transition-transform"
                >
                  <Facebook className="w-4 h-4 fill-white" />
                </a>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-[#FF0000] text-white flex items-center justify-center shadow-xs hover:scale-110 transition-transform"
                >
                  <Youtube className="w-4 h-4 fill-white" />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center shadow-xs hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-4 h-4 fill-white" />
                </a>
              </div>
            </div>

            {/* Get Directions Button matching screenshot */}
            <button
              onClick={openGoogleMaps}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 active:scale-98 transition-all cursor-pointer shadow-md mt-1 shrink-0"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
