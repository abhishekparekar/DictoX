import React from 'react';
import { ArrowRight, Quote, ShieldCheck } from 'lucide-react';

export default function AboutFounderSection({ onOpenConsultation }) {
  return (
    <section id="about" className="py-14 sm:py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Agency Story & CTA */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d084]">
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              We Help Businesses Turn Advertising Into Growth.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              DictoX Marketing is a performance marketing agency helping businesses across India acquire customers through Meta Ads, Google Ads, WhatsApp and marketing automation.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our team combines strategy, creative, targeting, technology and continuous optimization to build advertising campaigns focused on generating potential leads and helping businesses grow.
            </p>

            <div className="pt-2">
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
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-56 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
              <img
                src="/images/founder.jpg"
                alt="Suresh More - Founder DictoX"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent text-white text-center">
                <div className="text-xs font-bold font-display">Suresh More</div>
                <div className="text-[10px] text-[#00f59b]">Founder & Strategist</div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profile & Bio Card */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-3.5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Meet The Founder
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900 mt-0.5">
                  Suresh More
                </h3>
                <p className="text-xs text-[#00d084] font-semibold">
                  Founder & Performance Marketing Strategist — DictoX Marketing
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                With 5+ years of experience in digital advertising, Suresh More founded DictoX Marketing with a simple goal — help businesses use online advertising to generate more customers and grow with a clear, performance-focused approach.
              </p>

              <p className="text-xs text-slate-600 leading-relaxed">
                Today, DictoX works with businesses across different industries, combining advertising strategy, campaign management, creative execution and lead-generation systems under one roof.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 py-2 px-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
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
              <div className="relative p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 text-slate-800">
                <Quote className="w-4 h-4 text-[#00d084] opacity-50 absolute -top-1.5 -left-1.5" />
                <p className="text-xs italic leading-relaxed font-medium">
                  “Our goal is simple — help businesses get more from every advertising opportunity.”
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
