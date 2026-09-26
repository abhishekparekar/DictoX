import React from 'react';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, TrendingUp, Sparkles, Quote } from 'lucide-react';

export default function AboutFounderSection({ onOpenConsultation }) {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F8F7] text-[#0A1714] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Founder Story, Vision & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Leadership & Core Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0A1714] tracking-tight leading-tight">
              We Help Businesses Turn Advertising Into Growth.
            </h2>

            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
              DictoX Marketing is a performance marketing agency helping businesses across India acquire customers through Meta Ads, Google Ads, WhatsApp and marketing automation.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Founder's Mission</span>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed italic">
                “With 5+ years of experience in digital advertising, I founded DictoX Marketing with a simple goal — help businesses use online advertising to generate more customers and grow with a clear, performance-focused approach. Our goal is simple — help businesses get more from every advertising opportunity.”
              </p>
              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-zinc-900 font-display text-base">Suresh More</div>
                  <div className="text-xs text-zinc-500 font-medium">Founder & Performance Marketing Strategist</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold font-display text-sm">
                  SM
                </div>
              </div>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm text-center">
                <div className="text-2xl font-bold font-display text-emerald-700">5+ Years</div>
                <div className="text-xs text-zinc-600 mt-1">Dedicated Ad Expertise</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm text-center">
                <div className="text-2xl font-bold font-display text-emerald-700">500+</div>
                <div className="text-xs text-zinc-600 mt-1">Brands Transformed</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm text-center">
                <div className="text-2xl font-bold font-display text-emerald-700">₹10+ Cr</div>
                <div className="text-xs text-zinc-600 mt-1">Profitable Ad Spend</div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-brand-dark hover:bg-brand-surface border border-zinc-800 transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                <span>Schedule 1-on-1 Call With Suresh</span>
                <ArrowRight className="w-4 h-4 text-brand-emerald" />
              </button>
            </div>
          </div>

          {/* Right Column: Founder Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 text-white border border-brand-border shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />

                {/* Profile Badge Area */}
                <div className="flex items-center gap-4 pb-6 border-b border-brand-border/60">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-emerald to-brand-deepEmerald p-0.5 shadow-glow-sm">
                    <div className="w-full h-full bg-brand-surface rounded-[14px] flex items-center justify-center text-3xl font-display font-extrabold text-brand-emerald">
                      SM
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">
                      Suresh More
                    </h3>
                    <p className="text-xs text-brand-emerald font-mono font-medium">
                      Founder & Head of Strategy
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      DictoX Marketing • Pune, India
                    </p>
                  </div>
                </div>

                {/* Founder Statement Card */}
                <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <p>
                    "We don't hand your ad budget to junior account executives. Every campaign structure, audience test, and creative hook is designed under my direct supervision."
                  </p>
                  <p className="text-zinc-400 text-xs">
                    Specialized in scaling high-ticket real estate projects, healthcare clinics, educational cohorts, and franchised retail across Maharashtra and Tier-1 Indian markets.
                  </p>
                </div>

                {/* Direct Proof Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-brand-border/60">
                  <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                    <span>Meta Certified Media Buying Professional</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                    <span>Google Ads Search & Performance Max Certified</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                    <span>WhatsApp Business Automation Specialist</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+917796407424"
                    className="btn-secondary w-full text-xs font-semibold !py-3 flex items-center justify-center gap-2"
                  >
                    <span>Direct Call: +91 7796407424</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
