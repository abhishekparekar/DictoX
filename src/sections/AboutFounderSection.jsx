import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

export default function AboutFounderSection({ onOpenConsultation }) {
  return (
    <section id="about" className="py-20 md:py-24 lg:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Agency Story & CTA */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00d084]">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              We Help Businesses Turn Advertising Into Growth.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              DictoX Marketing is a performance marketing agency helping businesses across India acquire customers through Meta Ads, Google Ads, WhatsApp and marketing automation.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our team combines strategy, creative, targeting, technology and continuous optimization to build advertising campaigns focused on generating potential leads and helping businesses grow.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Know More About DictoX</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Column: Founder Photo */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="/images/founder.jpg"
                alt="Suresh More - Founder DictoX"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent text-white text-center">
                <div className="text-sm font-bold font-display">Suresh More</div>
                <div className="text-xs text-[#00f59b] font-medium">Founder & Strategist</div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profile & Bio Card */}
          <div className="lg:col-span-4">
            <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Meet The Founder
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">
                  Suresh More
                </h3>
                <p className="text-xs sm:text-sm text-[#00d084] font-bold">
                  Founder & Performance Marketing Strategist — DictoX Marketing
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                With 5+ years of experience in digital advertising, Suresh More founded DictoX Marketing with a simple goal — help businesses use online advertising to generate more customers and grow with a clear, performance-focused approach.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Today, DictoX works with businesses across different industries, combining advertising strategy, campaign management, creative execution and lead-generation systems under one roof.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <div>
                  <div className="text-sm font-bold font-display text-slate-900">5+ Years</div>
                  <div className="text-[10px] text-slate-500 font-medium">Experience</div>
                </div>
                <div className="border-x border-slate-200">
                  <div className="text-sm font-bold font-display text-slate-900">500+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Brands</div>
                </div>
                <div>
                  <div className="text-sm font-bold font-display text-slate-900">₹10+ Cr</div>
                  <div className="text-[10px] text-slate-500 font-medium">Ad Spend</div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative p-4 bg-emerald-50/80 rounded-2xl border border-emerald-100 text-slate-800">
                <Quote className="w-5 h-5 text-[#00d084] opacity-40 absolute -top-2 -left-2" />
                <p className="text-xs sm:text-sm italic leading-relaxed font-medium">
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
