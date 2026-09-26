import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

export default function AboutFounderSection({ onOpenConsultation }) {
  return (
    <section id="about" className="py-14 sm:py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Agency Story & CTA */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d084]">
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              We Help Businesses Turn Advertising Into Growth.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              DictoX Marketing is a performance marketing agency helping businesses across India acquire customers through Meta Ads, Google Ads, WhatsApp, and marketing automation.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all shadow-sm hover:shadow-md"
              >
                <span>Know More About DictoX</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Column: Founder Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
              <img
                src="/images/founder.jpg"
                alt="Suresh More - Founder DictoX"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Founder Profile & Quote Card */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Meet The Founder
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900 mt-0.5">
                  Suresh More
                </h3>
                <p className="text-xs text-[#00d084] font-semibold">
                  Founder & Performance Marketing Strategist
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <div>
                  <div className="text-xs font-bold font-display text-slate-900">5+ Years</div>
                  <div className="text-[9px] text-slate-500">Experience</div>
                </div>
                <div className="border-x border-slate-200">
                  <div className="text-xs font-bold font-display text-slate-900">500+</div>
                  <div className="text-[9px] text-slate-500">Brands</div>
                </div>
                <div>
                  <div className="text-xs font-bold font-display text-slate-900">₹10+ Cr</div>
                  <div className="text-[9px] text-slate-500">Ad Spend</div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100 text-slate-700">
                <Quote className="w-5 h-5 text-[#00d084] opacity-50 absolute -top-2 -left-2" />
                <p className="text-xs italic leading-relaxed text-slate-800">
                  "Our goal is simple — help businesses get more from every advertising opportunity."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
