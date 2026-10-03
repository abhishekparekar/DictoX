import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock,
  Instagram, Facebook, ArrowRight, X, ShieldCheck
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { fetchTenantSettings, DEFAULT_SETTINGS } from '../firebase';

export default function Footer({ onOpenConsultation }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [legalModal, setLegalModal] = useState(null);

  useEffect(() => {
    async function loadSettings() {
      try {
        const liveSettings = await fetchTenantSettings();
        if (liveSettings) setSettings(liveSettings);
      } catch (err) {
        console.warn('Failed to load live footer settings:', err);
      }
    }
    loadSettings();
  }, []);

  const services = [
    { name: 'Meta Ads', path: '/services?service=meta-ads' },
    { name: 'Google & YouTube Ads', path: '/services?service=google-ads' },
    { name: 'WhatsApp API', path: '/services?service=whatsapp-api' },
    { name: 'Marketing Automation', path: '/services?service=automation' },
    { name: 'Personal Branding', path: '/services?service=personal-branding' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Results', path: '/results' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why DictoX?', path: '/why-dictox' },
  ];

  return (
    <footer className="relative bg-[#070b14] text-slate-300 overflow-hidden border-t border-slate-800/90">

      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-24 bg-[radial-gradient(ellipse_at_top,rgba(0,17,168,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* ── Main Footer Grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-10">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 gap-x-5 sm:gap-x-8 lg:gap-x-10 pb-8 sm:pb-10 border-b border-slate-800/80">

          {/* ── Col 1: Brand (full width on mobile, lg:col-span-4) ── */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus:outline-none group">
              <img
                src="/images/logo2_dark.png"
                alt="DictoX Marketing"
                className="footer-logo transition-transform duration-200 group-hover:scale-105"
                onError={(e) => { e.target.src = '/images/logo2.png'; }}
              />
            </Link>

            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-xs">
              Performance Marketing &amp; Customer Acquisition Agency based in Pune. We help businesses across India generate leads through Meta Ads, Google Ads &amp; WhatsApp Automation.
            </p>

            {/* Partner Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                { dot: 'bg-[#0081FB]', label: 'Meta Partner' },
                { dot: 'bg-[#EA4335]', label: 'Google Ads' },
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-700/70 text-[10px] sm:text-[10.5px] font-bold text-slate-300 px-2 py-1 rounded-lg">
                  <span className={`w-1.5 h-1.5 rounded-full ${b.dot} shrink-0`} />
                  {b.label}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-700/70 text-[10px] sm:text-[10.5px] font-bold text-slate-300 px-2 py-1 rounded-lg">
                <WhatsAppIcon className="w-3 h-3 fill-[#00a63e] shrink-0" />
                WhatsApp API
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { href: 'https://www.facebook.com/dictoxmarketing', label: 'Facebook', hoverBg: 'hover:bg-[#1877F2]', Icon: Facebook },
                { href: 'https://www.instagram.com/dictoxmarketing', label: 'Instagram', hoverBg: 'hover:bg-[#E1306C]', Icon: Instagram },
                { href: 'https://wa.me/917796407424', label: 'WhatsApp', hoverBg: 'hover:bg-[#00a63e]', isWA: true },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-8 h-8 rounded-lg bg-slate-900 ${s.hoverBg} text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800`}
                >
                  {s.isWA
                    ? <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    : <s.Icon className="w-3.5 h-3.5" />
                  }
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Services (col-span-1, lg:col-span-3) ── */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h4 className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Services
            </h4>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    to={s.path}
                    className="text-[11.5px] sm:text-xs text-slate-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                  >
                    <ArrowRight className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Quick Links (col-span-1, lg:col-span-2) ── */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {navLinks.map((q) => (
                <li key={q.name}>
                  <Link
                    to={q.path}
                    className="text-[11.5px] sm:text-xs text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {q.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: HQ & Contact (col-span-2, lg:col-span-3) ── */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3 space-y-3">
            <h4 className="text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Pune Headquarters
            </h4>

            <div className="space-y-2.5 text-[11.5px] sm:text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#00a63e] shrink-0 mt-0.5" />
                <span className="leading-snug">Office No. 603, 6th Floor, Navale Icon, Narhe, Pune, Maharashtra 411041</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-x-2 gap-y-0.5 font-medium">
                  <a href="tel:+917796407424" className="hover:text-white transition-colors">+91 7796407424</a>
                  <span className="text-slate-700">/</span>
                  <a href="tel:+919834036821" className="hover:text-white transition-colors">+91 9834036821</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:dictoxmarketing@gmail.com" className="hover:text-white transition-colors break-all">
                  dictoxmarketing@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mon–Sat · 10:00 AM – 7:00 PM</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20schedule%20a%20strategy%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs font-bold shadow-md transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
              <span>Chat With Us On WhatsApp</span>
            </a>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-[10.5px] sm:text-xs text-slate-500">

          <p>© 2026 <span className="text-slate-300 font-semibold">DictoX Marketing</span>. All rights reserved.</p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {[
              { key: 'privacy', label: 'Privacy Policy' },
              { key: 'terms', label: 'Terms & Conditions' },
              { key: 'disclaimer', label: 'Disclaimer' },
            ].map((item, i, arr) => (
              <React.Fragment key={item.key}>
                <button
                  type="button"
                  onClick={() => setLegalModal(item.key)}
                  className="hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-0 p-0"
                >
                  {item.label}
                </button>
                {i < arr.length - 1 && <span className="text-slate-700">·</span>}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* ── Legal Modal ── */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#0c1220] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-300">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00a63e]" />
                <h3 className="text-sm font-bold text-white">
                  {legalModal === 'privacy' && 'Privacy Policy'}
                  {legalModal === 'terms' && 'Terms & Conditions'}
                  {legalModal === 'disclaimer' && 'Performance & Advertising Disclaimer'}
                </h3>
              </div>
              <button type="button" onClick={() => setLegalModal(null)} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer" aria-label="Close">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-3 text-xs sm:text-[13px] text-slate-300 leading-relaxed">
              {legalModal === 'privacy' && (
                <>
                  <p className="font-semibold text-white">Last updated: 2026</p>
                  <p>DictoX Marketing respects your privacy and is dedicated to protecting personal information collected through our website and marketing operations.</p>
                  <h4 className="font-bold text-white pt-1">1. Information We Collect</h4>
                  <p>When you request a strategy consultation, submit forms, or contact us via WhatsApp, we collect business contact details including your name, business name, phone number, email address, and advertising requirements.</p>
                  <h4 className="font-bold text-white pt-1">2. How We Use Information</h4>
                  <p>We use your details strictly to formulate advertising strategies, communicate campaign deliverables, and facilitate customer acquisition workflows. We do not sell your personal information to third parties.</p>
                  <h4 className="font-bold text-white pt-1">3. Platform Compliance</h4>
                  <p>All campaigns managed by DictoX comply with Meta Advertising Policies, Google Ads Policies, and WhatsApp Business API terms.</p>
                  <h4 className="font-bold text-white pt-1">4. Contact</h4>
                  <p>DictoX Marketing, Office No. 603, Navale Icon, Narhe, Pune 411041. Email: dictoxmarketing@gmail.com</p>
                </>
              )}
              {legalModal === 'terms' && (
                <>
                  <p className="font-semibold text-white">Last updated: 2026</p>
                  <p>By engaging DictoX Marketing for digital performance marketing services, you agree to the following terms.</p>
                  <h4 className="font-bold text-white pt-1">1. Scope of Services</h4>
                  <p>DictoX provides performance marketing execution across Meta Ads, Google Ads, YouTube Ads, WhatsApp API integration, and marketing automation systems as defined in the client agreement.</p>
                  <h4 className="font-bold text-white pt-1">2. Ad Spend & Service Fees</h4>
                  <p>Agency retainers and platform advertising budgets are entirely separate. Platform ad spend is paid directly to advertising platforms (Meta, Google) or credited as agreed.</p>
                  <h4 className="font-bold text-white pt-1">3. Client Responsibilities</h4>
                  <p>Clients agree to provide timely asset approvals, prompt sales team lead follow-ups, and necessary dashboard access to maintain optimal campaign ROAS.</p>
                  <h4 className="font-bold text-white pt-1">4. Jurisdiction</h4>
                  <p>Any disputes arising from service agreements are governed exclusively by the courts of Pune, Maharashtra, India.</p>
                </>
              )}
              {legalModal === 'disclaimer' && (
                <>
                  <p className="font-semibold text-white">Performance & Earnings Disclaimer</p>
                  <p>DictoX Marketing is an independent performance marketing agency. Meta (Facebook, Instagram) and Google are registered trademarks of their respective owners. Mention of these platforms does not imply official endorsement beyond certified partner programs.</p>
                  <h4 className="font-bold text-white pt-1">Campaign Outcomes</h4>
                  <p>Case study statistics, ROAS metrics, and lead volumes on this website represent verified past results for specific clients under tailored market conditions. Results vary based on industry competition, pricing, product-market fit, and sales follow-up speed.</p>
                  <p>No marketing agency can guarantee specific conversion rates or revenue outcomes. We guarantee rigorous strategic methodology, proactive optimization, and transparent reporting.</p>
                </>
              )}
            </div>

            <div className="px-5 py-3 border-t border-slate-800 bg-slate-900/60 flex justify-end">
              <button type="button" onClick={() => setLegalModal(null)} className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
