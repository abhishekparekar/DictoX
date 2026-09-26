import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Facebook, ArrowUpRight, ShieldCheck, Sparkles, Navigation } from 'lucide-react';

export default function ContactSection({ onOpenConsultation }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    budget: '₹50,000 - ₹1,00,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4532296434407!2d73.8184589758784!3d18.463102182619714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2950549c71e21%3A0xe7bc8cf243388711!2sNavale%20Icon!5e0!3m2!1sen!2sin!4v1711450000000!5m2!1sen!2sin";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Navale+Icon+Narhe+Pune+Maharashtra";

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-surface/40 border-t border-brand-border relative">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-brand-emerald text-xs font-mono uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect Directly With Our Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Let’s Talk About Your Business
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Have questions or want to discuss a customized performance marketing strategy? Reach out through our direct office line, WhatsApp, or drop by our Pune headquarters.
          </p>
        </div>

        {/* Contact Layout: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Detailed Business Cards & Interactive Fast Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-2 card-hover-glow">
                <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Call & WhatsApp
                </h4>
                <div className="space-y-0.5 text-sm font-bold font-display text-white">
                  <div>
                    <a href="tel:+917796407424" className="hover:text-brand-emerald transition-colors">
                      +91 7796407424
                    </a>
                  </div>
                  <div>
                    <a href="tel:+919834036821" className="hover:text-brand-emerald transition-colors">
                      +91 9834036821
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-2 card-hover-glow">
                <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Official Email
                </h4>
                <div className="text-sm font-bold font-display text-white break-all">
                  <a href="mailto:dictoxmarketing@gmail.com" className="hover:text-brand-emerald transition-colors">
                    dictoxmarketing@gmail.com
                  </a>
                </div>
              </div>

              {/* Address Card (Full width on sm) */}
              <div className="sm:col-span-2 p-5 rounded-2xl bg-brand-surface border border-brand-border space-y-2 card-hover-glow">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-brand-emerald hover:underline font-semibold"
                  >
                    <span>Get Directions</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                  Agency Headquarters
                </h4>
                <p className="text-sm text-zinc-200 leading-relaxed font-medium">
                  DictoX Marketing — Office No. 603, 6th Floor, Navale Icon, Bengaluru - Mumbai Hwy, Near Navale Bridge, Wadgaon Budruk, Narhe, Pune, Maharashtra 411041.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>Monday to Saturday — 10:00 AM to 7:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="p-5 rounded-2xl bg-brand-dark border border-brand-border flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Follow Our Agency Updates
                </span>
                <span className="text-sm font-bold text-white font-display">
                  Instagram & Facebook
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/dictoxmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-xs text-zinc-200 hover:text-brand-emerald hover:border-brand-emerald transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@dictoxmarketing</span>
                </a>
                <a
                  href="https://facebook.com/dictoxmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-xs text-zinc-200 hover:text-brand-emerald hover:border-brand-emerald transition-colors flex items-center gap-1.5"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>dictoxmarketing</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Quick Message Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Map Frame Card */}
            <div className="bg-brand-surface rounded-2xl sm:rounded-3xl border border-brand-border overflow-hidden shadow-xl">
              <div className="p-4 sm:p-5 bg-brand-dark/80 border-b border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    Navale Icon, Narhe, Pune
                  </span>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-brand-emerald hover:underline font-mono"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Embed Frame */}
              <div className="relative h-64 sm:h-72 w-full bg-brand-dark">
                <iframe
                  title="DictoX Marketing Office Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.1) invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Direct Booking Action Banner */}
              <div className="p-5 bg-brand-surface flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-border">
                <div className="text-center sm:text-left">
                  <div className="text-sm font-bold text-white font-display">
                    Prefer an in-person meeting in Pune?
                  </div>
                  <div className="text-xs text-zinc-400">
                    Schedule an appointment with founder Suresh More.
                  </div>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="btn-primary text-xs font-semibold !py-2.5 !px-5 whitespace-nowrap"
                >
                  <span>Book Office Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
