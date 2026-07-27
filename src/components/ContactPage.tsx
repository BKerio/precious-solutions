import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp, Send } from 'lucide-react';

const faqs = [
  {
    question: 'What regions does Precious Solutions serve?',
    answer:
      'Headquartered in Nairobi, Kenya, we serve businesses, government institutions, educational organizations, NGOs, and healthcare facilities across East Africa.',
  },
  {
    question: 'What types of organizations do you work with?',
    answer:
      'We partner with a wide range of clients including corporate entities, government agencies, NGOs, schools and universities, hospitals, and SMEs across various sectors.',
  },
  {
    question: 'How quickly can you deliver procurement orders?',
    answer:
      'Delivery timelines depend on the scope and volume of the order. For standard equipment and supplies, we typically complete delivery within 7–14 working days. Specialized or large-volume orders are handled on a project basis with agreed milestones.',
  },
  {
    question: 'Do you offer training at our premises?',
    answer:
      'Yes. Our training programs are fully flexible and can be delivered on-site at your organization, at an external training facility, or in a hybrid format. We customize all content to your team\'s specific needs and industry context.',
  },
  {
    question: 'What is covered under your maintenance SLA contracts?',
    answer:
      'Our SLA contracts cover preventive and corrective maintenance, equipment servicing, system health checks, remote technical support, on-site support, performance monitoring, and regular maintenance reporting.',
  },
];

const serviceOptions = [
  'Procurement & Supply Solutions',
  'Professional Training & Capacity Building',
  'Installation, Commissioning & Technical Support',
  'Consultancy & Business Solutions',
  'Maintenance & Managed Support Services',
  'General Inquiry',
];

function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: serviceOptions[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      service: serviceOptions[0],
      message: '',
    });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-[#F5F7F7] min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative h-[380px] flex items-center justify-center bg-[#184341] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Business meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#184341]/85 to-[#0e2726]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-white/80 mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-light font-serif text-white mb-4">
            Contact <span className="font-semibold italic font-sans text-white/95">Our Team</span>
          </h1>
          <p className="text-white/70 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
            Have a procurement need, training requirement, or technical project? Tell us about it
            and we'll get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── Contact info + Form ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10 -mt-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left - contact details */}
          <div className="lg:col-span-5 bg-white p-8 md:p-12 rounded-[4px] shadow-sm border border-teal-50">
            <span className="section-label">Reach Us</span>
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-8">
              Office Details
            </h2>

            <div className="space-y-8 mb-12">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#184341]/5 flex items-center justify-center text-[#184341] shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-text/70 mb-1">
                    Call Us
                  </span>
                  <a
                    href="tel:+254717662503"
                    className="text-sm font-bold text-primary hover:underline"
                  >
                    +254 717 662503
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#184341]/5 flex items-center justify-center text-[#184341] shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-text/70 mb-1">
                    Email Us
                  </span>
                  <a
                    href="mailto:info@precioussolution.co.ke"
                    className="text-sm font-bold text-primary hover:underline"
                  >
                    info@precioussolution.co.ke
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#184341]/5 flex items-center justify-center text-[#184341] shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-text/70 mb-1">
                    Location
                  </span>
                  <a
                    href="https://www.google.com/maps?q=Kiambere+Road,+Upperhill,+Manga+Hse,+Ground+Floor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-primary hover:underline leading-snug"
                  >
                    Manga Hse, Ground Floor,<br />Kiambere Rd, Upperhill, Nairobi
                  </a>
                </div>
              </div>
            </div>

            {/* Callout */}
            <div className="bg-[#F5F7F7] p-6 rounded-[4px] border-l-4 border-[#184341]">
              <p className="text-xs italic text-slate-text leading-relaxed">
                "Our working culture is rooted in collaboration, transparency, and
                mutual growth. We deliver results that drive your organization forward."
              </p>
            </div>
          </div>

          {/* Right - inquiry form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[4px] shadow-sm border border-teal-50">
            <span className="section-label">Proposal request</span>
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-8">
              Send Inquiry
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-[#184341]/10 border border-[#184341]/20 rounded-[4px] text-sm text-primary font-medium">
                ✓ Thank you! Your inquiry has been received. We will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
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

                {/* Email */}
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

              <div className="grid sm:grid-cols-2 gap-6">
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

                {/* Organization */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors"
                    placeholder="Your organization name"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                  Service Required *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] bg-white transition-colors cursor-pointer"
                >
                  {serviceOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-slate-text/75 font-semibold mb-2">
                  Message / Project Details *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-teal-100 rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-[#184341] transition-colors resize-none"
                  placeholder="Describe your requirements, project scope, or any questions you have..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 border-none"
              >
                Submit Inquiry
                <Send size={13} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ── FAQ Section ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label inline-block">Frequently Asked Questions</span>
            <h2 className="text-3xl md:text-4xl font-medium text-primary">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-teal-50 rounded-[4px] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 bg-[#F5F7F7]/40 hover:bg-[#F5F7F7]/80 text-left transition-colors"
                  >
                    <span className="font-semibold text-primary text-sm md:text-base pr-4">
                      {faq.question}
                    </span>
                    {isOpen
                      ? <ChevronUp size={16} className="text-[#184341] shrink-0" />
                      : <ChevronDown size={16} className="text-slate-text shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-6 bg-white border-t border-teal-50/50 animate-fade-in">
                      <p className="text-slate-text text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;
