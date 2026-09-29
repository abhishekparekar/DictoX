import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook, Youtube, Linkedin, MessageSquare } from 'lucide-react';

export default function ContactSection({ onOpenConsultation }) {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Office+No.+603+Navale+Icon+Narhe+Pune+Maharashtra+411041';

  const openGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-6 sm:py-9 md:py-12 relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Compact Floating White Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0011a8] block mb-1">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 leading-tight">
                  Let's Talk About <br />
                  <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                    Your Business.
                  </span>
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Whether you have an existing ad campaign that needs auditing or are launching from scratch, we're here to help.
                </p>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-[#0011a8]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-semibold text-slate-800">
                    <a href="tel:+917796407424" className="hover:text-[#0011a8] transition-colors">
                      +91 7796407424
                    </a>
                    <span className="mx-1 text-slate-300">/</span>
                    <a href="tel:+919834036821" className="hover:text-[#0011a8] transition-colors">
                      +91 9834036821
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-[#0011a8]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a
                    href="mailto:dictoxmarketing@gmail.com"
                    className="font-semibold text-slate-800 hover:text-[#0011a8] transition-colors truncate"
                  >
                    dictoxmarketing@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-[#0011a8] mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-slate-600 leading-relaxed font-normal">
                    Office No. 603, Navale Icon, Narhe, Pune, Maharashtra 411041
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 text-[#00a63e]">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-slate-600 font-normal">
                    Mon - Sat: 9:30 AM - 6:30 PM IST
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-1">
                <a
                  href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20schedule%20a%20strategy%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps & Interactive Card */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Agency Headquarters
                  </div>
                  <button
                    onClick={openGoogleMaps}
                    className="text-xs font-bold text-[#0011a8] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Open in Maps</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Map Preview iframe container */}
                <div className="w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-2xs border border-slate-200 relative bg-slate-200">
                  <iframe
                    title="DictoX Marketing Headquarters Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.582845661649!2d73.8183!3d18.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953da5049db3%3A0xc3952f4a5fef4aa!2sNavale%20Icon!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-0.5">
                  <span className="text-xs text-slate-500 text-center sm:text-left">
                    Visiting us? Feel free to drop in during working hours.
                  </span>
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-4 py-2 rounded-xl font-semibold text-xs shadow-2xs transition-all cursor-pointer whitespace-nowrap text-center"
                  >
                    Request Callback
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
