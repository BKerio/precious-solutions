import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { navigate } from '@/hooks/useRoute';

/* ─── Service data ──────────────────────────────────────────────────── */
const services = [
  {
    step: '01',
    shortTitle: 'Procurement & Supply',
    title: 'Procurement & Supply Solutions',
    description:
      'We provide reliable procurement and supply services, delivering high quality products that meet the operational needs of businesses, government institutions, educational organizations, NGOs, and healthcare facilities.',
    details: [
      'ICT equipment and accessories',
      'Office furniture and supplies',
      'Safety and PPE equipment',
      'Laboratory equipment',
      'Electrical and networking equipment',
      'Industrial tools and machinery',
      'Institutional and educational supplies',
    ],
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    step: '02',
    shortTitle: 'Training & Capacity',
    title: 'Professional Training & Capacity Building',
    description:
      'Our training programs are designed to equip individuals and organizations with practical knowledge and industry relevant skills that improve performance and support professional growth.',
    details: [
      'Information Technology',
      'Cybersecurity Awareness',
      'Leadership and Management',
      'Project Management',
      'Procurement and Supply Chain Management',
      'Customer Service Excellence',
      'Occupational Health and Safety',
      'Digital Skills and Emerging Technologies',
    ],
    image: 'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    step: '03',
    shortTitle: 'Installation & Support',
    title: 'Installation, Commissioning & Technical Support',
    description:
      'Our experienced technical team provides professional installation, system configuration, commissioning, and ongoing technical support to ensure every solution operates efficiently from day one.',
    details: [
      'Network infrastructure installation',
      'CCTV and surveillance systems',
      'Access control systems',
      'Computer and server deployment',
      'Audio visual solutions',
      'Equipment testing and commissioning',
      'Preventive maintenance and technical support',
    ],
    image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    step: '04',
    shortTitle: 'Consultancy & Business',
    title: 'Consultancy & Business Solutions',
    description:
      'We partner with organizations to deliver strategic consulting services that enhance operational efficiency, strengthen technology adoption, and support sustainable business growth.',
    details: [
      'ICT consulting',
      'Digital transformation',
      'Technology planning',
      'Business process improvement',
      'Systems implementation support',
      'Risk and compliance advisory',
      'Organizational capacity development',
    ],
    image: 'https://images.pexels.com/photos/6476267/pexels-photo-6476267.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    step: '05',
    shortTitle: 'Maintenance & Support',
    title: 'Maintenance & Managed Support Services',
    description:
      'We provide dependable maintenance and managed support services to help organizations maximize the performance, reliability, and longevity of their equipment and systems.',
    details: [
      'Preventive maintenance',
      'Corrective maintenance',
      'Equipment servicing',
      'System health checks',
      'Remote technical support',
      'On-site support',
      'Performance monitoring',
      'Maintenance reporting',
    ],
    image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */
function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Scroll-spy: update active step via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const goToStep = (index: number) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <div className="bg-[#F5F7F7] min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative h-[420px] flex items-center justify-center bg-[#184341] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/7061372/pexels-photo-7061372.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Services hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#184341]/85 to-[#0e2726]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-white/70 mb-4">
            Integrated Excellence
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-5 leading-tight">
            Our Solution{' '}
            <span className="font-semibold italic text-white/90">Pillars</span>
          </h1>
          <p className="text-white/65 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Reliable procurement, professional training, technical installations,
            business consultancy, and managed support - tailored for East Africa.
          </p>
        </div>
      </section>

      {/* ── Main: scroll content + sticky nav ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#5F6973]/70 mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[#184341] leading-snug">
            Five core service areas<br />
            <span className="font-semibold">built for results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Left - scrolling content panels */}
          <div className="lg:col-span-7 space-y-24 lg:space-y-32">
            {services.map((svc, index) => (
              <div
                key={svc.step}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="scroll-mt-32"
              >
                <div
                  className={`transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-35'
                  }`}
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-black/5 mb-8">
                    <img
                      draggable={false}
                      src={svc.image}
                      alt={svc.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Step badge */}
                  <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-bold text-[#184341]/50 mb-3">
                    Service Area {svc.step}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#184341] tracking-tight mb-4">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#5F6973] text-base leading-relaxed mb-8">
                    {svc.description}
                  </p>

                  {/* Details grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                    {svc.details.map((detail) => (
                      <li
                        key={detail}
                        className="border-t border-black/10 pt-4 pb-4 flex items-start gap-2.5 text-sm text-[#5F6973]"
                      >
                        <CheckCircle size={14} className="text-[#184341] shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="/contact"
                    onClick={handleContact}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#184341] border-b border-[#184341]/40 pb-0.5 hover:border-[#184341] transition-colors duration-200"
                  >
                    Inquire about this service
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right - sticky step navigator */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <nav aria-label="Service areas">
                <ul>
                  {services.map((svc, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <li key={svc.step} className="border-t border-black/10">
                        <button
                          type="button"
                          onClick={() => goToStep(index)}
                          className={`group flex w-full items-baseline gap-4 py-5 lg:py-7 text-left transition-opacity duration-300 ${
                            isActive ? 'opacity-100' : 'opacity-35 hover:opacity-60'
                          }`}
                        >
                          <span
                            className={`font-bold text-3xl lg:text-4xl tracking-tight transition-colors duration-300 ${
                              isActive ? 'text-[#184341]' : 'text-[#5F6973]'
                            }`}
                          >
                            {svc.step}
                          </span>
                          <span
                            className={`text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                              isActive ? 'text-[#184341]' : 'text-[#5F6973]'
                            }`}
                          >
                            {svc.shortTitle}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                  {/* bottom border line */}
                  <li className="border-t border-black/10" />
                </ul>
              </nav>

              {/* Contact prompt */}
              <div className="mt-12 p-6 bg-[#184341] rounded-[4px]">
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Ready to get started? Let us know how we can support your
                  organization today.
                </p>
                <a
                  href="/contact"
                  onClick={handleContact}
                  className="inline-flex items-center gap-2 bg-white text-[#184341] text-xs font-bold uppercase tracking-[0.12em] px-5 py-3 rounded-[4px] hover:bg-white/90 transition-colors duration-200"
                >
                  Request a Proposal
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Bottom CTA banner ─────────────────────────────────────── */}
      <section className="bg-[#184341] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-5">
            Partnering for{' '}
            <span className="font-semibold italic">Sustainable Growth</span>
          </h2>
          <p className="text-white/65 max-w-xl mx-auto text-sm leading-relaxed mb-8">
            We work with businesses, government agencies, NGOs, educational institutions,
            and healthcare providers to ensure long-term efficiency and technology excellence.
          </p>
          <a
            href="/contact"
            onClick={handleContact}
            className="inline-flex items-center gap-2 bg-white text-[#184341] text-sm font-semibold px-7 py-4 rounded-[4px] hover:bg-white/90 transition-all duration-200"
          >
            Request Solution Proposal
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

    </div>
  );
}

export default ServicesPage;
