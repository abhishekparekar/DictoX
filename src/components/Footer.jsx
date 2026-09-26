import React from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#03090b] text-slate-400 text-xs sm:text-sm py-16 border-t-2 border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Top 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block focus:outline-none">
              <img
                src="/images/logo1.png"
                alt="DictoX Marketing"
                className="h-11 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Performance Marketing & Customer Acquisition Agency helping ambitious brands across India scale profitably through data-driven campaigns, WhatsApp automation, and high-converting funnels.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00f59b]" />
                <a href="tel:+917796407424" className="hover:text-white transition-colors">7796407424 / 9834036821</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00f59b]" />
                <a href="mailto:dictoxmarketing@gmail.com" className="hover:text-white transition-colors">dictoxmarketing@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#00f59b] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-[#00f59b] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-[#00f59b] transition-colors">Services</a>
              </li>
              <li>
                <a href="#results" onClick={(e) => handleLinkClick(e, '#results')} className="hover:text-[#00f59b] transition-colors">Results</a>
              </li>
              <li>
                <a href="#industries" onClick={(e) => handleLinkClick(e, '#industries')} className="hover:text-[#00f59b] transition-colors">Industries</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#00f59b] transition-colors">About</a>
              </li>
              <li>
                <a href="#course" onClick={(e) => handleLinkClick(e, '#course')} className="hover:text-[#00f59b] transition-colors">Course</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-[#00f59b] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Performance Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#00f59b] pl-2.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#00f59b] text-left transition-colors cursor-pointer">
                  Meta Ads (Facebook & IG)
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#00f59b] text-left transition-colors cursor-pointer">
                  Google & YouTube Ads
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#00f59b] text-left transition-colors cursor-pointer">
                  WhatsApp Business API
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#00f59b] text-left transition-colors cursor-pointer">
                  Automation & CRM Sync
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#00f59b] text-left transition-colors cursor-pointer">
                  Lead Funnel Optimization
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Consultation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#00f59b] pl-2.5">
              Pune Office
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00f59b] shrink-0 mt-0.5" />
                <span>Office No. 603, Navale Icon, Near Navale Bridge, Narhe, Pune 411041</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00f59b] shrink-0" />
                <span>Mon - Sat, 10:00 AM - 7:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-none text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all shadow-md cursor-pointer uppercase tracking-wider"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Rights */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-5 text-slate-400 font-medium">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>

          <div className="text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} DictoX Marketing. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
