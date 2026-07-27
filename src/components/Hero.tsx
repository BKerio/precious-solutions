import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { navigate } from '@/hooks/useRoute';

const backgroundImages = [
  // African business team in a modern office - Pexels
  "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1800",
  // African professionals in a boardroom - Pexels
  "https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1800",
  // African man working on laptop in office - Pexels
  "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1800",
  // African woman presenting in a meeting - Pexels
  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1800",
  // African tech professionals - Pexels
  "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1800",
];

function Hero() {
  const [offset, setOffset] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        setOffset(window.scrollY * 0.35);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-between bg-primary-dark">
      {/* Background Parallax Image Slideshow */}
      <div
        className="absolute inset-0 overflow-hidden will-change-transform scale-105 duration-100"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {backgroundImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Luxury hospitality setting"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/45 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-20" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 md:px-12 max-w-7xl mx-auto w-full pt-32 pb-20 text-center">
        <div className="w-full flex flex-col items-center">
          {/* Slogan */}
          <h2 className="font-serif italic text-[2rem] leading-[1.15] sm:text-[clamp(1.35rem,5vw,2.5rem)] sm:leading-tight text-gold-400 font-light tracking-[0.04em] sm:tracking-[0.08em] uppercase mb-8 animate-fade-up [animation-delay:100ms] text-center w-full max-w-full px-2">
            <span className="sm:hidden">
              Empowering Progress.
              <br />
              Delivering Excellence.
            </span>
            <span className="hidden sm:inline">Empowering Progress. Delivering Excellence.</span>
          </h2>

          <p className="text-white/80 font-normal text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto animate-fade-up [animation-delay:200ms]">
            Precious Solutions is Kenya's premier corporate consultancy, procurement, training, and technical solutions firm, delivering end-to-end operational excellence.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-up [animation-delay:400ms]">
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigate('/services');
              }}
              className="btn-primary border-none"
            >
              Explore Our Services
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about');
              }}
              className="inline-flex items-center justify-center gap-2 border border-white text-white text-sm font-medium px-7 py-4 rounded-[4px] transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Who We Are
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        type="button"
        onClick={scrollToContent}
        aria-label="Scroll to content"
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 animate-fade-in [animation-delay:700ms] opacity-0 [animation-fill-mode:forwards] group"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 pt-1.5 group-hover:border-white/70 transition-colors">
          <ChevronDown size={16} className="animate-scroll-bounce" strokeWidth={2} />
        </span>
      </button>
    </section>
  );
}

export default Hero;
