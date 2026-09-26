import React from 'react';
import { problemsData } from '../data/problems';
import { AlertCircle, ArrowRight, UserX, PhoneMissed, TrendingDown, DollarSign, Shuffle } from 'lucide-react';

const icons = [UserX, PhoneMissed, TrendingDown, DollarSign, Shuffle];

export default function ProblemSection({ onOpenConsultation }) {
  return (
    <section className="py-20 md:py-28 bg-[#F5F8F7] text-[#0A1714] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-semibold tracking-wider uppercase font-mono">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Reality of Modern Advertising</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#0A1714]">
            IS YOUR ADVERTISING REALLY WORKING?
          </h2>

          <p className="text-lg sm:text-xl font-medium text-zinc-700">
            Getting Leads Is Not Enough. You Need Customers, Sales & Consistent Growth.
          </p>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            You’re spending money on advertising month after month — but is it actually helping your business scale, or is it merely producing vanity numbers on a spreadsheet?
          </p>
        </div>

        {/* Five Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">
          {problemsData.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={item.number}
                className="group relative bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-emerald transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                    <span className="font-mono text-2xl font-bold text-zinc-300 group-hover:text-brand-emerald transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-brand-emerald/10 group-hover:text-brand-emerald transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-zinc-900 mt-4 group-hover:text-brand-dark transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-red-600/90 group-hover:text-emerald-700 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:bg-brand-emerald" />
                  <span>{item.impact}</span>
                </div>
              </div>
            );
          })}

          {/* Solution Highlight Card as 6th block for clean 3x2 grid */}
          <div className="bg-brand-dark text-white rounded-2xl p-6 sm:p-7 border border-brand-border flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/15 rounded-full blur-2xl pointer-events-none" />
            <div>
              <span className="text-[11px] font-mono tracking-widest text-brand-emerald uppercase font-semibold block">
                The DictoX Standard
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-2 leading-tight">
                Advertising Should Never Stop At Clicks.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed">
                It should help you acquire genuine paying customers, generate qualified sales meetings, and create predictable business revenue.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenConsultation}
                className="btn-primary w-full text-xs sm:text-sm font-semibold !py-3 flex items-center justify-center gap-2"
              >
                <span>Fix Your Ad Pipeline</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* End Statement & CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <div className="text-base sm:text-lg font-bold text-zinc-900 font-display">
              It Should Help You Get Customers, Generate Sales & Grow Your Business.
            </div>
            <div className="text-xs sm:text-sm text-zinc-500">
              Stop settling for low-intent lead sheets. Let's build a profitable customer engine.
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-brand-dark hover:bg-brand-surface border border-zinc-800 transition-all duration-300 shadow-md hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Get A Free Strategy Consultation</span>
            <ArrowRight className="w-4 h-4 text-brand-emerald" />
          </button>
        </div>
      </div>
    </section>
  );
}
