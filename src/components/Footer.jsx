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
    <footer className="bg-[#040c0e] text-slate-400 text-xs py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-baseline justify-center md:justify-start">
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Dicto<span className="text-[#00d084]">X</span>
              </span>
              <span className="text-[9px] font-semibold text-slate-500 ml-0.5">®</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#00d084] font-semibold ml-1.5">
                Marketing
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Performance Marketing & Customer Acquisition Agency
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-white transition-colors">Home</a>
              <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white transition-colors">Services</a>
              <a href="#results" onClick={(e) => handleLinkClick(e, '#results')} className="hover:text-white transition-colors">Results</a>
              <a href="#industries" onClick={(e) => handleLinkClick(e, '#industries')} className="hover:text-white transition-colors">Industries</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-white transition-colors">About</a>
              <a href="#course" onClick={(e) => handleLinkClick(e, '#course')} className="hover:text-white transition-colors">Course</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-500">
              <span className="hover:text-slate-400 cursor-pointer" onClick={onOpenConsultation}>Meta Ads</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer" onClick={onOpenConsultation}>Google Ads</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer" onClick={onOpenConsultation}>YouTube Ads</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer" onClick={onOpenConsultation}>WhatsApp API</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer" onClick={onOpenConsultation}>Automation</span>
            </div>
          </div>

          {/* Legal & Copyright */}
          <div className="text-center md:text-right space-y-1">
            <div className="flex items-center justify-center md:justify-end gap-3 text-[11px]">
              <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
            </div>
            <div className="text-[10px] text-slate-500">
              © {new Date().getFullYear()} DictoX Marketing. All rights reserved.
            </div>
          </div>

        </div>

        {/* Small Bottom Line */}
        <div className="pt-4 text-center text-[10px] text-slate-600">
          Designed for maximum ROI, predictable pipelines & ambitious Indian businesses.
        </div>
      </div>
    </footer>
  );
}
