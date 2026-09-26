import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-brand-border/70 bg-brand-surface/40 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Section Heading */}
          <div className="flex items-center gap-3 text-center lg:text-left">
            <Award className="w-5 h-5 text-brand-emerald flex-shrink-0 hidden sm:block" />
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-emerald font-semibold block">
                Official Certifications & Partnerships
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">
                Our Performance Marketing Services Are Certified By
              </h3>
            </div>
          </div>

          {/* Badges / Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {/* Meta Partner */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-brand-dark border border-brand-border/90 shadow-sm hover:border-brand-emerald/40 transition-colors">
              <svg className="w-6 h-6 text-blue-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <div className="text-left">
                <div className="text-xs font-bold text-white tracking-wide">Meta Business Partner</div>
                <div className="text-[10px] text-zinc-400">Certified Media Buying Agency</div>
              </div>
            </div>

            {/* Google Partner */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-brand-dark border border-brand-border/90 shadow-sm hover:border-brand-emerald/40 transition-colors">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white tracking-wide">Google Partner</div>
                <div className="text-[10px] text-zinc-400">Search & Performance Max</div>
              </div>
            </div>

            {/* Direct Verification Badge */}
            <div className="hidden xl:flex items-center gap-2 text-xs text-zinc-400 pl-4 border-l border-brand-border">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
              <span>100% Genuine, Approved Credentials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
