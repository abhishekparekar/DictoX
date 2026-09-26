import React from 'react';
import { ArrowRight, TrendingUp, Users, Target, ShieldCheck, Sparkles, CheckCircle2, DollarSign, Activity } from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-dark">
      {/* Background Decorative Glow & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-emerald/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-deepEmerald/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, Actions & Proof */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-surface/90 border border-brand-border text-xs sm:text-sm font-medium text-brand-emerald shadow-inner-glow">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-ping" />
              <span className="font-mono uppercase tracking-wider text-[11px] sm:text-xs">
                Performance Marketing & Customer Acquisition
              </span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-display text-white tracking-tight leading-[1.05]">
              Optimize Your Ads <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald via-brand-mint to-brand-deepEmerald">
                For More Profit.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A dedicated team of performance marketing specialists helping businesses across India generate better results and acquire more customers through online advertising. We don’t stop at clicks or cheap leads — we build predictable customer pipelines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="btn-primary text-sm sm:text-base font-semibold w-full sm:w-auto shadow-glow-md group"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#results"
                className="btn-secondary text-sm sm:text-base font-medium w-full sm:w-auto"
              >
                <span>View Our Results</span>
              </a>
            </div>

            {/* Verified Proof Metrics Bar */}
            <div className="pt-6 border-t border-brand-border/60">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center lg:text-left">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white">
                    5+ <span className="text-brand-emerald text-xl sm:text-2xl">Years</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">
                    Industry Experience
                  </div>
                </div>

                <div className="space-y-1 border-x border-brand-border/50 px-2 sm:px-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white">
                    500+ <span className="text-brand-emerald text-xl sm:text-2xl">Brands</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">
                    Scaled Across India
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white">
                    ₹10+ <span className="text-brand-emerald text-xl sm:text-2xl">Cr</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">
                    Ad Spend Managed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Performance Marketing Dashboard UI / Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow backdrop behind visual */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-emerald/20 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Main Card: Campaign Command Center */}
              <div className="bg-brand-surface/90 border border-brand-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-brand-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-brand-emerald animate-pulse" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                      DictoX Performance Engine
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                    Live Active
                  </span>
                </div>

                {/* Primary Metric Hero Card */}
                <div className="bg-brand-dark/90 rounded-xl p-4 border border-brand-border/70 relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs text-zinc-400 font-medium">Total Qualified Leads</span>
                      <div className="text-3xl sm:text-4xl font-bold font-display text-white mt-1">
                        5,24,980+
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-brand-emerald bg-brand-emerald/10 px-2.5 py-1 rounded-full border border-brand-emerald/20">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>+38.4% MoM</span>
                    </div>
                  </div>

                  {/* Simulated Sparkline Bar Chart */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-end gap-1.5 h-14">
                    {[38, 48, 55, 45, 62, 70, 68, 85, 92, 88, 100].map((val, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-brand-surface border-t border-brand-emerald/40 rounded-t transition-all hover:bg-brand-emerald"
                        style={{ height: `${val}%` }}
                        title={`Week ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
                    <span>Campaign Inception</span>
                    <span className="text-brand-emerald font-semibold">Scaling Phase</span>
                  </div>
                </div>

                {/* Micro Metric Widgets Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-brand-dark/70 rounded-xl p-3.5 border border-brand-border">
                    <span className="text-[11px] text-zinc-400 block">Avg. Cost Per Lead</span>
                    <div className="text-lg font-bold text-white font-display mt-0.5 flex items-baseline gap-1">
                      ₹186 <span className="text-[10px] text-brand-emerald font-sans font-normal">-42% vs Benchmark</span>
                    </div>
                  </div>

                  <div className="bg-brand-dark/70 rounded-xl p-3.5 border border-brand-border">
                    <span className="text-[11px] text-zinc-400 block">WhatsApp Response Speed</span>
                    <div className="text-lg font-bold text-white font-display mt-0.5 flex items-baseline gap-1">
                      &lt; 90 sec <span className="text-[10px] text-brand-emerald font-sans font-normal">Automated</span>
                    </div>
                  </div>
                </div>

                {/* Live Channel Status Pills */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] text-zinc-400 uppercase font-mono tracking-wider">
                    Omni-Channel Acquisition Stack
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Meta Ads (FB/IG)
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-500/10 text-red-300 border border-red-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      Google & YouTube
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      WhatsApp API
                    </span>
                  </div>
                </div>

                {/* Founder Assurance Badge */}
                <div className="p-3 bg-brand-surfaceLight/80 rounded-xl border border-brand-border flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-emerald/20 border border-brand-emerald text-brand-emerald flex items-center justify-center font-bold text-xs font-display">
                      SM
                    </div>
                    <div>
                      <div className="text-white font-semibold leading-tight">Suresh More</div>
                      <div className="text-[11px] text-zinc-400">Founder & Strategist</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-brand-emerald font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Direct Oversight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
