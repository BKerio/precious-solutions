import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const testimonials = [
  {
    quote: "Precious Solutions delivered top-quality ICT and networking equipment for our regional offices right on schedule. Their procurement efficiency and technical setup exceeded our expectations.",
    name: "Sarah M.",
    role: "Operations Director, Enterprise Group",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "Their cybersecurity and project management training programs equipped our staff with practical, real-world skills. Team performance and digital compliance improved dramatically across departments.",
    name: "Megan R.",
    role: "Head of Talent & HR",
    rating: 5,
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "From CCTV surveillance installation to server deployment and ongoing preventive maintenance, Precious Solutions ensures our technology infrastructure operates seamlessly 24/7.",
    name: "David K.",
    role: "IT & Infrastructure Manager",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

function Testimonials() {
  const { ref: sectionRef, inView: sectionInView } = useInView(0.15);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="bg-white py-24 md:py-32 overflow-hidden border-t border-teal-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left panel: Info & Interactive Avatar Hub */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="section-label">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-primary mb-6">
              Empowering Teams, <br />
              <span className="text-primary/80">Elevating Standards</span>
            </h2>
            <p className="text-slate-text text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Discover how Precious Solutions delivers reliable procurement, technical installation, professional training, and business consulting for leaders in East Africa.
            </p>

            {/* Interactive avatar selectors */}
            <div className="flex items-center gap-6">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="group relative focus:outline-none"
                  aria-label={`Select testimonial by ${t.name}`}
                >
                  {/* Glowing active outer ring using primary color theme */}
                  <div
                    className={`absolute -inset-1 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? 'bg-primary opacity-100 scale-105'
                        : 'bg-transparent opacity-0 scale-90 group-hover:bg-primary/10 group-hover:opacity-40'
                    }`}
                  />
                  <img
                    src={t.image}
                    alt={t.name}
                    className={`relative w-14 h-14 rounded-full object-cover transition-all duration-300 border-2 ${
                      activeIndex === idx ? 'border-white scale-105' : 'border-transparent scale-95 opacity-50 group-hover:opacity-80'
                    }`}
                  />
                </button>
              ))}
            </div>
            
            <div className="mt-4 text-[10px] text-slate-text/50 font-mono tracking-wider">
              CLICK AVATARS TO VIEW FEEDBACK
            </div>
          </div>

          {/* Right panel: Flat, High-End Card Showcase */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
              sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Elegant flat border container */}
            <div className="relative bg-[#F5F7F7] border border-teal-100/85 rounded-[8px] p-8 md:p-14 shadow-sm overflow-hidden">
              
              {/* Decorative quotation mark */}
              <Quote size={80} className="absolute -top-4 -right-2 text-primary/[0.03] fill-primary/[0.01] pointer-events-none" />

              {/* Slider Viewport */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((t, idx) => (
                    <div key={idx} className="w-full shrink-0">
                      
                      {/* Gold Stars */}
                      <div className="flex gap-1.5 mb-8">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-10 text-primary">
                        "{t.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 border-t border-teal-100/60 pt-8">
                        <div>
                          <h4 className="text-primary font-semibold text-lg">
                            {t.name}
                          </h4>
                          <p className="text-slate-text/70 text-sm tracking-wide font-medium mt-0.5">
                            {t.role}
                          </p>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation controls & slide numbers */}
              <div className="flex items-center justify-between mt-12 border-t border-teal-100/60 pt-8">
                
                {/* Slide indicator dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === idx ? 'bg-primary w-8' : 'bg-teal-200 hover:bg-teal-300 w-2'
                      }`}
                      aria-label={`Show testimonial slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Left & Right custom buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full border border-teal-100 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full border border-teal-100 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
