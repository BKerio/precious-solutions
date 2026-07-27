import React from 'react';
import { useInView } from '@/hooks/useInView';
import { ShieldCheck, Cpu, GraduationCap, Truck, CheckCircle2 } from 'lucide-react';
import { navigate } from '@/hooks/useRoute';

function Welcome() {
  const { ref: sectionRef, inView: sectionInView } = useInView(0.15);

  const pillars = [
    { icon: Truck, title: 'Turnkey Supply', desc: 'Reliable ICT, lab, electrical & PPE procurement' },
    { icon: GraduationCap, title: 'Capacity Building', desc: 'Practical corporate training & skills certification' },
    { icon: Cpu, title: 'Tech Deployment', desc: 'CCTV, network infrastructure & server setup' },
    { icon: ShieldCheck, title: 'Managed Support', desc: '24/7 SLA maintenance & system health monitoring' },
  ];

  return (
    <section
      id="about"
      className="relative bg-white py-24 md:py-36 overflow-hidden"
    >
      {/* Background Watermark Text */}
      <div className="absolute top-10 left-10 md:left-24 select-none pointer-events-none z-0">
        <span className="watermark-text opacity-40">PRECIOUS</span>
      </div>

      {/* Background Abstract Decorative Accent */}
      <div className="absolute right-0 bottom-0 w-1/2 opacity-15 pointer-events-none z-0">
        <img
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
          className="w-full h-auto object-cover max-h-[600px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-6 flex flex-col items-start transition-all duration-1000 ${
              sectionInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Section Label */}
            <span className="section-label">
              About Our Firm
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl font-medium text-primary leading-[1.2] mb-6 font-sans">
              Integrated Procurement, Technical & Business Solutions.
            </h2>

            {/* Description */}
            <p className="text-slate-text text-[15px] md:text-base leading-relaxed mb-6">
              Precious Solutions is a premier multi-disciplinary consultancy, procurement, and technical services firm headquartered in Nairobi, Kenya. We deliver high-impact solutions to businesses, government institutions, educational organizations, NGOs, and healthcare facilities.
            </p>

            <p className="text-slate-text text-[15px] md:text-base leading-relaxed mb-8">
              From turnkey equipment supply and technical installation to professional capacity building, ICT strategy, and managed maintenance, we provide end-to-end operational support designed to drive sustainable growth.
            </p>

            {/* Interactive Feature Grid - Replacing old CEO Card */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10 w-full">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group bg-[#F5F7F7] hover:bg-[#184341] p-5 rounded-[6px] border border-teal-50 hover:border-[#184341] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#184341]/10 group-hover:bg-white/10 flex items-center justify-center text-[#184341] group-hover:text-white mb-3 transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-semibold text-primary group-hover:text-white transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-text/80 group-hover:text-white/80 transition-colors leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/services');
                }}
                className="btn-primary"
              >
                Explore Solution Pillars
              </a>
            </div>
          </div>

          {/* Right Side Creative Visual Layout */}
          <div className="lg:col-span-6 relative flex flex-col md:flex-row items-center gap-6 z-10">

            {/* Main Image Container */}
            <div className="relative w-full md:w-3/5 aspect-[4/5] overflow-hidden rounded-[8px] shadow-2xl group ring-1 ring-black/5">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Diverse African corporate team collaborating in a modern office"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[6px] bg-white/90 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#184341] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">ISO & Quality Compliant</h4>
                    <p className="text-[11px] text-slate-text">Turnkey fulfillment across East Africa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Column Cards */}
            <div className="relative w-full md:w-2/5 flex flex-col gap-6">

              {/* Secondary Image */}
              <div className="relative aspect-[1.1] overflow-hidden rounded-[8px] shadow-lg group ring-1 ring-black/5">
                <img
                  src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="African professionals in a capacity building training session"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>

              {/* High Impact Metrics Card */}
              <div className="bg-gradient-to-br from-[#184341] to-[#0e2726] text-white p-8 rounded-[8px] shadow-2xl relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 w-28 h-28 bg-white/5 rounded-full translate-x-8 translate-y-8" />

                <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-gold-400 mb-2">
                  Client Retention
                </span>

                <div className="text-4xl md:text-5xl font-semibold tracking-tight font-display text-white mb-2">
                  98%
                </div>

                <p className="text-white/70 text-xs leading-relaxed">
                  Trusted long-term technical and procurement partner for leading institutions.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Welcome;