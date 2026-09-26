import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export default function ContactSection({ onOpenConsultation }) {
  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Navale+Icon+Narhe+Pune+Maharashtra', '_blank');
  };

  return (
    <section id="contact" className="py-10 sm:py-14 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            CONTACT US
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900">
            Let's Talk About Your Business.
          </h2>
        </div>

        {/* 2-Part Grid: Left Details + Right Map & Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Contact Info (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Phone */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                <a href="tel:+917796407424" className="hover:text-[#00b370] transition-colors">7796407424</a> / <a href="tel:+919834036821" className="hover:text-[#00b370] transition-colors">9834036821</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                <a href="mailto:dictoxmarketing@gmail.com" className="hover:text-[#00b370] transition-colors">
                  dictoxmarketing@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                Office No. 603, 6th Floor, Navale Icon,<br />
                Bengaluru - Mumbai Hwy, Near Navale Bridge,<br />
                Wadgaon Budruk, Narhe, Pune, Maharashtra 411041
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800">
                Mon – Sat, 10:00 AM – 7:00 PM
              </div>
            </div>

          </div>

          {/* Right: Map Preview + Follow Us + Get Directions (6 cols) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-5 items-stretch">
            
            {/* Map Preview */}
            <div 
              onClick={openGoogleMaps}
              className="flex-1 min-h-[200px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative cursor-pointer group shadow-xs"
            >
              <div className="absolute inset-0 bg-[#e8ecef] flex items-center justify-center">
                <svg className="w-full h-full opacity-60" viewBox="0 0 300 200" fill="none">
                  <rect width="300" height="200" fill="#E8ECEF"/>
                  <path d="M-10 60 Q 150 90 320 50" stroke="#CBD5E1" strokeWidth="12"/>
                  <path d="M60 -10 Q 90 120 120 220" stroke="#CBD5E1" strokeWidth="10"/>
                  <path d="M-10 140 Q 160 120 320 160" stroke="#FFFFFF" strokeWidth="10"/>
                </svg>
              </div>

              {/* Pin Callout */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="px-2.5 py-1 rounded-full bg-white shadow-md border border-slate-200 text-[10px] font-bold text-slate-900 whitespace-nowrap flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  DictoX Marketing
                </div>
                <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg -mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Socials & Get Directions Button */}
            <div className="flex flex-col justify-between sm:w-48 gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-bold text-slate-900 block mb-2">
                  Follow Us
                </span>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-pink-500 text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center shadow-xs hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <button
                onClick={openGoogleMaps}
                className="w-full py-3 px-4 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

