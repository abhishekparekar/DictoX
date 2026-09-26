import React from 'react';

export default function Footer({ onOpenConsultation }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#040c0e] text-slate-400 text-xs sm:text-sm py-12 sm:py-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10 text-center lg:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo1.png"
                alt="DictoX Marketing"
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
              Performance Marketing & Customer Acquisition Agency
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-200">
              <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-[#00f59b] transition-colors">Services</a>
              <span>•</span>
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#00f59b] transition-colors">About</a>
              <span>•</span>
              <a href="#industries" onClick={(e) => handleLinkClick(e, '#industries')} className="hover:text-[#00f59b] transition-colors">Industries</a>
              <span>•</span>
              <a href="#results" onClick={(e) => handleLinkClick(e, '#results')} className="hover:text-[#00f59b] transition-colors">Results</a>
              <span>•</span>
              <a href="#course" onClick={(e) => handleLinkClick(e, '#course')} className="hover:text-[#00f59b] transition-colors">Course</a>
              <span>•</span>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-[#00f59b] transition-colors">Contact</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs text-slate-400">
              <span className="hover:text-slate-200 cursor-pointer" onClick={onOpenConsultation}>Meta Ads</span>
              <span>•</span>
              <span className="hover:text-slate-200 cursor-pointer" onClick={onOpenConsultation}>Google Ads</span>
              <span>•</span>
              <span className="hover:text-slate-200 cursor-pointer" onClick={onOpenConsultation}>YouTube Ads</span>
              <span>•</span>
              <span className="hover:text-slate-200 cursor-pointer" onClick={onOpenConsultation}>WhatsApp API</span>
              <span>•</span>
              <span className="hover:text-slate-200 cursor-pointer" onClick={onOpenConsultation}>Automation</span>
            </div>
          </div>

          {/* Legal & Copyright */}
          <div className="text-center lg:text-right space-y-1.5">
            <div className="flex items-center justify-center lg:justify-end gap-4 text-xs font-medium">
              <a href="#privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-slate-200 transition-colors">Terms & Conditions</a>
            </div>
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} DictoX Marketing. All rights reserved.
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 text-center text-xs text-slate-600">
          Performance Marketing & Customer Acquisition Agency helping ambitious businesses scale profitably across India.
        </div>
      </div>
    </footer>
  );
}
