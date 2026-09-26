import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook } from 'lucide-react';

export default function ContactSection({ onOpenConsultation }) {
  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Navale+Icon+Narhe+Pune+Maharashtra', '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-16 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center sm:text-left mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d084]">
            Contact / Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 mt-1">
            Let’s Talk About Your Business
          </h2>
          <div className="text-xs font-semibold text-slate-500 mt-1">
            DictoX Marketing — Performance Marketing & Customer Acquisition
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Column 1: Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-[#00d084]" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Phone Numbers</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                  <a href="tel:+917796407424" className="hover:text-[#00d084] transition-colors">7796407424</a> / <a href="tel:+919834036821" className="hover:text-[#00d084] transition-colors">9834036821</a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 shrink-0 mt-0.5">
                <Mail className="w-4 h-4 text-[#00d084]" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Email Address</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                  <a href="mailto:dictoxmarketing@gmail.com" className="hover:text-[#00d084] transition-colors">
                    dictoxmarketing@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#00d084]" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Office Address</div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5 font-medium">
                  Office No. 603, 6th Floor, Navale Icon,<br />
                  Bengaluru - Mumbai Hwy, Near Navale Bridge,<br />
                  Wadgaon Budruk, Narhe, Pune, Maharashtra 411041
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-[#00d084]" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Business Hours</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                  Monday to Saturday — 10:00 AM to 7:00 PM
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Stylized Embedded Google Map Card */}
          <div className="lg:col-span-4">
            <div 
              onClick={openGoogleMaps}
              className="relative h-52 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer group bg-slate-100"
              title="Click to open Google Maps"
            >
              {/* Clean Map Graphic */}
              <div className="absolute inset-0 bg-[#e5e9ec] flex items-center justify-center">
                <svg className="w-full h-full opacity-60" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="250" fill="#E8ECEF"/>
                  <path d="M-10 80 Q 150 120 420 70" stroke="#CBD5E1" strokeWidth="14"/>
                  <path d="M80 -10 Q 120 150 160 270" stroke="#CBD5E1" strokeWidth="12"/>
                  <path d="M250 -10 Q 230 140 320 270" stroke="#CBD5E1" strokeWidth="8"/>
                  <path d="M-10 180 Q 200 160 420 210" stroke="#FFFFFF" strokeWidth="10"/>
                  <circle cx="160" cy="120" r="40" fill="#00d084" fillOpacity="0.1"/>
                </svg>
              </div>

              {/* Pin Callout */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-105 transition-transform">
                <div className="px-2.5 py-1 rounded bg-white shadow-md border border-slate-200 text-[10px] font-bold text-slate-900 whitespace-nowrap flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  DictoX Marketing
                </div>
                <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg -mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[10px] font-mono text-slate-700 shadow-xs border border-slate-200">
                Near Navale Bridge, Narhe
              </div>
            </div>
          </div>

          {/* Column 3: Social & Get Directions */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-4">
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-1 text-center lg:text-left">
                Follow DictoX Marketing
              </span>
              <p className="text-[11px] text-slate-500 mb-2.5 text-center lg:text-left">
                Facebook: DictoX Marketing<br />
                Instagram: @dictoxmarketing
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20 hover:bg-[#1877F2] hover:text-white transition-all text-xs font-semibold"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-600 hover:text-white transition-all text-xs font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <button
              onClick={openGoogleMaps}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 transition-all shadow-sm"
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
