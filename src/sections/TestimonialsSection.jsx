import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Quote, Star, Play, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, X } from 'lucide-react';

export default function TestimonialsSection({ onOpenConsultation }) {
  const [activeVideoModal, setActiveVideoModal] = useState(false);

  const featured = testimonialsData.find((t) => t.featured);
  const regular = testimonialsData.filter((t) => !t.featured && !t.isVideo);
  const videoItem = testimonialsData.find((t) => t.isVideo);

  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-brand-emerald text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Unfiltered Client Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            What Our Clients Say
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Real feedback from business owners, directors, and entrepreneurs who transformed their advertising into predictable revenue with DictoX.
          </p>
        </div>

        {/* Featured Testimonial Banner */}
        {featured && (
          <div className="mt-14 bg-brand-surface/90 border-2 border-brand-emerald/50 rounded-3xl p-6 sm:p-10 shadow-glow-sm relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-brand-emerald/10 pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-1.5 text-brand-emerald">
                  {[...Array(featured.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-emerald text-brand-emerald" />
                  ))}
                  <span className="text-xs font-mono text-zinc-300 ml-2 font-semibold">
                    Verified Client Review
                  </span>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium italic leading-relaxed">
                  "{featured.quote}"
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <img
                    src={featured.avatar}
                    alt={featured.clientName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-emerald"
                  />
                  <div>
                    <h4 className="font-bold text-white font-display text-base sm:text-lg">
                      {featured.clientName}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      {featured.designation} — <span className="text-brand-emerald">{featured.businessName}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Result Badge */}
              <div className="bg-brand-dark/90 p-5 rounded-2xl border border-brand-border text-center space-y-2 lg:w-72 w-full">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Campaign Key Metric
                </span>
                <div className="text-xl font-bold font-display text-brand-emerald">
                  {featured.metricsBadge}
                </div>
                <div className="text-xs text-zinc-300 font-mono">
                  {featured.serviceUsed}
                </div>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>Verified Audit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Testimonials & Video Review Card Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {regular.map((t) => (
            <div
              key={t.id}
              className="bg-brand-surface/70 border border-brand-border rounded-2xl p-6 flex flex-col justify-between card-hover-glow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-brand-emerald">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-emerald text-brand-emerald" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                    {t.metricsBadge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-brand-border/60 mt-6">
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  className="w-10 h-10 rounded-full object-cover border border-brand-border"
                />
                <div>
                  <h5 className="font-bold text-white text-sm leading-tight">
                    {t.clientName}
                  </h5>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {t.businessName}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Video Testimonial Card */}
          {videoItem && (
            <div
              onClick={() => setActiveVideoModal(true)}
              className="group relative bg-brand-surface/90 border border-brand-border rounded-2xl overflow-hidden cursor-pointer hover:border-brand-emerald transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail with Play Overlay */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={videoItem.videoThumbnail}
                  alt="Video Testimonial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-black/40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-emerald text-brand-dark flex items-center justify-center shadow-glow-md group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 text-white border border-white/20">
                  {videoItem.videoDuration}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-xs text-zinc-300 italic line-clamp-3">
                  {videoItem.quote}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-brand-border/60">
                  <div>
                    <h5 className="text-xs font-bold text-white">
                      {videoItem.clientName}
                    </h5>
                    <p className="text-[10px] text-zinc-400">
                      {videoItem.businessName}
                    </p>
                  </div>
                  <span className="text-[11px] text-brand-emerald font-semibold flex items-center gap-1 group-hover:underline">
                    Watch Review
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal Preview */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-brand-surface border border-brand-border rounded-3xl max-w-xl w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <div>
                <h4 className="font-display font-bold text-lg text-white">
                  Client Video Story: FitPulse Fitness
                </h4>
                <p className="text-xs text-zinc-400">Prashant Mehta, Partner & Co-Founder</p>
              </div>
              <button
                onClick={() => setActiveVideoModal(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center">
              <img
                src={videoItem?.videoThumbnail}
                alt="Video"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/60 space-y-3">
                <div className="w-14 h-14 rounded-full bg-brand-emerald text-brand-dark flex items-center justify-center shadow-glow-md">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 max-w-md">
                  "DictoX didn’t just give us leads; they gave us a live dashboard showing which ad brought paying gym members. We saw our cost per trial drop from ₹850 to ₹290."
                </p>
                <span className="text-[10px] font-mono text-brand-emerald uppercase">
                  Verified Client Recording • Available on Consultation
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveVideoModal(false);
                  onOpenConsultation();
                }}
                className="btn-primary w-full text-xs sm:text-sm font-semibold !py-3 justify-center"
              >
                <span>Book Call To Discuss Similar Scaling</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
