import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// Logo image import removed
import { navigate } from '@/hooks/useRoute';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-500 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-2 md:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo - white backdrop over hero so the black-background PNG stays visible */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className={`group flex items-center justify-center relative shrink-0 max-w-[calc(100%-3.5rem)] ${
            !scrolled ? 'rounded-md bg-white px-1.5 py-0.5 shadow-md ring-1 ring-black/5' : ''
          }`}
        >
          <div className={`absolute -inset-3 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-700 opacity-30 ${scrolled ? 'bg-primary' : 'bg-white'}`}></div>
          <span className="relative z-10 font-signature text-5xl text-primary">Precious Solutions</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link text-[12px] tracking-[0.12em] uppercase font-semibold transition-colors duration-300 ${
                scrolled ? 'text-primary hover:text-primary/70' : 'text-white hover:text-white/70'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, '/contact')}
            className={`text-[12px] tracking-[0.1em] uppercase font-semibold px-6 py-3.5 border rounded-[4px] transition-all duration-300 ${
              scrolled
                ? 'border-primary text-primary hover:bg-primary hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-primary'
            }`}
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-teal-100 px-6 py-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] tracking-[0.1em] uppercase font-semibold text-primary py-2.5 border-b border-teal-50 hover:text-primary/70 transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-2 text-center text-[12px] tracking-[0.1em] uppercase font-semibold px-6 py-3.5 bg-primary text-white rounded-[4px] hover:bg-primary/95 transition-all"
              onClick={(e) => handleNavClick(e, '/contact')}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
