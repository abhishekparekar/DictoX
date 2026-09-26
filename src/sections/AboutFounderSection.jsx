import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutFounderSection({ onOpenConsultation }) {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-16 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Agency Story */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              ABOUT US
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              We Help Businesses Turn Advertising Into Growth.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              DictoX Marketing is a performance marketing agency helping businesses across India acquire customers through Meta Ads, Google Ads, WhatsApp and marketing automation.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:shadow-md transition-all cursor-pointer"
              >
                <span>Know More About DictoX</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Center Column: Founder Cutout/Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-72 md:h-88 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900">
              <img
                src="/images/founder.jpg"
                alt="Suresh More - Founder DictoX"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column: Founder Profile & Bio */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Meet The Founder
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-tight">
                Suresh More
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                Founder & Performance Marketing Strategist
              </p>
            </div>

            {/* Stats Line */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-[13px] font-bold text-slate-800 py-2 border-y border-slate-100">
              <span className="text-[#00b370]">✓</span>
              <span>5+ Years</span>
              <span className="text-slate-300">|</span>
              <span>500+ Brands</span>
              <span className="text-slate-300">|</span>
              <span>₹10+ Crore Ad Spend Managed</span>
            </div>

            {/* Founder Quote */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 italic text-xs sm:text-sm leading-relaxed">
              “Our goal is simple — help businesses get more from every advertising opportunity.”
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

