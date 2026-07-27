import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { navigate } from '@/hooks/useRoute';

/* ─── Service data ───────────────────────────────────────────────────── */
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

/* ─── Component ──────────────────────────────────────────────────────── */
function Amenities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  /*
   * Scroll-spy - identical setup to ServicesPage:
   * rootMargin shrinks the effective viewport to the middle 30 %,
   * so whichever panel sits in that band becomes "active".
   * root: null  ->  uses the browser viewport (window scroll), not a
   * scrolling ancestor, which is what makes it work even when this
   * component is nested inside a larger page.
   */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    panelRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        {
          root: null,                       // viewport
          rootMargin: '-35% 0px -35% 0px', // same as ServicesPage
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const goToStep = (index: number) => {
    setActiveIndex(index);
    panelRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    /* No overflow-hidden - that would create a new scroll root and break
       the IntersectionObserver rootMargin calculation */
    <section id="services" className="bg-white py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="mb-14">
          <span className="section-label">What We Do</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-medium text-primary leading-[1.2]">
              Five core service areas<br />
              <span className="font-light italic">built for results</span>
            </h2>
            <p className="text-slate-text text-base leading-relaxed max-w-md">
              Integrated procurement, training, installations, consultancy, and
              managed maintenance - delivered by seasoned professionals across East Africa.
            </p>
          </div>
        </div>

        {/* ── Two-column layout ──────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Left - scrolling panels
              Each panel is min-h-screen so it occupies enough vertical
              space to sit in the middle-third zone the observer watches. */}
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {services.map((svc, index) => (
                <div
                  key={svc.step}
                  ref={(el) => { panelRefs.current[index] = el; }}
                  /* min-h-[70vh] ensures the observer rootMargin fires
                     correctly - same reason ServicesPage works well. */
                  className="scroll-mt-32 min-h-[70vh] flex flex-col justify-center py-20"
                >
                  <div
                    className={`transition-opacity duration-500 ${
                      index === activeIndex ? 'opacity-100' : 'opacity-30'
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
                    <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-bold text-primary/40 mb-3">
                      Service Area {svc.step}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-semibold text-primary tracking-tight mb-4">
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-text text-base leading-relaxed mb-8">
                      {svc.description}
                    </p>

                    {/* Details grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                      {svc.details.map((detail) => (
                        <li
                          key={detail}
                          className="border-t border-black/10 pt-4 pb-4 flex items-start gap-2.5 text-sm text-slate-text"
                        >
                          <CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Inline CTA */}
                    <a
                      href="/services"
                      onClick={(e) => handleNav(e, '/services')}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors duration-200"
                    >
                      Learn more about this service
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
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
                              isActive ? 'text-primary' : 'text-slate-text'
                            }`}
                          >
                            {svc.step}
                          </span>
                          <span
                            className={`text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                              isActive ? 'text-primary' : 'text-slate-text'
                            }`}
                          >
                            {svc.shortTitle}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                  {/* closing rule */}
                  <li className="border-t border-black/10" />
                </ul>
              </nav>

              {/* CTA card */}
              <div className="mt-12 p-6 bg-primary rounded-[4px]">
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Ready to get started? Explore our full solution pillars or get
                  in touch for a tailored proposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/services"
                    onClick={(e) => handleNav(e, '/services')}
                    className="inline-flex items-center gap-2 bg-white text-primary text-xs font-bold uppercase tracking-[0.12em] px-5 py-3 rounded-[4px] hover:bg-white/90 transition-colors duration-200"
                  >
                    View All Services
                    <ArrowRight size={13} />
                  </a>
                  <a
                    href="/contact"
                    onClick={(e) => handleNav(e, '/contact')}
                    className="inline-flex items-center gap-2 border border-white/40 text-white text-xs font-bold uppercase tracking-[0.12em] px-5 py-3 rounded-[4px] hover:bg-white/10 transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden text-center mt-16">
          <a
            href="/services"
            onClick={(e) => handleNav(e, '/services')}
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Amenities;
