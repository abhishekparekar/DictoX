import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Quick Connect */}
      <a
        href="https://wa.me/917796407424?text=Hi%20Suresh,%20I%20visited%20the%20DictoX%20Marketing%20website%20and%20would%20like%20to%20discuss%20customer%20acquisition%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 p-3.5 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp with DictoX Founder"
      >
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-brand-dark/95 border border-brand-border text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
          Chat with Suresh More on WhatsApp
        </span>
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

      {/* Back to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-brand-surface border border-brand-border text-zinc-300 hover:text-brand-emerald hover:border-brand-emerald rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
