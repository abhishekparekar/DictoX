import React, { useState } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Instagram, Facebook, Shield, Award } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Results & Case Studies', href: '#results' },
    { name: 'Industries We Serve', href: '#industries' },
    { name: 'About Founder', href: '#about' },
    { name: 'Meta Ads Course', href: '#course' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const services = [
    { name: 'Meta Ads (Facebook & Instagram)', href: '#services' },
    { name: 'Google Search & PMax Ads', href: '#services' },
    { name: 'YouTube Video Discovery Ads', href: '#services' },
    { name: 'WhatsApp Business API Funnels', href: '#services' },
    { name: 'Marketing Automation & CRM Sync', href: '#services' },
  ];

  return (
    <footer className="bg-[#040d0b] border-t border-brand-border/60 text-zinc-400 text-sm relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-emerald/5 blur-3xl pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-brand-border/50">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-emerald to-brand-deepEmerald p-0.5 shadow-glow-sm">
                <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-xl text-white">
                    D<span className="text-brand-emerald">X</span>
                  </span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight flex items-center gap-1">
                  Dicto<span className="text-brand-emerald">X</span> Marketing
                </span>
                <p className="text-[11px] text-zinc-400">
                  Performance Marketing & Customer Acquisition
                </p>
              </div>
            </a>

            <p className="text-zinc-300 text-sm leading-relaxed max-w-md">
              A dedicated team of performance marketing specialists helping businesses across India generate measurable sales opportunities and acquire profitable customers through online advertising.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/dictoxmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-zinc-300 hover:text-brand-emerald hover:border-brand-emerald/50 transition-colors"
                aria-label="DictoX Marketing Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/dictoxmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-zinc-300 hover:text-brand-emerald hover:border-brand-emerald/50 transition-colors"
                aria-label="DictoX Marketing Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-xs text-zinc-400 pl-2 border-l border-zinc-700">
                Official Agency Channels
              </span>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-surface/70 border border-brand-border text-xs text-zinc-300">
                <Award className="w-3.5 h-3.5 text-brand-emerald" />
                <span>Certified Meta & Google Partner Agency</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-300 hover:text-brand-emerald transition-colors text-sm flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Growth Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-zinc-300 hover:text-brand-emerald transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Pune Headquarters
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                <span>
                  Office No. 603, 6th Floor, Navale Icon, Bengaluru - Mumbai Hwy, Near Navale Bridge, Wadgaon Budruk, Narhe, Pune, MH 411041.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917796407424" className="hover:text-brand-emerald text-white font-medium">
                    +91 7796407424
                  </a>
                  <a href="tel:+919834036821" className="hover:text-brand-emerald text-zinc-400">
                    +91 9834036821
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <a href="mailto:dictoxmarketing@gmail.com" className="hover:text-brand-emerald">
                  dictoxmarketing@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© 2026 DictoX Marketing. All rights reserved.</span>
            <span>•</span>
            <span>Founded by Suresh More</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={onOpenConsultation}
              className="text-brand-emerald hover:underline font-semibold"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-brand-surface border border-brand-border rounded-2xl max-w-lg w-full p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <h3 className="font-display font-bold text-lg text-white">
                {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="text-zinc-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>
            <div className="text-xs text-zinc-300 space-y-3 leading-relaxed">
              {activeLegalModal === 'privacy' ? (
                <>
                  <p>
                    DictoX Marketing respects your privacy. We collect client contact details (name, phone, business email, monthly advertising budget) exclusively to provide customized strategy audits and execute agreed performance marketing campaigns.
                  </p>
                  <p>
                    We never sell, rent, or trade client lead information to third parties. All lead data generated via client ad campaigns belongs entirely to the client.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Services provided by DictoX Marketing are subject to professional client agreements. Advertising budgets are paid directly to ad platforms (Meta, Google) by the client.
                  </p>
                  <p>
                    All campaign results quoted are derived from verified past performance. Individual business returns vary depending on unit economics, sales response times, product-market fit, and sales team execution.
                  </p>
                </>
              )}
            </div>
            <button
              onClick={() => setActiveLegalModal(null)}
              className="btn-secondary w-full text-xs font-semibold !py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
