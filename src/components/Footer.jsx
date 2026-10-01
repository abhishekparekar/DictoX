import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  ArrowRight,
  X,
  FileText,
  ShieldCheck
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { fetchTenantSettings, DEFAULT_SETTINGS } from '../firebase';

export default function Footer({ onOpenConsultation }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [darkBgLogo, setDarkBgLogo] = useState(null);
  const [legalModal, setLegalModal] = useState(null);

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

  // Generate crisp white/green transparent logo for dark background
  useEffect(() => {
    const rawLogo = settings?.logoUrl || '/images/logo1.png';
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = rawLogo;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imgData.data;
        for (let i = 0; i < d.length; i += 4) {
          const alpha = d[i + 3];
          if (alpha > 15) {
            const r = d[i];
            const g = d[i + 1];
            const b = d[i + 2];
            const isGreen = g > 105 && g > r * 1.15 && g > b * 1.05;
            if (!isGreen) {
              d[i] = 255;
              d[i + 1] = 255;
              d[i + 2] = 255;
            }
          }
        }
        ctx.putImageData(imgData, 0, 0);
        setDarkBgLogo(canvas.toDataURL('image/png'));
      } catch (err) {
        console.warn('Canvas logo generation fallback:', err);
      }
    };
  }, [settings?.logoUrl]);

  const performanceServices = [
    { name: 'Meta Ads', path: '/services?service=meta-ads' },
    { name: 'Google & YouTube Ads', path: '/services?service=google-ads' },
    { name: 'WhatsApp API', path: '/services?service=whatsapp-api' },
    { name: 'Marketing Automation', path: '/services?service=automation' },
    { name: 'Personal Branding', path: '/services?service=personal-branding' },
  ];

  const quickNavigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Results', path: '/results' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why DictoX?', path: '/#why-dictox' },
    { name: 'About Us', path: '/about' },
    { name: 'Course', path: '/course' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#070b14] text-slate-300 pt-8 sm:pt-14 pb-8 sm:pb-10 border-t border-slate-800/90 overflow-hidden">
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-28 bg-[radial-gradient(ellipse_at_top,rgba(0,17,168,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive Grid: On mobile, Brand is Col 1, Services & Links are side-by-side in Col 2, Pune HQ is Col 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-slate-800/80 text-left">
          
          {/* Column 1: Brand & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <Link to="/" className="inline-block focus:outline-none group">
              <img
                src={darkBgLogo || settings?.logoUrl || '/images/logo1.png'}
                alt="DictoX Marketing"
                className={`h-9 sm:h-12 w-auto max-w-[200px] sm:max-w-[220px] object-contain transition-transform duration-200 group-hover:scale-105 ${
                  !darkBgLogo ? 'filter brightness-0 invert' : ''
                }`}
                onError={(e) => {
                  e.target.src = '/images/logo1.png';
                }}
              />
            </Link>

            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
              Performance Marketing & Customer Acquisition Agency based in Pune, helping businesses across India generate potential leads and reach potential customers through Meta Ads, Google Ads, WhatsApp and automation.
            </p>

            {/* Official Partner Badges */}
            <div className="pt-0.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[10.5px] font-bold text-slate-300">
              <span className="bg-slate-900 border border-slate-700/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0081FB]" />
                Meta Partner
              </span>
              <span className="bg-slate-900 border border-slate-700/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                Google Ads
              </span>
              <span className="bg-slate-900 border border-slate-700/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg flex items-center gap-1.5">
                <WhatsAppIcon className="w-3 h-3 fill-[#00a63e]" />
                WhatsApp API
              </span>
            </div>
          </div>

          {/* Combined Services & Quick Navigation side-by-side on mobile, dedicated columns on desktop (lg:col-span-4) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6">
            {/* Performance Services */}
            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-1.5 sm:pb-2">
                Services
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px] text-slate-400">
                {performanceServices.map((s, idx) => (
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

            {/* Quick Navigation */}
            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-1.5 sm:pb-2">
                Quick Links
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px] text-slate-400">
                {quickNavigation.map((q, idx) => (
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
          </div>

          {/* Column 4: Pune Headquarters & Contacts (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-1.5 sm:pb-2">
              Pune Headquarters
            </h4>
            
            <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00a63e] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Office No. 603, 6th Floor, Navale Icon, Narhe, Pune, Maharashtra 411041
                </span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <div className="flex flex-wrap items-center gap-1.5 font-medium">
                  <a href="tel:+917796407424" className="hover:text-white transition-colors">
                    +91 7796407424
                  </a>
                  <span>/</span>
                  <a href="tel:+919834036821" className="hover:text-white transition-colors">
                    +91 9834036821
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:dictoxmarketing@gmail.com" className="hover:text-white transition-colors truncate">
                  dictoxmarketing@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon–Sat · 10:00 AM to 7:00 PM</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-1">
              <a
                href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20schedule%20a%20strategy%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat With Us On WhatsApp →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Socials & Legal */}
        <div className="pt-5 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left text-xs text-slate-500">
          
          <div>
            © 2026 <span className="text-slate-300 font-semibold">DictoX Marketing</span>. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.facebook.com/dictoxmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-900 hover:bg-[#1877F2] text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/dictoxmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-900 hover:bg-[#E1306C] text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/917796407424"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-900 hover:bg-[#00a63e] text-slate-400 hover:text-white flex items-center justify-center transition-all border border-slate-800"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            </a>
          </div>

          {/* Legal / Policy */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[11px] text-slate-500">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setLegalModal('disclaimer')}
              className="hover:text-slate-300 transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              Disclaimer
            </button>
          </div>

        </div>

      </div>

      {/* Interactive Legal Policy Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#0c1220] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00a63e]" />
                <h3 className="text-base font-bold text-white">
                  {legalModal === 'privacy' && 'Privacy Policy'}
                  {legalModal === 'terms' && 'Terms & Conditions'}
                  {legalModal === 'disclaimer' && 'Performance & Advertising Disclaimer'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {legalModal === 'privacy' && (
                <>
                  <p className="font-semibold text-white">Last updated: 2026</p>
                  <p>
                    DictoX Marketing (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is dedicated to protecting personal information collected through our website and marketing operations.
                  </p>
                  <h4 className="font-bold text-white text-sm pt-2">1. Information We Collect</h4>
                  <p>
                    When you request a strategy consultation, submit forms, or contact us via WhatsApp, we collect business contact details including your name, business name, phone number, email address, website URL, and advertising requirements.
                  </p>
                  <h4 className="font-bold text-white text-sm pt-2">2. How We Use Information</h4>
                  <p>
                    We use your details strictly to formulate advertising strategies, communicate campaign deliverables, provide performance reporting, and facilitate customer acquisition workflows. We do not sell or lease your personal information to third parties.
                  </p>
                  <h4 className="font-bold text-white text-sm pt-2">3. Platform Compliance</h4>
                  <p>
                    All advertising campaigns managed by DictoX comply with Meta Advertising Policies, Google Ads Policies, and WhatsApp Business API terms.
                  </p>
                  <h4 className="font-bold text-white text-sm pt-2">4. Contact & Headquarters</h4>
                  <p>
                    DictoX Marketing, Office No. 603, 6th Floor, Navale Icon, Narhe, Pune, Maharashtra 411041. Email: dictoxmarketing@gmail.com.
                  </p>
                </>
              )}

              {legalModal === 'terms' && (
                <>
                  <p className="font-semibold text-white">Last updated: 2026</p>
                  <p>
                    By engaging DictoX Marketing for digital performance marketing services, you agree to the following terms and operating conditions.
                  </p>
                  <h4 className="font-bold text-white text-sm pt-2">1. Scope of Services</h4>
                  <p>
                    DictoX provides performance marketing execution across Meta Ads, Google Ads, YouTube Ads, WhatsApp API integration, and marketing automation systems as defined in the client campaign agreement.
                  </p>
                  <h4 className="font-bold text-white text-sm pt-2">2. Separation of Ad Spend & Service Fees</h4>
                  <p>
                    DictoX Marketing agency service retainers and platform advertising budgets are entirely separate. Platform ad spend is paid directly to advertising platforms (Meta, Google) or credited as agreed.
                  </p>
                  <h4 className="font-bold text-white text-sm pt-2">3. Client Responsibilities</h4>
                  <p>
                    Clients agree to provide timely asset approvals, prompt sales team lead follow-ups, and necessary dashboard access to maintain optimal campaign ROAS.
                  </p>
                  <h4 className="font-bold text-white text-sm pt-2">4. Jurisdiction</h4>
                  <p>
                    Any disputes arising from service agreements are governed exclusively by the courts of Pune, Maharashtra, India.
                  </p>
                </>
              )}

              {legalModal === 'disclaimer' && (
                <>
                  <p className="font-semibold text-white">Performance & Earnings Disclaimer</p>
                  <p>
                    DictoX Marketing is an independent performance marketing and customer acquisition agency. Meta (Facebook, Instagram) and Google (Google Ads, YouTube) are registered trademarks of their respective owners. Mention of these platforms does not imply official direct endorsement or partnership affiliation beyond certified partner programs.
                  </p>
                  <h4 className="font-bold text-white text-sm pt-2">Campaign Outcomes & Variations</h4>
                  <p>
                    Case study statistics, ROAS metrics, and lead volumes showcased on this website represent verified past campaign results achieved for specific clients under tailored market conditions. Advertising results vary based on industry competition, pricing, product-market fit, location, and speed of client sales follow-up.
                  </p>
                  <p>
                    No marketing agency can guarantee specific conversion rates or revenue outcomes. We guarantee rigorous strategic methodology, proactive optimization, and transparent reporting.
                  </p>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/60 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
