import React, { useState } from 'react';
import { caseStudiesData } from '../data/caseStudies';
import { TrendingUp, ArrowRight, CheckCircle, DollarSign, Calendar, Target, Award, Sparkles } from 'lucide-react';

export default function ResultsSection({ onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalStudy, setActiveModalStudy] = useState(null);

  const categories = [
    { label: 'All Results', value: 'all' },
    { label: 'Real Estate', value: 'real-estate' },
    { label: 'Healthcare & Clinics', value: 'healthcare' },
    { label: 'Education & EdTech', value: 'education' },
    { label: 'Automobile', value: 'automobile' },
  ];

  const filteredStudies = selectedCategory === 'all'
    ? caseStudiesData
    : caseStudiesData.filter((c) => c.category === selectedCategory);

  const featuredStudy = caseStudiesData.find((c) => c.featured) || caseStudiesData[0];

  return (
    <section id="results" className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-emerald/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-brand-border/60">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-brand-emerald text-xs font-mono uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Conversion-Critical Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Real Campaigns. Real Results.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Every metric below represents verified, client-approved performance marketing data. No fake vanity numbers, no generic claims.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenConsultation}
              className="btn-primary text-xs sm:text-sm font-semibold !py-3 !px-6 flex items-center gap-2"
            >
              <span>Get Similar Results For Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-8 pb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition-all ${
                selectedCategory === cat.value
                  ? 'bg-brand-emerald text-brand-dark border-brand-emerald font-semibold shadow-glow-sm'
                  : 'bg-brand-surface/70 text-zinc-300 border-brand-border hover:border-zinc-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Case Study Hero Card */}
        {selectedCategory === 'all' && (
          <div className="bg-brand-surface border-2 border-brand-emerald/60 rounded-3xl p-6 sm:p-10 shadow-glow-md relative overflow-hidden mb-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-brand-emerald text-brand-dark text-xs font-bold font-mono uppercase tracking-wider">
                    Featured Case Study
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-dark border border-brand-border text-zinc-300 text-xs font-mono">
                    {featuredStudy.industry}
                  </span>
                  <span className="text-xs text-zinc-400">
                    Duration: {featuredStudy.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-tight">
                  {featuredStudy.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  <strong className="text-white">Objective:</strong> {featuredStudy.objective}
                </p>

                <div className="bg-brand-dark/90 rounded-2xl p-4 sm:p-5 border border-brand-border space-y-3">
                  <div className="text-xs font-mono text-brand-emerald uppercase font-semibold">
                    Key Business Outcome
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white font-display">
                    {featuredStudy.keyOutcome}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {featuredStudy.strategySummary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredStudy.tags.map((t, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-brand-dark rounded-2xl p-5 border border-brand-border/80 text-center">
                  <span className="text-xs text-zinc-400 block font-mono">Ad Spend</span>
                  <span className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 block">
                    {featuredStudy.adSpend}
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-1 block">Total Platform Budget</span>
                </div>

                <div className="bg-brand-dark rounded-2xl p-5 border border-brand-border/80 text-center">
                  <span className="text-xs text-zinc-400 block font-mono">Leads Generated</span>
                  <span className="text-2xl sm:text-3xl font-bold font-display text-brand-emerald mt-1 block">
                    {featuredStudy.leadsGenerated}
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-1 block">Verified Inquiries</span>
                </div>

                <div className="bg-brand-dark rounded-2xl p-5 border border-brand-border/80 text-center">
                  <span className="text-xs text-zinc-400 block font-mono">Cost Per Lead (CPL)</span>
                  <span className="text-2xl sm:text-3xl font-bold font-display text-brand-mint mt-1 block">
                    {featuredStudy.costPerLead}
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-1 block">Qualified High Ticket</span>
                </div>

                <div className="bg-brand-dark rounded-2xl p-5 border border-brand-emerald/40 text-center">
                  <span className="text-xs text-zinc-400 block font-mono">Total Sales Value</span>
                  <span className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 block">
                    {featuredStudy.highlightMetric}
                  </span>
                  <span className="text-[10px] text-brand-emerald mt-1 block font-semibold">{featuredStudy.highlightLabel}</span>
                </div>

                <div className="col-span-2 pt-2">
                  <button
                    onClick={() => setActiveModalStudy(featuredStudy)}
                    className="btn-primary w-full text-xs sm:text-sm font-semibold !py-3 flex items-center justify-center gap-2"
                  >
                    <span>View Case Study Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Supporting Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-brand-surface/90 border border-brand-border rounded-2xl p-6 sm:p-7 card-hover-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 font-medium">
                    {study.industry}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {study.duration}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold font-display text-white mt-4 leading-snug">
                  {study.title}
                </h4>

                <p className="text-xs text-zinc-300 mt-2 line-clamp-2">
                  {study.objective}
                </p>

                {/* Key Metrics Pill Grid */}
                <div className="mt-5 grid grid-cols-2 gap-2.5 pt-4 border-t border-brand-border/40">
                  <div className="bg-brand-dark/80 p-2.5 rounded-xl border border-brand-border">
                    <span className="text-[10px] text-zinc-400 block font-mono">Ad Spend</span>
                    <span className="text-sm font-bold text-white font-display">{study.adSpend}</span>
                  </div>
                  <div className="bg-brand-dark/80 p-2.5 rounded-xl border border-brand-border">
                    <span className="text-[10px] text-zinc-400 block font-mono">Qualified Leads</span>
                    <span className="text-sm font-bold text-brand-emerald font-display">{study.leadsGenerated}</span>
                  </div>
                  <div className="bg-brand-dark/80 p-2.5 rounded-xl border border-brand-border">
                    <span className="text-[10px] text-zinc-400 block font-mono">Cost Per Lead</span>
                    <span className="text-sm font-bold text-brand-mint font-display">{study.costPerLead}</span>
                  </div>
                  <div className="bg-brand-dark/80 p-2.5 rounded-xl border border-brand-border">
                    <span className="text-[10px] text-zinc-400 block font-mono">Key Milestone</span>
                    <span className="text-sm font-bold text-white font-display truncate">{study.highlightMetric}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-brand-dark/50 rounded-xl border border-brand-border/60 text-xs text-zinc-300">
                  <strong className="text-brand-emerald">Outcome:</strong> {study.keyOutcome}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60">
                <button
                  onClick={() => setActiveModalStudy(study)}
                  className="w-full btn-secondary text-xs font-semibold !py-2.5 flex items-center justify-center gap-1.5 hover:border-brand-emerald hover:text-brand-emerald"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-brand-surface border border-brand-border rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-brand-border pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-brand-emerald tracking-wider font-semibold">
                  {activeModalStudy.industry} Case Study
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  {activeModalStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalStudy(null)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/5"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-brand-dark p-3 rounded-xl border border-brand-border text-center">
                <span className="text-[11px] text-zinc-400 font-mono block">Ad Spend</span>
                <span className="text-base font-bold text-white font-display">{activeModalStudy.adSpend}</span>
              </div>
              <div className="bg-brand-dark p-3 rounded-xl border border-brand-border text-center">
                <span className="text-[11px] text-zinc-400 font-mono block">Leads</span>
                <span className="text-base font-bold text-brand-emerald font-display">{activeModalStudy.leadsGenerated}</span>
              </div>
              <div className="bg-brand-dark p-3 rounded-xl border border-brand-border text-center">
                <span className="text-[11px] text-zinc-400 font-mono block">Cost / Lead</span>
                <span className="text-base font-bold text-brand-mint font-display">{activeModalStudy.costPerLead}</span>
              </div>
              <div className="bg-brand-dark p-3 rounded-xl border border-brand-border text-center">
                <span className="text-[11px] text-zinc-400 font-mono block">Timeline</span>
                <span className="text-base font-bold text-white font-display">{activeModalStudy.duration}</span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-zinc-300">
              <div>
                <strong className="text-white block font-display">Client Challenge & Objective:</strong>
                <p className="mt-1 leading-relaxed">{activeModalStudy.objective}</p>
              </div>
              <div>
                <strong className="text-white block font-display">DictoX Strategy Applied:</strong>
                <p className="mt-1 leading-relaxed">{activeModalStudy.strategySummary}</p>
              </div>
              <div className="p-4 bg-brand-dark rounded-xl border border-brand-emerald/40">
                <strong className="text-brand-emerald block font-display">Final Business Outcome:</strong>
                <p className="mt-1 text-white font-medium">{activeModalStudy.keyOutcome}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setActiveModalStudy(null);
                  onOpenConsultation();
                }}
                className="btn-primary flex-1 text-xs sm:text-sm font-semibold !py-3 text-center justify-center"
              >
                <span>Get A Similar Strategy For Your Business</span>
              </button>
              <button
                onClick={() => setActiveModalStudy(null)}
                className="btn-secondary text-xs sm:text-sm font-medium !py-3"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
