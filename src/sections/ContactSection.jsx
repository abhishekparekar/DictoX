import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  User, 
  Building2, 
  Sparkles,
  ShieldCheck,
  Instagram,
  Facebook
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import AnimatedSection from '../components/AnimatedSection';
import { saveTenantInquiry } from '../firebase';

export default function ContactSection({ onOpenConsultation }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    industry: 'Real Estate',
    service: 'Meta Ads',
    budget: '₹50,000 - ₹1,00,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Office+No.+603+6th+Floor+Navale+Icon+Bengaluru+Mumbai+Hwy+Near+Navale+Bridge+Wadgaon+Budruk+Narhe+Pune+Maharashtra+411041';

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Enter valid 10-digit number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter valid email address';
    }
    if (!formData.businessName.trim()) {
      errs.businessName = 'Business or brand name is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await saveTenantInquiry({
        ...formData,
        source: 'contact_page_form',
      });
      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting inquiry to Firestore:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      industry: 'Real Estate',
      service: 'Meta Ads',
      budget: '₹50,000 - ₹1,00,000',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-18 relative w-full overflow-hidden bg-white border-t border-slate-200/80">
      {/* Subtle top ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/35 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            14. CONTACT / LOCATION
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Let’s Talk About{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Your Business.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-semibold max-w-xl mx-auto leading-relaxed">
            DictoX Marketing — Performance Marketing & Customer Acquisition
          </p>
        </AnimatedSection>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT Column: Consultation Inquiry Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-5 sm:p-7 md:p-8">
              
              <div className="border-b border-slate-200/80 pb-4 mb-5 text-left">
                <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0011a8] block mb-1">
                  FREE STRATEGY INQUIRY
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 leading-tight">
                  Request Your Custom Performance Plan
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and our performance marketing team will get back to you within 2 hours.
                </p>
              </div>

              {isSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#00a63e] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-950">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.name || 'there'}</strong>. Suresh and our performance strategists will review your business requirements and contact you shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 bg-[#0011a8] hover:bg-blue-900 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white outline-none transition-all ${
                          errors.name ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#0011a8]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 7796407424"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white outline-none transition-all ${
                          errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#0011a8]'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@business.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white outline-none transition-all ${
                          errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#0011a8]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Business / Brand Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Realty"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white outline-none transition-all ${
                          errors.businessName ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:border-[#0011a8]'
                        }`}
                      />
                      {errors.businessName && <p className="text-[11px] text-red-500 mt-1">{errors.businessName}</p>}
                    </div>
                  </div>

                  {/* Industry & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Your Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white outline-none focus:border-[#0011a8]"
                      >
                        <option value="Real Estate">Real Estate</option>
                        <option value="Education & EdTech">Education & EdTech</option>
                        <option value="Healthcare & Clinics">Healthcare & Clinics</option>
                        <option value="Restaurants & Cafés">Restaurants & Cafés</option>
                        <option value="Gyms & Fitness">Gyms & Fitness</option>
                        <option value="Salons & Local Services">Salons & Local Services</option>
                        <option value="Automobile & EV">Automobile & EV</option>
                        <option value="Franchise & Dealerships">Franchise & Dealerships</option>
                        <option value="E-commerce & Online Stores">E-commerce & Online Stores</option>
                        <option value="B2B & Professional Services">B2B & Professional Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white outline-none focus:border-[#0011a8]"
                      >
                        <option value="Meta Ads">Meta Ads (Facebook & Instagram)</option>
                        <option value="Google & YouTube Ads">Google & YouTube Ads</option>
                        <option value="WhatsApp API">WhatsApp API Integration</option>
                        <option value="Automation Services">Marketing Automation Services</option>
                        <option value="Personal Branding">Personal Branding</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Brief Description of Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current advertising challenges or monthly lead targets..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white outline-none focus:border-[#0011a8]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Submit Free Consultation Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    Your information is 100% confidential. No spam or unsolicited calls guaranteed.
                  </p>

                </form>
              )}

            </div>
          </div>

          {/* RIGHT Column: Contact Details, Map & Social Channels (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Core Contact Info Card */}
            <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-5 sm:p-6 space-y-4">
              
              <div className="border-b border-slate-200/80 pb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0011a8] block mb-0.5">
                  DIRECT CONTACT
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-950">
                  DictoX Marketing
                </h3>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0011a8] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Office Address</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-snug mt-0.5">
                    Office No. 603, 6th Floor, Navale Icon, Bengaluru - Mumbai Hwy, Near Navale Bridge, Wadgaon Budruk, Narhe, Pune, Maharashtra 411041
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#00a63e] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Phone</div>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5">
                    <a
                      href="tel:+917796407424"
                      className="text-xs sm:text-[13px] font-bold text-slate-950 hover:text-[#0011a8] transition-colors"
                    >
                      7796407424
                    </a>
                    <span className="text-slate-300">/</span>
                    <a
                      href="tel:+919834036821"
                      className="text-xs sm:text-[13px] font-bold text-slate-950 hover:text-[#0011a8] transition-colors"
                    >
                      9834036821
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100 shadow-2xs mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Email</div>
                  <a
                    href="mailto:dictoxmarketing@gmail.com"
                    className="text-xs sm:text-[13px] font-bold text-slate-950 hover:text-[#0011a8] transition-colors block mt-0.5"
                  >
                    dictoxmarketing@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#00a63e] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs mt-0.5">
                  <WhatsAppIcon className="w-4 h-4 fill-[#00a63e]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">WhatsApp</div>
                  <a
                    href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20talk%20about%20advertising%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-[13px] font-bold text-[#00a63e] hover:underline transition-colors block mt-0.5"
                  >
                    Chat With Us On WhatsApp →
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100 shadow-2xs mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Business Hours</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-900 mt-0.5">
                    Monday to Saturday — 10:00 AM to 7:00 PM
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps Embed & Get Directions */}
            <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-4 sm:p-5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-slate-900">
                  Find Us On Google Maps
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0011a8] hover:text-blue-900 transition-colors"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-36 sm:h-44 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="DictoX Marketing Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.582845661649!2d73.8183!3d18.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953da5049db3%3A0xc3952f4a5fef4aa!2sNavale%20Icon!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Follow DictoX Marketing Social Channels */}
            <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-4 sm:p-5">
              <span className="text-xs font-bold text-slate-900 block mb-2.5">
                Follow DictoX Marketing
              </span>

              <div className="grid grid-cols-3 gap-2">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/dictoxmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-all flex flex-col items-center justify-center text-center group shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1877F2] flex items-center justify-center">
                    <Facebook className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[10.5px] font-bold text-slate-900 group-hover:text-[#0011a8] transition-colors truncate block mt-1">
                    Facebook
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/dictoxmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 hover:border-pink-400 hover:bg-pink-50/40 transition-all flex flex-col items-center justify-center text-center group shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-pink-50 text-[#E4405F] flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-[10.5px] font-bold text-slate-900 group-hover:text-[#E4405F] transition-colors truncate block mt-1">
                    Instagram
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917796407424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/40 transition-all flex flex-col items-center justify-center text-center group shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a63e] flex items-center justify-center">
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[10.5px] font-bold text-slate-900 group-hover:text-[#00a63e] transition-colors truncate block mt-1">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
