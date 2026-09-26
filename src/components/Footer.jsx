import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="bg-[#03090b] text-slate-400 text-xs sm:text-sm py-16 border-t-2 border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Top 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src="/images/logo1.png"
                alt="DictoX Marketing"
                className="h-11 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            
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
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-[#00f59b] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00f59b] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-[#00f59b] transition-colors">Results</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#00f59b] transition-colors">Industries</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00f59b] transition-colors">About Suresh More</Link>
              </li>
              <li>
                <Link to="/course" className="hover:text-[#00f59b] transition-colors">Meta Ads Course</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00f59b] transition-colors">Contact / Location</Link>
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
                <Link to="/services#meta-ads" className="hover:text-[#00f59b] text-left transition-colors">
                  Meta Ads (Facebook & IG)
                </Link>
              </li>
              <li>
                <Link to="/services#google-ads" className="hover:text-[#00f59b] text-left transition-colors">
                  Google & YouTube Ads
                </Link>
              </li>
              <li>
                <Link to="/services#whatsapp-api" className="hover:text-[#00f59b] text-left transition-colors">
                  WhatsApp Business API
                </Link>
              </li>
              <li>
                <Link to="/services#automation" className="hover:text-[#00f59b] text-left transition-colors">
                  Automation & CRM Sync
                </Link>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#00f59b] text-left transition-colors cursor-pointer">
                  Custom Strategy Audit
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
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:shadow-[0_4px_16px_rgba(0,245,155,0.35)] transition-all cursor-pointer uppercase tracking-wider"
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
