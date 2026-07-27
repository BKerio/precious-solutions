import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Layers, LineChart, Calendar, ArrowUpRight } from 'lucide-react';
import { navigate } from '@/hooks/useRoute';

const portfolios = [
  {
    id: 1,
    name: 'Procurement & Supply Solutions',
    excerpt: 'Reliable procurement delivering high-grade ICT equipment, office supplies, safety PPE, lab equipment, electrical & networking gear, and industrial tools.',
    scope: 'Businesses & Gov',
    method: 'Turnkey Supply',
    timeline: 'On-Demand',
    badge: 'Quality Assured',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Professional Training & Capacity Building',
    excerpt: 'Practical training programs in IT, Cybersecurity, Leadership, Project Management, Procurement, Customer Service, and Health & Safety.',
    scope: 'Teams & Executives',
    method: 'Practical Skills',
    timeline: 'Flexible Schedules',
    badge: 'Certified Growth',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Installation, Commissioning & Tech Support',
    excerpt: 'Expert deployment of network infrastructure, CCTV surveillance, access control, servers, audio visual systems, and system commissioning.',
    scope: 'Enterprise Infrastructure',
    method: 'Certified Setup',
    timeline: 'Turnkey Handover',
    badge: 'Day 1 Operational',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: 'Consultancy & Business Solutions',
    excerpt: 'Strategic consulting for ICT planning, digital transformation, business process optimization, systems implementation, and risk advisory.',
    scope: 'Strategic Advisory',
    method: 'Process-Driven',
    timeline: 'Long-Term Growth',
    badge: 'Strategic Vision',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    name: 'Maintenance & Managed Support Services',
    excerpt: 'Dependable preventive & corrective maintenance, equipment servicing, system health checks, remote monitoring, and on-site technical support.',
    scope: 'System Longevity',
    method: 'SLA Support',
    timeline: '24/7 Availability',
    badge: 'Maximum Uptime',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  },
];

function Rooms() {
  const { ref: headerRef, inView: headerInView } = useInView(0.15);
  const [hoveredPortfolio, setHoveredPortfolio] = useState<number | null>(null);

  return (
    <section id="specialties" className="bg-[#F5F7F7] py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div>
            <span className="section-label">Discover Our Specialties</span>
            <h2 className="text-3xl md:text-5xl font-medium text-primary leading-[1.2]">
              Detailed Service Portfolios
            </h2>
          </div>
          <div>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="btn-primary"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Portfolios Row Listing */}
        <div className="flex flex-col border-t border-divider">
          {portfolios.map((item) => (
            <div
              key={item.id}
              className="room-item relative py-10 md:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group cursor-pointer border-b border-divider"
              onMouseEnter={() => setHoveredPortfolio(item.id)}
              onMouseLeave={() => setHoveredPortfolio(null)}
            >
              
              {/* Left Column: Title, Excerpt and Floating Image Preview */}
              <div className="flex-1 max-w-xl relative">
                <h3 className="text-2xl md:text-3xl font-medium text-primary group-hover:text-[#184341] transition-colors duration-300 mb-4 flex items-center gap-3">
                  {item.name}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 text-[#184341]" />
                </h3>
                <p className="text-slate-text text-sm leading-relaxed max-w-md">
                  {item.excerpt}
                </p>

                {/* Floating Image Preview Container on Row Hover (Liquid Themes style) */}
                <div
                  className={`absolute left-0 bottom-full mb-4 w-72 h-44 rounded-[4px] overflow-hidden shadow-2xl pointer-events-none z-30 transition-all duration-500 ease-out transform ${
                    hoveredPortfolio === item.id
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 translate-y-4'
                  } hidden lg:block`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#184341]/10" />
                </div>
              </div>

              {/* Mobile/Tablet Inline Image (Visible when screen is smaller than LG) */}
              <div className="w-full h-48 sm:h-64 overflow-hidden rounded-[4px] lg:hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Center Column: Specs Icons */}
              <div className="flex items-center gap-6 sm:gap-10">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-slate-text/70" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-text">
                    {item.scope}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <LineChart size={16} className="text-slate-text/70" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-text">
                    {item.method}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-slate-text/70" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-text">
                    {item.timeline}
                  </span>
                </div>
              </div>

              {/* Right Column: Pricing Badge and CTA */}
              <div className="flex items-center justify-between lg:justify-end gap-10">
                <div>
                  <span className="text-lg md:text-xl font-bold text-primary block leading-none">
                    {item.badge}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-text/70">Integrated Study</span>
                </div>
                <button
                  onClick={() => alert(`Request service details: ${item.name}`)}
                  className="btn-primary px-6 py-3.5"
                >
                  Inquire
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Rooms;
