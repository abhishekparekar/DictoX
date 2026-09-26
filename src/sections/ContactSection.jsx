import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook } from 'lucide-react';

export default function ContactSection({ onOpenConsultation }) {
  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Navale+Icon+Narhe+Pune+Maharashtra', '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00b370]">
            Contact / Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
            Let’s Talk About Your Business
          </h2>
          <div className="text-sm font-semibold text-slate-500 mt-1">
            DictoX Marketing — Performance Marketing & Customer Acquisition
          </div>
        </div>

        {/* 3 Column Grid: Rounded-2xl Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Column 1: Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-white border-2 border-slate-200/90 hover:border-[#00b370] transition-all shadow-xs group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#00b370] shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Phone Numbers</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  <a href="tel:+917796407424" className="hover:text-[#00b370] transition-colors">7796407424</a> / <a href="tel:+919834036821" className="hover:text-[#00b370] transition-colors">9834036821</a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-white border-2 border-slate-200/90 hover:border-[#00b370] transition-all shadow-xs group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#00b370] shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Address</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  <a href="mailto:dictoxmarketing@gmail.com" className="hover:text-[#00b370] transition-colors">
                    dictoxmarketing@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-white border-2 border-slate-200/90 hover:border-[#00b370] transition-all shadow-xs group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#00b370] shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Office Address</div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1 font-medium">
                  Office No. 603, 6th Floor, Navale Icon,<br />
                  Bengaluru - Mumbai Hwy, Near Navale Bridge,<br />
                  Wadgaon Budruk, Narhe, Pune, Maharashtra 411041
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-white border-2 border-slate-200/90 hover:border-[#00b370] transition-all shadow-xs group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#00b370] shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Business Hours</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  Monday to Saturday — 10:00 AM to 7:00 PM
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Stylized Embedded Google Map Card */}
          <div className="lg:col-span-4">
            <div 
              onClick={openGoogleMaps}
              className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-md hover:shadow-xl cursor-pointer group bg-slate-100 transition-all duration-300"
              title="Click to open Google Maps"
            >
              {/* Clean Map Graphic */}
              <div className="absolute inset-0 bg-[#e5e9ec] flex items-center justify-center">
                <svg className="w-full h-full opacity-60" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="250" fill="#E8ECEF"/>
                  <path d="M-10 80 Q 150 120 420 70" stroke="#CBD5E1" strokeWidth="16"/>
                  <path d="M80 -10 Q 120 150 160 270" stroke="#CBD5E1" strokeWidth="14"/>
                  <path d="M250 -10 Q 230 140 320 270" stroke="#CBD5E1" strokeWidth="10"/>
                  <path d="M-10 180 Q 200 160 420 210" stroke="#FFFFFF" strokeWidth="12"/>
                  <circle cx="160" cy="120" r="45" fill="#00d084" fillOpacity="0.12"/>
                </svg>
              </div>

              {/* Pin Callout */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform">
                <div className="px-3.5 py-1.5 rounded-full bg-white shadow-lg border border-slate-200 text-xs font-bold text-slate-900 whitespace-nowrap flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  DictoX Marketing
                </div>
                <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl -mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-sm border border-slate-200">
                Near Navale Bridge, Narhe
              </div>
            </div>
          </div>

          {/* Column 3: Social & Get Directions */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-6">
            <div className="w-full text-center lg:text-left">
              <span className="text-sm font-bold text-slate-900 block mb-1">
                Follow DictoX Marketing
              </span>
              <p className="text-xs text-slate-500 mb-3">
                Facebook: DictoX Marketing<br />
                Instagram: @dictoxmarketing
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/25 hover:bg-[#1877F2] hover:text-white transition-all text-xs sm:text-sm font-bold shadow-2xs"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-50 text-pink-600 border border-pink-200 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all text-xs sm:text-sm font-bold shadow-2xs"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <button
              onClick={openGoogleMaps}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_6px_20px_rgba(0,245,155,0.35)] active:scale-[0.98] transition-all cursor-pointer uppercase tracking-wider"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
