import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="bg-[#F5F7F7] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <div className="mb-14">
          <span className="section-label">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-medium text-primary leading-tight">
            Request a <span className="italic font-light">quote</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* ── Left: Quote form (mirrors ContactPage style) ─────── */}
          <div className="lg:col-span-5 bg-white p-8 md:p-12 rounded-[4px] shadow-sm border border-teal-50">
            <span className="section-label">Quick Inquiry</span>
            <h3 className="text-2xl md:text-3xl font-medium text-primary mb-3">
              Send Us a Message
            </h3>
            <p className="text-slate-text text-sm leading-relaxed mb-8 max-w-sm">
              Tell us what you need - items, quantities, and timeline - and we'll
              come back with pricing, lead times, and delivery options.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-[#184341]/10 border border-[#184341]/20 rounded-[4px] text-sm text-primary font-medium">
                ✓ Thank you! Your inquiry has been received. We will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                  placeholder="+254 700 000 000"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                  Message / Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors resize-none"
                  placeholder="Describe your requirements..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 border-none"
              >
                Send Message
                <Send size={13} />
              </button>
            </form>
          </div>

          {/* ── Right: Contact details + Google Map ──────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Contact detail cards */}
            <div className="bg-white p-8 rounded-[4px] shadow-sm border border-teal-50">
              <span className="section-label">Our Office</span>
              <div className="grid sm:grid-cols-3 gap-6 mt-4">

                {/* Phone */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#184341]/5 flex items-center justify-center text-[#184341] shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-text/70 mb-1">Call Us</span>
                    <a href="tel:+254717662503" className="text-sm font-bold text-primary hover:underline">
                      +254 717 662503
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#184341]/5 flex items-center justify-center text-[#184341] shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-text/70 mb-1">Email Us</span>
                    <a href="mailto:info@precioussolution.co.ke" className="text-sm font-bold text-primary hover:underline break-all">
                      info@precioussolution.co.ke
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#184341]/5 flex items-center justify-center text-[#184341] shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-text/70 mb-1">Location</span>
                    <a
                      href="https://www.google.com/maps?q=Kiambere+Road,+Upperhill,+Manga+Hse,+Ground+Floor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-primary hover:underline leading-snug"
                    >
                      Manga Hse, Kiambere Rd,<br />Upperhill, Nairobi
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps - pinned precisely on Manga House, Kiambere Rd, Upperhill */}
            <div className="rounded-[4px] overflow-hidden shadow-sm border border-teal-50 h-[380px]">
              <iframe
                title="Precious Solutions - Manga House, Kiambere Road, Upperhill, Nairobi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8093689774757!2d36.81176087589041!3d-1.2979822986870115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22b54a691%3A0x61f16c2f39eec58a!2sManga%20House%2C%20Kiambere%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1722000000000!5m2!1sen!2ske"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CTASection;
