import React from 'react';
import { Target, Compass, ShieldCheck, Zap, Award, Users, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { navigate } from '@/hooks/useRoute';

function Stats() {
  const { ref: sectionRef } = useInView(0.15);

  const statsList = [
    { value: '98%', label: 'Client Retention Rate', prefix: 'Sustained Excellence' },
    { value: '5 Pillars', label: 'End-to-End Solutions', prefix: 'Comprehensive' },
    { value: '24/7', label: 'Technical & SLA Support', prefix: 'Continuous' },
    { value: '100%', label: 'Turnkey Execution', prefix: 'Guaranteed Quality' },
  ];

  const commitments = [
    {
      icon: ShieldCheck,
      title: 'Quality & Compliance',
      desc: 'Rigorous vetting, statutory compliance, and international quality assurance on all equipment and advisory.',
    },
    {
      icon: Zap,
      title: 'Rapid Technical Deployment',
      desc: 'Experienced engineering team providing fast installation, system configuration, and immediate commissioning.',
    },
    {
      icon: Award,
      title: 'Practical Skill Certification',
      desc: 'Hands-on capacity building designed to elevate operational efficiency and team performance from day one.',
    },
    {
      icon: Users,
      title: 'Dedicated Partnership',
      desc: 'Long-term SLA support, remote monitoring, and on-site assistance ensuring maximum uptime for your business.',
    },
  ];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="bg-[#0f2726] text-white py-24 md:py-36 overflow-hidden relative"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#184341] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold-800 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-gold-400 mb-3">
            Core Direction
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-serif text-white leading-tight">
            Our Vision & <span className="font-semibold italic font-sans text-white/95">Strategic Mission</span>
          </h2>
          <p className="text-white/70 text-sm md:text-base mt-4 leading-relaxed">
            Driving operational excellence, technology adoption, and capacity building across East Africa.
          </p>
        </div>

        {/* Dual Vision & Mission Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision Card */}
          <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/50 rounded-[8px] p-8 md:p-12 transition-all duration-500 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} className="text-gold-400" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-400 shadow-md">
                  <Target size={28} />
                </div>
                
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Our Vision
              </h3>

              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                To become the leading corporate, ICT, procurement, and technical solutions provider in East Africa, recognized for cultivating a culture of growth, operational efficiency, and reliability across every organization we partner with.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/60 font-medium">Regional Excellence Benchmark</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/50 rounded-[8px] p-8 md:p-12 transition-all duration-500 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Compass size={120} className="text-gold-400" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-300 shadow-md">
                  <Compass size={28} />
                </div>
                
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Our Mission
              </h3>

              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                Develop and implement fit-for-purpose business strategies, turnkey procurement supply, professional training, and robust technical infrastructure that support enterprise survival, sustainable growth, and ongoing performance monitoring.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/60 font-medium">Turnkey & SLA Guaranteed</span>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-[6px] p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#184341] flex items-center justify-center text-gold-400 mb-4 border border-white/10">
                  <Icon size={20} />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Impact Numbers Bar */}
        <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 rounded-[8px] p-8 md:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {statsList.map((stat, idx) => (
              <div key={stat.label} className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-6 lg:pt-0' : ''}`}>
                <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-gold-400/90 mb-1">
                  {stat.prefix}
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-white/70 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigate('/contact');
            }}
            className="btn-primary bg-white text-primary border-none hover:bg-cream-100 px-8 py-4 text-sm font-semibold inline-flex items-center gap-3"
          >
            Partner With Precious Solutions
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Stats;
