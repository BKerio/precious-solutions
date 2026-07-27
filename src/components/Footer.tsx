import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { navigate } from '@/hooks/useRoute';

const exploreLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
];

const serviceLinks = [
  'Procurement & Supply Solutions',
  'Professional Training & Capacity Building',
  'Installation & Technical Support',
  'Consultancy & Business Solutions',
  'Maintenance & Managed Support',
];

function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="bg-[#0f1111] text-white border-t border-white/5">

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col items-start">
            {/* Text logo - no image */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="mb-6 inline-block font-signature text-4xl text-white/90 hover:text-white transition-colors duration-300"
            >
              Precious Solutions
            </a>

            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-sm">
              A premier multi-disciplinary consultancy, procurement, and technical
              services firm headquartered in Nairobi, Kenya - delivering integrated
              solutions across East Africa.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Twitter, label: 'Twitter / X', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.18em] font-bold text-white/60 mb-6">
              Explore
            </h4>
            <ul className="space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={11}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white/70"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.18em] font-bold text-white/60 mb-6">
              Our Services
            </h4>
            <ul className="space-y-3.5">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <a
                    href="/services"
                    onClick={(e) => handleLinkClick(e, '/services')}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={11}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white/70"
                    />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.18em] font-bold text-white/60 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-white/50 mt-0.5 shrink-0" />
                <span className="text-sm text-white/55 leading-relaxed">
                  Nairobi, Kenya
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={15} className="text-white/50 shrink-0" />
                <a
                  href="tel:+254717662503"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  +254 717 662503
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={15} className="text-white/50 shrink-0 mt-0.5" />
                <a
                  href="mailto:info@precioussolution.co.ke"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-300 break-all"
                >
                  info@precioussolution.co.ke
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────── */}
      <div className="border-t border-white/5 py-7">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} Precious Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms of Use', href: '/terms' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs text-white/35 hover:text-white/70 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;