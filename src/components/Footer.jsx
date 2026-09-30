import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { fetchTenantSettings, DEFAULT_SETTINGS } from '../firebase';

export default function Footer({ onOpenConsultation }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  useEffect(() => {
    async function loadSettings() {
      try {
        const liveSettings = await fetchTenantSettings();
        if (liveSettings) {
          setSettings(liveSettings);
        }
      } catch (err) {
        console.warn('Failed to load live footer settings:', err);
      }
    }
    loadSettings();
  }, []);

  const serviceLinks = [
    { name: 'Meta Ads (Facebook & Instagram)', path: '/services#meta-ads' },
    { name: 'Google & YouTube Search Ads', path: '/services#google-ads' },
    { name: 'Official WhatsApp API Solutions', path: '/services#whatsapp-api' },
    { name: 'CRM & Funnel Automation', path: '/services#automation' },
    { name: 'Meta Ads Business Masterclass', path: '/course' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies & Results', path: '/results' },
    { name: 'Industries We Scale', path: '/industries' },
    { name: 'About Suresh More', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#070b14] text-slate-300 pt-12 sm:pt-16 pb-20 sm:pb-12 border-t border-slate-800/90 overflow-hidden">
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-[radial-gradient(ellipse_at_top,rgba(0,17,168,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Positioning (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo in Clean White Badge so colors pop on dark */}
            <Link to="/" className="inline-block bg-white p-2.5 rounded-xl shadow-sm border border-white/20 group">
              <img
                src="/images/logo1.png"
                alt="DictoX Marketing - Performance Marketing Agency"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              {settings.tagline || 'DictoX Marketing is India’s premier performance marketing & customer acquisition agency. We turn online advertising into a predictable, scalable engine of paying customers.'}
            </p>

            {/* Official Partner Badges */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-300">
              <span className="bg-slate-900 border border-slate-700/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0081FB]" />
                Meta Partner
              </span>
              <span className="bg-slate-900 border border-slate-700/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                Google Ads
              </span>
              <span className="bg-slate-900 border border-slate-700/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a63e]" />
                WhatsApp API
              </span>
            </div>
          </div>

          {/* Column 2: Performance Solutions (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Performance Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {serviceLinks.map((s, idx) => (
                <li key={idx}>
                  <Link
                    to={s.path}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {quickLinks.map((q, idx) => (
                <li key={idx}>
                  <Link
                    to={q.path}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {q.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Pune Headquarters
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00a63e] shrink-0 mt-0.5" />
                <span>{settings.address || 'Office No. 603, Navale Icon, Narhe, Pune, MH 411041'}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <a href={`tel:${settings.phone1 || '+917796407424'}`} className="hover:text-white transition-colors">
                  {settings.phone1 || '+91 7796407424'}
                </a>
                {settings.phone2 && (
                  <>
                    <span>/</span>
                    <a href={`tel:${settings.phone2}`} className="hover:text-white transition-colors">
                      {settings.phone2}
                    </a>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${settings.email || 'dictoxmarketing@gmail.com'}`} className="hover:text-white transition-colors truncate">
                  {settings.email || 'dictoxmarketing@gmail.com'}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{settings.hours || 'Mon – Sat: 9:30 AM – 6:30 PM IST'}</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-1.5">
              <a
                href={`https://wa.me/${(settings.whatsapp || '917796407424').replace(/\D/g, '')}?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20schedule%20a%20strategy%20consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Socials & Legal */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">DictoX Marketing</span>. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {settings.instagram && (
              <a
                href={settings.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-[#E1306C] text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
            {settings.facebook && (
              <a
                href={settings.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-[#1877F2] text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            )}
            <a
              href={`https://wa.me/${(settings.whatsapp || '917796407424').replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-[#00a63e] text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Legal / Policy */}
          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Disclaimer</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
