import React, { useState } from 'react';
import { processSteps } from '../data/process';
import { ArrowRight, CheckCircle2, ChevronRight, Workflow } from 'lucide-react';

export default function ProcessSection({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#F5F8F7] text-[#0A1714] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider font-mono">
            <Workflow className="w-3.5 h-3.5" />
            <span>Proven 6-Step Execution Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0A1714] tracking-tight">
            From Strategy To Customers — We Handle It All.
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            A battle-tested process engineered to eliminate guesswork, test creative angles rapidly, and scale what works profitably.
          </p>
        </div>

        {/* 6 Steps Grid / Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((item, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-brand-dark text-white border-brand-emerald shadow-xl -translate-y-1'
                    : 'bg-white text-zinc-900 border-zinc-200/80 hover:border-emerald-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-200/50">
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'bg-brand-emerald text-brand-dark'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      Step {item.step}
                    </span>
                    <span
                      className={`font-mono text-2xl font-bold ${
                        isSelected ? 'text-brand-emerald' : 'text-zinc-300'
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3
                    className={`text-xl font-bold font-display mt-4 ${
                      isSelected ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div
                    className={`text-xs font-mono mt-0.5 ${
                      isSelected ? 'text-brand-emerald' : 'text-zinc-500'
                    }`}
                  >
                    {item.summary}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mt-3 leading-relaxed ${
                      isSelected ? 'text-zinc-300' : 'text-zinc-600'
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Key Deliverables */}
                  <div
                    className={`mt-5 pt-4 border-t space-y-2 ${
                      isSelected ? 'border-brand-border' : 'border-zinc-100'
                    }`}
                  >
                    {item.deliverables.map((deliv, dIdx) => (
                      <div
                        key={dIdx}
                        className={`flex items-center gap-2 text-xs font-medium ${
                          isSelected ? 'text-zinc-200' : 'text-zinc-700'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 flex-shrink-0 ${
                            isSelected ? 'text-brand-emerald' : 'text-emerald-600'
                          }`}
                        />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-semibold">
                  <span
                    className={
                      isSelected ? 'text-brand-emerald' : 'text-emerald-600'
                    }
                  >
                    Phase {item.step} Protocol
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-brand-emerald translate-x-1'
                        : 'text-zinc-400'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white bg-brand-dark hover:bg-brand-surface border border-zinc-800 transition-all duration-300 shadow-md hover:-translate-y-0.5"
          >
            <span>Start Step 01 With Our Strategists</span>
            <ArrowRight className="w-4 h-4 text-brand-emerald" />
          </button>
        </div>
      </div>
    </section>
  );
}
